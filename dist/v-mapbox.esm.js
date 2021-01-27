import promisify from 'map-promisified';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var withEventsMixin = {
  methods: {
    /**
     * Emit Vue event with additional data
     *
     * @param {string} name EventName
     * @param {Object} [data={}] Additional data
     */
    $_emitEvent: function $_emitEvent(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.$emit(name, _objectSpread2({
        map: this.map,
        component: this
      }, data));
    },

    /**
     * Emit Vue event with Mapbox event as additional data
     *
     * @param {Object} event
     */
    $_emitMapEvent: function $_emitMapEvent(event) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.$_emitEvent(event.type, _objectSpread2({
        mapboxEvent: event
      }, data));
    }
  }
};

var mapEvents = {
  boxzoomcancel: {
    name: 'boxzoomcancel'
  },
  boxzoomend: {
    name: 'boxzoomcancel'
  },
  boxzoomstart: {
    name: 'boxzoomstart'
  },
  click: {
    name: 'click'
  },
  contextmenu: {
    name: 'contextmenu'
  },
  data: {
    name: 'data'
  },
  dataloading: {
    name: 'dataloading'
  },
  dblclick: {
    name: 'dblclick'
  },
  drag: {
    name: 'drag'
  },
  dragend: {
    name: 'dragend'
  },
  dragstart: {
    name: 'dragstart'
  },
  error: {
    name: 'error'
  },
  idle: {
    name: 'idle'
  },
  load: {
    name: 'load'
  },
  mousedown: {
    name: 'mousedown'
  },
  mouseenter: {
    name: 'mouseenter'
  },
  mouseleave: {
    name: 'mouseleave'
  },
  mousemove: {
    name: 'mousemove'
  },
  mouseout: {
    name: 'mouseout'
  },
  mouseover: {
    name: 'mouseover'
  },
  mouseup: {
    name: 'mouseup'
  },
  move: {
    name: 'move'
  },
  moveend: {
    name: 'moveend'
  },
  movestart: {
    name: 'movestart'
  },
  pitch: {
    name: 'pitch'
  },
  pitchend: {
    name: 'pitchend'
  },
  pitchstart: {
    name: 'pitchstart'
  },
  remove: {
    name: 'remove'
  },
  render: {
    name: 'render'
  },
  resize: {
    name: 'resize'
  },
  rotate: {
    name: 'rotate'
  },
  rotateend: {
    name: 'rotateend'
  },
  rotatestart: {
    name: 'rotatestart'
  },
  sourcedata: {
    name: 'sourcedata'
  },
  sourcedataloading: {
    name: 'sourcedataloading'
  },
  styledata: {
    name: 'styledata'
  },
  styledataloading: {
    name: 'styledataloading'
  },
  styleimagemissing: {
    name: 'styleimagemissing'
  },
  touchcancel: {
    name: 'touchcancel'
  },
  touchend: {
    name: 'touchend'
  },
  touchmove: {
    name: 'touchmove'
  },
  touchstart: {
    name: 'touchstart'
  },
  webglcontextlost: {
    name: 'webglcontextlost'
  },
  webglcontextrestored: {
    name: 'webglcontextrestored'
  },
  wheel: {
    name: 'wheel'
  },
  zoom: {
    name: 'zoom'
  },
  zoomend: {
    name: 'zoomend'
  },
  zoomstart: {
    name: 'zoomstart'
  }
};

