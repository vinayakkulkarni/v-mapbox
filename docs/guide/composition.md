# Composition

You can use Mapbox GL feature as Vue component and compose it as a child of GlMap. During creation all components waits until map properly initialized.

For example, adding map controls:

```vue
<template>
<div id="#app">
  <VMap
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
  >
    <VControlNavigation position="top-right"/>
    <VControlGeolocate position="top-right" />
  </mgl-map>
</div>
</template>

<script>
import { VMap, VControlNavigation, VControlGeolocate } from "v-mapbox";

export default {
  components: {
    VMap,
    VControlNavigation,
    VControlGeolocate
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

Adding a popup:

```vue
<template>
  <div id="#app">
    <VMap :accessToken="accessToken" :mapStyle.sync="mapStyle">
      <VControlNavigation position="top-right" />
      <VControlGeolocate position="top-right" />
      <VPopup :coordinates="popupCoordinates">
        <span>Hello world!</span>
      </VPopup>
    </VMap>
  </div>
</template>

<script>
import {
  VMap,
  VControlNavigation,
  VControlGeolocate,
  VPopup
} from "v-mapbox";

export default {
  components: {
    VMap,
    VControlNavigation,
    VControlGeolocate,
    VPopup
  },
  data() {
    return {
      accessToken: "some_token",
      mapStyle: "style_object",
      popupCoordinates: [10, 10]
    };
  }
};
</script>
```

v-mapbox components will work even if wrapped in another component as long as they are in the components sub-tree of the base map component.

For example:

**_Popup wrapper_**:

```vue
<template>
  <div class="popup-wrapper">
    <VPopup :coordinates="popupCoordinates">
      <span>Hello world from wrapped popup!</span>
    </VPopup>
  </div>
</template>

<script>
import { VPopup } from 'v-mapbox';

export default {
  name: 'PopupWrapper'
  components: {
    VPopup
  },
  computed() {
    popupCoordinates() {
      // Here we can do some work for calculate proper coordinates
      //...
      return [10, 10]
    }
  }
}
</script>
```

**_Main component_**:

```vue
<template>
  <div id="#app">
    <VMap :accessToken="accessToken" :mapStyle.sync="mapStyle">
      <PopupWrapper />
      <!-- works! -->
    </VMap>
  </div>
</template>

<script>
import { VMap } from "v-mapbox";
import PopupWrapper from "PopupWrapper"; // wrapper for popup

export default {
  components: {
    VMap,
    PopupWrapper // wrapper for popup
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

::: tip
VueMapbox internally use dependency injection mechanism (`provide/inject` in Vue [docs](https://vuejs.org)). It means that any component in `VMap` sub-tree can access to `map`, `mapbox` and `actions` through `inject` property.
:::

After successful mount all components emits `added` envent with Vue component object and additional data, such as corresponding Mapbox GL JS object or object containing layer id in payload.
