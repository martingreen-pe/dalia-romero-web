import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B3VdOgnT.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>e﻿ste es el cuerpo del post</p>";

				const frontmatter = {"title":"Mi segundo post","description":"Esta es una descripcion del segundo post","pubDate":"2024-09-06T03:55:41.022Z","image":"d6eeeaea73b640941153a59609452856.jpg","categories":["uñas","rusa"]};
				const file = "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/content/posts/06-09-2024-mi-segundo-post/index.md";
				const url = undefined;
				function rawContent() {
					return "e﻿ste es el cuerpo del post";
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
