import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'devalue';
import { j as decodeKey } from './chunks/astro/server_B3VdOgnT.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/marti/Documents/AstroJS/dalia-romero-web/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BmSq55Cd.js"}],"styles":[{"type":"inline","content":".blog-page[data-astro-cid-ijnerlr2]{padding:2rem;background:var(--gradient-secondary);min-height:100vh;color:var(--color-text)}h1[data-astro-cid-ijnerlr2]{font-size:3rem;margin-bottom:2rem;color:var(--color-accent)}.post-list[data-astro-cid-ijnerlr2]{display:grid;gap:2rem}.post-item[data-astro-cid-ijnerlr2]{background:var(--gradient-primary);border-radius:8px;overflow:hidden;display:flex;transition:transform .3s ease}.post-item[data-astro-cid-ijnerlr2]:hover{transform:translateY(-5px)}.post-item[data-astro-cid-ijnerlr2] img[data-astro-cid-ijnerlr2]{width:300px;height:200px;object-fit:cover}.post-content[data-astro-cid-ijnerlr2]{padding:1.5rem;flex:1}.post-item[data-astro-cid-ijnerlr2] h2[data-astro-cid-ijnerlr2]{color:var(--color-accent);margin-bottom:.5rem}.categories[data-astro-cid-ijnerlr2]{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem}.category[data-astro-cid-ijnerlr2]{background-color:var(--color-accent);color:var(--color-text);padding:.2rem .5rem;border-radius:4px;font-size:.8rem}.post-item[data-astro-cid-ijnerlr2] a[data-astro-cid-ijnerlr2]{display:inline-block;margin-top:1rem;color:var(--color-accent);text-decoration:none;font-weight:700}.post-item[data-astro-cid-ijnerlr2] a[data-astro-cid-ijnerlr2]:hover{text-decoration:underline}\n.header[data-astro-cid-3ef6ksr2]{background:linear-gradient(135deg,#8a2be2,indigo);padding:1rem 0;position:relative}.header__container[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between;align-items:center}.header__logo[data-astro-cid-3ef6ksr2]{color:#fff;font-size:1.5rem;text-decoration:none}.header__toggle[data-astro-cid-3ef6ksr2]{display:block;background:none;border:none;cursor:pointer}.header__toggle-icon[data-astro-cid-3ef6ksr2]{display:block;width:30px;height:3px;background-color:#fff;position:relative;transition:background-color .3s ease}.header__toggle-icon[data-astro-cid-3ef6ksr2]:before,.header__toggle-icon[data-astro-cid-3ef6ksr2]:after{content:\"\";position:absolute;width:100%;height:100%;background-color:#fff;transition:transform .3s ease}.header__toggle-icon[data-astro-cid-3ef6ksr2]:before{transform:translateY(-8px)}.header__toggle-icon[data-astro-cid-3ef6ksr2]:after{transform:translateY(8px)}.header__nav[data-astro-cid-3ef6ksr2]{display:none;position:absolute;top:100%;left:0;width:100%;background:linear-gradient(135deg,#6a0dad,indigo);z-index:1000}.header__nav--active[data-astro-cid-3ef6ksr2]{display:block}.header__menu[data-astro-cid-3ef6ksr2]{list-style:none;padding:1rem;margin:0}.header__menu-item[data-astro-cid-3ef6ksr2]{margin-bottom:1rem;text-align:center}.header__menu-item[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2]{color:#fff;text-decoration:none}.header__toggle-icon[data-astro-cid-3ef6ksr2].active{background-color:transparent}.header__toggle-icon[data-astro-cid-3ef6ksr2].active:before{transform:translateY(0) rotate(45deg)}.header__toggle-icon[data-astro-cid-3ef6ksr2].active:after{transform:translateY(0) rotate(-45deg)}.header__cta[data-astro-cid-3ef6ksr2]{display:none;align-items:center;background:linear-gradient(135deg,#25d366,#128c7e);color:#fff;padding:.5rem 1rem;border-radius:20px;text-decoration:none;font-weight:700;transition:background .3s ease}.header__cta[data-astro-cid-3ef6ksr2]:hover{background:linear-gradient(135deg,#128c7e,#075e54)}.header__cta-icon[data-astro-cid-3ef6ksr2]{width:24px;height:24px;margin-right:.5rem}@media (min-width: 768px){.header__toggle[data-astro-cid-3ef6ksr2]{display:none}.header__nav[data-astro-cid-3ef6ksr2]{display:block;position:static;width:auto;background:none}.header__menu[data-astro-cid-3ef6ksr2]{display:flex;padding:0}.header__menu-item[data-astro-cid-3ef6ksr2]{margin-bottom:0;margin-left:1.5rem}.header__cta[data-astro-cid-3ef6ksr2]{display:inline-flex}}.footer[data-astro-cid-sz7xmlte]{background:linear-gradient(135deg,#8a2be2,indigo);color:#fff;padding:2rem 0;margin-top:2rem}.footer__container[data-astro-cid-sz7xmlte]{display:flex;flex-direction:column;align-items:center;text-align:center}.footer__copyright[data-astro-cid-sz7xmlte]{margin-bottom:1rem}.footer__menu[data-astro-cid-sz7xmlte]{list-style:none;padding:0;display:flex;gap:1rem}.footer__menu-item[data-astro-cid-sz7xmlte] a[data-astro-cid-sz7xmlte]{color:#fff;text-decoration:none;transition:color .3s ease}.footer__menu-item[data-astro-cid-sz7xmlte] a[data-astro-cid-sz7xmlte]:hover{color:#25d366}@media (min-width: 768px){.footer__container[data-astro-cid-sz7xmlte]{flex-direction:row;justify-content:space-between;text-align:left}.footer__copyright[data-astro-cid-sz7xmlte]{margin-bottom:0}}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BmSq55Cd.js"}],"styles":[{"type":"inline","content":".header[data-astro-cid-3ef6ksr2]{background:linear-gradient(135deg,#8a2be2,indigo);padding:1rem 0;position:relative}.header__container[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between;align-items:center}.header__logo[data-astro-cid-3ef6ksr2]{color:#fff;font-size:1.5rem;text-decoration:none}.header__toggle[data-astro-cid-3ef6ksr2]{display:block;background:none;border:none;cursor:pointer}.header__toggle-icon[data-astro-cid-3ef6ksr2]{display:block;width:30px;height:3px;background-color:#fff;position:relative;transition:background-color .3s ease}.header__toggle-icon[data-astro-cid-3ef6ksr2]:before,.header__toggle-icon[data-astro-cid-3ef6ksr2]:after{content:\"\";position:absolute;width:100%;height:100%;background-color:#fff;transition:transform .3s ease}.header__toggle-icon[data-astro-cid-3ef6ksr2]:before{transform:translateY(-8px)}.header__toggle-icon[data-astro-cid-3ef6ksr2]:after{transform:translateY(8px)}.header__nav[data-astro-cid-3ef6ksr2]{display:none;position:absolute;top:100%;left:0;width:100%;background:linear-gradient(135deg,#6a0dad,indigo);z-index:1000}.header__nav--active[data-astro-cid-3ef6ksr2]{display:block}.header__menu[data-astro-cid-3ef6ksr2]{list-style:none;padding:1rem;margin:0}.header__menu-item[data-astro-cid-3ef6ksr2]{margin-bottom:1rem;text-align:center}.header__menu-item[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2]{color:#fff;text-decoration:none}.header__toggle-icon[data-astro-cid-3ef6ksr2].active{background-color:transparent}.header__toggle-icon[data-astro-cid-3ef6ksr2].active:before{transform:translateY(0) rotate(45deg)}.header__toggle-icon[data-astro-cid-3ef6ksr2].active:after{transform:translateY(0) rotate(-45deg)}.header__cta[data-astro-cid-3ef6ksr2]{display:none;align-items:center;background:linear-gradient(135deg,#25d366,#128c7e);color:#fff;padding:.5rem 1rem;border-radius:20px;text-decoration:none;font-weight:700;transition:background .3s ease}.header__cta[data-astro-cid-3ef6ksr2]:hover{background:linear-gradient(135deg,#128c7e,#075e54)}.header__cta-icon[data-astro-cid-3ef6ksr2]{width:24px;height:24px;margin-right:.5rem}@media (min-width: 768px){.header__toggle[data-astro-cid-3ef6ksr2]{display:none}.header__nav[data-astro-cid-3ef6ksr2]{display:block;position:static;width:auto;background:none}.header__menu[data-astro-cid-3ef6ksr2]{display:flex;padding:0}.header__menu-item[data-astro-cid-3ef6ksr2]{margin-bottom:0;margin-left:1.5rem}.header__cta[data-astro-cid-3ef6ksr2]{display:inline-flex}}.footer[data-astro-cid-sz7xmlte]{background:linear-gradient(135deg,#8a2be2,indigo);color:#fff;padding:2rem 0;margin-top:2rem}.footer__container[data-astro-cid-sz7xmlte]{display:flex;flex-direction:column;align-items:center;text-align:center}.footer__copyright[data-astro-cid-sz7xmlte]{margin-bottom:1rem}.footer__menu[data-astro-cid-sz7xmlte]{list-style:none;padding:0;display:flex;gap:1rem}.footer__menu-item[data-astro-cid-sz7xmlte] a[data-astro-cid-sz7xmlte]{color:#fff;text-decoration:none;transition:color .3s ease}.footer__menu-item[data-astro-cid-sz7xmlte] a[data-astro-cid-sz7xmlte]:hover{color:#25d366}@media (min-width: 768px){.footer__container[data-astro-cid-sz7xmlte]{flex-direction:row;justify-content:space-between;text-align:left}.footer__copyright[data-astro-cid-sz7xmlte]{margin-bottom:0}}\n"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cursos","isIndex":false,"type":"page","pattern":"^\\/cursos\\/?$","segments":[[{"content":"cursos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cursos.astro","pathname":"/cursos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sobre-mi","isIndex":false,"type":"page","pattern":"^\\/sobre-mi\\/?$","segments":[[{"content":"sobre-mi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobre-mi.astro","pathname":"/sobre-mi","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CNr7iYsP.js"}],"styles":[{"type":"inline","content":".header[data-astro-cid-3ef6ksr2]{background:linear-gradient(135deg,#8a2be2,indigo);padding:1rem 0;position:relative}.header__container[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between;align-items:center}.header__logo[data-astro-cid-3ef6ksr2]{color:#fff;font-size:1.5rem;text-decoration:none}.header__toggle[data-astro-cid-3ef6ksr2]{display:block;background:none;border:none;cursor:pointer}.header__toggle-icon[data-astro-cid-3ef6ksr2]{display:block;width:30px;height:3px;background-color:#fff;position:relative;transition:background-color .3s ease}.header__toggle-icon[data-astro-cid-3ef6ksr2]:before,.header__toggle-icon[data-astro-cid-3ef6ksr2]:after{content:\"\";position:absolute;width:100%;height:100%;background-color:#fff;transition:transform .3s ease}.header__toggle-icon[data-astro-cid-3ef6ksr2]:before{transform:translateY(-8px)}.header__toggle-icon[data-astro-cid-3ef6ksr2]:after{transform:translateY(8px)}.header__nav[data-astro-cid-3ef6ksr2]{display:none;position:absolute;top:100%;left:0;width:100%;background:linear-gradient(135deg,#6a0dad,indigo);z-index:1000}.header__nav--active[data-astro-cid-3ef6ksr2]{display:block}.header__menu[data-astro-cid-3ef6ksr2]{list-style:none;padding:1rem;margin:0}.header__menu-item[data-astro-cid-3ef6ksr2]{margin-bottom:1rem;text-align:center}.header__menu-item[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2]{color:#fff;text-decoration:none}.header__toggle-icon[data-astro-cid-3ef6ksr2].active{background-color:transparent}.header__toggle-icon[data-astro-cid-3ef6ksr2].active:before{transform:translateY(0) rotate(45deg)}.header__toggle-icon[data-astro-cid-3ef6ksr2].active:after{transform:translateY(0) rotate(-45deg)}.header__cta[data-astro-cid-3ef6ksr2]{display:none;align-items:center;background:linear-gradient(135deg,#25d366,#128c7e);color:#fff;padding:.5rem 1rem;border-radius:20px;text-decoration:none;font-weight:700;transition:background .3s ease}.header__cta[data-astro-cid-3ef6ksr2]:hover{background:linear-gradient(135deg,#128c7e,#075e54)}.header__cta-icon[data-astro-cid-3ef6ksr2]{width:24px;height:24px;margin-right:.5rem}@media (min-width: 768px){.header__toggle[data-astro-cid-3ef6ksr2]{display:none}.header__nav[data-astro-cid-3ef6ksr2]{display:block;position:static;width:auto;background:none}.header__menu[data-astro-cid-3ef6ksr2]{display:flex;padding:0}.header__menu-item[data-astro-cid-3ef6ksr2]{margin-bottom:0;margin-left:1.5rem}.header__cta[data-astro-cid-3ef6ksr2]{display:inline-flex}}.footer[data-astro-cid-sz7xmlte]{background:linear-gradient(135deg,#8a2be2,indigo);color:#fff;padding:2rem 0;margin-top:2rem}.footer__container[data-astro-cid-sz7xmlte]{display:flex;flex-direction:column;align-items:center;text-align:center}.footer__copyright[data-astro-cid-sz7xmlte]{margin-bottom:1rem}.footer__menu[data-astro-cid-sz7xmlte]{list-style:none;padding:0;display:flex;gap:1rem}.footer__menu-item[data-astro-cid-sz7xmlte] a[data-astro-cid-sz7xmlte]{color:#fff;text-decoration:none;transition:color .3s ease}.footer__menu-item[data-astro-cid-sz7xmlte] a[data-astro-cid-sz7xmlte]:hover{color:#25d366}@media (min-width: 768px){.footer__container[data-astro-cid-sz7xmlte]{flex-direction:row;justify-content:space-between;text-align:left}.footer__copyright[data-astro-cid-sz7xmlte]{margin-bottom:0}}\n"},{"type":"external","src":"/_astro/index.DddJxgCG.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/components/BlogComponent.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/cursos@_@astro":"pages/cursos.astro.mjs","\u0000@astro-page:src/pages/sobre-mi@_@astro":"pages/sobre-mi.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BIOl243s.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BmSq55Cd.js","/astro/hoisted.js?q=1":"_astro/hoisted.CNr7iYsP.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DddJxgCG.css","/favicon.svg","/admin/config.yml","/admin/index.html","/content/curso-manicura-rusa.png","/content/curso-polygel.png","/content/curso-soft-gel.png","/content/curso-unas-acrilicas.png","/content/dalia-romero.png","/content/hero-uñas-acrilicas-optimizado.jpg","/styles/global.css","/_astro/hoisted.BmSq55Cd.js","/_astro/hoisted.CNr7iYsP.js","/content/posts/2024-09-08-qué-es-el-seo-local-y-por-qué-la-búsqueda-local-es-importante/index.md","/content/posts/2024-09-08-qué-es-el-seo-local-y-por-qué-la-búsqueda-local-es-importante/pl.jpg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"sAjhLvjQFnkG2z3hCKRv8XyTx0j46hYRHD/AvIOo3d0=","experimentalEnvGetSecretEnabled":false});

export { manifest };
