/** @type {import('next').NextConfig} */
import { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

// Add environment variable type declarations
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_URL: string;
      ANALYZE?: string;
    }
  }
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {};

export default withBundleAnalyzer(nextConfig);
