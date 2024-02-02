# ELTE IK Survival Guide

> [!WARNING]
> work in progress

hi

## Contribute

### Development

Install `pnpm` and `@antfu/ni`:

```bash
npm i -g pnpm @antfu/ni
```

Install dependencies:

```bash
ni
```

Start the development server:

```bash
nr dev
```

### Important places

- `astro.config.mjs`: Site related config
- `content/docs/*`: file-based routing: each file and folder here will be a page
- `*.md`: Markdown files are rendered as pages
- `*.mdx`: MDX files can be used to import Components and more

### Workflow

You can't push directly to the `main` branch. You will need pull requests.

- Create an issue or a new branch
  - issues enable discussion, after creating an issue you can link a branch and a pull request to it
  - simply creating a new branch with the name of your feature is also fine
- Make your changes
- Create a pull request
  - if you linked your branch to an issue, the pull request will be linked to the issue
  - if you didn't, it's still fine as you are creating the pr from that branch
- Code owners will merge it
