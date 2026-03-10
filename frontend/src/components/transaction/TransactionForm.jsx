import Button from '../common/Button';
import Input from '../common/Input';

const TransactionForm = ({ onSubmit, loading }) => {
  return (
    <div className="space-y-4">
      <Input label="Nomor Tujuan" name="customer_no" placeholder="Masukkan nomor tujuan" />
      <Input label="Produk" name="product_id" placeholder="Pilih produk" />
      <Button onClick={onSubmit} loading={loading}>
        Proses Transaksi
      </Button>
    </div>
  );
};

export default TransactionForm;
