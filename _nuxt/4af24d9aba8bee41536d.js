(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{468:function(n,e){!function(n){function e(n,e){return"___"+n.toUpperCase()+e+"___"}Object.defineProperties(n.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,o,r){if(a.language===t){var c=a.tokenStack=[];a.code=a.code.replace(o,function(n){if("function"==typeof r&&!r(n))return n;for(var o,l=c.length;-1!==a.code.indexOf(o=e(t,l));)++l;return c[l]=n,o}),a.grammar=n.languages.markup}}},tokenizePlaceholders:{value:function(p,t){if(p.language===t&&p.tokenStack){p.grammar=n.languages[t];var o=0,r=Object.keys(p.tokenStack);!function c(l){for(var f=0;f<l.length&&!(o>=r.length);f++){var a=l[f];if("string"==typeof a||a.content&&"string"==typeof a.content){var k=r[o],d=p.tokenStack[k],h="string"==typeof a?a:a.content,i=e(t,k),u=h.indexOf(i);if(-1<u){++o;var g=h.substring(0,u),m=new n.Token(t,n.tokenize(d,p.grammar),"language-"+t,d),s=h.substring(u+i.length),v=[];g&&v.push.apply(v,c([g])),v.push(m),s&&v.push.apply(v,c([s])),"string"==typeof a?l.splice.apply(l,[f,1].concat(v)):a.content=v}}else a.content&&c(a.content)}return l}(p.tokens)}}}})}(Prism)}}]);