var options = {
  container: {
    type: [String, HTMLElement],
    default: function _default() {
      return "map-".concat(('' + Math.random()).split('.')[1]);
    }
  },
  minZoom: {
    type: Number,
    default: 0,
    required: false
  },
  maxZoom: {
    type: Number,
    default: 22,
    required: false
  },
  minPitch: {
    type: Number,
    default: 0,
    required: false
  },
  maxPitch: {
    type: Number,
    default: 0,
    required: false
  },
  mapStyle: {
    type: [String, Object],
    default: undefined,
    required: true
  },
  hash: {
    type: [Boolean, String],
    default: false,
    required: false
  },
  interactive: {
    type: Boolean,
    default: true,
    required: false
  },
  bearingSnap: {
    type: Number,
    default: 7,
    required: false
  },
  pitchWithRotate: {
    type: Boolean,
    default: true,
    required: false
  },
  clickTolerance: {
    type: Number,
    default: 3,
    required: false
  },
  attributionControl: {
    type: Boolean,
    default: true,
    required: false
  },
  customAttribution: {
    type: [String, Array],
    default: null,
    required: false
  },
  logoPosition: {
    type: String,
    default: 'bottom-left',
    validator: function validator(val) {
      return ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(val);
    },
    required: false
  },
  failIfMajorPerformanceCaveat: {
    type: Boolean,
    default: false,
    required: false
  },
  preserveDrawingBuffer: {
    type: Boolean,
    default: false,
    required: false
  },
  antialias: {
    type: Boolean,
    default: false,
    required: false
  },
  refreshExpiredTiles: {
    type: Boolean,
    default: true,
    required: false
  },
  maxBounds: {
    type: [Array, Object],
    default: function _default() {
      return undefined;
    },
    required: false
  },
  scrollZoom: {
    type: [Boolean, Object],
    default: function _default() {
      return true;
    },
    required: false
  },
  boxZoom: {
    type: Boolean,
    default: true,
    required: false
  },
  dragRotate: {
    type: Boolean,
    default: true,
    required: false
  },
  dragPan: {
    type: Boolean,
    default: true,
    required: false
  },
  keyboard: {
    type: Boolean,
    default: true,
    required: false
  },
  doubleClickZoom: {
    type: Boolean,
    default: true,
    required: false
  },
  touchZoomRotate: {
    type: [Boolean, Object],
    default: function _default() {
      return true;
    },
    required: false
  },
  touchPitch: {
    type: [Boolean, Object],
    default: function _default() {
      return true;
    },
    required: false
  },
  trackResize: {
    type: Boolean,
    default: true,
    required: false
  },
  center: {
    type: [Object, Array],
    default: undefined,
    required: false
  },
  zoom: {
    type: Number,
    default: 0,
    required: false
  },
  bearing: {
    type: Number,
    default: 0,
    required: false
  },
  pitch: {
    type: Number,
    default: 0,
    required: false
  },
  bounds: {
    type: [Object, Array],
    default: undefined,
    required: false
  },
  fitBoundsOptions: {
    type: Object,
    default: undefined,
    required: false
  },
  renderWorldCopies: {
    type: Boolean,
    default: true,
    required: false
  },
  maxTileCacheSize: {
    type: Number,
    default: null,
    required: false
  },
  localIdeographFontFamily: {
    type: String,
    default: 'sans-serif',
    required: false
  },
  transformRequest: {
    type: Function,
    default: null,
    required: false
  },
  collectResourceTiming: {
    type: Boolean,
    default: false,
    required: false
  },
  fadeDuration: {
    type: Number,
    default: 300,
    required: false
  },
  crossSourceCollisions: {
    type: Boolean,
    default: true,
    required: false
  },
  accessToken: {
    type: String,
    default: undefined,
    required: false
  },
  locale: {
    type: Object,
    default: undefined,
    required: false
  },

  /**
   * Reference(mapobox): https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-rtl-text/
   * Reference(v-mapbox): ./GlMap.vue#L89
   */
  RTLTextPluginUrl: {
    type: String,
    default: undefined,
    required: false
  },

  /**
   * Reference(mapbox): https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setlight
   * Reference(v-mapbox): ./mixins/withWatchers.js#L43
   */
  light: {
    type: Object,
    default: undefined,
    required: false
  },

  /**
   * Reference(mapbox): https://docs.mapbox.com/mapbox-gl-js/api/map/#map#showtileboundaries
   * Reference(v-mapbox): ./mixins/withWatchers.js#L25
   */
  tileBoundaries: {
    type: Boolean,
    default: false,
    required: false
  },

  /**
   * Reference(mapbox): https://docs.mapbox.com/mapbox-gl-js/api/map/#map#showcollisionboxes
   * Reference(v-mapbox): ./mixins/withWatchers.js#L22
   */
  collisionBoxes: {
    type: Boolean,
    default: false,
    required: false
  },

  /**
   * Reference(mapbox): https://docs.mapbox.com/mapbox-gl-js/api/map/#map#repaint
   * Reference(v-mapbox): ./mixins/withWatchers.js#L28
   */
  repaint: {
    type: Boolean,
    default: false,
    required: false
  }
};

var watchers = {
  maxBounds: function maxBounds(next) {
    this.map.setMaxBounds(next);
  },
  minZoom: function minZoom(next) {
    this.map.setMinZoom(next);
  },
  maxZoom: function maxZoom(next) {
    this.map.setMaxZoom(next);
  },
  minPitch: function minPitch(next) {
    this.map.setMinPitch(next);
  },
  maxPitch: function maxPitch(next) {
    this.map.setMaxPitch(next);
  },
  mapStyle: function mapStyle(next) {
    this.map.setStyle(next);
  },
  // TODO: make 'bounds' synced prop
  // bounds (next) { this.map.fitBounds(next, { linear: true, duration: 0 }) },
  collisionBoxes: function collisionBoxes(next) {
    this.map.showCollisionBoxes = next;
  },
  tileBoundaries: function tileBoundaries(next) {
    this.map.showTileBoundaries = next;
  },
  repaint: function repaint(next) {
    this.map.repaint = next;
  },
  zoom: function zoom(next) {
    this.map.setZoom(next);
  },
  center: function center(next) {
    this.map.setCenter(next);
  },
  bearing: function bearing(next) {
    this.map.setBearing(next);
  },
  pitch: function pitch(next) {
    this.map.setPitch(next);
  },
  light: function light(next) {
    this.map.setLight(next);
  }
};

function watcher(prop, callback, next, prev) {
  var _this = this;

  if (this.initial) return;

  if (this.$listeners["update:".concat(prop)]) {
    if (this.propsIsUpdating[prop]) {
      this._watcher.active = false;
      this.$nextTick(function () {
        _this._watcher.active = true;
      });
    } else {
      this._watcher.active = true;
      callback(next, prev);
    }

    this.propsIsUpdating[prop] = false;
  } else {
    callback(next, prev);
  }
}

function makeWatchers() {
  var wrappers = {};
  Object.entries(watchers).forEach(function (prop) {
    wrappers[prop[0]] = function (next, prev) {
      return watcher.call(this, prop[0], prop[1].bind(this), next, prev);
    };
  });
  return wrappers;
}

var withWatchers = {
  watch: makeWatchers()
};

