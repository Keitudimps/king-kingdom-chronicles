import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
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

          {/* Writing Philosophy */}
          <div className="mt-20 bg-card p-8 rounded-2xl shadow-sm border border-border">
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