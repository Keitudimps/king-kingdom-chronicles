import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-6xl font-playfair font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          The page you're looking for has vanished like a character from one of my stories.
        </p>
        <a 
          href="/" 
          className="btn-literary inline-flex items-center"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
