import HeroCarousel from "@/components/HeroCarousel";
import ListingCard from "@/components/ListingCard";
import items from "../data/items.json";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [local, setLocal] = useState("");
  const [categoria, setCategoria] = useState("");

  // paginação
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);

  // --- helpers ---
  const normalize = (str) =>
    (str || "")
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  // --- responsivo: define quantos cards por página ---
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) return 4; // mobile
      if (w < 1024) return 6; // tablet
      return 9; // desktop
    };

    const update = () => setPerPage(compute());
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // --- filtros (memo pra performance) ---
  const filteredItems = useMemo(() => {
    const s = normalize(search);

    return items.filter((item) => {
      const searchMatch =
        normalize(item.nome).includes(s) ||
        normalize(item.descricao).includes(s) ||
        normalize(item.endereco).includes(s);

      const localMatch = local ? normalize(item.local) === normalize(local) : true;
      const categoriaMatch = categoria
        ? normalize(item.categoria) === normalize(categoria)
        : true;

      return searchMatch && localMatch && categoriaMatch;
    });
  }, [search, local, categoria]);

  // quando filtros mudam, volta pra página 1
  useEffect(() => {
    setPage(1);
  }, [search, local, categoria]);

  // --- paginação em si ---
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / perPage));

  // garante que page nunca fica inválida quando perPage muda
  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const start = (page - 1) * perPage;
  const paginatedItems = filteredItems.slice(start, start + perPage);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <>
      {/* HERO */}
      <section className="bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          {/* TEXTO */}
          <div>
            <p className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70">
              Curadoria do melhor do Brasil
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-brand-green md:text-5xl">
              Produtos, culinária e experiências do Brasil em Portugal — em um só
              lugar.
            </h1>

            <p className="mt-4 max-w-xl text-lg text-black/70">
              Explore destaques selecionados, descubra sabores e viva
              experiências. Saber onde matar a saudade de casa nunca foi tão
              simples.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#ofertas"
                className="rounded-2xl bg-brand-yellow text-brand-green hover:bg-yellow-400 px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Ver ofertas
              </a>

              <a
                href="mailto:kakacordovil@gmail.com?subject=Quero%20anunciar&body=Ol%C3%A1%2C%0A%0AQuero%20mais%20informa%C3%A7%C3%B5es%20sobre%20an%C3%BAncio%2C%20por%20favor.%0A%0AObrigado"
                className="rounded-2xl border  border-brand-green/30 text-brand-green hover:bg-brand-greenSoft px-6 py-3 text-sm font-semibold text-black"
              >
                Quero anunciar
              </a>
            </div>

            <div className="mt-6 flex gap-6 text-sm text-black/70">
              <div>
                <span className="font-bold text-brand-green">+120</span> itens
              </div>
              <div>
                <span className="font-bold text-brand-green">5,0★</span> os melhores
              </div>
              <div>
                <span className="font-bold text-brand-green">Encontre</span> fácil
              </div>
            </div>
          </div>

          {/* CARROSSEL */}
          <div className="rounded-[28px] border border-brand-green/10 text-brand-green bg-white p-4 shadow-sm">
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section id="ofertas" className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-green">
                Descubra por cidade
              </h2>
              <p className="mt-2 max-w-2xl text-black/70">
                Curadoria de experiências, gastronomia, eventos e produtos do
                Brasil em Portugal.
              </p>
            </div>

            {/* FILTRO */}
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {/* Busca */}
              <input
                type="text"
                placeholder="Pesquisar por nome, descrição ou endereço…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-brand-green/20 px-4 py-2.5 text-sm outline-none focus:border-brand-green/30"
              />

              {/* Filtro por local */}
              <select
                value={local}
                onChange={(e) => setLocal(e.target.value)}
                className="w-full rounded-xl border border-brand-green/20 bg-white px-4 py-2.5 text-sm"
              >
                <option value="">Todos os locais</option>
                <option value="Porto">Porto</option>
                <option value="Braga">Braga</option>
                <option value="Lisboa">Lisboa</option>
                <option value="Santa Maria da Feira">
                  Santa Maria da Feira
                </option>
              </select>

              {/* Filtro por categoria */}
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full rounded-xl border border-brand-green/20 bg-white px-4 py-2.5 text-sm"
              >
                <option value="">Todas as categorias</option>
                <option value="experiencia">Experiência</option>
                <option value="gastronomia">Gastronomia</option>
                <option value="eventos">Eventos</option>
                <option value="produto">Produtos</option>
                <option value="culinária">Culinária</option>
                <option value="comida">Comida</option>
                <option value="oficina">Oficina</option>
              </select>
            </div>
          </div>

          {/* contador + paginação topo */}
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-black/60">
              {filteredItems.length} resultado(s) — mostrando{" "}
              {paginatedItems.length} por página
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={!canPrev}
                className="rounded-xl border border-brand-green text-brand-green hover:bg-brand-greenSoft bg-white px-4 py-2 text-sm font-semibold text-black disabled:opacity-40"
              >
                Anterior
              </button>

              <span className="text-sm text-black/60">
                Página <span className="font-semibold text-brand-green">{page}</span>{" "}
                de{" "}
                <span className="font-semibold text-brand-green">{totalPages}</span>
              </span>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={!canNext}
                className="rounded-xl bg-brand-yellow text-brand-green hover:bg-yellow-400 px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
              >
                Próximo
              </button>
            </div>
          </div>

          {/* GRID */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedItems.map((item) => (
              <ListingCard key={item.id} item={item} />
            ))}

            {filteredItems.length === 0 && (
              <p className="col-span-full text-center text-sm text-black/50">
                Nenhum resultado encontrado.
              </p>
            )}
          </div>

          {/* paginação em baixo (melhor UX quando a lista é longa) */}
          {filteredItems.length > 0 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={!canPrev}
                className="rounded-xl border border-brand-green text-brand-green hover:bg-brand-greenSoft bg-white px-4 py-2 text-sm font-semibold text-black disabled:opacity-40"
              >
                Anterior
              </button>

              <span className="text-sm text-black/60">
                Página <span className="font-semibold text-brand-green">{page}</span>{" "}
                de{" "}
                <span className="font-semibold text-brand-green">{totalPages}</span>
              </span>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={!canNext}
                className="rounded-xl bg-brand-yellow text-brand-green hover:bg-yellow-400 px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
              >
                Próximo
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SEÇÃO BENEFÍCIOS */}
      <section id="beneficios" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-extrabold text-brand-green">Por que anunciar no DoBrasil?</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Curadoria em nincho",
              d: "Seu negócio para quem realmente procura.",
            },
            {
              t: "Rápido no mobile",
              d: "Experiência rápida e intuitiva..",
            },
            {
              t: "Pronto para SEO",
              d: "Encontrado mais fácil no Google.",
            },
          ].map((b) => (
            <div
              key={b.t}
              className="rounded-3xl border text-brand-green/10 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-brand-green">{b.t}</h3>
              <p className="mt-2 text-brand-green/70">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
