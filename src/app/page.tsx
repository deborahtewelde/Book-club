import CurrentBook from "./components/currentBook";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Velkommen til big books, big booties!
      </h1>
      <div className="text-2xl font-bold text-center mb-6">
        <h1>Månedens bøker</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <CurrentBook
          title="Naiv. Super."
          author="Erlend Loe"
          pubYear={1996}
          image="/naiv_super.jpg"
        />
        <CurrentBook
          title="Hvor er de voksne"
          author="Nina Lykke"
          pubYear={2025}
          image="/hvor_er_de_voksne_NL.jpg"
        />
        <CurrentBook
          title="An Amorous Discourse In Th Suburb Of Hell"
          author="Deborah Levy"
          pubYear={1990}
          image="/Deborah_Levy_Suburbs.png"
        />
      </div>
    </div>
  );
}
