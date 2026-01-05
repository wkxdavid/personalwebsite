import React, { useState, useEffect } from 'react';
import { FaClock, FaTrash } from 'react-icons/fa';
import './VisitTracker.css';

interface VisitRecord {
  id: number;
  created_at: string;
  path: string;
  user_agent?: string;
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
      // Note: You'll need to create a DELETE endpoint if you want to clear visits
      // For now, we'll just clear the local state
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
              <p>No visits recorded yet.</p>
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

                return (
                  <div key={visit.id} className="visit-item">
                    <div className="visit-number">{index + 1}</div>
                    <div className="visit-details">
                      <div className="visit-date">{date}</div>
                      <div className="visit-time">{time}</div>
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

