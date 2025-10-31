import { Link, useLocation } from "react-router-dom";
import { Home, Rocket, Library, MessageSquare, Settings, FolderOpen, Video } from "lucide-react";
import logoImage from "@/assets/logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "My Projects", url: "/dashboard/projects", icon: FolderOpen },
  { title: "Sprint Hub", url: "/sprint-hub", icon: Rocket },
  { title: "OER Library", url: "/library", icon: Library },
  { title: "Community", url: "/community", icon: MessageSquare },
  { title: "Webinar", url: "/webinar", icon: Video },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <div className="p-4 border-b">
            <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
              <img src={logoImage} alt="MeshConnect Logo" className="h-5 w-5" />
              <span>MeshConnect</span>
            </Link>
          </div>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => {
                    const isActive = location.pathname === item.url;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link 
                            to={item.url}
                            className={cn(
                              "flex items-center gap-3",
                              isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                            )}
                          >
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          <header className="h-14 border-b flex items-center px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SidebarTrigger />
          </header>
          
          <main className="flex-1 p-6 bg-muted/30">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;