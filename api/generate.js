import { isAuthed, generateForDate, trNow, trDateStr } from '../lib/core.js';
import { applyCors } from '../lib/cors.js';

export default async function handler(req, res) {
  if (applyCors(req, res)) return;
  if (!isAuthed(req)) return res.status(401).json({ error: 'Yetkisiz' });
  try {
    var tomorrow = new Date(trNow().getTime() + 86400000);
    var dateStr = (req.query && req.query.date) || trDateStr(tomorrow);
    var force = req.query && req.query.force === '1';
    var idea = (req.query && req.query.idea ? String(req.query.idea) : '').slice(0, 600);
    var result = await generateForDate(dateStr, { force: force, idea: idea });
    return res.status(200).json(Object.assign({ date: dateStr }, result));
  } catch (e) {
    return res.status(500).json({ error: String(e.message || e) });
  }
}
