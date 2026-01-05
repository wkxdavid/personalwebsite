import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = (req.body || {}) as { path?: string };
    const path = body.path || '/';
    const userAgent = (req.headers['user-agent'] as string) || '';

    await sql`
      INSERT INTO visits (path, user_agent)
      VALUES (${path}, ${userAgent})
    `;

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Failed to record visit', error);
    return res.status(500).json({ error: 'Failed to record visit' });
  }
}


