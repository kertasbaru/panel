import { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const TransactionForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    customer_no: '',
    product_id: '',
  });

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit?.(formData);
  };

  return (
    <div className="space-y-4">
      <Input label="Nomor Tujuan" name="customer_no" placeholder="Masukkan nomor tujuan" value={formData.customer_no} onChange={handleChange('customer_no')} />
      <Input label="Produk" name="product_id" placeholder="Pilih produk" value={formData.product_id} onChange={handleChange('product_id')} />
      <Button onClick={handleSubmit} loading={loading}>
        Proses Transaksi
      </Button>
    </div>
  );
};

export default TransactionForm;
