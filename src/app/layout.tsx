'use client';
import './globals.css';
import { Lilita_One } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '../../store';
import Reload from './components/Reload';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import Modal from './components/Modal';

const inter = Lilita_One({ subsets: ['latin'], weight: ['400'] });

const client = new QueryClient();

export const ToastContext = createContext({ toast: toast });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modal, setModal] = useState(false);
  console.log(modal);

  useEffect(() => {
    let keyPressed = false;
    const keyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey) keyPressed = true;
    };

    const keyUp = (event: KeyboardEvent) => {
      if (event.key === 'Control') {
        keyPressed = false;
        setModal(false);
      }
    };

    const mouseMouve = (event: MouseEvent) => {
      if (keyPressed) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const windowWidth = window.innerWidth;

        const margin = 50;
        if (mouseX >= windowWidth - margin && mouseY <= margin) setModal(true);
        else setModal(false);
      }
    };

    window.addEventListener('keydown', (event) => keyDown(event));
    window.addEventListener('keyup', (event) => keyUp(event));
    window.addEventListener('mousemove', (event) => mouseMouve(event));

    return () => {
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
      window.removeEventListener('mousemove', mouseMouve);
    };
  }, []);

  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <ToastContext.Provider value={{ toast: toast }}>
          <Reload />
          <html lang="fr">
            <body className={inter.className}>
              {children}
              <ToastContainer position="bottom-right" theme="colored" />
              {modal && <Modal />}
            </body>
          </html>
        </ToastContext.Provider>
      </Provider>
    </QueryClientProvider>
  );
}
