import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import MyProjects from "./pages/MyProjects";
import SprintHub from "./pages/SprintHub";
import Library from "./pages/Library";
import Community from "./pages/Community";
import Webinar from "./pages/Webinar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateProject from "./pages/CreateProject";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/projects" element={<MyProjects />} />
          <Route path="/sprint-hub" element={<SprintHub />} />
          <Route path="/library" element={<Library />} />
          <Route path="/community" element={<Community />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-project" element={<CreateProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