var withPrivateMethods = {
  methods: {
    $_updateSyncedPropsFabric: function $_updateSyncedPropsFabric(prop, data) {
      var _this = this;

      return function () {
        _this.propsIsUpdating[prop] = true;
        var info = typeof data === 'function' ? data() : data;
        return _this.$emit("update:".concat(prop), info);
      };
    },
    $_bindPropsUpdateEvents: function $_bindPropsUpdateEvents() {
      var _this2 = this;

      var syncedProps = [{
        events: ['moveend'],
        prop: 'center',
        getter: this.map.getCenter.bind(this.map)
      }, {
        events: ['zoomend'],
        prop: 'zoom',
        getter: this.map.getZoom.bind(this.map)
      }, {
        events: ['rotate'],
        prop: 'bearing',
        getter: this.map.getBearing.bind(this.map)
      }, {
        events: ['pitch'],
        prop: 'pitch',
        getter: this.map.getPitch.bind(this.map)
      }, {
        events: ['moveend', 'zoomend', 'rotate', 'pitch'],
        prop: 'bounds',
        getter: function getter() {
          var newBounds = _this2.map.getBounds();

          if (_this2.$props.bounds instanceof Array) {
            newBounds = newBounds.toArray();
          }

          return newBounds;
        }
      }];
      syncedProps.forEach(function (_ref) {
        var events = _ref.events,
            prop = _ref.prop,
            getter = _ref.getter;
        events.forEach(function (event) {
          if (_this2.$listeners["update:".concat(prop)]) {
            _this2.map.on(event, _this2.$_updateSyncedPropsFabric(prop, getter));
          }
        });
      });
    },
    $_loadMap: function $_loadMap() {
      var _this3 = this;

      return this.mapboxPromise.then(function (mapbox) {
        _this3.mapbox = mapbox.default ? mapbox.default : mapbox;
        return new Promise(function (resolve) {
          if (_this3.accessToken) _this3.mapbox.accessToken = _this3.accessToken;
          var map = new _this3.mapbox.Map(_objectSpread2(_objectSpread2({}, _this3._props), {}, {
            container: _this3.$refs.container,
            style: _this3.mapStyle
          }));
          map.on('load', function () {
            return resolve(map);
          });
        });
      });
    },
    $_RTLTextPluginError: function $_RTLTextPluginError(error) {
      this.$emit('rtl-plugin-error', {
        map: this.map,
        error: error
      });
    },
    $_bindMapEvents: function $_bindMapEvents(events) {
      var _this4 = this;

      Object.keys(this.$listeners).forEach(function (eventName) {
        if (events.includes(eventName)) {
          _this4.map.on(eventName, _this4.$_emitMapEvent);
        }
      });
    },
    $_unbindEvents: function $_unbindEvents(events) {
      var _this5 = this;

      events.forEach(function (eventName) {
        _this5.map.off(eventName, _this5.$_emitMapEvent);
      });
    }
  }
};

var withAsyncActions = {
  created: function created() {
    this.actions = {};
  },
  methods: {
    $_registerAsyncActions: function $_registerAsyncActions(map) {
      this.actions = _objectSpread2(_objectSpread2({}, promisify(map)), {}, {
        stop: function stop() {
          var _this = this;

          this.map.stop();
          var updatedProps = {
            pitch: this.map.getPitch(),
            zoom: this.map.getZoom(),
            bearing: this.map.getBearing(),
            center: this.map.getCenter()
          };
          Object.entries(updatedProps).forEach(function (prop) {
            _this.$_updateSyncedPropsFabric(prop[0], prop[1])();
          });
          return Promise.resolve(updatedProps);
        }
      });
    }
  }
};

//

var script = {
  name: 'GlMap',

  mixins: [withWatchers, withAsyncActions, withPrivateMethods, withEventsMixin],

  provide() {
    const self = this;
    return {
      get mapbox() {
        return self.mapbox;
      },
      get map() {
        return self.map;
      },
      get actions() {
        return self.actions;
      },
    };
  },

  props: {
    mapboxGl: {
      type: Object,
      default: null,
    },
    ...options,
  },

  data() {
    return {
      initial: true,
      initialized: false,
    };
  },

  computed: {
    loaded() {
      return this.map ? this.map.loaded() : false;
    },
    version() {
      return this.map ? this.map.version : null;
    },
    isStyleLoaded() {
      return this.map ? this.map.isStyleLoaded() : false;
    },
    areTilesLoaded() {
      return this.map ? this.map.areTilesLoaded() : false;
    },
    isMoving() {
      return this.map ? this.map.isMoving() : false;
    },
    canvas() {
      return this.map ? this.map.getCanvas() : null;
    },
    canvasContainer() {
      return this.map ? this.map.getCanvasContainer() : null;
    },
    images() {
      return this.map ? this.map.listImages() : null;
    },
  },

  created() {
    this.map = null;
    this.propsIsUpdating = {};
    this.mapboxPromise = this.mapboxGl
      ? Promise.resolve(this.mapboxGl)
      : import('mapbox-gl');
  },

  mounted() {
    this.$_loadMap().then((map) => {
      this.map = map;
      if (
        this.RTLTextPluginUrl !== undefined &&
        this.mapbox.getRTLTextPluginStatus() !== 'loaded'
      ) {
        this.mapbox.setRTLTextPlugin(
          this.RTLTextPluginUrl,
          this.$_RTLTextPluginError,
        );
      }
      const eventNames = Object.keys(mapEvents);
      this.$_bindMapEvents(eventNames);
      this.$_registerAsyncActions(map);
      this.$_bindPropsUpdateEvents();
      this.initial = false;
      this.initialized = true;
      this.$emit('load', { map, component: this });
    });
  },

  beforeDestroy() {
    this.$nextTick(() => {
      if (this.map) this.map.remove();
    });
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "mgl-map-wrapper" },
    [_vm._m(0), _vm._v(" "), _vm.initialized ? _vm._t("default") : _vm._e()],
    2
  )
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { ref: "container", attrs: { id: _vm.container } })
  }
];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var withSelfEventsMixin = {
  methods: {
    $_emitSelfEvent: function $_emitSelfEvent(event) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.$_emitMapEvent(event, _objectSpread2({
        control: this.control
      }, data));
    },

    /** Bind events for markers, popups and controls.
     * MapboxGL JS emits this events on popup or marker object,
     * so we treat them as 'self' events of these objects
     */
    $_bindSelfEvents: function $_bindSelfEvents(events, emitter) {
      var _this = this;

      Object.keys(this.$listeners).forEach(function (eventName) {
        if (events.includes(eventName)) {
          emitter.on(eventName, _this.$_emitSelfEvent);
        }
      });
    },
    $_unbindSelfEvents: function $_unbindSelfEvents(events, emitter) {
      var _this2 = this;

      if (events.length === 0) return;
      if (!emitter) return;
      events.forEach(function (eventName) {
        emitter.off(eventName, _this2.$_emitSelfEvent);
      });
    }
  }
};

