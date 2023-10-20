'use client';
import './globals.css';
import { Lilita_One } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '../../store';

const inter = Lilita_One({ subsets: ['latin'], weight: '400' });

const client = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </Provider>
    </QueryClientProvider>
  );
}
