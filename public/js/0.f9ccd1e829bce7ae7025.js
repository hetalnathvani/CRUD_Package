(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@inertiajs/inertia-vue/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-vue/dist/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e=__webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js"),t={functional:!0,props:{data:{type:Object,default:function(){return{}}},href:{type:String,required:!0},method:{type:String,default:"get"},replace:{type:Boolean,default:!1},preserveScroll:{type:Boolean,default:!1},preserveState:{type:Boolean,default:!1}},render:function(t,r){var n=r.props,o=r.data,i=r.children;return t("a",Object.assign({},o,{attrs:Object.assign({},o.attrs,{href:n.href}),on:Object.assign({},o.on||{},{click:function(t){o.on&&o.on.click&&o.on.click(t),e.shouldIntercept(t)&&(t.preventDefault(),e.Inertia.visit(n.href,{data:n.data,method:n.method,replace:n.replace,preserveScroll:n.preserveScroll,preserveState:n.preserveState}))}})}),i)}},r={created:function(){var t=this;if(this.$options.remember){Array.isArray(this.$options.remember)&&(this.$options.remember={data:this.$options.remember}),"string"==typeof this.$options.remember&&(this.$options.remember={data:[this.$options.remember]}),"string"==typeof this.$options.remember.data&&(this.$options.remember={data:[this.$options.remember.data]});var r=this.$options.remember.key instanceof Function?this.$options.remember.key():this.$options.remember.key,n=e.Inertia.restore(r);this.$options.remember.data.forEach(function(o){void 0!==n&&void 0!==n[o]&&(t[o]=n[o]),t.$watch(o,function(){e.Inertia.remember(t.$options.remember.data.reduce(function(e,r){var n;return Object.assign({},e,((n={})[r]=t[r],n))},{}),r)},{immediate:!0,deep:!0})})}}},n={},o={name:"Inertia",props:{initialPage:{type:Object,required:!0},resolveComponent:{type:Function,required:!0},transformProps:{type:Function,default:function(e){return e}}},data:function(){return{component:null,props:{},key:null}},created:function(){var t=this;n=this,e.Inertia.init({initialPage:this.initialPage,resolveComponent:this.resolveComponent,updatePage:function(e,r,n){var o=n.preserveState;t.component=e,t.props=t.transformProps(r),t.key=o?t.key:Date.now()}})},render:function(e){if(this.component){if(this.component.layout){var t=e(this.component,{key:this.key,props:this.props});return"function"==typeof this.component.layout?this.component.layout(e,t):e(this.component.layout,[t])}return e(this.component,{key:this.key,props:this.props})}},install:function(o){Object.defineProperty(o.prototype,"$inertia",{get:function(){return e.Inertia}}),Object.defineProperty(o.prototype,"$page",{get:function(){return n.props}}),o.mixin(r),o.component("InertiaLink",t)}};exports.InertiaApp=o,exports.InertiaLink=t;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@inertiajs/inertia/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@inertiajs/inertia/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(__webpack_require__(/*! axios */ "./node_modules/axios/index.js")),i=e(__webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js")),n={modal:null,listener:null,show:function(e){var t=this,i=document.createElement("html");i.innerHTML=e,i.querySelectorAll("a").forEach(function(e){return e.setAttribute("target","_top")}),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",function(){return t.hide()});var n=document.createElement("iframe");n.style.backgroundColor="white",n.style.borderRadius="5px",n.style.width="100%",n.style.height="100%",this.modal.appendChild(n),document.body.prepend(this.modal),document.body.style.overflow="hidden",n.contentWindow.document.open(),n.contentWindow.document.write(i.outerHTML),n.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide:function(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape:function(e){27===e.keyCode&&this.hide()}};i.configure({showSpinner:!1});var o={delay:null,loading:!1,start:function(){var e=this;clearTimeout(this.delay),this.delay=setTimeout(function(){e.loading=!0,i.set(0),i.start()},250)},increment:function(){this.loading&&i.inc(.4)},stop:function(){clearTimeout(this.delay),this.loading&&(i.done(),this.loading=!1)}};exports.Inertia={resolveComponent:null,updatePage:null,version:null,visitId:null,cancelToken:null,page:null,init:function(e){var t=e.initialPage,i=e.updatePage;this.resolveComponent=e.resolveComponent,this.updatePage=i,window.history.state&&"back_forward"===this.navigationType()?this.setPage(window.history.state):window.sessionStorage.getItem("inertia.hardVisit")?(window.sessionStorage.removeItem("inertia.hardVisit"),this.setPage(t,{preserveState:!0})):(t.url+=window.location.hash,this.setPage(t)),window.addEventListener("popstate",this.restoreState.bind(this))},navigationType:function(){if(window.performance&&window.performance.getEntriesByType("navigation").length)return window.performance.getEntriesByType("navigation")[0].type},isInertiaResponse:function(e){return e&&e.headers["x-inertia"]},cancelActiveVisits:function(){this.cancelToken&&this.cancelToken.cancel(this.cancelToken),this.cancelToken=t.CancelToken.source()},createVisitId:function(){return this.visitId={},this.visitId},visit:function(e,i){var s=this;void 0===i&&(i={});var r=i.method;void 0===r&&(r="get");var a=i.data;void 0===a&&(a={});var d=i.replace;void 0===d&&(d=!1);var c=i.preserveScroll;void 0===c&&(c=!1);var l=i.preserveState;void 0===l&&(l=!1);var h=i.only;void 0===h&&(h=[]),o.start(),this.cancelActiveVisits();var u=this.createVisitId();return t({method:r,url:e.toString(),data:"get"===r.toLowerCase()?{}:a,params:"get"===r.toLowerCase()?a:{},cancelToken:this.cancelToken.token,headers:Object.assign({},{Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0},h.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":h.join(",")}:{},this.version?{"X-Inertia-Version":this.version}:{})}).then(function(e){if(s.isInertiaResponse(e))return e.data;n.show(e.data)}).catch(function(e){if(!t.isCancel(e))return 409===e.response.status&&e.response.headers["x-inertia-location"]?(o.stop(),s.hardVisit(!0,e.response.headers["x-inertia-location"])):s.isInertiaResponse(e.response)?e.response.data:e.response?(o.stop(),void n.show(e.response.data)):Promise.reject(e)}).then(function(e){if(e)return h.length&&(e.props=Object.assign({},s.page.props,e.props)),s.setPage(e,{visitId:u,replace:d,preserveScroll:c,preserveState:l})})},hardVisit:function(e,t){window.sessionStorage.setItem("inertia.hardVisit",!0),e?window.location.replace(t):window.location.href=t},setPage:function(e,t){var i=this;void 0===t&&(t={});var n=t.visitId;void 0===n&&(n=this.createVisitId());var s=t.replace;void 0===s&&(s=!1);var r=t.preserveScroll;void 0===r&&(r=!1);var a=t.preserveState;return void 0===a&&(a=!1),this.page=e,o.increment(),Promise.resolve(this.resolveComponent(e.component)).then(function(t){n===i.visitId&&(i.version=e.version,i.setState(e,s,a),i.updatePage(t,e.props,{preserveState:a}),i.setScroll(r),o.stop())})},setScroll:function(e){e||document.querySelectorAll("html,body,[scroll-region]").forEach(function(e){return e.scrollTo(0,0)})},setState:function(e,t,i){void 0===t&&(t=!1),void 0===i&&(i=!1),t||e.url===""+window.location.pathname+window.location.search?window.history.replaceState(Object.assign({},{cache:i&&window.history.state?window.history.state.cache:{}},e),"",e.url):window.history.pushState(Object.assign({},{cache:{}},e),"",e.url)},restoreState:function(e){e.state&&this.setPage(e.state)},replace:function(e,t){return void 0===t&&(t={}),this.visit(e,Object.assign({},{preserveState:!0},t,{replace:!0}))},reload:function(e){return void 0===e&&(e={}),this.replace(window.location.href,e)},post:function(e,t,i){return void 0===t&&(t={}),void 0===i&&(i={}),this.visit(e,Object.assign({},{preserveState:!0},i,{method:"post",data:t}))},put:function(e,t,i){return void 0===t&&(t={}),void 0===i&&(i={}),this.visit(e,Object.assign({},{preserveState:!0},i,{method:"put",data:t}))},patch:function(e,t,i){return void 0===t&&(t={}),void 0===i&&(i={}),this.visit(e,Object.assign({},{preserveState:!0},i,{method:"patch",data:t}))},delete:function(e,t){return void 0===t&&(t={}),this.visit(e,Object.assign({},t,{method:"delete"}))},remember:function(e,t){void 0===t&&(t="default");var i=Object.assign({},window.history.state);i.cache=i.cache||{},i.cache[t]=e,this.setState(i)},restore:function(e){if(void 0===e&&(e="default"),window.history.state.cache&&window.history.state.cache[e])return window.history.state.cache[e]}},exports.shouldIntercept=function(e){return!(e.target&&e.target.isContentEditable||e.defaultPrevented||e.which>1||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/nprogress/nprogress.js":
/*!*********************************************!*\
  !*** ./node_modules/nprogress/nprogress.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);