// import withRegistration from "../../../lib/withRegistration";
var controlMixin = {
  mixins: [withEventsMixin, withSelfEventsMixin],
  inject: ['mapbox', 'map', 'actions'],
  props: {
    position: {
      type: String,
      default: 'top-right'
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.map && this.control) {
      this.map.removeControl(this.control);
    }
  },
  methods: {
    $_addControl: function $_addControl() {
      try {
        this.map.addControl(this.control, this.position);
      } catch (err) {
        this.$_emitEvent('error', {
          error: err
        });
        return;
      }

      this.$_emitEvent('added', {
        control: this.control
      });
    }
  },
  render: function render() {}
};

var NavigationControl = {
  name: 'NavigationControl',
  mixins: [controlMixin],
  props: {
    showCompass: {
      type: Boolean,
      default: true
    },
    showZoom: {
      type: Boolean,
      default: true
    }
  },
  created: function created() {
    this.control = new this.mapbox.NavigationControl(this.$props);
    this.$_addControl();
  }
};

var geolocationEvents = {
  trackuserlocationstart: 'trackuserlocationstart',
  trackuserlocationend: 'trackuserlocationend',
  geolocate: 'geolocate',
  error: 'error'
};
var GeolocateControl = {
  name: 'GeolocateControl',
  mixins: [withEventsMixin, withSelfEventsMixin, controlMixin],
  props: {
    positionOptions: {
      type: Object,
      default: function _default() {
        return {
          enableHighAccuracy: false,
          timeout: 6000
        };
      }
    },
    fitBoundsOptions: {
      type: Object,
      default: function _default() {
        return {
          maxZoom: 15
        };
      }
    },
    trackUserLocation: {
      type: Boolean,
      default: false
    },
    showUserLocation: {
      type: Boolean,
      default: true
    }
  },
  created: function created() {
    var GeolocateControl = this.mapbox.GeolocateControl;
    this.control = new GeolocateControl(this.$props);
    this.$_addControl();
    this.$_bindSelfEvents(Object.keys(geolocationEvents), this.control);
  },
  methods: {
    trigger: function trigger() {
      if (this.control) {
        return this.control.trigger();
      }
    }
  }
};

var FullscreenControl = {
  name: 'FullscreenControl',
  mixins: [controlMixin],
  props: {
    container: {
      type: HTMLElement,
      default: undefined
    }
  },
  created: function created() {
    this.control = new this.mapbox.FullscreenControl(this.$props);
    this.$_addControl();
  }
};

var AttributionControl = {
  name: 'AttributionControl',
  mixins: [controlMixin],
  props: {
    compact: {
      type: Boolean,
      default: true
    },
    customAttribution: {
      type: [String, Array],
      deafault: undefined
    }
  },
  created: function created() {
    this.control = new this.mapbox.AttributionControl(this.$props);
    this.$_addControl();
  }
};

var ScaleControl = {
  name: 'ScaleControl',
  mixins: [controlMixin],
  props: {
    maxWidth: {
      type: Number,
      default: 150
    },
    unit: {
      type: String,
      default: 'metric',
      validator: function validator(value) {
        return ['imperial', 'metric', 'nautical'].includes(value);
      }
    }
  },
  watch: {
    unit: function unit(next, prev) {
      if (this.control && next !== prev) {
        this.control.setUnit(next);
      }
    }
  },
  created: function created() {
    this.control = new this.mapbox.ScaleControl(this.$props);
    this.$_addControl();
  }
};

//

const markerEvents = {
  drag: 'drag',
  dragstart: 'dragstart',
  dragend: 'dragend',
};

const markerDOMEvents = {
  click: 'click',
  mouseenter: 'mouseenter',
  mouseleave: 'mouseleave',
};

var script$1 = {
  name: 'MapMarker',
  mixins: [withEventsMixin, withSelfEventsMixin],

  inject: ['mapbox', 'map'],

  provide() {
    const self = this;
    return {
      get marker() {
        return self.marker;
      },
    };
  },

  props: {
    // mapbox marker options
    offset: {
      type: [Object, Array],
      default: () => [0, 0],
    },
    coordinates: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      default: 'blue',
    },
    anchor: {
      type: String,
      default: 'center',
    },
    draggable: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      initial: true,
      marker: undefined,
    };
  },

  watch: {
    coordinates(lngLat) {
      if (this.initial) return;
      this.marker.setLngLat(lngLat);
    },
    draggable(next) {
      if (this.initial) return;
      this.marker.setDraggable(next);
    },
  },

  mounted() {
    const markerOptions = {
      ...this.$props,
    };
    if (this.$slots.marker) {
      markerOptions.element = this.$slots.marker[0].elm;
    }
    this.marker = new this.mapbox.Marker(markerOptions);

    if (this.$listeners['update:coordinates']) {
      this.marker.on('dragend', (event) => {
        let newCoordinates;
        if (this.coordinates instanceof Array) {
          newCoordinates = [
            event.target._lngLat.lng,
            event.target._lngLat.lat,
          ];
        } else {
          newCoordinates = event.target._lngLat;
        }
        this.$emit('update:coordinates', newCoordinates);
      });
    }

    const eventNames = Object.keys(markerEvents);
    this.$_bindSelfEvents(eventNames, this.marker);

    this.initial = false;
    this.$_addMarker();
  },

  beforeDestroy() {
    if (this.map !== undefined && this.marker !== undefined) {
      this.marker.remove();
    }
  },

  methods: {
    $_addMarker() {
      this.marker.setLngLat(this.coordinates).addTo(this.map);
      this.$_bindMarkerDOMEvents();
      this.$_emitEvent('added', { marker: this.marker });
    },

    $_emitSelfEvent(event) {
      this.$_emitMapEvent(event, { marker: this.marker });
    },

    $_bindMarkerDOMEvents() {
      Object.keys(this.$listeners).forEach((key) => {
        if (Object.values(markerDOMEvents).includes(key)) {
          this.marker._element.addEventListener(key, (event) => {
            this.$_emitSelfEvent(event);
          });
        }
      });
    },

    remove() {
      this.marker.remove();
      this.$_emitEvent('removed');
    },

    togglePopup() {
      return this.marker.togglePopup();
    },
  },
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticStyle: { display: "none" } },
    [_vm._t("marker"), _vm._v(" "), _vm.marker ? _vm._t("default") : _vm._e()],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

