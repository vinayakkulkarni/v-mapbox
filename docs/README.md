---
home: true
heroImage: /logo.svg
actionText: Get Started →
actionLink: /guide/
features:
  - title: Declarative style
    details: You can use map elements like layers, markers, popups as Vue components and control them via synchronized props
  - title: Vuefied
    details: Map elements declared as components respect Vue lifecycle, emit map events like Vue events and can be used in OOP-style
  - title: Promisified async actions
    details: You can do async map operations and get results in Promise without messing with map events and figuring out what action cause it
footer: MIT Licensed
---

If you like a long story, check out [blog post](https://soal.red/reasoning-behind-vue-mapbox/)

<iframe src="https://codesandbox.io/embed/v-mapbox-map-demo-k1l1n?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
   style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
   title="v-mapbox-map-demo"
   allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
   sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
 ></iframe>

::: tip Dependencies
[Vue.js 2.6+](https://github.com/vuejs/vue)  
[Mapbox GL JS 1.1+](https://github.com/mapbox/mapbox-gl-js)  
[map-promisified](https://github.com/soal/map-promisified)
:::

::: tip Size
~ 15 kB minified and gzipped
:::

