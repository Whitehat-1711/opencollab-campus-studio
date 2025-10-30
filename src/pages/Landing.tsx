import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Video, Share2, Calendar, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-collaboration.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Collaborate. Create. Share. <span className="text-primary">Together.</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Empowering educators to co-create open educational resources through seamless communication and agile collaboration.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/create-project">
                  <Button variant="hero" size="lg">
                    Start a Sprint
                  </Button>
                </Link>
                <Link to="/community">
                  <Button variant="outline" size="lg">
                    Join Community
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Diverse educators collaborating on video call" 
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Collaborative Learning</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, manage, and share open educational resources with teams across institutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 gradient-card hover:shadow-lg transition-shadow">
              <Video className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Collaboration</h3>
              <p className="text-muted-foreground">
                Video calls, screen sharing, and live editing in one seamless workspace.
              </p>
            </Card>
            
            <Card className="p-6 gradient-card hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">OER Library</h3>
              <p className="text-muted-foreground">
                Access and share thousands of openly licensed educational resources.
              </p>
            </Card>
            
            <Card className="p-6 gradient-card hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">
                Connect with educators and researchers from institutions worldwide.
              </p>
            </Card>
            
            <Card className="p-6 gradient-card hover:shadow-lg transition-shadow">
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sprint Management</h3>
              <p className="text-muted-foreground">
                Organize collaborative sessions and track project progress efficiently.
              </p>
            </Card>
            
            <Card className="p-6 gradient-card hover:shadow-lg transition-shadow">
              <Share2 className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Sharing</h3>
              <p className="text-muted-foreground">
                Share resources instantly with proper attribution and licensing.
              </p>
            </Card>
            
            <Card className="p-6 gradient-card hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Open Standards</h3>
              <p className="text-muted-foreground">
                All resources follow Creative Commons licensing for maximum accessibility.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Collaborating?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join educators and researchers from over 100 institutions creating the future of open education.
          </p>
          <Link to="/dashboard">
            <Button variant="hero" size="lg">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;