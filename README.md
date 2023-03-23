# Dynamic Routing example

This example shows how to do [dynamic routing](https://nextjs.org/docs/routing/dynamic-routes) in Next.js. It contains two dynamic routes:

1. `pages/post/[id]/index.js`
   - e.g. matches `/post/my-example` (`/post/:id`)
1. `pages/post/[id]/[comment].js`
   - e.g. matches `/post/my-example/a-comment` (`/post/:id/:comment`)

These routes are automatically matched by the server.
You can use `next/link` as displayed in this example to route to these pages client side.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/dynamic-routing)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/dynamic-routing&project-name=dynamic-routing&repository-name=dynamic-routing)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example dynamic-routing dynamic-routing-app
```

```bash
yarn create next-app --example dynamic-routing dynamic-routing-app
```

```bash
pnpm create next-app --example dynamic-routing dynamic-routing-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

/92fbfe68a30dca2db88f2975b4d0335898ae2c0d78582baca2a3b9df1de0c058/bdc1bed5925bc907887fe48b4e44a1ff9968525a07282a15ef43b66c6791f734