//

const popupEvents = {
  open: 'open',
  close: 'close',
};

/**
 * Popup component.
 * @see See [Mapbox Gl JS Popup](https://www.mapbox.com/mapbox-gl-js/api/#popup)
 */
var script$2 = {
  name: 'Popup',
  mixins: [withEventsMixin, withSelfEventsMixin],

  inject: {
    mapbox: {
      default: null,
    },
    map: {
      default: null,
    },
    marker: {
      default: null,
    },
  },

  props: {
    /**
     * Mapbox GL popup option.
     * Space-separated CSS class names to add to popup container
     */
    className: {
      type: String,
      default: undefined,
    },
    /**
     * If `true`, a close button will appear in the top right corner of the popup.
     * Mapbox GL popup option.
     */
    closeButton: {
      type: Boolean,
      default: true,
    },
    /**
     * Mapbox GL popup option.
     * If `true`, the popup will closed when the map is clicked. .
     */
    closeOnClick: {
      type: Boolean,
      default: true,
    },
    /**
     * Mapbox GL popup option.
     * If `true`, the popup will closed when the map moves.
     */
    closeOnMove: {
      type: Boolean,
      default: false,
    },
    /**
     * Mapbox GL popup option.
     * If `true`, the popup will try to focus the first focusable element inside the popup.
     */
    focusAfterOpen: {
      type: Boolean,
      default: true,
    },
    /**
     * Mapbox GL popup option.
     * A string indicating the popup's location relative to the coordinate set.
     * If unset the anchor will be dynamically set to ensure the popup falls within the map container with a preference for 'bottom' .
     *  'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'
     */
    anchor: {
      validator(value) {
        let allowedValues = [
          'top',
          'bottom',
          'left',
          'right',
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right',
        ];
        return typeof value === 'string' && allowedValues.includes(value);
      },
      default: undefined,
    },
    /**
     * Mapbox GL popup option.
     * A pixel offset applied to the popup's location
     * a single number specifying a distance from the popup's location
     * a PointLike specifying a constant offset
     * an object of Points specifing an offset for each anchor position Negative offsets indicate left and up.
     */
    offset: {
      type: [Number, Object, Array],
      default: () => [0, 0],
    },
    coordinates: {
      type: Array,
      default: () => [0, 0],
    },

    /**
     * Component option.
     * If `true`, popup treats data in deafult slot as plain text
     */
    onlyText: {
      type: Boolean,
      default: false,
    },

    showed: {
      type: Boolean,
      default: false,
    },
    /**
     * https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup#setmaxwidth
     */
    maxWidth: {
      type: String,
      default: '240px',
    },
  },

  data() {
    return {
      initial: true,
      popup: undefined,
    };
  },

  computed: {
    open: {
      get() {
        if (this.popup !== undefined) {
          return this.popup.isOpen();
        }
        return false;
      },
      set(value) {
        if (this.map && this.popup) {
          if (!value) {
            this.popup.remove();
          } else {
            this.popup.addTo(this.map);
          }
        }
      },
    },
  },

  watch: {
    coordinates(lngLat) {
      if (this.initial) return;
      this.popup.setLngLat(lngLat);
    },

    showed(next, prev) {
      if (next !== prev) {
        this.open = next;
        if (this.marker) {
          this.marker.togglePopup();
        }
      }
    },
  },

  created() {
    this.popup = new this.mapbox.Popup(this.$props);
  },

  mounted() {
    this.$_addPopup();
    this.initial = false;
  },

  beforeDestroy() {
    if (this.map) {
      this.popup.remove();
      this.$_emitEvent('removed');
    }
  },

  methods: {
    $_addPopup() {
      this.popup = new this.mapbox.Popup(this.$props);
      if (this.coordinates !== undefined) {
        this.popup.setLngLat(this.coordinates);
      }
      if (this.$slots.default !== undefined) {
        if (this.onlyText) {
          if (this.$slots.default[0].elm.nodeType === 3) {
            let tmpEl = document.createElement('span');
            tmpEl.appendChild(this.$slots.default[0].elm);
            this.popup.setText(tmpEl.innerText);
          } else {
            this.popup.setText(this.$slots.default[0].elm.innerText);
          }
        } else {
          this.popup.setDOMContent(this.$slots.default[0].elm);
        }
      }

      this.$_bindSelfEvents(Object.keys(popupEvents), this.popup);

      this.$_emitEvent('added', { popup: this.popup });

      if (this.marker) {
        this.marker.setPopup(this.popup);
      }
      if (this.showed) {
        this.open = true;

        if (this.marker) {
          this.marker.togglePopup();
        }
      }
    },

    $_emitSelfEvent(event) {
      this.$_emitMapEvent(event, { popup: this.popup });
    },

    remove() {
      this.popup.remove();
      this.$_emitEvent('remove', { popup: this.popup });
    },
  },
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticStyle: { display: "none" } }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

