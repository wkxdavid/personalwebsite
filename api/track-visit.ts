import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = (req.body || {}) as { path?: string; visitor_id?: string };
    const path = body.path || '/';
    const visitorId = body.visitor_id || null;
    const userAgent = (req.headers['user-agent'] as string) || '';

    // Vercel automatically provides geo headers we can use for approximate location
    const country = (req.headers['x-vercel-ip-country'] as string) || null;
    const region = (req.headers['x-vercel-ip-country-region'] as string) || null;
    const city = (req.headers['x-vercel-ip-city'] as string) || null;

    await sql`
      INSERT INTO visits (path, user_agent, country, region, city, visitor_id)
      VALUES (${path}, ${userAgent}, ${country}, ${region}, ${city}, ${visitorId})
    `;

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Failed to record visit', error);
    return res.status(500).json({ error: 'Failed to record visit' });
  }
}


