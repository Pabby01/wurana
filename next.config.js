/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      'react-native-config': 'react-native-config',
    });
    return config;
  },
};

module.exports = nextConfig;