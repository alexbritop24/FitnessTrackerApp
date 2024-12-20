const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  return {
    ...defaultConfig,
    resolver: {
      sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
    },
  };
})();
