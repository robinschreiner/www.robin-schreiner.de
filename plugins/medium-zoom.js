import Vue from 'vue'
import zoom from 'medium-zoom'

const initZoom = () => {
  zoom('img:not(.medium-zoom-image):not(.no-zoom)')
}

Vue.mixin({
  mounted: function () {
    initZoom()
  },
  updated: function () {
    initZoom()
  },
})
