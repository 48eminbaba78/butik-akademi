import { sb, isAuthed } from '../lib/core.js';
import { applyCors } from '../lib/cors.js';

export default async function handler(req, res) {
  if (applyCors(req, res)) return;
  if (req.method === 'POST' && req.body && req.body.action === 'login') {
    var pw = (process.env.PANEL_PASSWORD || '').trim();
    var given = (req.body.password || '').trim();
    var ok = given === pw;
    return res.status(ok ? 200 : 401).json({ ok: ok });
  }

  if (!isAuthed(req)) return res.status(401).json({ error: 'Yetkisiz' });
  var client = sb();

  try {
    if (req.method === 'GET') {
      var result = await client
        .from('story_queue')
        .select('*')
        .order('post_date', { ascending: false })
        .limit(30);
      if (result.error) throw result.error;
      return res.status(200).json({ posts: result.data });
    }

    if (req.method === 'POST') {
      var action = req.body && req.body.action;
      var id = req.body && req.body.id;

      if (action === 'approve' || action === 'reject') {
        var status = action === 'approve' ? 'approved' : 'rejected';
        var upd = await client
          .from('story_queue')
          .update({ status: status, error_msg: null, updated_at: new Date().toISOString() })
          .eq('id', id);
        if (upd.error) throw upd.error;
        return res.status(200).json({ ok: true, status: status });
      }

      if (action === 'save') {
        var patch = { updated_at: new Date().toISOString() };
        if (typeof req.body.caption === 'string') patch.caption = req.body.caption;
        if (typeof req.body.svg === 'string') { patch.svg = req.body.svg; patch.png_url = null; }
        if (req.body.publish_at) patch.publish_at = req.body.publish_at;
        if (req.body.svg || req.body.caption) patch.status = 'draft';
        var sv = await client.from('story_queue').update(patch).eq('id', id);
        if (sv.error) throw sv.error;
        return res.status(200).json({ ok: true });
      }

      return res.status(400).json({ error: 'Bilinmeyen action' });
    }

    return res.status(405).json({ error: 'Method desteklenmiyor' });
  } catch (e) {
    return res.status(500).json({ error: String(e.message || e) });
  }
}
