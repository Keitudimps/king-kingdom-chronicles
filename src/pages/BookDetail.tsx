import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, BookOpen } from "lucide-react";

interface BookDetails {
  id: string;
  title: string;
  year: number;
  cover: string;
  synopsis: string;
  pages: number;
  genre: string[];
  amazonUrl: string;
  publisherUrl: string;
  series?: string;
  awards?: string[];
}

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mock book data - in a real app, this would come from an API
  const getBookDetails = (bookId: string): BookDetails | null => {
    const books: Record<string, BookDetails> = {
      "carrie": {
        id: "carrie",
        title: "Carrie",
        year: 1974,
        cover: "/book-carrie.jpg",
        synopsis: "Carrie White, a shy and friendless teenager, discovers she has telekinetic powers. When her classmates play a cruel prank on her at the senior prom, Carrie's suppressed rage is unleashed in a horrifying display of her supernatural abilities. King's debut novel explores themes of bullying, religious fanaticism, and the destructive power of adolescent cruelty. This groundbreaking work established King as a master of psychological horror and launched one of the most successful writing careers in modern literature.",
        pages: 199,
        genre: ["Horror", "Supernatural", "Coming-of-age"],
        amazonUrl: "https://amazon.com/carrie-stephen-king",
        publisherUrl: "https://doubleday.com/carrie",
        awards: ["Debut Novel of the Year"]
      },
      "the-shining": {
        id: "the-shining",
        title: "The Shining",
        year: 1977,
        cover: "/book-the-shining.jpg",
        synopsis: "Jack Torrance becomes the winter caretaker of the remote Overlook Hotel in Colorado, bringing along his wife Wendy and psychic son Danny. As the hotel becomes snowbound, Jack descends into madness, influenced by the hotel's dark history and supernatural forces. Danny's psychic abilities, called 'the shining,' reveal the hotel's terrifying secrets. This masterpiece of psychological horror examines isolation, domestic violence, and the thin line between sanity and madness.",
        pages: 447,
        genre: ["Horror", "Psychological Thriller", "Supernatural"],
        amazonUrl: "https://amazon.com/shining-stephen-king",
        publisherUrl: "https://doubleday.com/shining",
        awards: ["World Fantasy Award Nominee"]
      },
      "it": {
        id: "it",
        title: "It",
        year: 1986,
        cover: "/book-it.jpg",
        synopsis: "In the town of Derry, Maine, seven outcast kids known as 'The Losers Club' confront an evil entity that appears as a clown named Pennywise. The creature feeds on fear and has been terrorizing the town for centuries. Twenty-seven years later, the survivors must return to face IT once more. This epic horror novel weaves together themes of childhood trauma, friendship, and the power of memory. King's most ambitious work explores how the horrors of childhood shape us as adults.",
        pages: 1138,
        genre: ["Horror", "Coming-of-age", "Supernatural", "Epic"],
        amazonUrl: "https://amazon.com/it-stephen-king",
        publisherUrl: "https://viking.com/it",
        awards: ["British Fantasy Award", "World Fantasy Award Nominee"]
      }
    };

    return books[bookId] || null;
  };

  const book = id ? getBookDetails(id) : null;

  if (!book) {
    return (
      <main className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-playfair font-bold text-primary mb-4">
            Book Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            The book you're looking for doesn't exist in our collection.
          </p>
          <Link to="/books" className="btn-literary">
            Back to Books
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Back Button */}
          <Link
            to="/books"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-inter font-medium">Back to Books</span>
          </Link>

          {/* Book Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <div className="text-center lg:text-left">
              <div className="inline-block overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={book.cover}
                  alt={`${book.title} cover`}
                  className="w-full max-w-md h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Book Information */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-playfair font-bold text-primary mb-2">
                  {book.title}
                </h1>
                <div className="flex items-center space-x-6 text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span className="font-inter">{book.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen size={16} />
                    <span className="font-inter">{book.pages} pages</span>
                  </div>
                </div>
                
                {book.series && (
                  <p className="text-accent font-inter font-medium mb-4">
                    Part of: {book.series}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {book.genre.map((g) => (
                    <span
                      key={g}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-inter"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-playfair font-bold text-primary mb-4">
                  Synopsis
                </h2>
                <p className="text-lg text-foreground leading-relaxed">
                  {book.synopsis}
                </p>
              </div>

              {book.awards && book.awards.length > 0 && (
                <div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                    Awards & Recognition
                  </h3>
                  <ul className="space-y-2">
                    {book.awards.map((award, index) => (
                      <li key={index} className="text-foreground font-inter">
                        • {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Purchase Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-literary inline-flex items-center justify-center space-x-2"
                >
                  <span>Buy on Amazon</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href={book.publisherUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent inline-flex items-center justify-center space-x-2"
                >
                  <span>Publisher Store</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetail;