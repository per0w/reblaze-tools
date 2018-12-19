![omg](https://media.giphy.com/media/gtDnXcTcVEXiE/giphy.gif)

# DevOps Tools

Scripts for on all occasions.

## Main packages:

- [dotenv](https://www.npmjs.com/package/dotenv)
- [axios](https://www.npmjs.com/package/axios)
- [yargs](https://www.npmjs.com/package/yargs)

## Use:

```sh
# Install dependencies
yarn install
```

```sh
# Run lint
yarn lint
```

```sh
# fix lint errors
yarn lint:fix
```

## Modules:

| Modules | Description                        |
| ------- | ---------------------------------- |
| Reblaze | Enable / Disable traffic per Server |

## Commands:

```sh
# Reblaze
index.js reblaze:hostEnable host:Server1,Server2 --site www.site.com | Enable trafic for nodes
index.js reblaze:hostDisable host:Server1,Server2 --site www.site.com | Disable trafic for nodes
index.js reblaze:getSite | Show all sites from reblaze
```
