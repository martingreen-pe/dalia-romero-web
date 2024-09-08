import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_B3VdOgnT.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Layout } from '../chunks/Layout_BfsRNMxS.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  function truncate(text, length) {
    return text.length > length ? text.substring(0, length) + "..." : text;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "data-astro-cid-ijnerlr2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="blog-page" data-astro-cid-ijnerlr2> <h1 data-astro-cid-ijnerlr2>Blog</h1> <div class="post-list" data-astro-cid-ijnerlr2> ${posts.map((post) => renderTemplate`<article class="post-item" data-astro-cid-ijnerlr2> ${post.data.image && renderTemplate`<img${addAttribute(post.data.image, "src")}${addAttribute(post.data.title, "alt")} data-astro-cid-ijnerlr2>`} <div class="post-content" data-astro-cid-ijnerlr2> <h2 data-astro-cid-ijnerlr2>${post.data.title}</h2> <p data-astro-cid-ijnerlr2>${truncate(post.data.description, 150)}</p> <div class="categories" data-astro-cid-ijnerlr2> ${post.data.categories.map((category) => renderTemplate`<span class="category" data-astro-cid-ijnerlr2>${category}</span>`)} </div> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-ijnerlr2>Leer artículo completo</a> </div> </article>`)} </div> </main> ` })} `;
}, "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/pages/blog.astro", void 0);

const $$file = "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
