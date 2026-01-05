import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    // Get visits with visitor_id and calculate if it's a repeat visitor
    // A repeat visitor is one who has visited before this specific visit
    const { rows } = await sql`
      SELECT 
        v.id,
        v.created_at,
        v.path,
        v.user_agent,
        v.country,
        v.region,
        v.city,
        v.visitor_id,
        CASE 
          WHEN EXISTS (
            SELECT 1 
            FROM visits v2 
            WHERE v2.visitor_id = v.visitor_id 
            AND v2.visitor_id IS NOT NULL
            AND v2.created_at < v.created_at
          ) THEN true 
          ELSE false 
        END as is_repeat_visitor,
        (
          SELECT COUNT(*) 
          FROM visits v3 
          WHERE v3.visitor_id = v.visitor_id 
          AND v3.visitor_id IS NOT NULL
          AND v3.created_at >= NOW() - INTERVAL '30 days'
        ) as visitor_visit_count
      FROM visits v
      WHERE v.created_at >= NOW() - INTERVAL '30 days'
      ORDER BY v.created_at DESC
      LIMIT 100;
    `;

    return res.status(200).json(rows);
  } catch (error) {
    console.error('Failed to fetch visits', error);
    return res.status(500).json({ error: 'Failed to fetch visits' });
  }
}


