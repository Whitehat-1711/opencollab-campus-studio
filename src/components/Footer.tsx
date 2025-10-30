import { BookOpen, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-semibold text-lg">OpenCollab</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Building Knowledge, Together.
            </p>
            <p className="text-xs text-muted-foreground">
              Empowering educators to co-create open educational resources through seamless communication and agile collaboration.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-sm">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
              <li><a href="/sprint-hub" className="hover:text-primary transition-colors">Sprint Hub</a></li>
              <li><a href="/library" className="hover:text-primary transition-colors">OER Library</a></li>
              <li><a href="/community" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Licensing Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-accent" />
            <span>for educators worldwide</span>
          </div>
          <div className="flex items-center gap-6">
            <span>© 2025 OpenCollab</span>
            <span className="text-xs">All OER resources are licensed under Creative Commons</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;