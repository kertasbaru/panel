import { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const DepositForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    amount: '',
    payment_method: '',
  });

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit?.(formData);
  };

  return (
    <div className="space-y-4">
      <Input label="Jumlah Deposit" name="amount" type="number" placeholder="Minimal Rp 50.000" value={formData.amount} onChange={handleChange('amount')} />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Metode Pembayaran</label>
        <select
          value={formData.payment_method}
          onChange={(e) => handleChange('payment_method')(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Pilih metode</option>
          <option value="bank_transfer">Transfer Bank</option>
          <option value="ewallet">E-Wallet</option>
        </select>
      </div>
      <Button onClick={handleSubmit} loading={loading}>
        Ajukan Deposit
      </Button>
    </div>
  );
};

export default DepositForm;
