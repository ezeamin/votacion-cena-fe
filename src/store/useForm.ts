import { create } from 'zustand';

interface FormStore {
  king: string;
  queen: string;
  setKing: (king: string) => void;
  setQueen: (queen: string) => void;
}

export const useForm = create<FormStore>((set) => ({
  king: '',
  queen: '',
  setKing: (_king) => set({ king: _king }),
  setQueen: (_queen) => set({ queen: _queen }),
}));
