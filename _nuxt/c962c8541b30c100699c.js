(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{423:function(n,e){!function(n){var e=n.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,t){"string"==typeof e&&(e=[e]),e.forEach(function(e){!function(e,t){var o=n.languages[e];if(o){var r=o["doc-comment"];if(!r){var c={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^\/][\s\S]*?(?:\*\/|$)/,alias:"comment"}};r=(o=n.languages.insertBefore(e,"comment",c))["doc-comment"]}if(r instanceof RegExp&&(r=o["doc-comment"]={pattern:r}),Array.isArray(r))for(var i=0,d=r.length;i<d;i++)r[i]instanceof RegExp&&(r[i]={pattern:r[i]}),t(r[i]);else t(r)}}(e,function(pattern){pattern.inside||(pattern.inside={}),pattern.inside.rest=t})})}}),e.addSupport(["java","javascript","php"],e)}(Prism)}}]);