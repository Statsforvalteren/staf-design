module.exports = {
  branches: ['main', { name: 'pr-*', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/git',
  ],
  tagFormat: 'designsystemet-theme-v${version}',
};
