# TMDB TV

## TMDB TV

This is a TV app project developed with [@lightningjs](https://github.com/rdkcentral/Lightning-SDK). Contributions to this repository assumes that you understant the framework. Learn about [lightningjs](https://lightningjs.io/)

### Getting started

> Before you follow the steps below, make sure you have the
> [Lightning-CLI](https://rdkcentral.github.io/Lightning-CLI/#/) installed _globally_ only your system

```
npm install -g @lightningjs/cli
```

#### Running the App

1. Install the NPM dependencies by running `npm install`

2. Build the App using the _Lightning-CLI_ by running `lng build` inside the root of your project

3. Fire up a local webserver and open the App in a browser by running `lng serve` inside the root of your project

#### Developing the App

During development you can use the **watcher** functionality of the _Lightning-CLI_.

- use `lng watch` to automatically _rebuild_ your App whenever you make a change in the `src` or `static` folder
- use `lng dev` to start the watcher and run a local webserver / open the App in a browser _at the same time_

#### Documentation

Use `lng docs` to open up the Lightning-SDK documentation.

#### Project structure

This is a simple project that uses few directories to compose logic.

- All static files are placed in the `/static` directory
- The main source code files reside in `/src` which comprises:
  - `/src/pages` for major screens (pages) of the UI
  - `/src/components` for reusable components like `MovieCard` and `Chip`
  - `/src/lib` for configurations and utility functions

#### NB

The API TOKEN for accessing the MovieDB is stubbed in `/src/lib/api`:

```js
export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer <API_READ_ACCESS_TOKEN>',
  },
})
```

Please replace `<API_READ_ACCESS_TOKEN>` with your TMDB token to access the API. Note that using an environment variable will not work as the app is client-side.
