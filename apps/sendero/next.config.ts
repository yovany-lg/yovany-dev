import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Sendero marketing site — mostly static, no remote images needed yet.
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