var layerEvents = ['mousedown', 'mouseup', 'click', 'dblclick', 'mousemove', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout', 'contextmenu', 'touchstart', 'touchend', 'touchcancel'];

var mapboxSourceProps = {
  sourceId: {
    type: String,
    required: true
  },
  source: {
    type: [Object, String],
    default: undefined
  }
};
var mapboxLayerStyleProps = {
  layerId: {
    type: String,
    required: true
  },
  layer: {
    type: Object,
    required: true
  },
  before: {
    type: String,
    default: undefined
  }
};
var componentProps = {
  clearSource: {
    type: Boolean,
    default: true
  },
  replaceSource: {
    type: Boolean,
    default: false
  },
  replace: {
    type: Boolean,
    default: false
  }
};
var layerMixin = {
  mixins: [withEventsMixin],
  props: _objectSpread2(_objectSpread2(_objectSpread2({}, mapboxSourceProps), mapboxLayerStyleProps), componentProps),
  inject: ['mapbox', 'map'],
  data: function data() {
    return {
      initial: true
    };
  },
  computed: {
    sourceLoaded: function sourceLoaded() {
      return this.map ? this.map.isSourceLoaded(this.sourceId) : false;
    },
    mapLayer: function mapLayer() {
      return this.map ? this.map.getLayer(this.layerId) : null;
    },
    mapSource: function mapSource() {
      return this.map ? this.map.getSource(this.sourceId) : null;
    }
  },
  created: function created() {
    if (this.layer.minzoom) {
      this.$watch('layer.minzoom', function (next) {
        if (this.initial) return;
        this.map.setLayerZoomRange(this.layerId, next, this.layer.maxzoom);
      });
    }

    if (this.layer.maxzoom) {
      this.$watch('layer.maxzoom', function (next) {
        if (this.initial) return;
        this.map.setLayerZoomRange(this.layerId, this.layer.minzoom, next);
      });
    }

    if (this.layer.paint) {
      this.$watch('layer.paint', function (next) {
        if (this.initial) return;

        if (next) {
          for (var _i = 0, _Object$keys = Object.keys(next); _i < _Object$keys.length; _i++) {
            var prop = _Object$keys[_i];
            this.map.setPaintProperty(this.layerId, prop, next[prop]);
          }
        }
      }, {
        deep: true
      });
    }

    if (this.layer.layout) {
      this.$watch('layer.layout', function (next) {
        if (this.initial) return;

        if (next) {
          for (var _i2 = 0, _Object$keys2 = Object.keys(next); _i2 < _Object$keys2.length; _i2++) {
            var prop = _Object$keys2[_i2];
            this.map.setLayoutProperty(this.layerId, prop, next[prop]);
          }
        }
      }, {
        deep: true
      });
    }

    if (this.layer.filter) {
      this.$watch('layer.filter', function (next) {
        if (this.initial) return;
        this.map.setFilter(this.layerId, next);
      }, {
        deep: true
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.map && this.map.loaded()) {
      try {
        this.map.removeLayer(this.layerId);
      } catch (err) {
        this.$_emitEvent('layer-does-not-exist', {
          layerId: this.sourceId,
          error: err
        });
      }

      if (this.clearSource) {
        try {
          this.map.removeSource(this.sourceId);
        } catch (err) {
          this.$_emitEvent('source-does-not-exist', {
            sourceId: this.sourceId,
            error: err
          });
        }
      }
    }
  },
  methods: {
    $_emitLayerMapEvent: function $_emitLayerMapEvent(event) {
      return this.$_emitMapEvent(event, {
        layerId: this.layerId
      });
    },
    $_bindLayerEvents: function $_bindLayerEvents(events) {
      var _this = this;

      Object.keys(this.$listeners).forEach(function (eventName) {
        if (events.includes(eventName)) {
          _this.map.on(eventName, _this.layerId, _this.$_emitLayerMapEvent);
        }
      });
    },
    $_unbindEvents: function $_unbindEvents(events) {
      var _this2 = this;

      if (this.map) {
        events.forEach(function (eventName) {
          _this2.map.off(eventName, _this2.layerId, _this2.$_emitLayerMapEvent);
        });
      }
    },
    $_watchSourceLoading: function $_watchSourceLoading(data) {
      if (data.dataType === 'source' && data.sourceId === this.sourceId) {
        this.$_emitEvent('layer-source-loading', {
          sourceId: this.sourceId
        });
        this.map.off('dataloading', this.$_watchSourceLoading);
      }
    },
    move: function move(beforeId) {
      this.map.moveLayer(this.layerId, beforeId);
      this.$_emitEvent('layer-moved', {
        layerId: this.layerId,
        beforeId: beforeId
      });
    },
    remove: function remove() {
      this.map.removeLayer(this.layerId);
      this.map.removeSource(this.sourceId);
      this.$_emitEvent('layer-removed', {
        layerId: this.layerId
      });
      this.$destroy();
    }
  },
  render: function render() {}
};

var GeojsonLayer = {
  name: 'GeojsonLayer',
  mixins: [layerMixin],
  computed: {
    getSourceFeatures: function getSourceFeatures() {
      var _this = this;

      return function (filter) {
        if (_this.map) {
          return _this.map.querySourceFeatures(_this.sourceId, {
            filter: filter
          });
        }

        return null;
      };
    },
    getRenderedFeatures: function getRenderedFeatures() {
      var _this2 = this;

      return function (geometry, filter) {
        if (_this2.map) {
          return _this2.map.queryRenderedFeatures(geometry, {
            layers: [_this2.layerId],
            filter: filter
          });
        }

        return null;
      };
    },
    getClusterExpansionZoom: function getClusterExpansionZoom() {
      var _this3 = this;

      return function (clusterId) {
        return new Promise(function (resolve, reject) {
          if (_this3.mapSource) {
            _this3.mapSource.getClusterExpansionZoom(clusterId, function (err, zoom) {
              if (err) {
                return reject(err);
              }

              return resolve(zoom);
            });
          } else {
            return reject(new Error("Map source with id ".concat(_this3.sourceId, " not found.")));
          }
        });
      };
    },
    getClusterChildren: function getClusterChildren() {
      var _this4 = this;

      return function (clusterId) {
        return new Promise(function (resolve, reject) {
          var source = _this4.mapSource;

          if (source) {
            source.getClusterChildren(clusterId, function (err, features) {
              if (err) {
                return reject(err);
              }

              return resolve(features);
            });
          } else {
            return reject(new Error("Map source with id ".concat(_this4.sourceId, " not found.")));
          }
        });
      };
    },
    getClusterLeaves: function getClusterLeaves() {
      var _this5 = this;

      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return new Promise(function (resolve, reject) {
          if (_this5.mapSource) {
            var _this5$mapSource;

            (_this5$mapSource = _this5.mapSource).getClusterLeaves.apply(_this5$mapSource, args.concat([function (err, features) {
              if (err) {
                return reject(err);
              }

              return resolve(features);
            }]));
          } else {
            return reject(new Error("Map source with id ".concat(_this5.sourceId, " not found.")));
          }
        });
      };
    }
  },
  created: function created() {
    if (this.source) {
      this.$watch('source.data', function (next) {
        if (this.initial) return;
        this.mapSource.setData(next);
      }, {
        deep: true
      });
    }

    this.$_deferredMount();
  },
  methods: {
    $_deferredMount: function $_deferredMount() {
      // this.map = payload.map;
      this.map.on('dataloading', this.$_watchSourceLoading);

      if (this.source) {
        var source = _objectSpread2({
          type: 'geojson'
        }, this.source);

        try {
          this.map.addSource(this.sourceId, source);
        } catch (err) {
          if (this.replaceSource) {
            this.map.removeSource(this.sourceId);
            this.map.addSource(this.sourceId, source);
          }
        }
      }

      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
      this.map.off('dataloading', this.$_watchSourceLoading);
      this.initial = false;
    },
    $_addLayer: function $_addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitEvent('layer-exists', {
            layerId: this.layerId
          });
          return existed;
        }
      }

      var layer = _objectSpread2({
        id: this.layerId,
        source: this.sourceId
      }, this.layer);

      this.map.addLayer(layer, this.before);
      this.$_emitEvent('added', {
        layerId: this.layerId
      });
    },
    setFeatureState: function setFeatureState(featureId, state) {
      if (this.map) {
        var params = {
          id: featureId,
          source: this.source
        };
        return this.map.setFeatureState(params, state);
      }
    },
    getFeatureState: function getFeatureState(featureId) {
      if (this.map) {
        var params = {
          id: featureId,
          source: this.source
        };
        return this.map.getFeatureState(params);
      }
    },
    removeFeatureState: function removeFeatureState(featureId, sourceLayer, key) {
      if (this.map) {
        var params = {
          id: featureId,
          source: this.source,
          sourceLayer: sourceLayer
        };
        return this.map.removeFeatureState(params, key);
      }
    }
  }
};

