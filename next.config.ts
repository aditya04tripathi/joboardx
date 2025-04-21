import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "images.unsplash.com",
			},
			{
				hostname: "cdn.pixabay.com",
			},
			{
				hostname: "images.pexels.com",
			},
			{
				hostname: "source.unsplash.com",
			},
			{
				hostname: "picsum.photos",
			},
		],
	},
};

export default nextConfig;
