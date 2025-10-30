import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CreateProject = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedLicense, setSelectedLicense] = useState("CC-BY");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const licenses = [
    { id: "CC-BY", name: "CC BY", description: "Attribution required" },
    { id: "CC-BY-SA", name: "CC BY-SA", description: "Attribution + ShareAlike" },
    { id: "CC-BY-NC", name: "CC BY-NC", description: "Attribution + Non-Commercial" },
    { id: "CC0", name: "CC0", description: "Public Domain" },
  ];

  const availableTags = [
    "Mathematics", "Science", "History", "Literature", "Programming",
    "Education", "Research", "Textbook", "Course Material", "Interactive"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Project Created!",
      description: "Your OER project has been created successfully.",
    });
    navigate("/dashboard");
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Create New Project</h1>
          <p className="text-muted-foreground">Start a new Open Educational Resource project</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="p-6 space-y-6">
            {/* Project Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Project Title *</Label>
              <Input 
                id="title"
                placeholder="e.g., Introduction to Machine Learning"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea 
                id="description"
                placeholder="Describe your project, its goals, and target audience..."
                className="min-h-[120px]"
                required
              />
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label>Subject Tags</Label>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* License Type */}
            <div className="space-y-3">
              <Label>License Type *</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {licenses.map((license) => (
                  <div
                    key={license.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedLicense === license.id
                        ? "border-primary bg-primary/5"
                        : "hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedLicense(license.id)}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-semibold">{license.name}</span>
                      {selectedLicense === license.id && (
                        <div className="h-2 w-2 bg-primary rounded-full" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{license.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaborators */}
            <div className="space-y-2">
              <Label htmlFor="collaborators">Invite Collaborators (Optional)</Label>
              <Input 
                id="collaborators"
                placeholder="Enter email addresses separated by commas"
              />
              <p className="text-xs text-muted-foreground">
                You can always invite more collaborators later
              </p>
            </div>

            {/* Expected Completion */}
            <div className="space-y-2">
              <Label htmlFor="deadline">Expected Completion Date</Label>
              <Input 
                id="deadline"
                type="date"
              />
            </div>

            {/* Sprint Schedule */}
            <div className="space-y-2">
              <Label>Schedule Initial Sprint (Optional)</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input type="date" placeholder="Sprint Date" />
                </div>
                <div>
                  <Input type="time" placeholder="Sprint Time" />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/dashboard")}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Create Project
              </Button>
            </div>
          </Card>
        </form>

        {/* Info Card */}
        <Card className="p-6 bg-primary-light border-primary/20">
          <h3 className="font-semibold mb-2">About Open Educational Resources</h3>
          <p className="text-sm text-muted-foreground mb-3">
            OER are teaching, learning, and research materials that are either in the public domain or 
            released under an open license that permits their free use and repurposing by others.
          </p>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">CC Licenses</Badge>
            <Badge variant="secondary">Free to Use</Badge>
            <Badge variant="secondary">Collaborative</Badge>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CreateProject;