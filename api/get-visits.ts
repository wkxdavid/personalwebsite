import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const { rows } = await sql`
      SELECT id, created_at, path, user_agent
      FROM visits
      ORDER BY created_at DESC
      LIMIT 100;
    `;

    return res.status(200).json(rows);
  } catch (error) {
    console.error('Failed to fetch visits', error);
    return res.status(500).json({ error: 'Failed to fetch visits' });
  }
}


