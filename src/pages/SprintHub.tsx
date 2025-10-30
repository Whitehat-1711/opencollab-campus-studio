import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Video, Mic, MonitorUp, Settings, Phone, MessageSquare, Users, Clock } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";

const SprintHub = () => {
  const [notes, setNotes] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, user: "Sarah Chen", message: "Great progress on chapter 3!", time: "2 min ago" },
    { id: 2, user: "Mike Johnson", message: "I've shared my screen to review the outline", time: "5 min ago" },
  ]);

  const participants = [
    { id: 1, name: "Sarah Chen", role: "Lead Author", status: "online" },
    { id: 2, name: "Mike Johnson", role: "Contributor", status: "online" },
    { id: 3, name: "Elena Rodriguez", role: "Editor", status: "online" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Sprint Hub</h1>
            <p className="text-muted-foreground">Introduction to Digital Learning - Chapter 3 Sprint</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>45:23</span>
            </div>
            <Button variant="destructive" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              End Sprint
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Video Area */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="relative z-10 text-center space-y-4">
                <div className="h-24 w-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center animate-pulse-subtle">
                  <Video className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Video Conference Active</h3>
                  <p className="text-sm text-muted-foreground">3 participants connected</p>
                </div>
              </div>
            </Card>

            {/* Video Controls */}
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <MonitorUp className="h-4 w-4" />
                  </Button>
                </div>
                <Button size="sm" variant="outline">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Collaborative Notes */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Shared Notes</h3>
              <Textarea
                placeholder="Type your notes here... All participants can see and edit these notes in real-time."
                className="min-h-[200px] resize-none"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" size="sm">Save Draft</Button>
                <Button size="sm">Share with Team</Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Participants */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Participants
                </h3>
                <Button variant="outline" size="sm">Invite</Button>
              </div>
              <div className="space-y-3">
                {participants.map((participant) => (
                  <div key={participant.id} className="flex items-center gap-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                        {participant.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="absolute bottom-0 right-0 h-3 w-3 bg-secondary rounded-full border-2 border-background" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{participant.name}</p>
                      <p className="text-xs text-muted-foreground">{participant.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Chat */}
            <Card className="p-4 flex flex-col h-[400px]">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-4 w-4" />
                <h3 className="font-semibold">Live Chat</h3>
              </div>
              
              <div className="flex-1 space-y-3 overflow-y-auto mb-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-medium text-sm">{msg.user}</span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <p className="text-sm bg-muted p-2 rounded-lg">{msg.message}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Textarea 
                  placeholder="Type a message..." 
                  className="resize-none h-10 min-h-[40px]"
                />
                <Button size="sm">Send</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SprintHub;