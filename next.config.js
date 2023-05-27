/** @type {import('next').NextConfig} */
const repoUrl = require('./package.json').repository.url;

function getRepoNameOnly(url) {
  const re = new RegExp('/([^/]+).git');
  return re.exec(url).pop();
}

const nextConfig = {
  assetPrefix: process.env.GH_PAGES ? `/${getRepoNameOnly(repoUrl)}/` : '',
  images: {
    unoptimized: true,
  },
};

const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

module.exports = withNextIntl({
  ...nextConfig,
  experimental: { appDir: true },
});
