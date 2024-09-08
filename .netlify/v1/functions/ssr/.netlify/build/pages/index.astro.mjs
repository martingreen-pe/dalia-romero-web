import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent } from '../chunks/astro/server_B3VdOgnT.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Layout } from '../chunks/Layout_BfsRNMxS.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="hero__content" data-astro-cid-bbe6dxrz> <h1 class="hero__title" data-astro-cid-bbe6dxrz>Transforma tu pasión en profesión</h1> <p class="hero__subtitle" data-astro-cid-bbe6dxrz>Descubre nuestros cursos de belleza y lleva tu carrera al siguiente nivel</p> <a href="#cursos" class="hero__cta" data-astro-cid-bbe6dxrz>Explora nuestros cursos</a> </div> <div class="hero__image" data-astro-cid-bbe6dxrz> <img src="/images/hero-uñas-acrilicas-optimizado.jpg" alt="Cursos de belleza" width="1920" height="1080" data-astro-cid-bbe6dxrz> </div> </section> `;
}, "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/components/Hero.astro", void 0);

const $$Cursos = createComponent(($$result, $$props, $$slots) => {
  const cursos = [
    {
      titulo: "Curso de Softgel",
      descripcion: "Domina la t\xE9cnica de u\xF1as softgel para resultados duraderos y naturales.",
      imagen: "/images/curso-soft-gel.png"
    },
    {
      titulo: "Curso de U\xF1as Acr\xEDlicas",
      descripcion: "Aprende a crear u\xF1as acr\xEDlicas perfectas con nuestro curso especializado.",
      imagen: "/images/curso-unas-acrilicas.png"
    },
    {
      titulo: "Curso de Manicura Rusa",
      descripcion: "Descubre los secretos de la manicura rusa y lleva tu t\xE9cnica al siguiente nivel.",
      imagen: "/images/curso-manicura-rusa.png"
    },
    {
      titulo: "Curso de PolyGel",
      descripcion: "Perfecciona tus habilidades en la aplicaci\xF3n de Polygel para u\xF1as naturales y elegantes.",
      imagen: "/images/curso-polygel.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="cursos" class="cursos" data-astro-cid-evdouzi7> <h2 class="cursos__title" data-astro-cid-evdouzi7>Nuestros Cursos</h2> <div class="cursos__grid" data-astro-cid-evdouzi7> ${cursos.map((curso) => renderTemplate`<div class="curso-card" data-astro-cid-evdouzi7> <img${addAttribute(curso.imagen, "src")}${addAttribute(curso.titulo, "alt")} class="curso-card__imagen" data-astro-cid-evdouzi7> <div class="curso-card__content" data-astro-cid-evdouzi7> <h3 class="curso-card__titulo" data-astro-cid-evdouzi7>${curso.titulo}</h3> <p class="curso-card__descripcion" data-astro-cid-evdouzi7>${curso.descripcion}</p> <a${addAttribute(`/curso/${curso.titulo.toLowerCase().replace(/ /g, "-")}`, "href")} class="curso-card__cta" data-astro-cid-evdouzi7>Más información</a> </div> </div>`)} </div> </section> `;
}, "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/components/Cursos.astro", void 0);

