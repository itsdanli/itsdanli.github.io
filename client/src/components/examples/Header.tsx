import { Header } from '../Header';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

export default function HeaderExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
