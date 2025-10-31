import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import DashboardLayout from "@/components/DashboardLayout";
import {
  Search,
  Filter,
  Plus,
  Users,
  Calendar,
  Clock,
  TrendingUp,
  BookOpen,
  FileText,
  Video,
  MoreVertical,
  Edit,
  Trash2,
  Share2,
  Play,
  CheckCircle2,
  Circle,
  AlertCircle,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ProjectStatus = "active" | "completed" | "on-hold" | "draft";

interface Project {
  id: number;
  title: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  deadline: string;
  createdDate: string;
  sme: {
    name: string;
    email: string;
    avatar?: string;
  };
  collaborators: number;
  collaboratorsList: string[];
  tags: string[];
  license: string;
  type: "textbook" | "course" | "interactive" | "video";
  chapters: number;
  completedChapters: number;
  sprintHours: number;
  lastActivity: string;
}

const MyProjects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Introduction to Digital Learning",
      description: "Comprehensive guide to digital learning methodologies and best practices for modern educators.",
      status: "active",
      progress: 65,
      deadline: "2025-11-15",
      createdDate: "2024-09-01",
      sme: {
        name: "Dr. Sarah Chen",
        email: "s.chen@university.edu",
      },
      collaborators: 5,
      collaboratorsList: ["John Doe", "Jane Smith", "Mike Johnson", "Emma Wilson", "Alex Brown"],
      tags: ["Education", "Technology", "E-Learning"],
      license: "CC-BY",
      type: "course",
      chapters: 12,
      completedChapters: 8,
      sprintHours: 45,
      lastActivity: "2 days ago",
    },
    {
      id: 2,
      title: "Open Science Textbook",
      description: "An open-access textbook covering fundamental principles of open science and research practices.",
      status: "active",
      progress: 40,
      deadline: "2025-11-30",
      createdDate: "2024-08-15",
      sme: {
        name: "Prof. Michael Rodriguez",
        email: "m.rodriguez@research.org",
      },
      collaborators: 8,
      collaboratorsList: ["Alice Green", "Bob Lee", "Carol White", "David Black", "Eva Gray", "Frank Blue", "Grace Red"],
      tags: ["Science", "Research", "Textbook"],
      license: "CC-BY-SA",
      type: "textbook",
      chapters: 20,
      completedChapters: 8,
      sprintHours: 72,
      lastActivity: "5 days ago",
    },
    {
      id: 3,
      title: "Research Methods Course",
      description: "Interactive course on research methodologies for graduate students and early-career researchers.",
      status: "active",
      progress: 85,
      deadline: "2025-11-10",
      createdDate: "2024-07-20",
      sme: {
        name: "Dr. Emily Watson",
        email: "e.watson@academic.edu",
      },
      collaborators: 3,
      collaboratorsList: ["Tom Harris", "Lisa Anderson", "Chris Taylor"],
      tags: ["Research", "Methodology", "Graduate"],
      license: "CC-BY",
      type: "interactive",
      chapters: 15,
      completedChapters: 13,
      sprintHours: 38,
      lastActivity: "1 day ago",
    },
    {
      id: 4,
      title: "Machine Learning Fundamentals",
      description: "Video-based course introducing machine learning concepts with practical examples.",
      status: "on-hold",
      progress: 30,
      deadline: "2025-12-20",
      createdDate: "2024-09-10",
      sme: {
        name: "Dr. James Park",
        email: "j.park@tech.edu",
      },
      collaborators: 4,
      collaboratorsList: ["Sam Kim", "Pat Martinez", "Kim Nguyen"],
      tags: ["Machine Learning", "Programming", "Video"],
      license: "CC-BY-NC",
      type: "video",
      chapters: 10,
      completedChapters: 3,
      sprintHours: 22,
      lastActivity: "2 weeks ago",
    },
    {
      id: 5,
      title: "Environmental Science Basics",
      description: "Textbook covering fundamental concepts in environmental science for undergraduate students.",
      status: "completed",
      progress: 100,
      deadline: "2025-10-01",
      createdDate: "2024-06-01",
      sme: {
        name: "Prof. Maria Garcia",
        email: "m.garcia@university.edu",
      },
      collaborators: 6,
      collaboratorsList: ["Rachel Moore", "Steve Clark", "Amy Davis", "Mark Wilson", "Tina Martinez"],
      tags: ["Science", "Environment", "Undergraduate"],
      license: "CC-BY",
      type: "textbook",
      chapters: 18,
      completedChapters: 18,
      sprintHours: 95,
      lastActivity: "1 week ago",
    },
    {
      id: 6,
      title: "Web Development Bootcamp",
      description: "Interactive bootcamp covering modern web development technologies and frameworks.",
      status: "draft",
      progress: 15,
      deadline: "2025-12-31",
      createdDate: "2024-09-25",
      sme: {
        name: "Dr. Kevin Liu",
        email: "k.liu@coding.edu",
      },
      collaborators: 2,
      collaboratorsList: ["Ryan Kim", "Laura Chen"],
      tags: ["Programming", "Web Development", "Interactive"],
      license: "CC-BY-SA",
      type: "interactive",
      chapters: 25,
      completedChapters: 4,
      sprintHours: 12,
      lastActivity: "3 days ago",
    },
  ];

  const getStatusIcon = (status: ProjectStatus) => {
    switch (status) {
      case "active":
        return <Play className="h-4 w-4 text-green-500" />;
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-blue-500" />;
      case "on-hold":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "draft":
        return <Circle className="h-4 w-4 text-gray-500" />;
      default:
        return <Circle className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case "active":
        return "bg-green-500/10 text-green-700 border-green-500/20";
      case "completed":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      case "on-hold":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20";
      case "draft":
        return "bg-gray-500/10 text-gray-700 border-gray-500/20";
      default:
        return "";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "textbook":
        return <BookOpen className="h-4 w-4" />;
      case "course":
        return <FileText className="h-4 w-4" />;
      case "interactive":
        return <TrendingUp className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.sme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    const matchesType = typeFilter === "all" || project.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const stats = {
    total: projects.length,
    active: projects.filter((p) => p.status === "active").length,
    completed: projects.filter((p) => p.status === "completed").length,
    totalProgress: Math.round(
      projects.reduce((acc, p) => acc + p.progress, 0) / projects.length
    ),
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Projects</h1>
            <p className="text-muted-foreground">
              Manage and track all your OER projects created by Subject Matter Experts
            </p>
          </div>
          <Link to="/create-project">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6 gradient-card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Total Projects</h3>
              <FileText className="h-4 w-4 text-primary" />
            </div>
            <p className="text-3xl font-bold">{stats.total}</p>
          </Card>

          <Card className="p-6 gradient-card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Active</h3>
              <Play className="h-4 w-4 text-green-500" />
            </div>
            <p className="text-3xl font-bold">{stats.active}</p>
          </Card>

          <Card className="p-6 gradient-card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Completed</h3>
              <CheckCircle2 className="h-4 w-4 text-blue-500" />
            </div>
            <p className="text-3xl font-bold">{stats.completed}</p>
          </Card>

          <Card className="p-6 gradient-card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Avg. Progress</h3>
              <TrendingUp className="h-4 w-4 text-accent" />
            </div>
            <p className="text-3xl font-bold">{stats.totalProgress}%</p>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects, SMEs, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="on-hold">On Hold</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="textbook">Textbook</SelectItem>
                <SelectItem value="course">Course</SelectItem>
                <SelectItem value="interactive">Interactive</SelectItem>
                <SelectItem value="video">Video</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {getTypeIcon(project.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge
                          variant="outline"
                          className={`${getStatusColor(project.status)} capitalize`}
                        >
                          <span className="mr-1">{getStatusIcon(project.status)}</span>
                          {project.status.replace("-", " ")}
                        </Badge>
                        <Badge variant="secondary" className="capitalize">
                          {project.type}
                        </Badge>
                        <Badge variant="outline">{project.license}</Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Project
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* SME Info */}
              <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Subject Matter Expert</span>
                </div>
                <p className="text-sm font-semibold">{project.sme.name}</p>
                <p className="text-xs text-muted-foreground">{project.sme.email}</p>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                  <span>
                    Chapters: {project.completedChapters}/{project.chapters}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {project.sprintHours}h
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <div>
                    <div className="text-xs">Created</div>
                    <div className="font-medium text-foreground">
                      {new Date(project.createdDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <div>
                    <div className="text-xs">Deadline</div>
                    <div className="font-medium text-foreground">
                      {new Date(project.deadline).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Collaborators */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">
                    {project.collaborators} Collaborator{project.collaborators !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.collaboratorsList.slice(0, 3).map((collab, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {collab}
                    </Badge>
                  ))}
                  {project.collaboratorsList.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.collaboratorsList.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Last Activity */}
              <div className="mb-4 text-xs text-muted-foreground">
                Last activity: {project.lastActivity}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link to={`/dashboard/projects/${project.id}`}>View Details</Link>
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <Link to={`/sprint-hub?project=${project.id}`}>Open Project</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <Card className="p-12 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Link to="/create-project">
              <Button>Create New Project</Button>
            </Link>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyProjects;

