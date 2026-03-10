import { useState } from 'react';
import { createTransaction, inquiryTransaction } from '../api/transactionApi';
import toast from 'react-hot-toast';

const useTransaction = () => {
  const [loading, setLoading] = useState(false);

  const submitTransaction = async (data) => {
    try {
      setLoading(true);
      const response = await createTransaction(data);
      toast.success('Transaksi berhasil!');
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Transaksi gagal');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const checkBill = async (data) => {
    try {
      setLoading(true);
      const response = await inquiryTransaction(data);
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Gagal cek tagihan');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, submitTransaction, checkBill };
};

export default useTransaction;
