import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B3VdOgnT.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>e﻿l body del tercer post</p>";

				const frontmatter = {"title":"tercer post","description":"descripcion tercer post","pubDate":"2024-09-06T04:49:36.586Z","image":"d6eeeaea73b640941153a59609452856.jpg","categories":["uñas","manicura","rusa"]};
				const file = "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/content/posts/06-09-2024-tercer-post/index.md";
				const url = undefined;
				function rawContent() {
					return "e﻿l body del tercer post";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
