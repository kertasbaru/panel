import { create } from 'zustand';

export const useBalanceStore = create((set) => ({
  balance: 0,
  loading: false,

  setBalance: (amount) => set({ balance: amount }),
  setLoading: (loading) => set({ loading }),
}));
