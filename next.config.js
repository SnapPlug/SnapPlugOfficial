module.exports = {
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'avatar.vercel.sh',
      'api.dicebear.com',
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}; 