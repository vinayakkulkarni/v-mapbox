# GlMap

## Props

### `mapbox-gl`

- **Type**: `Object`
- **Default:** `null`
- - **Description:** `mapbox-gl` implementation. Useful for lazy-loading. If omitted, VMapbox imports mapbox-gl js dynamically.

### `map-style`

- **Type**: `String`, `Object`
- **Default:** `undefined`
- **Required**
- **Synced**
- **Description:** The map's Mapbox style. This must be an a JSON object conforming to the schema described in the Mapbox Style Specification , or a URL to such JSON.
- **See:** `options.style` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `access-token`

- **Type:** `String`
- **Default:** `undefined`
- **Non-Synced**
- **Description:** Token required to access the tiles provided by Mapbox
- **See:** [accessToken](https://docs.mapbox.com/mapbox-gl-js/api/#accesstoken)

### `container`

- **Type:** `String`, `HTMLElement`
- **Default:** `#map-{random number}`
- **Non-Synced**
- **Description:** The HTML element in which Mapbox GL JS will render the map
- **See:** `options.container` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `min-zoom`

- **Type:** `Number`
- **Default:** `0`
- **Synced**
- **Description:** Minimum zoom level of the map (0-24)
- **See:** `options.minZoom` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `max-zoom`

- **Type:** `Number`
- **Default:** `22`
- **Synced**
- **Description:** Maximum zoom level of the map (0-24)
- **See:** `options.maxZoom` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `min-pitch`

- **Type:** `Number`
- **Default:** `0`
- **Synced**
- **Description:** The minimum pitch of the map (0-60)
- **See:** `options.minPitch` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `max-pitch`

- **Type:** `Number`
- **Default:** `0`
- **Synced**
- **Description:** The maximum pitch of the map (0-60)
- **See:** `options.maxPitch` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `hash`

- **Type:** `Boolean`, `String`
- **Default:** `false`
- **Synced**
- **Description:** If true, the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL. If it's a string, it will be the name of the param in a parameter-styled hash.
- **See:** `options.hash` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `interactive`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If false, no mouse, touch, or keyboard listeners will be attached to the map, so it will not respond to interaction
- **See:** `options.interactive` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `bearing-snap`

- **Type:** `Number`
- **Default:** `7`
- **Non-Synced**
- **Description:** The threshold, measured in degrees, that determines when the map's bearing will snap to north
- **See:** `options.bearingSnap` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `pitch-with-rotate`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If false , the map's pitch (tilt) control with "drag to rotate" interaction will be disabled
- **See:** `options.pitchWithRotate` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `click-tolerance`

- **Type:** `Number`
- **Default:** `3`
- **Non-Synced**
- **Description:** The max number of pixels a user can shift the mouse pointer during a click for it to be considered a valid click (as opposed to a mouse drag)
- **See:** `options.clickTolerance` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `attribution-control`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, an AttributionControl will be added to the map
- **See:** `options.attributionControl` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `custom-attribution`

- **Type:** `String`, `Array`
- **Default:** `null`
- **Non-Synced**
- **Description:** String or strings to show in an AttributionControl. Only applicable if `options.attributionControl` is `true`
- **See:** `options.customAttribution` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `logo-position`

- **Type:** `String`, `top-left`, `top-right`, `bottom-right`, `bottom-left`
- **Default:** `bottom-left`
- **Non-Synced**
- **Description:** A string representing the position of the Mapbox wordmark on the map
- **See:** `options.logoPosition` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `fail-if-major-performance-caveat`

- **Type:** `Boolean`
- **Default:** `false`
- **Non-Synced**
- **Description:** If true, map creation will fail if the performance of Mapbox GL JS would be dramatically worse than expected (i.e. a software renderer would be used)
- **See:** `options.failIfMajorPerformanceCaveat` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `preserve-drawing-buffer`

- **Type:** `Boolean`
- **Default:** `false`
- **Non-Synced**
- **Description:** If `true`, the map's canvas can be exported to a PNG using `map.getCanvas().toDataURL()`. This is `false` by default as a performance optimization
- **See:** `options.preserveDrawingBuffer` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `antialias`

- **Type:** `Boolean`
- **Default:** `false`
- **Non-Synced**
- **Description:** If `true`, the gl context will be created with MSAA antialiasing, which can be useful for antialiasing custom layers. This is `false` by default as a performance optimization
- **See:** `options.antialias` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `refresh-expired-tiles`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, the map won't attempt to re-request tiles once they expire per their HTTP cacheControl / expires headers.
- **See:** `options.refreshExpiredTiles` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `max-bounds`

- **Type:** `Array`, `LngLatBoundsLike object`
- **Default:** `undefined`
- **Synced**
- **Description:** If set, the map will be constrained to the given bounds
- **See:** `options.maxBounds` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `scroll-zoom`

- **Type:** `Boolean`, `Object`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, the "scroll to zoom" interaction is enabled. An Object value is passed as options to ScrollZoomHandler#enable
- **See:** `options.scrollZoom` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `box-zoom`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, the "box zoom" interaction is enabled
- **See:** `options.boxZoom` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `drag-rotate`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, the "drag to rotate" interaction is enabled
- **See:** `options.dragRotate` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `drag-pan`

- **Type:** `Boolean`, `Object`
- **Default:** `true`
- **Non-Synced**
- **Description:** If `true`, the "drag to pan" interaction is enabled. An Object value is passed as options to [DragPanHandler#enable](https://docs.mapbox.com/mapbox-gl-js/api/handlers/#dragpanhandler#enable).
- **See:** `options.dragRotate` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `keyboard`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, keyboard shortcuts are enabled
- **See:** `options.keyboard` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `double-click-zoom`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, the "double click to zoom" interaction is enabled
- **See:** `options.doubleClickZoom` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `touch-zoom-rotate`

- **Type:** `Boolean`, `Object`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, the "pinch to rotate and zoom" interaction is enabled. An Object value is passed as options to [TouchZoomRotateHandler#enable](https://docs.mapbox.com/mapbox-gl-js/api/handlers/#touchzoomrotatehandler#enable)
- **See:** `options.touchZoomRotate` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `touch-pitch`

- **Type:** `Boolean`, `Object`
- **Default:** `true`
- **Non-Synced**
- **Description:** If `true`, the "drag to pitch" interaction is enabled. An Object value is passed as options to [TouchPitchHandler#enable](https://docs.mapbox.com/mapbox-gl-js/api/handlers/#touchpitchhandler#enable)
- **See:** `options.touchPitch` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `track-resize`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If `true`, the map will automatically resize when the browser window resizes
- **See:** `options.trackResize` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `center`

- **Type:** `Array, LngLatLike Object`
- **Default:** `undefined`
- **Synced**
- **Description:** Geographical centerpoint of the map. If center is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object.If it is not specified in the style, either, it will default to `[0, 0]`
- **See:** `options.center` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `zoom`

- **Type:** `Number`
- **Default:** `undefined`
- **Synced**
- **Description:** Zoom level of the map. If zoom is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`
- **See:** `options.zoom` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `bearing`

- **Type:** `Number`
- **Default:** `undefined`
- **Synced**
- **Description:** Bearing (rotation) of the map, measured in degrees counter-clockwise from north. If bearing is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`
- **See:** `options.bearing` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `pitch`

- **Type:** `Number`
- **Default:** `undefined`
- **Synced**
- **Description:** Pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-60). If pitch is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`
- **See:** `options.pitch` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `bounds`

- **Type:** `Array`, `LngLatBoundsLike object`
- **Default:** `undefined`
- **Description:** The initial bounds of the map. If set, it overrides `center` and `zoom` construction options
- **See:** `options.bounds` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `fit-bounds-options`

- **Type:** `fitBounds object`
- **Default:** `undefined`
- **Description:** A [`fitBounds`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#fitbounds) object to use only when fitting the initial `bounds` provided above
- **See:** `options.fitBoundsOptions` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `render-world-copies`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If `true`, multiple copies of the world will be rendered, when zoomed out
- **See:** `options.renderWorldCopies` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `max-tile-cache-size`

- **Type:** `Number`
- **Default:** `null`
- **Non-Synced**
- **Description:** The maximum number of tiles stored in the tile cache for a given source. If omitted, the cache will be dynamically sized based on the current viewport.
- **See:** `options.renderWorldCopies` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `local-ideograph-font-family`

- **Type:** `String`
- **Default:** `'sans-serif'`
- **Non-Synced**
- **Description:** If specified, defines a CSS font-family for locally overriding generation of glyphs in the 'CJK Unified Ideographs' and 'Hangul Syllables' ranges. In these ranges, font settings from the map's style will be ignored, except for font-weight keywords (light/regular/medium/bold). The purpose of this option is to avoid bandwidth-intensive glyph server requests.
- **See:** `options.localIdeographFontFamily` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `transform-request`

- **Type:** `Function`
- **Default:** `null`
- **Non-Synced**
- **Description:** A callback run before the Map makes a request for an external URL. The callback can be used to modify the url, set headers, or set the credentials property for cross-origin requests. Expected to return an object with a `url` property and optionally `headers` and `credentials` properties.
- **See:** `options.transformRequest` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `collect-resource-timing`

- **Type:** `Boolean`
- **Default:** `false`
- **Non-Synced**
- **Description:** If `true`, Resource Timing API information will be collected for requests made by GeoJSON and Vector Tile web workers (this information is normally inaccessible from the main Javascript thread). Information will be returned in a `resourceTiming` property of relevant data events
- **See:** `options.collectResourceTiming` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `fade-duration`

- **Type:** `Number`
- **Default:** `300`
- **Non-Synced**
- **Description:** Controls the duration of the fade-in/fade-out animation for label collisions, in milliseconds. This setting affects all symbol layers. This setting does not affect the duration of runtime styling transitions or raster tile cross-fading.
- **See:** `options.fadeDuration` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `cross-source-collisions`

- **Type:** `Boolean`
- **Default:** `true`
- **Non-Synced**
- **Description:** If true, symbols from multiple sources can collide with each other during collision detection. If false , collision detection is run separately for the symbols in each source.
- **See:** `options.crossSourceCollisions` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

### `locale`

- **Type:** `Object`
- **Default:** `undefined`
- **Non-Synced**
- **Description:** A patch to apply to the default localization table for UI strings, e.g. control tooltips. The `locale` object maps namespaced UI string IDs to translated strings in the target language; see [`src/ui/default_locale.js`](https://github.com/mapbox/mapbox-gl-js/blob/main/src/ui/default_locale.js) for an example with all supported string IDs. The object may specify all UI strings (thereby adding support for a new translation) or only a subset of strings (thereby patching the default translation table).
- **See:** `options.locale` in [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)

<!-- Specific for v-mapbox -->
### `r-t-l-text-plugin-url`

- **Type:** `String`
- **Default:** `undefined`
- **Synced**
- **Description:** Sets the map's [RTL text plugin](https://docs.mapbox.com/mapbox-gl-js/plugins/#mapbox-gl-rtl-text). Necessary for supporting the Arabic and Hebrew languages, which are written right-to-left. Mapbox Studio loads this plugin by default.
- **See:** See [setrtltextplugin](https://docs.mapbox.com/mapbox-gl-js/api/properties/#setrtltextplugin) Map method and [an example](https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-rtl-text/)

### `light`

- **Type:** `Object`
- **Default:** `undefined`
- **Synced**
- **Description:** Light properties. Must conform to the Mapbox Style Specification
- **See:** See [setLight](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#setlight) Map method

### `tile-boundaries`

- **Type:** `Boolean`
- **Default:** `false`
- **Synced**
- **Description:** A Boolean indicating whether the map will render an outline around each tile. These tile boundaries are useful for debugging
- **See:** See [showTileBoundaries](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#showtileboundaries) Map property

### `collision-boxes`

- **Type:** `Boolean`
- **Default:** `false`
- **Synced**
- **Description:** A Boolean indicating whether the map will render boxes around all symbols in the data source, revealing which symbols were rendered or which were hidden due to collisions. This information is useful for debugging
- **See:** See [showCollisionBoxes](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#showcollisionboxes) Map property

### `repaint`

- **Type:** `Boolean`
- **Default:** `false`
- **Synced**
- **Description:** A Boolean indicating whether the map will continuously repaint. This information is useful for analyzing performance.
- **See:** See [repaint](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#repaint) Map property

## Actions

Asynchronous actions exposed via `GlMap.actions`

::: tip
[Map-promisified](https://github.com/soal/map-promisified) is used as wrapper around Mapbox GL JS methods. That library can be used independently from VueMapbox.
:::

### `.stop(eventData?)`

- **Arguments:**
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Stops all animations on the map
- **Returns:** `{Promise<{ pitch, zoom, bearing, center }>}`
  Promise that resolves object with map parameters on the moment of call `stop()`

### `.panBy(offset, options?, eventData?)`

- **Arguments:**
  - `offset` `{Point | number[]}` x and y coordinates by which to pan the map
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Pans the map by the specified offest
- **Returns:** `{Promise<{ eventData, center }>}`
  Promise that resolves object with event data and new center of the map when animation ends
- **See:** [panBy](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#panby) Map method

### `.panTo(coordinates, options?, eventData?)`

- **Arguments:**
  - `coordinates` `{LngLat | number[][]}` The location to pan the map to. See also: [LngLat](https://docs.mapbox.com/mapbox-gl-js/api/#lnglat)
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Pans the map to the specified location, with an animated transition
- **Returns:** `{Promise<{ eventData, center }>}`
  Promise that resolves object with event data and new center of the map when animation ends
- **See:** [panTo](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#panto) Map method

### `.zoomTo(zoom, options?, eventData?)`

- **Arguments:**
  - `zoom` `{number}` The zoom level to transition to
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Zooms the map to the specified zoom level, with an animated transition
- **Returns:** `{Promise<{ eventData, zoom }>}`
  Promise that resolves object with event data and new zoom level of the map when animation ends
- **See:** [zoomTo](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#zoomto) Map method

### `.zoomIn(options?, eventData?)`

- **Arguments:**
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Increases the map's zoom level by 1
- **Returns:** `{Promise<{ eventData, zoom }>}`
  Promise that resolves object with event data and new zoom level of the map when animation ends
- **See:** [zoomIn](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#zoomin) Map method

### `.zoomOut(options?, eventData?)`

- **Arguments:**
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Decreases the map's zoom level by 1
- **Returns:** `{Promise<{ eventData, zoom }>}`
  Promise that resolves object with event data and new zoom level of the map when animation ends
- **See:** [zoomOut](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#zoomOut) Map method

### `.rotateTo(bearing, options?, eventData?)`

- **Arguments:**
  - `bearing` `{number}` The desired bearing
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Rotates the map to the specified bearing, with an animated transition. The bearing is the compass direction that is \"up\"; for example, a bearing of 90° orients the map so that east is up.
- **Returns:** `{Promise<{ eventData, bearing }>}`
  Promise that resolves object with event data and new bearing of the map when animation ends
- **See:** [rotateTo](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#rotateto) Map method

### `.resetNorth(options?, eventData?)`

- **Arguments:**
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
- **Description:** Rotates the map so that north is up (0° bearing), with an animated transition
- **Returns:** `{Promise<{ eventData, bearing }>}`
  Promise that resolves object with event data and new bearing of the map when animation ends
- **See:** [resetNorth](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#resetnorth) Map method

### `.snapToNorth(options?, eventData?)`

- **Arguments:**
  - `options` `{AnimationOptions object}` animation options. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Snaps the map so that north is up (0° bearing), if the current bearing is close enough to it (i.e. within the `bearingSnap` prop threshold).
- **Returns:** `{Promise<{ eventData, bearing }>}`
  Promise that resolves object with event data and new bearing of the map when animation ends
- **See:** [snapToNorth](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#snaptonorth) Map method

### `.fitBounds(bounds, options?, eventData?)`

- **Arguments:**
  - `bounds` `{ number[][] | LngLatBounds }` Center these bounds in the viewport and use the highest zoom level up to and including `maxZoom` that fits them in the viewport
  - `options` `{Object}`
    - `options.padding?` `{number}` The amount of padding in pixels to add to the given bounds
    - `options.linear` `{boolean}` _default_: `false` If true , the map transitions using `Map#easeTo`. If false , the map transitions using `Map#flyTo`. See those functions and AnimationOptions for information about options available.
    - `options.easing?` An easing function for the animated transition. See [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)
    - `options.offset` `{ number[] | Point }` _default:_ `[0, 0]` The center of the given bounds relative to the map's center, measured in pixels
    - `options.maxZoom?` `{number}` The maximum zoom level to allow when the map view transitions to the specified bounds
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Pans and zooms the map to contain its visible area within the specified geographical bounds. This function will also reset the map's bearing to 0 if bearing is nonzero
- **Returns:** `{Promise<{ eventData, bounds }>}`
  Promise that resolves object with event data and new bounds of the map when animation ends
- **See:** [fitBounds](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#fitbounds) Map method

### `.jumpTo(options, eventData?)`

- **Arguments:**
  - `options` `{Object}` See [CameraOptions](https://docs.mapbox.com/mapbox-gl-js/api/#cameraoptions)
    - `options.pitch?` `{number}` The desired pitch, in degrees
    - `options.zoom?` `{number}` The desired zoom level
    - `options.center?` `{number[] | LngLat}` The desired center
    - `options.bearing?` `{number}` The desired bearing, in degrees
    - `options.around?` `{number[] | LngLat}` If `zoom` is specified, `around` determines the point around which the zoom is centered.
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Changes any combination of center, zoom, bearing, and pitch, without an animated transition. The map will retain its current values for any details not specified in options
- **Returns:** `{Promise<{ eventData, pitch, zoom, center, bearing }>}`
  Promise that resolves object with event data and new pitch, zoom, center and bearing of the map
- **See:** [jumpTo](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#jumpto) Map method

### `.easeTo(options, eventData?)`

- **Arguments:**

  - `options` `{Object}` Combination of [CameraOptions](https://docs.mapbox.com/mapbox-gl-js/api/#cameraoptions) and [AnimationOptions](https://docs.mapbox.com/mapbox-gl-js/api/#animationoptions)

    - `options.pitch?` `{number}` The desired pitch, in degrees
    - `options.zoom?` `{number}` The desired zoom level
    - `options.center?` `{number[] | LngLat}` The desired center
    - `options.bearing?` `{number}` The desired bearing, in degrees
    - `options.around?` `{number[] | LngLat}` If `zoom` is specified, `around` determines the point around which the zoom is centered.
    - `options.duration?` `{number}` The animation's duration, measured in milliseconds.
    - `options.easing?` `{Function}` A function taking a time in the range 0..1 and returning a number where 0 is the initial state and 1 is the final state.
    - `options.offset?` `{number[] | Point}` of the target center relative to real map container center at the end of animation.
    - `options.animate?` `{boolean}`: If `false`, no animation will occur

  - `eventData` `{Object}` Custom data passed to corresponfing event.

- **Description:** Changes any combination of center, zoom, bearing, and pitch, with an animated transition between old and new values. The map will retain its current values for any details not specified in `options`
- **Returns:** `{Promise<{ eventData, pitch, zoom, center, bearing }>}`
  Promise that resolves object with event data and new pitch, zoom, center and bearing of the map when animations ends
- **See:** [easeTo](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#easeto) Map method

### `.flyTo(options, eventData?)`

- **Arguments:**
  - `options` `{Object}`
    - `options.curve?` `{number}` _default_ `1.42` The zooming "curve" that will occur along the flight path. A high value maximizes zooming for an exaggerated animation, while a low value minimizes zooming for an effect closer to Map#easeTo. 1.42 is the average value selected by participants in the user study discussed in van Wijk (2003). A value of Math.pow(6, 0.25) would be equivalent to the root mean squared average velocity. A value of 1 would produce a circular motion
    - `options.minZoom?` `{number}` The zero-based zoom level at the peak of the flight path. If `options.curve` is specified, this option is ignored
    - `options.speed?` `{number}` _default_ `1.2` The average speed of the animation defined in relation to `options.curve`. A speed of 1.2 means that the map appears to move along the flight path by 1.2 times `options.curve` screenfuls every second. A screenful is the map's visible span. It does not correspond to a fixed physical distance, but varies by zoom level
    - `options.screenSpeed?` `{number}` The average speed of the animation measured in screenfuls per second, assuming a linear timing curve. If `options.speed` is specified, this option is ignored
    - `options.maxDuration?` `{number}` The animation's maximum duration, measured in milliseconds. If duration exceeds maximum duration, it resets to 0
  - `eventData` `{Object}` Custom data passed to corresponfing event.
- **Description:** Changes any combination of center, zoom, bearing, and pitch, animating the transition along a curve that evokes flight. The animation seamlessly incorporates zooming and panning to help the user maintain her bearings even after traversing a great distance
- **Returns:** `{Promise<{ eventData, pitch, zoom, center, bearing }>}`
  Promise that resolves object with event data and new pitch, zoom, center and bearing of the map when animations ends
- **See:** [flyTo](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters#flyto) Map method

## Events

Payload of events contains object with properties:

- `mapboxEvent` Original Mapbox GL JS event
- `map` Current map object
- `component` Component that emits event

### `@load`

- **Description:** Fires after map fully loaded
- **Payload** `{ map, component }` `map` is Mapbox Gl JS Map object, `component` is instance of GlMap component

GlMap passes all Mapbox GL JS Map events. Full list of map events see [here](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-events)
