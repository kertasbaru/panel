import { useState, useEffect } from 'react';
import { getBalance } from '../api/balanceApi';

const useBalance = () => {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchBalance = async () => {
    try {
      setLoading(true);
      const { data } = await getBalance();
      setBalance(data.data?.amount || 0);
    } catch (error) {
      console.error('Failed to fetch balance:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return { balance, loading, refetch: fetchBalance };
};

export default useBalance;
