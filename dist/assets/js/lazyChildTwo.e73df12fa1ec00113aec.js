webpackJsonp([5,9],{497:function(t,o,n){o=t.exports=n(488)(),o.push([t.i,"lazy-child-two-component h1{color:green}",""])},507:function(t,o,n){var e=n(497);"string"==typeof e&&(e=[[t.i,e,""]]);n(489)(e,{});e.locals&&(t.exports=e.locals)},518:function(t,o){t.exports="<h1>Lazy child two loaded</h1>"},540:function(t,o,n){"use strict";var e=n(507),i=(n.n(e),function(){function t(){}return t}()),a={controller:i,template:n(518)};o.a=a},541:function(t,o,n){"use strict";function e(t){t.state("lazyChildTwo",{parent:"lazyParent",component:"lazyChildTwoComponent",data:{isChild:!0,navTitle:"Lazy Child Two",moduleTitle:"Lazy Child Two",isMenuItem:!0}})}e.$inject=["$stateProvider"],o.a=e},542:function(t,o,n){"use strict";var e=n(12),i=(n.n(e),n(540)),a=n(541),l=n.i(e.module)("lazy-child-two",[]).component("lazyChildTwoComponent",i.a).config(a.a).name;o.default=l}});