import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageSquare, Users, TrendingUp, Clock, MapPin } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Community = () => {
  const discussions = [
    {
      id: 1,
      title: "Best practices for open licensing in academic textbooks",
      author: "Dr. Sarah Chen",
      institution: "MIT",
      replies: 23,
      views: 456,
      tags: ["Licensing", "Textbooks"],
      time: "2 hours ago"
    },
    {
      id: 2,
      title: "How to organize effective sprint sessions across time zones?",
      author: "Mike Johnson",
      institution: "Stanford",
      replies: 17,
      views: 234,
      tags: ["Sprints", "Collaboration"],
      time: "5 hours ago"
    },
    {
      id: 3,
      title: "Interactive content creation tools recommendations",
      author: "Elena Rodriguez",
      institution: "Oxford",
      replies: 31,
      views: 678,
      tags: ["Tools", "Interactive"],
      time: "1 day ago"
    },
  ];

  const upcomingSprints = [
    {
      id: 1,
      title: "Chemistry OER Development Sprint",
      host: "Dr. James Liu",
      date: "November 15, 2025",
      time: "14:00 UTC",
      participants: 12,
      maxParticipants: 20
    },
    {
      id: 2,
      title: "History Textbook Collaboration",
      host: "Prof. Maria Garcia",
      date: "November 18, 2025",
      time: "16:00 UTC",
      participants: 8,
      maxParticipants: 15
    },
  ];

  const featuredCollaborators = [
    { id: 1, name: "Dr. Sarah Chen", institution: "MIT", projects: 12, specialty: "Data Science" },
    { id: 2, name: "Prof. Mike Johnson", institution: "Stanford", projects: 8, specialty: "Education" },
    { id: 3, name: "Dr. Elena Rodriguez", institution: "Oxford", projects: 15, specialty: "Biology" },
    { id: 4, name: "Prof. James Liu", institution: "Berkeley", projects: 10, specialty: "Chemistry" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Community</h1>
          <p className="text-muted-foreground">Connect with educators and researchers worldwide</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Discussions */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Recent Discussions
                </h2>
                <Button variant="outline" size="sm">New Discussion</Button>
              </div>

              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <div 
                    key={discussion.id} 
                    className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold flex-1">{discussion.title}</h3>
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{discussion.author}</span>
                      <span>•</span>
                      <span>{discussion.institution}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {discussion.time}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {discussion.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {discussion.replies}
                        </span>
                        <span>{discussion.views} views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Sprints */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Sprints
                </h2>
                <Button variant="outline" size="sm">View Calendar</Button>
              </div>

              <div className="space-y-4">
                {upcomingSprints.map((sprint) => (
                  <div 
                    key={sprint.id}
                    className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="font-semibold mb-3">{sprint.title}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Hosted by {sprint.host}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{sprint.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{sprint.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{sprint.participants}/{sprint.maxParticipants} participants</span>
                      </div>
                    </div>

                    <Button className="w-full" size="sm">Join Sprint</Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Featured Collaborators */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Featured Collaborators
              </h2>
              
              <div className="space-y-4">
                {featuredCollaborators.map((collaborator) => (
                  <div key={collaborator.id} className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary shrink-0">
                      {collaborator.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{collaborator.name}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                        <MapPin className="h-3 w-3" />
                        {collaborator.institution}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <Badge variant="secondary">{collaborator.specialty}</Badge>
                        <span className="text-muted-foreground">{collaborator.projects} projects</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4" size="sm">
                View All Members
              </Button>
            </Card>

            {/* Community Stats */}
            <Card className="p-6 gradient-card">
              <h3 className="font-semibold mb-4">Community Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Active Members</span>
                    <span className="font-semibold">1,234</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Institutions</span>
                    <span className="font-semibold">103</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Resources Created</span>
                    <span className="font-semibold">2,456</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Community;