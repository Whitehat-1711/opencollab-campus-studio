import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, Share2, Eye } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import textbookImg from "@/assets/resource-textbook.jpg";
import videoImg from "@/assets/resource-video.jpg";
import interactiveImg from "@/assets/resource-interactive.jpg";

const Library = () => {
  const resources = [
    {
      id: 1,
      title: "Introduction to Data Science",
      type: "Textbook",
      license: "CC-BY",
      institution: "MIT OpenCourseWare",
      downloads: 1234,
      image: textbookImg,
      tags: ["Data Science", "Statistics", "Python"]
    },
    {
      id: 2,
      title: "Effective Teaching Methods",
      type: "Video Series",
      license: "CC-BY-SA",
      institution: "Stanford University",
      downloads: 856,
      image: videoImg,
      tags: ["Education", "Pedagogy", "Teaching"]
    },
    {
      id: 3,
      title: "Interactive Biology Lab",
      type: "Interactive",
      license: "CC-BY",
      institution: "Khan Academy",
      downloads: 2341,
      image: interactiveImg,
      tags: ["Biology", "Science", "Interactive"]
    },
    {
      id: 4,
      title: "Modern Web Development",
      type: "Textbook",
      license: "CC-BY-SA",
      institution: "freeCodeCamp",
      downloads: 3421,
      image: textbookImg,
      tags: ["Programming", "Web Dev", "JavaScript"]
    },
    {
      id: 5,
      title: "Climate Change: The Facts",
      type: "Video Series",
      license: "CC-BY",
      institution: "Open University",
      downloads: 1789,
      image: videoImg,
      tags: ["Environment", "Science", "Climate"]
    },
    {
      id: 6,
      title: "Mathematics for Engineers",
      type: "Interactive",
      license: "CC-BY-SA",
      institution: "TU Delft",
      downloads: 945,
      image: interactiveImg,
      tags: ["Mathematics", "Engineering", "Calculus"]
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">OER Library</h1>
          <p className="text-muted-foreground">Discover and share openly licensed educational resources</p>
        </div>

        {/* Search and Filters */}
        <Card className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search resources by title, subject, or institution..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary" className="cursor-pointer">All Resources</Badge>
            <Badge variant="outline" className="cursor-pointer">Textbooks</Badge>
            <Badge variant="outline" className="cursor-pointer">Videos</Badge>
            <Badge variant="outline" className="cursor-pointer">Interactive</Badge>
            <Badge variant="outline" className="cursor-pointer">CC-BY</Badge>
            <Badge variant="outline" className="cursor-pointer">CC-BY-SA</Badge>
          </div>
        </Card>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-shadow gradient-card">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-background/90 text-foreground">{resource.type}</Badge>
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold mb-1">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.institution}</p>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <Badge variant="outline">{resource.license}</Badge>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Download className="h-3 w-3" />
                    {resource.downloads.toLocaleString()}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {resource.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-3 w-3 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center pt-4">
          <Button variant="outline">Load More Resources</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Library;