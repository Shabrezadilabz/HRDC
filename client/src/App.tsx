import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AdminLeads from "@/pages/AdminLeads";
import CourseDetail from "@/pages/CourseDetail";
import StudyAbroad from "@/pages/StudyAbroad";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin-leads" component={AdminLeads} />
      <Route path="/course/:id" component={CourseDetail} />
      <Route path="/study-abroad" component={StudyAbroad} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
