if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-c81aca33"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.3ca5f945.css",revision:"7b8d2ab0e0e1f6359bce9baa0397b477"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/36.5a0af19c.js",revision:"fa3dec5b27344bc488f32461ea764ba6"},{url:"assets/js/app.19facc09.js",revision:"4ca2ec6dc51d69ba1878f6773b377193"},{url:"assets/js/layout-Blog.436e05ac.js",revision:"f6ea3aa0d62d4a91be88a5480e569044"},{url:"assets/js/layout-Layout.54347a9b.js",revision:"705fe36c8e6c6cdd4228d02890c04b9f"},{url:"assets/js/layout-NotFound.e98815ff.js",revision:"785def7cab25ae9413dbdda20ccfe9c8"},{url:"assets/js/layout-Slide.144d7ab1.js",revision:"7a140de4e806d219289887554ac961bf"},{url:"assets/js/page-Home.002f9c71.js",revision:"ad35859d27cc5c8b583f223942e0ae2f"},{url:"assets/js/page-分割线类divider.4fc1be7c.js",revision:"48d9b703a28d7c2cdef35920be174b6a"},{url:"assets/js/page-加载器类loader.f512cbb5.js",revision:"060b0fc26cece0205e4b2bafdae0adb9"},{url:"assets/js/page-卡片类card.e4b2c923.js",revision:"475ea70e0de1ddd9bc25cbb47bbd89e2"},{url:"assets/js/page-图标类icon.b588b225.js",revision:"9ac0552ff9f3095fa17edc3d6c96f12b"},{url:"assets/js/page-定位类positioning.a505cd85.js",revision:"ce0c69836b63ee54ba88a0caa9c51338"},{url:"assets/js/page-实现.14bfce96.js",revision:"3a858e8a2817e2399b921746e211dfdf"},{url:"assets/js/page-布局类总览layout.a64d5a37.js",revision:"0025c2b4525072dcba265fb20c6f6abf"},{url:"assets/js/page-徽标类badge.0cabe756.js",revision:"45e4522200b124719bd940ba258a5f8e"},{url:"assets/js/page-快速上手.26caa0d3.js",revision:"78599efaa75514c87b9e32d3bbbb932d"},{url:"assets/js/page-指南.3a581928.js",revision:"1661723b266c01af7c3397cea7309b47"},{url:"assets/js/page-按钮类button.45d3e776.js",revision:"6d07cacfa0ad9094a271e85451fba06f"},{url:"assets/js/page-排版类typography.7f967e6e.js",revision:"12160c52e7e8e5f36a2d1c14f6796d98"},{url:"assets/js/page-改动日志.8f05e282.js",revision:"0f002cc38085a987f26a38c42604c9cd"},{url:"assets/js/page-杂项类misc.4e5b1867.js",revision:"4c30d2cfa82994aaef122e58406000c4"},{url:"assets/js/page-栅格系统类grid.fd4469b4.js",revision:"745788a36f0e6f5e7d135edafe5a84cc"},{url:"assets/js/page-盒模型类box-model.516f59c1.js",revision:"25b36e5c29762fc91cb72362ae6a7bec"},{url:"assets/js/page-视觉类visual.06a40160.js",revision:"b6f497228746dab23ba0b239fcfa5551"},{url:"assets/js/page-组件类总览components.b8aaafc8.js",revision:"52ab6e1ded960e11c465661298f5dd9b"},{url:"assets/js/page-赞赏.c765d418.js",revision:"a83ccac92addfb1a0bbed5fdbfc3592f"},{url:"assets/js/page-输入框input.08e61287.js",revision:"29d49a13472dd136430a1215686c366d"},{url:"assets/js/page-进阶.681c38b1.js",revision:"afbb6365114276d3d291eea6c9b3bb84"},{url:"assets/js/page-通用类总览classes.1f686599.js",revision:"6464f186f614ad8fae14de7478afc9c8"},{url:"assets/js/page-遮罩类overlay.eb6254ef.js",revision:"85fb0fcbb85fd019dbf8e67b2c91c20e"},{url:"assets/js/page-重置.f9593c25.js",revision:"a1bba37f3a90de0c0478e8721493ea29"},{url:"assets/js/page-页面布局类page.e3020018.js",revision:"85a629fbc6386f208a4a6eef62f2aa22"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.08cfbb4a.js",revision:"5f9f2913cd14efea953ca6b4231afc7b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.ec478e91.js",revision:"50304d43b12bf78b23394739ce7dfd91"},{url:"assets/js/vendors~layout-Layout.5438a043.js",revision:"cccc950f6bd49a2d2f638b0b13c75230"},{url:"assets/js/vendors~photo-swipe.e74e3ad3.js",revision:"c0d5008201e9efe6c7941dcee840b7ba"},{url:"404.html",revision:"8d1e48dceec2babe21cc9010cad19531"},{url:"advance/index.html",revision:"4cafbcdd6b30173d10d9e6ea29c194bd"},{url:"changelog/index.html",revision:"6c4090946019591b599073937c5187bd"},{url:"classes/box-model/index.html",revision:"5352489ea7e5ed4efbbe1b359dbc0642"},{url:"classes/index.html",revision:"8fe5bdb2b1c6609b12fa0743f310916d"},{url:"classes/misc/index.html",revision:"f50c43e9d15360330ea5557445f614f8"},{url:"classes/positioning/index.html",revision:"84f8cf44c519f4c72b2d07d3d8e8b6e6"},{url:"classes/typography/index.html",revision:"57295b708b2a3fcdc8220d8ca3ce53b0"},{url:"classes/visual/index.html",revision:"3f0fcab8ef0a75d0d9845c0559d66cc0"},{url:"components/badge/index.html",revision:"f3fd4e2341eafa1d7ad126c18d205f98"},{url:"components/button/index.html",revision:"98558dd7e815429a523f503fe0987637"},{url:"components/card/index.html",revision:"e5378e802a876a844122fb83069a2f5e"},{url:"components/divider/index.html",revision:"551517a13e8ec2e1f815a6aa289da219"},{url:"components/icon/index.html",revision:"48bae266e3edc407fd7f53e5c364f843"},{url:"components/index.html",revision:"6c39b88e2e9c72c551ea25910dc12593"},{url:"components/input/index.html",revision:"91ef439107cda5a6bfe3ca07d32e86b6"},{url:"components/loader/index.html",revision:"91171bebed42c67297763b0fb39899e3"},{url:"components/overlay/index.html",revision:"9910436b654ccf52f16278bdeeaf1366"},{url:"donation/index.html",revision:"e8195b70285da2e9268af18dec06a1af"},{url:"guide/getting-started/index.html",revision:"0bf17bdf2a9396d733f5240e0c537955"},{url:"guide/implement/index.html",revision:"cf9f2d7db444586e97b475112183390f"},{url:"guide/index.html",revision:"2db75af9d2131e124f27846a09b420f6"},{url:"index.html",revision:"45b8cdab44e706784f7eafb64503f43d"},{url:"layout/grid/index.html",revision:"25fdcd6ec623faa222979fea9701155b"},{url:"layout/index.html",revision:"9f3ff00ab99b0e3f3ff1ba5aa800c673"},{url:"layout/page/index.html",revision:"556b6afe7a82591dc6ae38f05b3146e2"},{url:"reset/index.html",revision:"2a19e221919f8a2e6842b2f400425af0"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});