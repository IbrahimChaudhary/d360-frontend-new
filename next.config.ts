// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ["127.0.0.1"], // allow image domains by IPv4
//     },
//     // Force Node’s “localhost” to resolve to IPv4
//     experimental: {
//       serverActions: true
//     },
//     async rewrites() {
//       return [
//         {
//           source: "/_next/image",
//           destination: "/_next/image", // no-op, but forces IPv4 resolution
//         },
//       ];
//     },
//     // Or add this environment override:
//     // env: {
//     //   NODE_OPTIONS: "--dns-result-order=ipv4first"
//     // }
//   };
//   module.exports = nextConfig;

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      domains: ["13.235.50.194"],  // allow image domains by IPv4
    },
    // Force Node’s “localhost” to resolve to IPv4
    experimental: {
      serverActions: true
    },
    async rewrites() {
      return [
        {
          source: "/_next/image",
          destination: "/_next/image", // no-op, but forces IPv4 resolution
        },
      ];
    },
    // Or add this environment override:
    // env: {
    //   NODE_OPTIONS: "--dns-result-order=ipv4first"
    // }
  };
  module.exports = nextConfig;