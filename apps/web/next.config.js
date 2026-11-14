/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The Spanish "Agente de WhatsApp con IA" subtree was retired on
      // 2026-11-14: the clinic offer now lives on citania.mx. `:path*` also
      // matches the bare /sistema-de-clientes, so the hub, verticals, demo,
      // blog and /enlaces all land on Citania (query strings, e.g. UTMs,
      // are passed through). 308 = permanent.
      {
        source: "/sistema-de-clientes/:path*",
        destination: "https://citania.mx",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
