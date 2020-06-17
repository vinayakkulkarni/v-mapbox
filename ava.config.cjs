module.exports = {
  require: ['./test/helpers/_setup.js'],
  files: ['./test/specs/**/*'],
  ignoredByWatcher: ['!**/*.{js,vue}'],
  snapshotDir: './test/snapshots',
  babel: true,
  tap: false,
  verbose: true,
  color: true,
};
