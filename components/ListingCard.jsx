export default function ListingCard({ item }) {
  const categoryLabel = {
    experiencia: "Experiência",
    gastronomia: "Gastronomia",
    eventos: "Eventos & Festas",
    produtos: "Produtos",
  }[item.categoria] || item.categoria;

  return (
    <article className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:shadow-md">
      {/* Imagem */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
        <img
          src={item.imagem}
          alt={item.nome}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {/* Tags */}
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-sm">
            {item.local}
          </span>
          <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-white font-semibold shadow-sm">
            {categoryLabel}
        </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-5">
        <h3 className="text-lg font-extrabold text-black">{item.nome}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-black/70">{item.descricao}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <a
            href={item.contacto}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Contacto
          </a>

          <a
            href={item.redeSocial}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-black/5"
          >
            Rede social
          </a>

          <span className="ml-auto text-xs text-black/55">{item.endereco}</span>
        </div>
      </div>
    </article>
  );
}
