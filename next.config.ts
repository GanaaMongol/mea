import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  cacheMaxMemorySize: 25 * 1024 * 1024,
};

export default withPayload(nextConfig);
