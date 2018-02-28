"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,r){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default});(0,t.default)(o,r.default.modulePrefix),e.default=o}),define("dummy/components/code-snippet",["exports","dummy/snippets"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=self.require("highlight.js")
e.default=Ember.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e
for(var n,t,r=e.split("\n").filter(function(e){return""!==e}),o=0;o<r.length;o++)(n=/^[ \t]*/.exec(r[o]))&&(void 0===t||t>n[0].length)&&(t=n[0].length)
return void 0!==t&&t>0&&(e=e.replace(new RegExp("^[ \t]{"+t+"}","gm"),"")),e},source:Ember.computed("name",function(){var e=this.get("name").split("/").reduce(function(e,n){return e&&e[n]},n.default)
return this._unindent((e||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){t.highlightBlock(this.get("element"))},language:Ember.computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"))
if(e)switch(e[1].toLowerCase()){case"js":return"javascript"
case"coffee":return"coffeescript"
case"hbs":return"htmlbars"
case"css":return"css"
case"scss":return"scss"
case"less":return"less"
case"emblem":return"emblem"
case"ts":return"typescript"}})})}),define("dummy/components/inline-component-string",["exports","ember-inline-component-strings/components/inline-component-string"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/link-string",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:""})}),define("dummy/components/scroll-to",["exports","ember-scroll-to/components/scroll-to"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({i18n:Ember.inject.service(),githubUrl:"https://github.com/k-fish/ember-inline-component-strings"})}),define("dummy/helpers/and",["exports","ember-truth-helpers/helpers/and"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return n.and}})}),define("dummy/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return n.equal}})}),define("dummy/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return n.gt}})}),define("dummy/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return n.gte}})}),define("dummy/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return n.isArray}})}),define("dummy/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return n.isEqual}})}),define("dummy/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return n.lt}})}),define("dummy/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return n.lte}})}),define("dummy/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"notEq",{enumerable:!0,get:function(){return n.notEq}})}),define("dummy/helpers/not",["exports","ember-truth-helpers/helpers/not"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return n.not}})}),define("dummy/helpers/or",["exports","ember-truth-helpers/helpers/or"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return n.or}})}),define("dummy/helpers/t",["exports","ember-i18n/helper"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return n.xor}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/ember-i18n",["exports","ember-i18n/initializers/ember-i18n"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,n){function t(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var r,o=n.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(n.default.modulePrefix),t[r]||(t[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default={name:"export-application-global",initialize:t}}),define("dummy/instance-initializers/ember-i18n",["exports","ember-i18n/instance-initializers/ember-i18n"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/locales/en/translations",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={"Hello! Please follow {|link:this other|} link":"Hello! Please follow {|link:this other|} link"}}),define("dummy/locales/fr/translations",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={"Hello! Please follow {|link:this other|} link":"Bonjour! Veuillez suivre {|link:un autre|} lien"}}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
t.map(function(){}),e.default=t}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/services/i18n",["exports","ember-i18n/services/i18n"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/services/scroller",["exports","ember-scroll-to/services/scroller"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})})
define("dummy/snippets",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={"example-translated-wrapping.hbs":"{{inline-component-string\n  (t \"Hello! Please follow {|link:this other|} link\")\n  link=(component 'link-string' href=(if (eq i18n.locale 'en') \"//google.com\" \"//google.fr\"))\n}}\n<br>\n<button class=\"button\"\n  {{action (mut i18n.locale) (if (eq i18n.locale 'en') 'fr' 'en')}}>\n  Switch Languages\n</button>\n","example-wrapping-component-string.hbs":"{{inline-component-string\n  \"Hello World! {|link:This link|} is wrapped and so is {|link:this|} one.\"\n  link='link-string'\n}}\n","example-wrapping.hbs":'{{inline-component-string\n  "Hello World! {|link:This link|} is wrapped and so is {|link:this|} one."\n  link=(component \'link-string\' href="//google.com")\n}}\n',"usage-basic.hbs":"{{inline-component-string\n  stringAsPositionalParameter\n  foo=(component 'path-to-your-component')\n}}\n"}}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"jJ+XIOzD",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","container"],[7],[0,"\\n  "],[6,"div"],[9,"class","centered"],[7],[0,"\\n    "],[6,"div"],[9,"class","content"],[7],[0,"\\n      "],[6,"header"],[7],[0,"\\n        "],[6,"h1"],[9,"id","title"],[7],[0,"Ember Inline Component Strings"],[8],[0,"\\n      "],[8],[0,"\\n      "],[6,"nav"],[7],[0,"\\n        "],[1,[25,"scroll-to",null,[["href","classNames","label"],["#about","button button-outline","About"]]],false],[0,"\\n        "],[1,[25,"scroll-to",null,[["href","classNames","label"],["#usage","button button-outline","Usage"]]],false],[0,"\\n        "],[1,[25,"scroll-to",null,[["href","classNames","label"],["#examples","button button-outline","Examples"]]],false],[0,"\\n        "],[1,[25,"scroll-to",null,[["href","classNames","label"],["#contributing","button button-outline","Contributing & Other"]]],false],[0,"\\n      "],[8],[0,"\\n      "],[6,"section"],[7],[0,"\\n        ⚠️ "],[6,"strong"],[7],[0,"This is currently an in-development addon, and may not be actively maintained. Use with care."],[8],[0,"\\n      "],[8],[0,"\\n      "],[6,"article"],[7],[0,"\\n        "],[6,"header"],[9,"id","about"],[7],[0,"\\n          "],[6,"h2"],[7],[0,"About"],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"p"],[7],[0,"\\n          This addon is a simple addon made to wrap components around delimited parts of long strings. This is\\n          particularly useful for translations with actions and inline links.\\n        "],[8],[0,"\\n        "],[6,"p"],[7],[0,"\\n          If you find yourself breaking up translations on either side of a link, and want to maintain the full context\\n          for your translators, this might be the addon for you.\\n        "],[8],[0,"\\n      "],[8],[0,"\\n      "],[6,"article"],[9,"id","usage"],[7],[0,"\\n        "],[6,"header"],[7],[0,"\\n          "],[6,"h2"],[7],[0,"Usage"],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"p"],[7],[0,"\\n          You can wrap a component around a part of a string by passing the full string as a positional parameter.\\n        "],[8],[0,"\\n        "],[1,[25,"code-snippet",null,[["name"],["usage-basic.hbs"]]],false],[0,"\\n        "],[6,"p"],[7],[0,"\\n          The string must contain a delimited section, "],[6,"code"],[7],[0,"{|component:text-to-wrap|}"],[8],[0,", where component matches\\n          an attr of that name, and where text is the text that should be wrapped.\\n        "],[8],[0,"\\n        "],[6,"p"],[7],[0,"\\n          So if the delimited part of the string is "],[6,"code"],[7],[0,"{|foo:hello|}"],[8],[0," then your should pass\\n          "],[6,"code"],[7],[0,"foo=component"],[8],[0," which will be wrapped (with yielding) around the word "],[6,"code"],[7],[0,"hello"],[8],[0,".\\n        "],[8],[0,"\\n        "],[6,"p"],[7],[0,"\\n          Any component passed in should use "],[6,"code"],[7],[0,"{{yield}}"],[8],[0," to emit the token where required. The component can\\n          be passed as a component or a string.\\n        "],[8],[0,"\\n      "],[8],[0,"\\n\\n      "],[6,"article"],[9,"id","examples"],[7],[0,"\\n        "],[6,"header"],[7],[0,"\\n          "],[6,"h2"],[7],[0,"Examples"],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"nav"],[7],[0,"\\n          "],[6,"ul"],[7],[0,"\\n            "],[6,"li"],[7],[1,[25,"scroll-to",null,[["href","label"],["#example-wrapping","Wrapping part of a string with a link"]]],false],[8],[0,"\\n            "],[6,"li"],[7],[1,[25,"scroll-to",null,[["href","label"],["#example-wrapping-component-string","Wrapping using a component string"]]],false],[8],[0,"\\n            "],[6,"li"],[7],[1,[25,"scroll-to",null,[["href","label"],["#example-translated-wrapping","Wrapping part of a translated string with a link"]]],false],[8],[0,"\\n          "],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"section"],[9,"id","example-wrapping"],[7],[0,"\\n          "],[6,"h3"],[7],[0,"Wrapping part of a string with a link"],[8],[0,"\\n          "],[1,[25,"code-snippet",null,[["name"],["example-wrapping.hbs"]]],false],[0,"\\n          "],[6,"blockquote"],[7],[0,"\\n            "],[12,"snippets/example-wrapping",[]],[0,"\\n          "],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"section"],[9,"id","example-wrapping-component-string"],[7],[0,"\\n          "],[6,"h3"],[7],[0,"Wrapping using a component string"],[8],[0,"\\n          You can also use components in string form, but you won\'t be able to pass context. (eg. "],[6,"code"],[7],[0,"href"],[8],[0,")\\n          "],[1,[25,"code-snippet",null,[["name"],["example-wrapping-component-string.hbs"]]],false],[0,"\\n          "],[6,"blockquote"],[7],[0,"\\n            "],[12,"snippets/example-wrapping-component-string",[]],[0,"\\n          "],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"section"],[9,"id","example-translated-wrapping"],[7],[0,"\\n          "],[6,"h3"],[7],[0,"Wrapping part of a translated string with a link"],[8],[0,"\\n          "],[6,"p"],[7],[0,"\\n            "],[6,"strong"],[7],[0,"This example uses ember-i18n and ember-truth-helpers"],[8],[0,"\\n          "],[8],[0,"\\n          "],[6,"p"],[7],[0,"\\n            If you want to allow switching between translations, you can pass in the string wrapped with the translation\\n            helper, so long as the translations include the delimiters on the translated side.\\n            "],[6,"br"],[7],[8],[0,"\\n            "],[6,"br"],[7],[8],[0,"\\n            eg. "],[6,"code"],[7],[0,"\\"Hello! Please follow {|link:this other|} link\\": \\"Bonjour! Veuillez suivre {|link:un autre|} lien\\""],[8],[0,"\\n          "],[8],[0,"\\n          "],[1,[25,"code-snippet",null,[["name"],["example-translated-wrapping.hbs"]]],false],[0,"\\n          "],[6,"blockquote"],[7],[0,"\\n            "],[12,"snippets/example-translated-wrapping",[]],[0,"\\n          "],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n      "],[6,"article"],[9,"id","contributing"],[7],[0,"\\n        "],[6,"header"],[7],[0,"\\n          "],[6,"h2"],[7],[0,"Contributing & Other"],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"section"],[7],[0,"\\n          "],[6,"p"],[7],[0,"\\n            See "],[6,"a"],[10,"href",[26,[[18,"githubUrl"]]]],[9,"target","_blank"],[7],[0,"github"],[8],[0,".\\n          "],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"a"],[10,"href",[26,[[18,"githubUrl"]]]],[9,"class","github-corner"],[9,"aria-label","View source on Github"],[7],[6,"svg"],[9,"width","80"],[9,"height","80"],[9,"viewBox","0 0 250 250"],[9,"style","fill:#E04E39; color:#fff; position: fixed; top: 0; border: 0; right: 0;"],[9,"aria-hidden","true"],[7],[6,"path"],[9,"d","M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"],[7],[8],[6,"path"],[9,"d","M128.3,109.0\\n    C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9\\n    125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"],[9,"fill","currentColor"],[9,"style","transform-origin: 130px\\n    106px;"],[9,"class","octo-arm"],[7],[8],[6,"path"],[9,"d","M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2\\n    139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6\\n    171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6\\n    C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5\\n    C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9\\n    141.8,141.8 Z"],[9,"fill","currentColor"],[9,"class","octo-body"],[7],[8],[8],[8],[6,"style"],[7],[0,".github-corner:hover\\n.octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes\\noctocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media\\n(max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms\\n    ease-in-out}}"],[8],[0,"\\n"]],"hasEval":true}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/code-snippet",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"I3g5LP0b",block:'{"symbols":[],"statements":[[1,[18,"source"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/code-snippet.hbs"}})}),define("dummy/templates/components/link-string",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"29xmn8RG",block:'{"symbols":["&default"],"statements":[[6,"a"],[10,"href",[18,"href"],null],[9,"target","_blank"],[7],[11,1],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/link-string.hbs"}})}),define("dummy/templates/components/scroll-to",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Dp8qfv+q",block:'{"symbols":["&default"],"statements":[[4,"if",[[22,1]],null,{"statements":[[0,"  "],[11,1],[0,"\\n"]],"parameters":[]},{"statements":[[0,"  "],[1,[18,"label"],false],[0,"\\n"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/scroll-to.hbs"}})}),define("dummy/templates/snippets/example-translated-wrapping",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"VP55L4HG",block:'{"symbols":[],"statements":[[1,[25,"inline-component-string",[[25,"t",["Hello! Please follow {|link:this other|} link"],null]],[["link"],[[25,"component",["link-string"],[["href"],[[25,"if",[[25,"eq",[[20,["i18n","locale"]],"en"],null],"//google.com","//google.fr"],null]]]]]]],false],[0,"\\n"],[6,"br"],[7],[8],[0,"\\n"],[6,"button"],[9,"class","button"],[3,"action",[[19,0,[]],[25,"mut",[[20,["i18n","locale"]]],null],[25,"if",[[25,"eq",[[20,["i18n","locale"]],"en"],null],"fr","en"],null]]],[7],[0,"\\n  Switch Languages\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/example-translated-wrapping.hbs"}})}),define("dummy/templates/snippets/example-wrapping-component-string",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"wFLbULiY",block:'{"symbols":[],"statements":[[1,[25,"inline-component-string",["Hello World! {|link:This link|} is wrapped and so is {|link:this|} one."],[["link"],["link-string"]]],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/example-wrapping-component-string.hbs"}})}),define("dummy/templates/snippets/example-wrapping",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"gjcosGoP",block:'{"symbols":[],"statements":[[1,[25,"inline-component-string",["Hello World! {|link:This link|} is wrapped and so is {|link:this|} one."],[["link"],[[25,"component",["link-string"],[["href"],["//google.com"]]]]]],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/example-wrapping.hbs"}})}),define("dummy/templates/snippets/usage-basic",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Eskpb0eZ",block:'{"symbols":[],"statements":[[1,[25,"inline-component-string",[[20,["stringAsPositionalParameter"]]],[["foo"],[[25,"component",["path-to-your-component"],null]]]],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/snippets/usage-basic.hbs"}})}),define("dummy/utils/i18n/compile-template",["exports","ember-i18n/utils/i18n/compile-template"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/utils/i18n/missing-message",["exports","ember-i18n/utils/i18n/missing-message"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t={default:JSON.parse(unescape(n))}
return Object.defineProperty(t,"__esModule",{value:!0}),t}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
