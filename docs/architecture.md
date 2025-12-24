# Architecture

## Architecture Overview

This project is built with Nuxt 4 using a server-first, platform-agnostic approach.

### Global CSS Strategy

Global CSS files are registered using **relative filesystem paths** in `nuxt.config.ts`:

```ts
css: [
  './assets/css/base.css',
  './assets/css/layout.css',
  './assets/css/components.css'
]