const $$SobreMi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="sobre-mi" data-astro-cid-ufbbhydc> <div class="sobre-mi__container" data-astro-cid-ufbbhydc> <img src="images/dalia-romero.png" alt="Dalia Romero" class="sobre-mi__imagen" data-astro-cid-ufbbhydc> <div class="sobre-mi__content" data-astro-cid-ufbbhydc> <h2 class="sobre-mi__titulo" data-astro-cid-ufbbhydc>Sobre Dalia Romero</h2> <p class="sobre-mi__texto" data-astro-cid-ufbbhydc>
Soy Dalia Romero, una apasionada profesional de la belleza con más de 10 años de experiencia en el campo de la manicura y el cuidado de uñas. Mi misión es compartir mis conocimientos y técnicas innovadoras con aquellos que desean destacar en esta industria en constante evolución.
</p> <p class="sobre-mi__texto" data-astro-cid-ufbbhydc>
A lo largo de mi carrera, he perfeccionado mis habilidades en técnicas como softgel, uñas acrílicas, manicura rusa y soft gel. Mi enfoque se centra en la precisión, la creatividad y el uso de productos de alta calidad para lograr resultados excepcionales.
</p> <p class="sobre-mi__texto" data-astro-cid-ufbbhydc>
Como instructora, mi objetivo es inspirar y capacitar a mis estudiantes para que alcancen su máximo potencial en el mundo de la belleza y el cuidado de uñas.
</p> </div> </div> </section> `;
}, "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/components/SobreMi.astro", void 0);

const $$Testimonios = createComponent(($$result, $$props, $$slots) => {
  const testimonios = [
    {
      nombre: "Mar\xEDa Gonz\xE1lez",
      curso: "Curso de Softgel",
      testimonio: "El curso de Dalia me ha dado la confianza y las habilidades que necesitaba para iniciar mi propio negocio de manicura. \xA1Altamente recomendado!"
    },
    {
      nombre: "Laura P\xE9rez",
      curso: "Curso de U\xF1as Acr\xEDlicas",
      testimonio: "La atenci\xF3n al detalle y la paciencia de Dalia como instructora son incomparables. He mejorado significativamente mis t\xE9cnicas gracias a su curso."
    },
    {
      nombre: "Ana Mart\xEDnez",
      curso: "Curso de Manicura Rusa",
      testimonio: "Aprender la t\xE9cnica de manicura rusa con Dalia ha sido una experiencia transformadora. Mis clientes est\xE1n encantados con los resultados."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="testimonios" data-astro-cid-2t7lomlc> <h2 class="testimonios__titulo" data-astro-cid-2t7lomlc>Lo que dicen nuestros estudiantes</h2> <div class="testimonios__grid" data-astro-cid-2t7lomlc> ${testimonios.map((testimonio) => renderTemplate`<div class="testimonio-card" data-astro-cid-2t7lomlc> <p class="testimonio-card__texto" data-astro-cid-2t7lomlc>"${testimonio.testimonio}"</p> <p class="testimonio-card__autor" data-astro-cid-2t7lomlc>${testimonio.nombre}</p> <p class="testimonio-card__curso" data-astro-cid-2t7lomlc>${testimonio.curso}</p> </div>`)} </div> </section> `;
}, "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/components/Testimonios.astro", void 0);