var ImageLayer = {
  name: 'ImageLayer',
  mixins: [layerMixin],
  created: function created() {
    if (this.source) {
      if (this.source.coordinates) {
        this.$watch('source.coordinates', function (next) {
          if (this.initial) return;

          if (next) {
            this.mapSource.setCoordinates(next);
          }
        }, {
          deep: true
        });
      }

      if (this.source.url) {
        this.$watch('source.url', function (next) {
          if (this.initial) return;

          if (next) {
            this.mapSource.updateImage({
              url: next,
              coordinates: this.source.coordinates
            });
          }
        }, {
          deep: true
        });
      }
    }

    this.$_deferredMount();
  },
  methods: {
    $_deferredMount: function $_deferredMount() {
      var source = _objectSpread2({
        type: 'image'
      }, this.source);

      this.map.on('dataloading', this.$_watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        }
      }

      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
      this.initial = false;
    },
    $_addLayer: function $_addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitEvent('layer-exists', {
            layerId: this.layerId
          });
          return existed;
        }
      }

      var layer = _objectSpread2({
        id: this.layerId,
        source: this.sourceId,
        type: 'raster'
      }, this.layer);

      this.map.addLayer(layer, this.before);
      this.$_emitEvent('added', {
        layerId: this.layerId
      });
    }
  }
};

var CanvasLayer = {
  name: 'CanvasLayer',
  mixins: [layerMixin],
  inject: ['mapbox', 'map'],
  props: {
    source: {
      type: Object,
      required: true
    },
    layer: {
      type: Object,
      default: null
    }
  },
  computed: {
    canvasElement: function canvasElement() {
      return this.mapSource ? this.mapSource.getCanvas() : null;
    }
  },
  watch: {
    coordinates: function coordinates(val) {
      if (this.initial) return;
      this.mapSource.setCoordinates(val);
    }
  },
  created: function created() {
    this.$_deferredMount();
  },
  methods: {
    $_deferredMount: function $_deferredMount() {
      var source = _objectSpread2({
        type: 'canvas'
      }, this.source);

      this.map.on('dataloading', this.$_watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        }
      }

      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
      this.initial = false;
    },
    $_addLayer: function $_addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitEvent('layer-exists', {
            layerId: this.layerId
          });
          return existed;
        }
      }

      var layer = _objectSpread2({
        id: this.layerId,
        source: this.sourceId,
        type: 'raster'
      }, this.layer);

      this.map.addLayer(layer, this.before);
      this.$_emitEvent('added', {
        layerId: this.layerId,
        canvas: this.canvasElement
      });
    }
  }
};

