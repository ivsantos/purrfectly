/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
  mdx: async () => {
    const [rehypeHighlight] = await Promise.all([
      import('rehype-highlight').then((mod) => mod.default),
    ]);
    return {
      rehypePlugins: [rehypeHighlight],
    };
  },
};
