import { Link } from "wouter";
import { Plane, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-white p-4">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full" />
        <Plane className="w-32 h-32 text-primary relative z-10 animate-bounce" />
      </div>
      
      <h1 className="text-6xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-6">Off Course!</h2>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        We couldn't find the page you were looking for. It seems this flight path doesn't exist.
      </p>

      <Button asChild className="bg-primary text-primary-foreground hover:bg-yellow-400 font-bold px-8 py-6 rounded-xl">
        <Link href="/">
          Return to Base
        </Link>
      </Button>
    </div>
  );
}
