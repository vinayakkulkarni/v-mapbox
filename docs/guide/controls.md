# Map controls

## Overview

Controls are UI elements for controlling the view of the map, such as scale or bearing.
You can check them out in Mapbox GL JS [documentation](https://docs.mapbox.com/mapbox-gl-js/api/#user%20interface)
In v-mapbox they exposed as Vue components, so you can control their properties and behavior dynamically by changing props.

_All controls_:

```vue
<template>
  <div id="#app">
    <VMap
      :accessToken="accessToken"
      :mapStyle.sync="mapStyle"
      :attributionControl="false"
    >
      <VControlAttribution />
      <VControlNavigation position="top-right" />
      <VControlGeolocate position="top-right" />
      <VControlFullscreen position="top-right" />
      <VControlScale />
    </VMap>
  </div>
</template>

<script>
import {
  VMap,
  VControlAttribution,
  VControlNavigation,
  VControlGeolocate,
  VControlFullscreen,
  VControlScale
} from "v-mapbox";

export default {
  components: {
    VMap,
    VControlAttribution,
    VControlNavigation,
    VControlGeolocate,
    VControlFullscreen,
    VControlScale
  },
  data() {
    return {
      accessToken: "some_token",
      mapStyle: "style_object"
    };
  }
};
</script>
```

See list of controls and they properties in [API docs](/api/controls.md).

### Attribution control

Due to Mapbox [policy](https://docs.mapbox.com/help/how-attribution-works/) attribution control
is enabled by default. You can disable default attributions by setting
`attributionControl` prop of VMap to `false` and set your own attribution
using AttributionControl component.
