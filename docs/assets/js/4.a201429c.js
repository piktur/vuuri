(window.webpackJsonp=window.webpackJsonp||[]).push([[4,9],{313:function(t,e,i){},322:function(t,e,i){"use strict";i(313)},347:function(t,e,i){},358:function(t,e,i){"use strict";i.r(e);var n={name:"GridDemoItem",props:{item:{required:!0}},methods:{onDeleteClicked:function(){this.$emit("on-delete",this.item)}}},r=(i(322),i(48)),o=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo-item",style:{backgroundColor:this.item.color}},[e("div",{staticClass:"grid-card-handle",style:{color:this.item.textColor}},[this._v("\n    "+this._s(this.item.name)+"\n  ")]),this._v(" "),e("div",{staticClass:"grid-card-remove",on:{click:this.onDeleteClicked}},[e("svg",{staticClass:"board-item-action-icon icon-delete",attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"}})])])])}),[],!1,null,"687b75b6",null);e.default=o.exports},390:function(t,e,i){"use strict";i(347)},406:function(t,e,i){"use strict";i.r(e);i(315),i(316);var n=i(360),r=i(317);function o(t){for(var e="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=i.length,r=0;r<t;r++)e+=i.charAt(Math.floor(Math.random()*n));return e}var a={name:"GridDemo",components:{GridDemoItem:i(358).default,vuuri:r.a},data:function(){return{items:[],options:{showDuration:400,showEasing:"ease",hideDuration:400,hideEasing:"ease",layoutDuration:400,layoutEasing:"cubic-bezier(0.625, 0.225, 0.100, 0.890)",sortData:{title:function(t,e){return e.getAttribute("data-title")||""},color:function(t,e){return e.getAttribute("data-color")||""}},dragEnabled:!0,dragHandle:".grid-card-handle",dragContainer:document.querySelector(".muuri-grid"),dragRelease:{duration:400,easing:"cubic-bezier(0.625, 0.225, 0.100, 0.890)",useDragContainer:!0},dragPlaceholder:{enabled:!0,createElement:function(t){return t.getElement().cloneNode(!0)}},dragAutoScroll:{targets:[window],sortDuringScroll:!1,syncAfterScroll:!1}}}},methods:{onSearchFilterChange:function(){},onOrderFilterChange:function(){},onColorFilterChange:function(){},onLayoutFilterChange:function(){},onAddClicked:function(){this._buildItems()},onDeleteClicked:function(t){var e=this.items.findIndex((function(e){return e.id===t.id}));this.items.splice(e,1)},_buildItems:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e=Math.max(1,Math.floor(Math.random()*t)),i=0;i<e;i++)this.items.push(this._generateItem())},_generateItems:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=0;e<t;e++)this.items.push(this._generateItem())},_generateItem:function(){return Object(n.a)(Object(n.a)({id:Math.random(),name:o(2)},this._getColor()),{},{width:this.getSize(),height:this.getSize()})},getItemWidth:function(t){return"".concat(t.width,"px")},getItemHeight:function(t){return"".concat(t.height,"px")},getSize:function(){return Math.random()<.5?90:210},_getColor:function(){var t,e,i=Math.random();return"#aaffdc"===(t=i<.333?"#aaffdc":i<.666?"#ff69ea":"rgb(139, 152, 255)")?e="#5455ff":"#ff69ea"===t?e="#ffe67a":"rgb(139, 152, 255)"===t&&(e="#aaffdc"),{color:t,textColor:e}}},created:function(){this._generateItems()}},c=(i(390),i(48)),s=Object(c.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"grid-demo"},[t._m(0),t._v(" "),i("div",{staticClass:"demo"},[i("vuuri",{attrs:{items:t.items,"item-key":"id","get-item-width":t.getItemWidth,"get-item-height":t.getItemHeight,options:t.options},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[i("GridDemoItem",{attrs:{item:n},on:{"on-delete":t.onDeleteClicked}})]}}])}),t._v(" "),i("div",{staticClass:"grid-footer"},[i("button",{staticClass:"grid-button add-more-items",on:{click:t.onAddClicked}},[i("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[i("path",{attrs:{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}})])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"section-title"},[e("span",[this._v("Grid Demo")])])}],!1,null,"62beed9c",null);e.default=s.exports}}]);