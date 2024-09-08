import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_B3VdOgnT.mjs';
import 'kleur/colors';
import { $ as $$Layout, g as getCollection } from '../../chunks/Layout_BfsRNMxS.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("post");
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "data-astro-cid-7jjqptxk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="blog-post" data-astro-cid-7jjqptxk> <h1 data-astro-cid-7jjqptxk>${post.data.title}</h1> <p class="date" data-astro-cid-7jjqptxk>${post.data.pubDate.toLocaleDateString()}</p> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-7jjqptxk": true })} </article> ` })} `;
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
