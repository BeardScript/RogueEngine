(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{346:function(t,e,s){"use strict";s.r(e);var a=s(24),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app"}},[t._v("#")]),t._v(" App")]),t._v(" "),e("p",[t._v("The "),e("strong",[t._v("App")]),t._v(" class is a singleton in charge of fetching and loading scenes when playing them from the editor or built project. Additionally, it gives us access to the current Scene and the active Camera.")]),t._v(" "),e("h3",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("h4",{attrs:{id:"activecamera"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activecamera"}},[t._v("#")]),t._v(" .activeCamera")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[t._v("activeCamera"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This is the active camera rendering the current Scene.")]),t._v(" "),e("h4",{attrs:{id:"title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" .title")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[t._v("title"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This is the title of our App.")]),t._v(" "),e("h4",{attrs:{id:"currentscene"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#currentscene"}},[t._v("#")]),t._v(" .currentScene")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[t._v("currentScene"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Scene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This is the currently active scene being rendered by the "),e("strong",[t._v("runtime")]),t._v(" controller.")]),t._v(" "),e("h4",{attrs:{id:"scenes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scenes"}},[t._v("#")]),t._v(" .scenes")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" scenes"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uuid"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This object contains a reference to the scenes that we wish to build with our app. The first one in the array will be run first.")]),t._v(" "),e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("h4",{attrs:{id:"play"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#play"}},[t._v("#")]),t._v(" .play")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n")])])]),e("p",[t._v("This function must be called to start the App only in the built project.")]),t._v(" "),e("h4",{attrs:{id:"loadscene"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loadscene"}},[t._v("#")]),t._v(" .loadScene")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadScene")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("Call this function to asynchronously load a scene. Scenes, like all Assets in Rogue Engine, are not loaded in memory until after they are fetched in order to save on resources. The loaded scene will be immediately played by the "),e("a",{attrs:{href:"/EngineAPI/Runtime"}},[t._v("Runtime")]),t._v(" controller.")]),t._v(" "),e("h4",{attrs:{id:"clone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clone"}},[t._v("#")]),t._v(" .clone")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object3d"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object3D"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object3D"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object3D\n")])])]),e("p",[t._v("This method clones a given "),e("a",{attrs:{href:"https://threejs.org/docs/#api/en/core/Object3D",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object3D"),e("OutboundLink")],1),t._v(" with all its components. It's basically Rogue Engine's version of "),e("strong",[t._v("Object3D.clone")]),t._v(" which only clones the object.")])])}),[],!1,null,null,null);e.default=r.exports}}]);