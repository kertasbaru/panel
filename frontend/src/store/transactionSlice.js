import { create } from 'zustand';

export const useTransactionStore = create((set) => ({
  transactions: [],
  currentTransaction: null,
  loading: false,

  setTransactions: (transactions) => set({ transactions }),
  setCurrentTransaction: (transaction) => set({ currentTransaction: transaction }),
  setLoading: (loading) => set({ loading }),
}));
