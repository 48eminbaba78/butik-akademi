import { isAuthed, publishDue } from '../lib/core.js';
import { applyCors } from '../lib/cors.js';

export default async function handler(req, res) {
  if (applyCors(req, res)) return;
  if (!isAuthed(req)) return res.status(401).json({ error: 'Yetkisiz' });
  try {
    var id = req.query && req.query.id ? req.query.id : null;
    var results = await publishDue({ id: id });
    return res.status(200).json({ processed: results.length, results: results });
  } catch (e) {
    return res.status(500).json({ error: String(e.message || e) });
  }
}
