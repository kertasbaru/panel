import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const DepositPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Deposit Saldo</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Form Deposit">
          <div className="space-y-4">
            <Input label="Jumlah Deposit" name="amount" type="number" placeholder="Masukkan jumlah deposit" />
            <Input label="Metode Pembayaran" name="method" placeholder="Pilih metode pembayaran" />
            <Button>Ajukan Deposit</Button>
          </div>
        </Card>
        <Card title="Informasi">
          <div className="text-sm text-gray-600 space-y-2">
            <p>Minimal deposit: <strong>Rp 50.000</strong></p>
            <p>Proses deposit akan dikonfirmasi dalam 1x24 jam kerja.</p>
            <p>Pastikan jumlah transfer sesuai dengan nominal yang diajukan.</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DepositPage;
