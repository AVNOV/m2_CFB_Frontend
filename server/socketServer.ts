import { Server } from 'socket.io';
import http from 'http';

export const initSocket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log('Nouvelle connexion socket : ', socket.id);

    socket.on('disconnect', () => {
      console.log('Déconnexion du socket : ', socket.id);
    });
  });
};
