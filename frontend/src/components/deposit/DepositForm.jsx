import Button from '../common/Button';
import Input from '../common/Input';

const DepositForm = ({ onSubmit, loading }) => {
  return (
    <div className="space-y-4">
      <Input label="Jumlah Deposit" name="amount" type="number" placeholder="Minimal Rp 50.000" />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Metode Pembayaran</label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
          <option value="">Pilih metode</option>
          <option value="bank_transfer">Transfer Bank</option>
          <option value="ewallet">E-Wallet</option>
        </select>
      </div>
      <Button onClick={onSubmit} loading={loading}>
        Ajukan Deposit
      </Button>
    </div>
  );
};

export default DepositForm;
