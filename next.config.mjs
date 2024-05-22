/** @type {import('next').NextConfig} */
import nextPWA from 'next-pwa';
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'es'
    },
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'development',
    }
};

const withPWA = nextPWA({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
})

export default withPWA(nextConfig);
