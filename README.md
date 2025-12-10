# STAF Design tokens

STAF Design Tokens is a collection of design tokens based on the Designsystemet structure. The tokens are published as npm packages to GitHub Packages, allowing easy integration into frontend projects.

## Publishing to Github Packages

This repository is set up to publish the design tokens to Github Packages automatically using semantic-release. To trigger the workflow do one of the following:

- Push changes to the `main` branch.
- Push changes to any branch matching the pattern `pr-*` (e.g. pr-new-feature).

### Semantic Release

As mentioned the automated build and publish process uses Semantic Release. Semantic Release relies on commit messages to determine the type of changes in the codebase and to automate the versioning and changelog generation. Commit messages should follow the Angular Conventional Commits specification (for more info see: https://semantic-release.gitbook.io/semantic-release).

#### Commit Message Format

Each commit message consists of a **type**, an **optional scope**, and a **description**:

`<type>(<scope>): <description>`

The different types relevant for this repository are:

- `fix`: A bug fix (same as patch release)
- `feat`: A new feature (same as minor release)
- `perf`: A code change that improves performance or addes breaking changes (same as major release). (Note that the `BREAKING CHANGE: ...` token must be in the footer of the commit)

Example commit message:

```
feat: Added new font size tokens
```

```
perf: Removed deprecated color tokens

BREAKING CHANGE: The design tokens now require a new color palette
```

#### Versioning

Semantic Release analyzes the commit messages and determines the appropriate version bump (major, minor, or patch) based on the changes made. Summarized a commit message with the type `fix` will result in a patch release, `feat` in a minor release, and `perf` (with `BREAKING CHANGE` in the footer of the commit message) in a major release. Once Semantic Release has determined a new version it publishes that version to the npm registry and updates the changelog accordingly.

## Installing from Github Packages

To install the design tokens from GitHub Packages in a frontend-project, you need to authenticate with GitHub Packages. This can be done by logging into the GitHub package registry locally with the following command:

```
npm login --scope=@statsforvalteren --registry=https://npm.pkg.github.com
```

You will be prompted to enter your GitHub username and a personal access token. The personal access token should have the `read:packages` scope.

**Note:** Before creating a personal access token, make sure you have access to the **staf-design** repository. (Since you are able to read this documentation, this should already be taken care of.)

Once you have logged in, add a `.npmrc` file to the root of your project with the following content:

```
registry=https://registry.npmjs.org/
@statsforvalteren:registry=https://npm.pkg.github.com
```

These lines tell npm to use the GitHub package registry for packages with the `@statsforvalteren` scope, while using the normal npm registry for all other packages.

The last step is to add the packages to your project. This is done by adding the following lines to your `package.json`:

```
"@statsforvalteren/designsystemet-theme": "x.x.x",
```
