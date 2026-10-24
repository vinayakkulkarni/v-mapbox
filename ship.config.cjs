module.exports = {
  installCommand: () => 'pnpm install',
  beforeCommitChanges: ({ exec }) => {
    exec('./scripts/bump-jsr-version.cjs');
  },
};
