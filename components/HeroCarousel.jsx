import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    type: "Contratando",
    tag: "Lisboa",
    title: "Estamos a recrutar no Manga Rosa!",
    subtitle: "Se és daquelas pessoas felizes, cheias de energia, com espírito brasileiro e sorriso no rosto… a gente já quer te conhecer 😄✨ Vagas para cozinha, bar e sala.",
    image: "/images/cards/mangarosa.png", 
    linkreservar: "https://www.instagram.com/p/DUS9aWEiD-F/?img_index=1",
    linkexplorar: "https://www.instagram.com/mangarosalx/",
 
},
  {
    type: "Gastronomia",
    tag: "Destaque",
    title: "Feijoada brasileira",
    subtitle: "Almoço de fim de semana, Capim Dourado - Porto e Braga.",
    image: "/images/cards/feijao.png",
    linkreservar: "https://linktr.ee/capimdourado.pt",
    linkexplorar: "https://drive.google.com/file/d/11Cu9lJmOJd1j1sR7g311R6PeY5MtDfHZ/view",
  },
  {
    type: "Gastronomia",
    tag: "Destaque",
    title: "Açaí Pará",
    subtitle: "Especialidade em comida típica do Pará.",
    image: "/images/cards/acai.png",
    linkreservar: "https://www.instagram.com/restaurante_acai_para/",
    linkexplorar: "https://www.instagram.com/restaurante_acai_para/",
  },
];

function SlideCard({ item }) {
  return (
    <div className="h-full overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
      {/* IMAGEM padronizada */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {/* overlay suave para contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

        {/* tags no topo */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-green shadow-sm">
            {item.type}
          </span>
          <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-white font-semibold shadow-sm">
            {item.tag}
          </span>
        </div>
      </div>
      {/* CONTEÚDO */}
      <div className="p-6">
        <h3 className="text-xl font-extrabold leading-tight text-brand-green">
          {item.title}
        </h3>

        <p className="mt-2 text-sm text-black/70">{item.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={item.linkreservar}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-green px-5 py-2.5 text-sm font-semibold text-brand-yellow hover:opacity-90"
          >
            Contacto
          </a>
          <a
            href={item.linkexplorar}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-brand-green/15 text-brand-green bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-black/5"
          >
            Explorar
          </a>
        </div>
      </div>
    </div>
  );
}
            
export default function HeroCarousel() {
  return (
    <div className="dobrasil-swiper group cursor-grab active:cursor-grabbing">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{ 900: { slidesPerView: 2 } }}
        navigation
        pagination={{ clickable: true }}
        loop
        grabCursor
        // autoplay é opcional — se não quiser, pode remover estas 2 linhas:
        autoplay={{ delay: 3500, disableOnInteraction: true }}
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx} className="h-auto">
            <SlideCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper> 
      

    </div>
  );
}