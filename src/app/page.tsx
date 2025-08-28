import CurrentBook from "./components/currentBook";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Velkommen til big books, big booties!
      </h1>
      <div className="text-xl font-bold text-center">
        <h1>Månedens bøker</h1>
      </div>
      <div className="flex gap-8 justify-center">
        <CurrentBook
          title="Naiv. Super."
          author="Erlend Loe"
          pubYear={1996}
          image="/naiv_super.jpg"
        />
        <CurrentBook
          title="Naiv. Super."
          author="Erlend Loe"
          pubYear={1996}
          image="/naiv_super.jpg"
        />
        <CurrentBook
          title="Naiv. Super."
          author="Erlend Loe"
          pubYear={1996}
          image="/naiv_super.jpg"
        />
      </div>
    </div>
  );
}
