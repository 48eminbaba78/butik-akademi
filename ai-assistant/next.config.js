/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bu uygulama SADECE rostrumakademi.com'un kendi sayfaları içinde iframe
  // olarak gömülmek için var — başka hiçbir sitenin bunu çerçevelemesine
  // izin verilmez (clickjacking koruması + niyet netliği).
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "frame-ancestors 'self' https://www.rostrumakademi.com https://rostrumakademi.com http://localhost:5173 http://localhost:4173;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
