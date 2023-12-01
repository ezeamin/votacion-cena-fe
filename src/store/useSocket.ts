import { io } from 'socket.io-client';
import type { Socket } from 'socket.io-client';
import { v4 as uuid } from 'uuid';
import { create } from 'zustand';

// TODO: Take this store to a hook, and wrap onSocket in useEffect

interface SocketStore {
  socket: Socket;
  emitSocket: (event: string, data: unknown) => void;
  onSocket: (event: string, callback: (data: unknown) => void) => void;
}

const token = localStorage.getItem('token') || uuid();
localStorage.setItem('token', token);

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;
const socket = io(SOCKET_URL, {
  auth: {
    token,
  },
});

export const useSocket = create<SocketStore>((set) => ({
  socket,
  emitSocket: (event, data) => socket.emit(event, data),
  onSocket: (event, callback) => socket.on(event, callback),
}));
