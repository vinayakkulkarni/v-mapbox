# V-Mapbox 🗺

<a title="npm" href="https://www.npmjs.com/package/v-mapbox" rel="nofollow">
  <img alt="npm" src="https://img.shields.io/npm/v/v-mapbox?label=npm%40latest&logo=npm">
</a>
<a title="GitHub Release" href="https://github.com/vinayakkulkarni/v-mapbox/releases" rel="nofollow">
  <img alt="GitHub release (latest by date including pre-releases)" src="https://img.shields.io/github/v/release/vinayakkulkarni/v-mapbox?include_prereleases&logo=github">
</a>
<a title="CI Status" href="https://github.com/vinayakkulkarni/v-mapbox/actions?query=workflow%3Aci" rel="nofollow">
  <img alt="Total alerts" src="https://github.com/vinayakkulkarni/v-mapbox/workflows/ci/badge.svg">
</a>
<a title="DeepScan Grade" href="https://deepscan.io/dashboard#view=project&tid=9381&pid=14423&bid=267899">
  <img src="https://deepscan.io/api/teams/9381/projects/14423/branches/267899/badge/grade.svg" alt="DeepScan grade">
</a>
<a title="downloads" href="http://npm-stat.com/charts.html?package=v-mapbox" rel="nofollow">
  <img alt="npm" src="https://img.shields.io/npm/dm/v-mapbox">
</a>
<a title="deploy" href="https://github.com/algolia/shipjs" rel="nofollow">
  <img src="https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat" />
</a>
<a title="Last Commit" href="https://github.com/vinayakkulkarni/v-mapbox/commits/main" rel="nofollow">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/vinayakkulkarni/v-mapbox">
</a>
<a title="Contributors" href="https://github.com/vinayakkulkarni/v-mapbox/graphs/contributors" rel="nofollow">
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/vinayakkulkarni/v-mapbox">
</a>
<a title="maintenance" href="https://github.com/vinayakkulkarni/v-mapbox/commits/main" rel="nofollow">
  <img alt="Maintenance" src="https://img.shields.io/maintenance/yes/2024">
</a>
<a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fvinayakkulkarni%2Fv-mapbox?ref=badge_shield" alt="FOSSA Status">
  <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fvinayakkulkarni%2Fv-mapbox.svg?type=shield"/>
</a>

> Combine powers of [Vue](https://vuejs.org/) and [Mapbox GL JS](https://mapbox.com/mapbox-gl-js) (v3.x) & [MaplibreGL](https://maplibre.org/maplibre-gl-js/docs/) (v4.x) 🗺

V-Mapbox is wrapper around Mapbox GL JS for >v1.x to <=v3.x & Maplibre GL JS for > v4.x library that provides vueish-way to interact with the map.

[Description and documentation](https://v-mapbox.netlify.app/)

## Installation

```sh
# For Vue 2
$ npm i v-mapbox@legacy
# For Vue 3
$ npm i v-mapbox
```

## Demo

[![Edit v-mapbox-vue-3](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v-mapbox-uq9ri2?fontsize=14&hidenavigation=1&theme=dark)

## Deck.gl 🆕

[![Edit v-mapbox-with-deck-gl-geojson](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v-mapbox-with-deck-gl-geojson-f8nn5q?fontsize=14&hidenavigation=1&theme=dark)

## Development

```sh
git clone git@github.com:vinayakkulkarni/v-mapbox.git
cd v-mapbox
npm install
```

Running in dev mode:

```sh
npm run serve
```

Build for production:

```sh
npm run build
```

### Documentation

Start documentation site in development mode:

```sh
npm run docs:dev
```

Build documentation:

```sh
npm run docs:build
```

Inspired by KoRiGaN's [Vue2Leaflet](https://github.com/KoRiGaN/Vue2Leaflet).

## Contributing

1. Fork it ([https://github.com/vinayakkulkarni/v-mapbox/fork](https://github.com/vinayakkulkarni/v-mapbox/fork))
2. Create your feature branch (`git checkout -b feat/new-feature`)
3. Commit your changes (`git commit -Sam 'feat: add feature'`)
4. Push to the branch (`git push origin feat/new-feature`)
5. Create a new [Pull Request](https://github.com/vinayakkulkarni/v-mapbox/compare)

_Note_:

1. Please contribute using [GitHub Flow](https://web.archive.org/web/20191104103724/https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_

## Author

**v-mapbox** © [Vinayak](https://github.com/vinayakkulkarni), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/v-mapbox/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)

## License

MIT

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fvinayakkulkarni%2Fv-mapbox.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fvinayakkulkarni%2Fv-mapbox?ref=badge_large)
