/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // 448 covers the 208px portrait on 2x screens without jumping to 640.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 448],
  },
};

export default nextConfig;
