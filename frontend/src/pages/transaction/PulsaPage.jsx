import { useState } from 'react';
import Card from '../../components/common/Card';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const PulsaPage = () => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Beli Pulsa & Paket Data</h2>
      <Card title="Masukkan Nomor Handphone">
        <div className="max-w-md">
          <Input
            label="Nomor Handphone"
            name="phone"
            placeholder="08xxxxxxxxxx"
            className="mb-4"
          />
          <Button>Cari Produk</Button>
        </div>
        <div className="mt-6">
          <p className="text-gray-500 text-sm">Masukkan nomor handphone untuk melihat produk yang tersedia.</p>
        </div>
      </Card>
    </div>
  );
};

export default PulsaPage;
