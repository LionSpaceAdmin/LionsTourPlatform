'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { oracleTravelAssistant } from '@/app/actions/ai';
import { useToast } from '@/hooks/use-toast';
import { Loader2, MessageCircle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '../Logo';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

interface OracleChatProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

export default function OracleChat({ isOpen, onOpenChange }: OracleChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const response = await oracleTravelAssistant({ query: input });

    if (response.success && response.data) {
      const assistantMessage: Message = {
        role: 'assistant',
        content: response.data.response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } else {
      toast({
        title: 'Error contacting The Oracle',
        description:
          response.error || 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
      // remove the user message if the call fails
      setMessages((prev) => prev.slice(0, prev.length -1));
    }
    setLoading(false);
  };
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
        setMessages([
            {
                role: 'assistant',
                content: 'Welcome. I am The Oracle. Ask me anything about your journey, from cultural etiquette to logistics. How may I guide you?'
            }
        ])
    }
  }, [isOpen, messages.length]);


  return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px] md:max-w-lg grid-rows-[auto_1fr_auto] p-0 max-h-[90vh]">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="flex items-center gap-2">
                <Logo />
            </DialogTitle>
            <DialogDescription>
              Your AI-powered personal assistant for travel in Israel.
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="h-96 w-full p-6 pt-0">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-end gap-2',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-xs rounded-lg p-3 text-sm',
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary'
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-secondary p-3 rounded-lg">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <DialogFooter className="p-6 pt-2">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask The Oracle..."
                disabled={loading}
              />
              <Button type="submit" size="icon" disabled={loading || !input.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  );
}

    