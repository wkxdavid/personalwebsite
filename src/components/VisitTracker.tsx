import React, { useState, useEffect } from 'react';
import { FaClock, FaTrash, FaUser, FaUserPlus } from 'react-icons/fa';
import './VisitTracker.css';

interface VisitRecord {
  id: number;
  created_at: string;
  path: string;
  user_agent?: string;
  country?: string | null;
  region?: string | null;
  city?: string | null;
  visitor_id?: string | null;
  is_repeat_visitor?: boolean;
  visitor_visit_count?: number;
}

const VisitTracker: React.FC = () => {
  const [visits, setVisits] = useState<VisitRecord[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchVisits = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/get-visits');
      if (response.ok) {
        const data = await response.json();
        setVisits(data);
      }
    } catch (error) {
      console.error('Failed to fetch visits:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Load visits when component mounts
    fetchVisits();
  }, []);

  const handleClear = async () => {
    if (window.confirm('Are you sure you want to clear all visit records? This action cannot be undone.')) {
      // Note: You'll need a DELETE endpoint if you want to clear visits in the DB.
      // For now, we'll just clear the local state.
      setVisits([]);
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    // Refresh visits when expanding
    if (!isExpanded) {
      fetchVisits();
    }
  };

  return (
    <div className="visit-tracker">
      <button 
        className="visit-tracker-toggle"
        onClick={toggleExpanded}
        aria-label={isExpanded ? 'Collapse visit tracker' : 'Expand visit tracker'}
      >
        <FaClock />
        <span className="visit-count">{visits.length}</span>
        <span className="visit-label">Visit{visits.length !== 1 ? 's' : ''}</span>
      </button>

      {isExpanded && (
        <div className="visit-tracker-content">
          <div className="visit-tracker-header">
            <h3>Visit History</h3>
            {visits.length > 0 && (
              <button 
                className="clear-button"
                onClick={handleClear}
                aria-label="Clear all visits"
              >
                <FaTrash />
              </button>
            )}
          </div>

          {isLoading ? (
            <div className="no-visits">
              <p>Loading visits...</p>
            </div>
          ) : visits.length === 0 ? (
            <div className="no-visits">
              <p>No visits recorded in the last 30 days.</p>
            </div>
          ) : (
            <div className="visits-list">
              {visits.map((visit, index) => {
                const visitDate = new Date(visit.created_at);
                const date = visitDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                });
                const time = visitDate.toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: true,
                });

                const locationParts = [
                  visit.city,
                  visit.region,
                  visit.country,
                ].filter(Boolean);

                const location =
                  locationParts.length > 0 ? locationParts.join(', ') : 'Unknown location';
                
                const isRepeat = visit.is_repeat_visitor === true;
                const visitCount = visit.visitor_visit_count || 1;

                return (
                  <div key={visit.id} className="visit-item">
                    <div className="visit-number">{index + 1}</div>
                    <div className="visit-details">
                      <div className="visit-header-row">
                        <div className="visit-date">{date}</div>
                        {isRepeat && (
                          <span className="visitor-badge repeat" title={`This visitor has visited ${visitCount} time${visitCount !== 1 ? 's' : ''}`}>
                            <FaUser />
                            Repeat Visitor
                          </span>
                        )}
                        {!isRepeat && (
                          <span className="visitor-badge new" title="First visit from this visitor">
                            <FaUserPlus />
                            New Visitor
                          </span>
                        )}
                      </div>
                      <div className="visit-time">{time}</div>
                      <div className="visit-location">{location}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VisitTracker;

