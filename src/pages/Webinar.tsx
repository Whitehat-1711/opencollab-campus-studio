import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, Users, Video, Play, ExternalLink, BookOpen } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DashboardLayout from "@/components/DashboardLayout";

const Webinar = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const upcomingWebinars = [
    {
      id: 1,
      title: "Introduction to Open Educational Resources",
      presenter: "Dr. Sarah Chen",
      institution: "MIT",
      date: "November 20, 2025",
      time: "14:00 UTC",
      duration: "60 minutes",
      attendees: 234,
      maxAttendees: 500,
      category: "Education",
      description: "Learn the fundamentals of OER creation, licensing, and best practices for educators."
    },
    {
      id: 2,
      title: "Building Collaborative OER Projects",
      presenter: "Prof. Mike Johnson",
      institution: "Stanford University",
      date: "November 25, 2025",
      time: "16:00 UTC",
      duration: "90 minutes",
      attendees: 189,
      maxAttendees: 300,
      category: "Collaboration",
      description: "Explore strategies for organizing and managing distributed OER development teams."
    },
    {
      id: 3,
      title: "Interactive Content Creation Tools",
      presenter: "Elena Rodriguez",
      institution: "Oxford University",
      date: "December 2, 2025",
      time: "15:00 UTC",
      duration: "75 minutes",
      attendees: 156,
      maxAttendees: 400,
      category: "Tools",
      description: "Discover modern tools and platforms for creating engaging interactive educational content."
    },
  ];

  const pastWebinars = [
    {
      id: 1,
      title: "OER Licensing Explained",
      presenter: "Dr. James Liu",
      institution: "UC Berkeley",
      date: "October 15, 2025",
      views: 1245,
      category: "Legal",
      recording: true
    },
    {
      id: 2,
      title: "Accessibility in OER Design",
      presenter: "Prof. Maria Garcia",
      institution: "Harvard University",
      date: "October 8, 2025",
      views: 892,
      category: "Design",
      recording: true
    },
    {
      id: 3,
      title: "OER Quality Assurance",
      presenter: "Dr. Robert Kim",
      institution: "Yale University",
      date: "September 30, 2025",
      views: 1056,
      category: "Quality",
      recording: true
    },
  ];

  // Parse webinar dates for calendar marking
  const webinarDates = upcomingWebinars.map(webinar => {
    const dateStr = webinar.date; // "November 20, 2025"
    return new Date(dateStr);
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Webinars</h1>
          <p className="text-muted-foreground">Join live sessions and watch recordings from expert educators</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Webinars */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Upcoming Webinars
                </h2>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsCalendarOpen(true)}
                >
                  View Calendar
                </Button>
              </div>

              <div className="space-y-4">
                {upcomingWebinars.map((webinar) => (
                  <Card 
                    key={webinar.id}
                    className="p-5 hover:shadow-lg transition-shadow border-2"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{webinar.category}</Badge>
                          <Badge className="bg-green-500/10 text-green-700 dark:text-green-400">
                            Live Soon
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{webinar.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{webinar.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{webinar.presenter}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span>{webinar.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{webinar.time} • {webinar.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{webinar.attendees}/{webinar.maxAttendees} registered</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Learn More
                        </Button>
                        <Button size="sm">
                          <Play className="h-3 w-3 mr-1" />
                          Register Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Past Webinars */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Past Webinars
                </h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>

              <div className="space-y-4">
                {pastWebinars.map((webinar) => (
                  <div 
                    key={webinar.id}
                    className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{webinar.category}</Badge>
                          {webinar.recording && (
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Video className="h-3 w-3" />
                              Recording Available
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold mb-1">{webinar.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {webinar.presenter} • {webinar.institution}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="h-3 w-3" />
                          {webinar.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {webinar.views} views
                        </span>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        <Play className="h-3 w-3 mr-1" />
                        Watch Recording
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="p-6 gradient-card">
              <h3 className="font-semibold mb-4">Webinar Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Total Webinars</span>
                    <span className="font-semibold">24</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Total Attendees</span>
                    <span className="font-semibold">5,678</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Recordings Available</span>
                    <span className="font-semibold">18</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>
              </div>
            </Card>

            {/* Categories */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Browse by Category</h3>
              <div className="space-y-2">
                {["Education", "Collaboration", "Tools", "Legal", "Design", "Quality"].map((category) => (
                  <Button 
                    key={category}
                    variant="ghost" 
                    className="w-full justify-start"
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Subscribe */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get notified about upcoming webinars and new recordings.
              </p>
              <Button className="w-full" size="sm">
                Subscribe to Updates
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Calendar Dialog */}
      <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Webinar Calendar</DialogTitle>
            <DialogDescription>
              View upcoming webinar dates. Dates with webinars are highlighted.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <Calendar
              mode="single"
              selected={undefined}
              modifiers={{
                hasWebinar: webinarDates,
              }}
              modifiersClassNames={{
                hasWebinar: "bg-primary text-primary-foreground font-semibold rounded-md",
              }}
              className="rounded-md border"
            />
          </div>
          <div className="space-y-2 pt-4 border-t">
            <p className="text-sm font-medium">Upcoming Webinars:</p>
            <div className="space-y-1">
              {upcomingWebinars.map((webinar) => (
                <div key={webinar.id} className="text-sm text-muted-foreground">
                  <span className="font-medium">{webinar.date}</span> - {webinar.title}
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default Webinar;
