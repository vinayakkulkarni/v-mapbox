---
layout: home
hero:
  name: V-Mapbox
  text: MapLibre maps, written as Vue components
  tagline: Maps, markers, popups, layers and controls that follow the Vue lifecycle. Works with MapLibre GL 6 and deck.gl 9.
  actions:
    - theme: brand
      text: Open the live demo
      link: /demo
    - theme: alt
      text: Get started
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/vinayakkulkarni/v-mapbox
features:
  - title: Declarative
    details: Layers, markers and popups are Vue components. Change a prop and the map follows.
  - title: Vue lifecycle
    details: Components add themselves to the map on mount, clean up on unmount and re-emit map events as Vue events.
  - title: deck.gl ready
    details: Arc and GeoJSON deck.gl 9 layers draw through MapboxOverlay and stay in sync with the map camera.
---

<div class="home-install">
  <InstallSnippet />
</div>

<style>
  .home-install {
    display: flex;
    justify-content: center;
    padding: 40px 24px 64px;
  }
</style>
