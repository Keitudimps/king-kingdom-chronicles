import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

interface Book {
  id: string;
  title: string;
  year: number;
  cover: string;
  featured?: boolean;
  series?: string;
}

const Books = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDecade, setSelectedDecade] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const books: Book[] = [
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

  // Get unique decades from books
  const decades = [...new Set(books.map(book => Math.floor(book.year / 10) * 10))].sort();

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDecade = selectedDecade === "all" || Math.floor(book.year / 10) * 10 === parseInt(selectedDecade);
    return matchesSearch && matchesDecade;
  });

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              Complete Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              Explore the complete bibliography of Stephen King's novels, spanning over five decades of masterful storytelling
            </p>

            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-2xl mx-auto mb-6">
              <input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-border rounded-xl px-4 py-2 w-full sm:max-w-md text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
              
              <select
                value={selectedDecade}
                onChange={(e) => setSelectedDecade(e.target.value)}
                className="border border-border rounded-xl px-4 py-2 w-full sm:w-auto text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent bg-background"
              >
                <option value="all">All Years</option>
                {decades.map(decade => (
                  <option key={decade} value={decade}>
                    {decade}s
                  </option>
                ))}
              </select>
            </div>

            {/* Results count */}
            {(searchTerm || selectedDecade !== "all") && (
              <p className="text-center text-muted-foreground text-sm mb-6">
                Showing {filteredBooks.length} of {books.length} books
              </p>
            )}
          </div>

          {/* Books Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {filteredBooks.map((book, index) => (
              <Link
                key={book.id}
                to={`/books/${book.id}`}
                className={`book-card bg-card rounded-xl p-4 transition-all duration-300 ${
                  book.featured ? 'featured-book' : ''
                } ${index % 2 === 0 ? 'fade-in' : 'fade-in-delay'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[2/3] mb-4 overflow-hidden rounded-lg">
                  <img
                    src={book.cover}
                    alt={`${book.title} cover`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-playfair font-semibold text-foreground mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-muted-foreground font-inter text-sm">
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

          {/* No results message */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No books found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Books;