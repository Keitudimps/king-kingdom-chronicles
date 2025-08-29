import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const achievements = [
    "Over 350 million books sold worldwide",
    "Master of Horror, Suspense, and Supernatural Fiction",
    "Author of 65+ novels and 200+ short stories",
    "Recipient of the 2003 National Book Foundation Medal",
    "Bram Stoker Award Winner (Multiple Times)",
    "World Fantasy Award for Life Achievement",
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-6">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Author Portrait - Temporarily simplified */}
            <div className="text-center lg:text-left">
              <div className="inline-block overflow-hidden rounded-2xl shadow-2xl w-full max-w-md h-[500px]">
  <img 
    src="/stephen-king-portrait.jpg"   // <-- your image path
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

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-delay' : 'opacity-0'}`}>
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Literary Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A career spanning over five decades of masterful storytelling
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-delay' : 'opacity-0'}`}>
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300"
              >
                <p className="text-foreground font-inter font-medium text-center">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;