const $$ProcesoInscripcion = createComponent(($$result, $$props, $$slots) => {
  const pasos = [
    {
      numero: 1,
      titulo: "Elige tu curso",
      descripcion: "Explora nuestra variedad de cursos y selecciona el que mejor se adapte a tus objetivos profesionales."
    },
    {
      numero: 2,
      titulo: "Cont\xE1ctanos",
      descripcion: "Llena el formulario de contacto o env\xEDanos un mensaje por WhatsApp para obtener m\xE1s informaci\xF3n."
    },
    {
      numero: 3,
      titulo: "Reserva tu lugar",
      descripcion: "Realiza el pago de la matr\xEDcula para asegurar tu lugar en el curso seleccionado."
    },
    {
      numero: 4,
      titulo: "\xA1Comienza tu formaci\xF3n!",
      descripcion: "Asiste a las clases seg\xFAn el horario establecido y da el primer paso hacia tu nueva carrera en belleza."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="proceso-inscripcion" data-astro-cid-2rkvozhv> <h2 class="proceso-inscripcion__titulo" data-astro-cid-2rkvozhv>Proceso de Inscripción</h2> <div class="proceso-inscripcion__grid" data-astro-cid-2rkvozhv> ${pasos.map((paso) => renderTemplate`<div class="paso-card" data-astro-cid-2rkvozhv> <div class="paso-card__numero" data-astro-cid-2rkvozhv>${paso.numero}</div> <h3 class="paso-card__titulo" data-astro-cid-2rkvozhv>${paso.titulo}</h3> <p class="paso-card__descripcion" data-astro-cid-2rkvozhv>${paso.descripcion}</p> </div>`)} </div> </section> `;
}, "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/components/ProcesoInscripcion.astro", void 0);

const $$Galeria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/components/Galeria.astro", void 0);

const $$PreguntasFrecuentes = createComponent(($$result, $$props, $$slots) => {
  const preguntas = [
    {
      pregunta: "\xBFCu\xE1l es la duraci\xF3n de los cursos?",
      respuesta: "La duraci\xF3n de nuestros cursos var\xEDa seg\xFAn la t\xE9cnica. En general, los cursos tienen una duraci\xF3n de 4 a 8 semanas, con clases de 3 a 4 horas por sesi\xF3n."
    },
    {
      pregunta: "\xBFSe proporcionan los materiales necesarios?",
      respuesta: "S\xED, proporcionamos todos los materiales necesarios para la pr\xE1ctica durante el curso. Sin embargo, recomendamos que los estudiantes adquieran su propio kit de herramientas para usar despu\xE9s de la formaci\xF3n."
    },
    {
      pregunta: "\xBFOfrecen certificados al finalizar el curso?",
      respuesta: "S\xED, al completar satisfactoriamente el curso, se entrega un certificado que acredita las habilidades adquiridas."
    },
    {
      pregunta: "\xBFNecesito experiencia previa para tomar los cursos?",
      respuesta: "No se requiere experiencia previa. Nuestros cursos est\xE1n dise\xF1ados tanto para principiantes como para profesionales que desean mejorar sus habilidades."
    },
    {
      pregunta: "\xBFOfrecen opciones de pago a plazos?",
      respuesta: "S\xED, ofrecemos opciones de pago flexibles. Puedes consultar nuestros planes de pago al momento de la inscripci\xF3n."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="preguntas-frecuentes" data-astro-cid-f6nxdz2d> <h2 class="preguntas-frecuentes__titulo" data-astro-cid-f6nxdz2d>Preguntas Frecuentes</h2> <div class="preguntas-frecuentes__lista" data-astro-cid-f6nxdz2d> ${preguntas.map((item, index) => renderTemplate`<details class="pregunta-item" data-astro-cid-f6nxdz2d> <summary class="pregunta-item__pregunta" data-astro-cid-f6nxdz2d>${item.pregunta}</summary> <p class="pregunta-item__respuesta" data-astro-cid-f6nxdz2d>${item.respuesta}</p> </details>`)} </div> </section>  `;
}, "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/components/PreguntasFrecuentes.astro", void 0);

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="cta-whatsapp" data-astro-cid-c7edmhxs> <div class="cta-content" data-astro-cid-c7edmhxs> <h2 data-astro-cid-c7edmhxs>¿Listo para dar el siguiente paso?</h2> <p data-astro-cid-c7edmhxs>Conéctate con nosotros ahora y descubre cómo podemos ayudarte a alcanzar tus metas.</p> <a href="https://wa.me/TUNUMERODEWHATSAPP" class="cta-button" target="_blank" rel="noopener noreferrer" id="ctaButton" data-astro-cid-c7edmhxs>
Chatea con nosotros en WhatsApp
</a> </div> </section>  `;
}, "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/components/cta.astro", void 0);

const $$BlogComponent = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  function truncate(text, length) {
    return text.length > length ? text.substring(0, length) + "..." : text;
  }
  return renderTemplate`${maybeRenderHead()}<section class="blog-section" data-astro-cid-46m2uak2> <h2 data-astro-cid-46m2uak2>Últimas publicaciones</h2> <div class="post-grid" data-astro-cid-46m2uak2> ${posts.map((post) => renderTemplate`<article class="post-card" data-astro-cid-46m2uak2> ${post.data.image && renderTemplate`<img${addAttribute(post.data.image, "src")}${addAttribute(post.data.title, "alt")} data-astro-cid-46m2uak2>`} <div class="post-content" data-astro-cid-46m2uak2> <h3 data-astro-cid-46m2uak2>${post.data.title}</h3> <p data-astro-cid-46m2uak2>${truncate(post.data.description, 100)}</p> <div class="categories" data-astro-cid-46m2uak2> ${post.data.categories.map((category) => renderTemplate`<span class="category" data-astro-cid-46m2uak2>${category}</span>`)} </div> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-46m2uak2>Leer más</a> </div> </article>`)} </div> </section> `;
}, "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/components/BlogComponent.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dalia Romero - Cursos de Belleza", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Cursos", $$Cursos, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "SobreMi", $$SobreMi, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Testimonios", $$Testimonios, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CTA", $$Cta, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ProcesoInscripcion", $$ProcesoInscripcion, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Galeria", $$Galeria, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "PreguntasFrecuentes", $$PreguntasFrecuentes, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "BlogComponent", $$BlogComponent, { "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/marti/Documents/AstroJS/dalia-romero-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
