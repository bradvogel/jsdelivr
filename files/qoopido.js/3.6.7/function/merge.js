/*! Qoopido.js library 3.6.7, 2015-07-08 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(t){window.qoopido.register("function/merge",t)}(function(t,e,n,o,r,u,f){"use strict";return function i(){var t,e,n,o,r,u=arguments[0];for(t=1;(e=arguments[t])!==f;t++)for(n in e)o=u[n],r=e[n],r!==f&&(null!==r&&"object"==typeof r?(o=r.length!==f?o&&"object"==typeof o&&o.length!==f?o:[]:o&&"object"==typeof o&&o.length===f?o:{},u[n]=i(o,r)):u[n]=r);return u}});