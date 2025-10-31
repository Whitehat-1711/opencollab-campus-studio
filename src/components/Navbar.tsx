import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
          <img src={logoImage} alt="MeshConnect Logo" className="h-6 w-6" />
          <span>MeshConnect</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/library" className="text-sm font-medium hover:text-primary transition-colors">
            OER Library
          </Link>
          <Link to="/community" className="text-sm font-medium hover:text-primary transition-colors">
            Community
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;