module.exports = {
  process() {
      return 'module.exports = \'test-file-stub\';';
  },
  getCacheKey() {
      return 'test-file-stub';
  },
};
