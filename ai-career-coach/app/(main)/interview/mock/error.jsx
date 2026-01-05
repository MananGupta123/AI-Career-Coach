"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Quiz page error:", error);
  }, [error]);

  return (
    <div className="container mx-auto py-6">
      <Card className="mx-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600">
            <AlertCircle className="h-5 w-5" />
            Something went wrong!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            {error?.message || "An unexpected error occurred while loading the quiz."}
          </p>
          <div className="flex gap-2">
            <Button onClick={reset}>Try again</Button>
            <Button variant="outline" onClick={() => window.location.href = "/interview"}>
              Back to Interview Prep
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

