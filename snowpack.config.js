// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: ['@snowpack/plugin-svelte'],
  // installOptions: {},
  // devOptions: {},
  // buildOptions: {},
}
