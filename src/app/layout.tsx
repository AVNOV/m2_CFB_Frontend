'use client';
import './globals.css';
import { Lilita_One } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '../../store';
import Reload from './components/Reload';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from 'react';

const inter = Lilita_One({ subsets: ['latin'], weight: '400' });

const client = new QueryClient();

export const ToastContext = createContext({ toast: toast });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <ToastContext.Provider value={{ toast: toast }}>
          <Reload />
          <html lang="en">
            <body className={inter.className}>
              {children}
              <ToastContainer position="bottom-right" theme="colored" />
            </body>
          </html>
        </ToastContext.Provider>
      </Provider>
    </QueryClientProvider>
  );
}
