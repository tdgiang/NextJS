/** @type {import('next').NextConfig} */
module.exports = {
	webpack5: true,
	webpack: (config) => {
		config.resolve.fallback = { fs: false }

		return config
	},
	reactStrictMode: true,
	env: {
		API_URL: 'https://js-post-api.herokuapp.com',
	},
	images: {
		domains: ['res.cloudinary.com'],
	},
}
