import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const books = [
    { id: "carrie", title: "Carrie", year: 1974, cover: "/book-carrie.jpg", featured: true },
    { id: "salems-lot", title: "'Salem's Lot", year: 1975, cover: "/book-salems-lot.jpg" },
    { id: "the-shining", title: "The Shining", year: 1977, cover: "/book-the-shining.jpg" },
    { id: "the-stand", title: "The Stand", year: 1978, cover: "/book-the-stand.jpg" },
    { id: "the-dead-zone", title: "The Dead Zone", year: 1979, cover: "/book-the-dead-zone.jpg" },
    { id: "firestarter", title: "Firestarter", year: 1980, cover: "/book-firestarter.jpg" },
    { id: "cujo", title: "Cujo", year: 1981, cover: "/book-cujo.jpg" },
    { id: "the-dark-tower", title: "The Dark Tower: The Gunslinger", year: 1982, cover: "/book-dark-tower-1.jpg", series: "The Dark Tower" },
    { id: "christine", title: "Christine", year: 1983, cover: "/book-christine.jpg" },
    { id: "pet-sematary", title: "Pet Sematary", year: 1983, cover: "/book-pet-sematary.jpg" },
    { id: "the-talisman", title: "The Talisman", year: 1984, cover: "/book-the-talisman.jpg" },
    { id: "it", title: "It", year: 1986, cover: "/book-it.jpg" },
    { id: "misery", title: "Misery", year: 1987, cover: "/book-misery.jpg" },
    { id: "the-tommyknockers", title: "The Tommyknockers", year: 1987, cover: "/book-tommyknockers.jpg" },
    { id: "the-dark-half", title: "The Dark Half", year: 1989, cover: "/book-the-dark-half.jpg" },
    { id: "needful-things", title: "Needful Things", year: 1991, cover: "/book-needful-things.jpg" },
    { id: "geralds-game", title: "Gerald's Game", year: 1992, cover: "/book-geralds-game.jpg" },
    { id: "dolores-claiborne", title: "Dolores Claiborne", year: 1992, cover: "/book-dolores-claiborne.jpg" },
    { id: "insomnia", title: "Insomnia", year: 1994, cover: "/book-insomnia.jpg" },
    { id: "rose-madder", title: "Rose Madder", year: 1995, cover: "/book-rose-madder.jpg" },
    { id: "the-green-mile", title: "The Green Mile", year: 1996, cover: "/book-the-green-mile.jpg" },
    { id: "desperation", title: "Desperation", year: 1996, cover: "/book-desperation.jpg" },
    { id: "bag-of-bones", title: "Bag of Bones", year: 1998, cover: "/book-bag-of-bones.jpg" },
    { id: "the-girl-who-loved-tom-gordon", title: "The Girl Who Loved Tom Gordon", year: 1999, cover: "/book-girl-tom-gordon.jpg" },
    { id: "hearts-in-atlantis", title: "Hearts in Atlantis", year: 1999, cover: "/book-hearts-atlantis.jpg" },
    { id: "dreamcatcher", title: "Dreamcatcher", year: 2001, cover: "/book-dreamcatcher.jpg" },
    { id: "from-a-buick-8", title: "From a Buick 8", year: 2002, cover: "/book-from-buick-8.jpg" },
    { id: "cell", title: "Cell", year: 2006, cover: "/book-cell.jpg" },
    { id: "lisey-story", title: "Lisey's Story", year: 2006, cover: "/book-liseys-story.jpg" },
    { id: "duma-key", title: "Duma Key", year: 2008, cover: "/book-duma-key.jpg" },
    { id: "under-the-dome", title: "Under the Dome", year: 2009, cover: "/book-under-the-dome.jpg" },
    { id: "11-22-63", title: "11/22/63", year: 2011, cover: "/book-11-22-63.jpg" },
    { id: "joyland", title: "Joyland", year: 2013, cover: "/book-joyland.jpg" },
    { id: "doctor-sleep", title: "Doctor Sleep", year: 2013, cover: "/book-doctor-sleep.jpg" },
    { id: "mr-mercedes", title: "Mr. Mercedes", year: 2014, cover: "/book-mr-mercedes.jpg" },
    { id: "revival", title: "Revival", year: 2014, cover: "/book-revival.jpg" },
    { id: "finders-keepers", title: "Finders Keepers", year: 2015, cover: "/book-finders-keepers.jpg" },
    { id: "end-of-watch", title: "End of Watch", year: 2016, cover: "/book-end-of-watch.jpg" },
    { id: "the-outsider", title: "The Outsider", year: 2018, cover: "/book-the-outsider.jpg" },
    { id: "the-institute", title: "The Institute", year: 2019, cover: "/book-the-institute.jpg" },
    { id: "if-it-bleeds", title: "If It Bleeds", year: 2020, cover: "/book-if-it-bleeds.jpg" },
    { id: "billy-summers", title: "Billy Summers", year: 2021, cover: "/book-billy-summers.jpg" },
    { id: "fairy-tale", title: "Fairy Tale", year: 2022, cover: "/book-fairy-tale.jpg" },
    { id: "holly", title: "Holly", year: 2023, cover: "/book-holly.jpg" },
    { id: "you-like-it-darker", title: "You Like It Darker", year: 2024, cover: "/book-you-like-it-darker.jpg" },
  ];

  const booksPerPage = 4;
  const maxIndex = Math.max(0, books.length - booksPerPage);

  const goToNext = () => {
    setCurrentBookIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const goToPrev = () => {
    setCurrentBookIndex(prev => Math.max(prev - 1, 0));
  };

  const visibleBooks = books.slice(currentBookIndex, currentBookIndex + booksPerPage);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-6">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Author Portrait */}
            <div className="text-center lg:text-left">
              <div className="inline-block overflow-hidden rounded-2xl shadow-2xl w-full max-w-md h-[500px]">
                <img 
                  src="/stephen-king-portrait.jpg"
                  alt="Stephen King Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-primary leading-tight">
                Stephen King
              </h1>
              <p className="text-xl font-playfair italic text-muted-foreground">
                Master of Horror & Suspense
              </p>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>
                  Stephen Edwin King is an American author known for his horror, supernatural fiction, 
                  suspense, crime, science-fiction, and fantasy novels. Described as the "King of Horror," 
                  a play on his surname and a reference to his high standing in pop culture.
                </p>
                <p>
                  His books have sold more than 350 million copies, and many have been adapted into 
                  feature films, television movies, and comic books. King has published 65 novels, 
                  including seven under the pen name Richard Bachman, and five non-fiction books.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  to="/books" 
                  className="btn-literary inline-flex items-center"
                >
                  Explore My Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Carousel Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-delay' : 'opacity-0'}`}>
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
             Books
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the novels that have captivated readers worldwide
            </p>
          </div>

          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-delay' : 'opacity-0'}`}>
            {/* Counter */}
            <div className="text-center mb-8">
              <span className="text-sm text-muted-foreground">
                {currentBookIndex + 1} - {Math.min(currentBookIndex + booksPerPage, books.length)} of {books.length}
              </span>
            </div>

            {/* Books Grid with Side Navigation */}
            <div className="flex items-center gap-6 mb-8">
              {/* Left Arrow */}
              <button
                onClick={goToPrev}
                disabled={currentBookIndex === 0}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>

              {/* Books Grid */}
              <div className="grid grid-cols-4 gap-4 flex-1">
                {visibleBooks.map((book) => (
                  <Link
                    key={book.id}
                    to={`/books/${book.id}`}
                    className="book-card bg-card rounded-lg p-3 transition-all duration-300 hover:shadow-lg border border-border"
                  >
                    <div className="aspect-[2/3] mb-3 overflow-hidden rounded-md">
                      <img
                        src={book.cover}
                        alt={`${book.title} cover`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-playfair font-semibold text-foreground mb-1 text-sm line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-muted-foreground font-inter text-xs">
                        {book.year}
                      </p>
                      {book.series && (
                        <p className="text-accent font-inter text-xs mt-1">
                          {book.series}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={goToNext}
                disabled={currentBookIndex >= maxIndex}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            </div>

            {/* View All Books Link */}
            <div className="text-center">
              <Link 
                to="/books" 
                className="btn-literary inline-flex items-center"
              >
                View All Books
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;