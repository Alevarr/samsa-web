/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: process.env.SITE_URL || "https://app.ultraswap.ai",
	generateRobotsTxt: true,
};

export default config;
