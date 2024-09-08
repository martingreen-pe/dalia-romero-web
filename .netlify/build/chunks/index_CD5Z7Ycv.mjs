import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B3VdOgnT.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"mi-primer-post\">Mi primer post</h1>\n<p>Este es el contenido de mi primer post en el blog…</p>";

				const frontmatter = {"title":"Mi primer post","description":"Esta es una descripción más larga de mi primer post en el blog. Puede tener varias oraciones para probar el truncado del texto.","pubDate":"2023-09-05T00:00:00.000Z","image":"/ruta/a/tu/imagen.jpg","categories":["Tecnología","Programación"]};
				const file = "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/content/posts/05-09-2024-miPrimerPost/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# Mi primer post\r\n\r\nEste es el contenido de mi primer post en el blog...";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"mi-primer-post","text":"Mi primer post"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
