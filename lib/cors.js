// Admin panelin (rostrumakademi.com) Story Panel API'sine erişebilmesi için CORS.
// İzinli origin'leri buradan yönetin.
const ALLOWED = [
  'https://rostrumakademi.com',
  'https://www.rostrumakademi.com',
  'http://localhost:3000',
  'http://localhost:5173',
];

export function applyCors(req, res) {
  const origin = req.headers.origin || '';
  if (ALLOWED.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'content-type,x-panel-key,authorization');
    res.setHeader('Access-Control-Max-Age', '86400');
  }
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return true; // preflight cevaplandı, handler devam etmesin
  }
  return false;
}
