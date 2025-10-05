"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
// This is a placeholder. In a real app, this would likely use a global state management
// solution (like Zustand or React Context) to open the chat modal.
const AiAssistantFab = () => {
  const openChat = () => {
    // Placeholder function to simulate opening the chat
    alert("AI Assistant chat would open here.");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-lg"
        onClick={openChat}
      >
        <MessageSquare className="h-8 w-8" />
        <span className="sr-only">Open AI Assistant</span>
      </Button>
    </div>
  );
};

export default AiAssistantFab;