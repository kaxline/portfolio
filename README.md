# Portfolio

I'm using this site as a place to experiment while also directing people to the things I'm working on. The hope is to have a single link to give anyone who wants to know more about me or my work.

## Development

Run the dev server:

```shellscript
bun dev
```

## Deployment

First, build your app for production:

```sh
bun build
```

Then run the app in production mode:

```sh
bun start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `bun run build`

- `build/server`
- `build/client`

## Styling

Built with [Tailwind CSS](https://tailwindcss.com/).
