
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient=new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30, 
      gcTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    },
  },
});
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
   <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
