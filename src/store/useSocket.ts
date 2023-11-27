import { io } from 'socket.io-client';
import type { Socket } from 'socket.io-client';
import { create } from 'zustand';

// TODO: Take this store to a hook, and wrap onSocket in useEffect

interface SocketStore {
  socket: Socket;
  setSocket: (socket: Socket) => void;
  emitSocket: (event: string, data: unknown) => void;
  onSocket: (event: string, callback: (msg: string) => void) => void;
}

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;
const socket = io(SOCKET_URL);

export const useSocket = create<SocketStore>((set) => ({
  socket,
  setSocket: (_socket) => set({ socket: _socket }),
  emitSocket: (event, data) => socket.emit(event, data),
  onSocket: (event, callback) => socket.on(event, callback),
}));
