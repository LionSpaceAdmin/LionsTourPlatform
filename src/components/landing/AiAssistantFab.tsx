'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import OracleChat from '../ai/OracleChat';

const AiAssistantFab = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 shadow-lg bg-accent text-accent-foreground hover:bg-accent/90"
          onClick={() => setIsChatOpen(true)}
        >
          <MessageSquare className="h-8 w-8" />
          <span className="sr-only">Open AI Assistant</span>
        </Button>
      </div>
      <OracleChat isOpen={isChatOpen} onOpenChange={setIsChatOpen} />
    </>
  );
};

export default AiAssistantFab;

    