import { useEffect, useState } from "react";

const About = () => {
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
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              About Stephen King
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The master storyteller behind some of literature's most enduring tales of horror and suspense
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Author Image */}
            <div className="text-center">
              <div className="inline-block overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/stephen-king-about.jpg"
                  alt="Stephen King Author Photo"
                  className="w-full max-w-lg h-[500px] transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Expanded Biography */}
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                Born on September 21, 1947, in Portland, Maine, Stephen Edwin King grew up in a modest 
                household. His father abandoned the family when Stephen was two, leaving his mother to 
                raise him and his older brother David. These early experiences of abandonment and 
                struggle would later influence many of his works.
              </p>

              <p>
                King's fascination with horror began early. As a child, he was captivated by monster 
                movies and EC Comics. He began writing stories in high school and continued throughout 
                his college years at the University of Maine, where he wrote for the school newspaper 
                and earned a Bachelor of Arts in English in 1970.
              </p>

              <p>
                His breakthrough came with "Carrie" in 1974, a novel he famously rescued from the trash 
                after initially discarding it. The book's success launched one of the most prolific and 
                successful writing careers in modern literature. What followed was an unprecedented 
                string of bestsellers that redefined popular fiction.
              </p>

              <p>
                Beyond his novels, King has been a vocal advocate for literacy, free speech, and 
                progressive causes. He established the Stephen and Tabitha King Foundation, which 
                supports numerous charitable causes, particularly in Maine. His influence extends 
                far beyond literature, having shaped popular culture through countless film and 
                television adaptations of his work.
              </p>

              <p>
                Today, King continues to write from his home in Maine, maintaining the same disciplined 
                approach to his craft that has made him one of the world's best-selling authors. His 
                daily writing routine and commitment to storytelling serve as inspiration to writers 
                and readers around the globe.
              </p>
            </div>
          </div>

          {/* Literary Achievements Section */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'fade-in-delay' : 'opacity-0'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
                Literary Achievements
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A career spanning over five decades of masterful storytelling
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          {/* Writing Philosophy */}
          <div className={`bg-card p-8 rounded-2xl shadow-sm border border-border transition-all duration-1000 delay-800 ${isVisible ? 'fade-in-delay' : 'opacity-0'}`}>
            <h2 className="text-3xl font-playfair font-bold text-primary mb-6 text-center">
              Writing Philosophy
            </h2>
            <blockquote className="text-xl text-center italic text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              "I try to create sympathy for my characters, then turn the monsters loose. 
              The best horror stories are about the human condition, about what it means to be human 
              in a world that sometimes doesn't make sense."
            </blockquote>
            <p className="text-center mt-4 text-primary font-inter font-medium">
              — Stephen King
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;