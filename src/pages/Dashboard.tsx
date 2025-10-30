import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Video, Upload, FileText, TrendingUp, Clock, Users } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const activeProjects = [
    { id: 1, title: "Introduction to Digital Learning", progress: 65, deadline: "2025-11-15", collaborators: 5 },
    { id: 2, title: "Open Science Textbook", progress: 40, deadline: "2025-11-30", collaborators: 8 },
    { id: 3, title: "Research Methods Course", progress: 85, deadline: "2025-11-10", collaborators: 3 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">Here's what's happening with your projects today.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/sprint-hub">
            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer gradient-card">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-light rounded-lg">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Quick Action</p>
                  <p className="font-semibold">Start Video Call</p>
                </div>
              </div>
            </Card>
          </Link>

          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer gradient-card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary-light rounded-lg">
                <Upload className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Quick Action</p>
                <p className="font-semibold">Upload Resource</p>
              </div>
            </div>
          </Card>

          <Link to="/create-project">
            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer gradient-card">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <FileText className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Quick Action</p>
                  <p className="font-semibold">Create Chapter</p>
                </div>
              </div>
            </Card>
          </Link>

          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer gradient-card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-light rounded-lg">
                <Plus className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Quick Action</p>
                <p className="font-semibold">New Project</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 gradient-card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Active Projects</h3>
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <p className="text-3xl font-bold">3</p>
            <p className="text-xs text-muted-foreground mt-1">+1 from last month</p>
          </Card>

          <Card className="p-6 gradient-card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Sprint Hours</h3>
              <Clock className="h-4 w-4 text-secondary" />
            </div>
            <p className="text-3xl font-bold">24.5</p>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </Card>

          <Card className="p-6 gradient-card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Collaborators</h3>
              <Users className="h-4 w-4 text-accent" />
            </div>
            <p className="text-3xl font-bold">16</p>
            <p className="text-xs text-muted-foreground mt-1">Across all projects</p>
          </Card>
        </div>

        {/* Active Projects */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Active Projects</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>

          <div className="space-y-4">
            {activeProjects.map((project) => (
              <div key={project.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold mb-1">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Due {new Date(project.deadline).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {project.collaborators} collaborators
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Open</Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;