var VideoLayer = {
  name: 'VideoLayer',
  mixins: [layerMixin],
  computed: {
    video: function video() {
      return this.map.getSource(this.sourceId).getVideo();
    }
  },
  created: function created() {
    if (this.source && this.source.coordinates) {
      this.$watch('source.coordinates', function (next) {
        if (this.initial) return;
        this.mapSource.setCoordinates(next);
      });
    }

    this.$_deferredMount();
  },
  methods: {
    $_deferredMount: function $_deferredMount() {
      var source = _objectSpread2({
        type: 'video'
      }, this.source);

      this.map.on('dataloading', this.$_watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        }
      }

      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
      this.initial = false;
    },
    $_addLayer: function $_addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitEvent('layer-exists', {
            layerId: this.layerId
          });
          return existed;
        }
      }

      var layer = _objectSpread2({
        id: this.layerId,
        source: this.sourceId,
        type: 'background'
      }, this.layer);

      this.map.addLayer(layer, this.before);
      this.$_emitEvent('added', {
        layerId: this.layerId
      });
    }
  }
};

var VectorLayer = {
  name: 'VectorLayer',
  mixins: [layerMixin],
  computed: {
    getSourceFeatures: function getSourceFeatures() {
      var _this = this;

      return function (filter) {
        if (_this.map) {
          return _this.map.querySourceFeatures(_this.sourceId, {
            sourceLayer: _this.layer['source-layer'],
            filter: filter
          });
        }

        return null;
      };
    },
    getRenderedFeatures: function getRenderedFeatures() {
      var _this2 = this;

      return function (geometry, filter) {
        if (_this2.map) {
          return _this2.map.queryRenderedFeatures(geometry, {
            layers: [_this2.layerId],
            filter: filter
          });
        }

        return null;
      };
    }
  },
  watch: {
    filter: function filter(_filter) {
      if (this.initial) return;
      this.map.setFilter(this.layerId, _filter);
    }
  },
  created: function created() {
    this.$_deferredMount();
  },
  methods: {
    $_deferredMount: function $_deferredMount() {
      var source = _objectSpread2({
        type: 'vector'
      }, this.source);

      this.map.on('dataloading', this.$_watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        }
      }

      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
      this.map.off('dataloading', this.$_watchSourceLoading);
      this.initial = false;
    },
    $_addLayer: function $_addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitEvent('layer-exists', {
            layerId: this.layerId
          });
          return existed;
        }
      }

      var layer = _objectSpread2({
        id: this.layerId,
        source: this.sourceId
      }, this.layer);

      this.map.addLayer(layer, this.before);
      this.$_emitEvent('added', {
        layerId: this.layerId
      });
    },
    setFeatureState: function setFeatureState(featureId, state) {
      if (this.map) {
        var params = {
          id: featureId,
          source: this.sourceId,
          'source-layer': this.layer['source-layer']
        };
        return this.map.setFeatureState(params, state);
      }
    },
    getFeatureState: function getFeatureState(featureId) {
      if (this.map) {
        var params = {
          id: featureId,
          source: this.source,
          'source-layer': this.layer['source-layer']
        };
        return this.map.getFeatureState(params);
      }
    }
  }
};

var RasterLayer = {
  name: 'RasterLayer',
  mixins: [layerMixin],
  created: function created() {
    this.$_deferredMount();
  },
  methods: {
    $_deferredMount: function $_deferredMount() {
      var source = _objectSpread2({
        type: 'raster'
      }, this.source);

      this.map.on('dataloading', this.$_watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        }
      }

      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
      this.map.off('dataloading', this.$_watchSourceLoading);
      this.initial = false;
    },
    $_addLayer: function $_addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitEvent('layer-exists', {
            layerId: this.layerId
          });
          return existed;
        }
      }

      var layer = _objectSpread2({
        id: this.layerId,
        type: 'raster',
        source: this.sourceId
      }, this.layer);

      this.map.addLayer(layer, this.before);
      this.$_emitEvent('added', {
        layerId: this.layerId
      });
    }
  }
};

var withEvents = withEventsMixin;
var withSelfEvents = withSelfEventsMixin;
var asControl = controlMixin;
var asLayer = layerMixin;
var $helpers = {
  withEvents: withEventsMixin,
  withSelfEvents: withSelfEventsMixin,
  asControl: controlMixin,
  asLayer: layerMixin
};
var MglMap = __vue_component__;
var MglNavigationControl = NavigationControl;
var MglGeolocateControl = GeolocateControl;
var MglFullscreenControl = FullscreenControl;
var MglAttributionControl = AttributionControl;
var MglScaleControl = ScaleControl;
var MglGeojsonLayer = GeojsonLayer;
var MglImageLayer = ImageLayer;
var MglCanvasLayer = CanvasLayer;
var MglVideoLayer = VideoLayer;
var MglVectorLayer = VectorLayer;
var MglRasterLayer = RasterLayer;
var MglMarker = __vue_component__$1;
var MglPopup = __vue_component__$2;

export default __vue_component__;
export { $helpers, MglAttributionControl, MglCanvasLayer, MglFullscreenControl, MglGeojsonLayer, MglGeolocateControl, MglImageLayer, MglMap, MglMarker, MglNavigationControl, MglPopup, MglRasterLayer, MglScaleControl, MglVectorLayer, MglVideoLayer, asControl, asLayer, withEvents, withSelfEvents };
