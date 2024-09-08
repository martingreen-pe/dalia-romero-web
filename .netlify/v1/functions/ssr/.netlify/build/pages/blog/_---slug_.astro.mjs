import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_B3VdOgnT.mjs';
import 'kleur/colors';
import { $ as $$Layout, g as getCollection } from '../../chunks/Layout_D08RaX8p.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  function getImageUrl(post2) {
    if (post2.data.image) {
      return `/content/posts/${post2.slug}/${post2.data.image}`;
    }
    return null;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="blog-post"> <h1>${post.data.title}</h1> <p class="date">${post.data.pubDate.toLocaleDateString()}</p> ${post.data.image && renderTemplate`<img${addAttribute(getImageUrl(post), "src")}${addAttribute(post.data.title, "alt")}>`} ${renderComponent($$result2, "Content", Content, {})} <div class="categories"> ${post.data.categories.map((category) => renderTemplate`<span class="category">${category}</span>`)} </div> </article> ` })}`;
}, "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
