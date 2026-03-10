import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import AnimatedPage, { fadeInUp } from '../../components/common/AnimatedPage';
import { formatCurrency } from '../../utils/formatCurrency';
import { HiOutlineCash, HiOutlineInformationCircle, HiOutlineCreditCard, HiOutlineDeviceMobile } from 'react-icons/hi';

const amounts = [50000, 100000, 200000, 500000, 1000000, 2000000];

const paymentMethods = [
  { id: 'bank', label: 'Transfer Bank', icon: HiOutlineCreditCard },
  { id: 'ewallet', label: 'E-Wallet', icon: HiOutlineDeviceMobile },
];

const DepositPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <AnimatedPage>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
          <HiOutlineCash className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Deposit Saldo</h2>
          <p className="text-sm text-gray-500">Tambah saldo untuk melakukan transaksi</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pilih Nominal</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`p-4 rounded-xl border-2 text-center transition-all duration-200 hover:-translate-y-0.5 ${selectedAmount === amount ? 'border-primary-500 bg-primary-50 shadow-md' : 'border-gray-100 hover:border-primary-200'}`}
                >
                  <div className="font-bold text-gray-900">{formatCurrency(amount)}</div>
                </button>
              ))}
            </div>

            <div className="mb-6">
              <Input label="Atau masukkan nominal lain" name="custom_amount" type="number" placeholder="Minimal Rp 50.000" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Metode Pembayaran</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 ${selectedMethod === method.id ? 'border-primary-500 bg-primary-50 shadow-md' : 'border-gray-100 hover:border-primary-200'}`}
                >
                  <method.icon className="w-6 h-6 text-primary-600" />
                  <span className="font-medium text-gray-900">{method.label}</span>
                </button>
              ))}
            </div>

            <Button className="w-full !rounded-xl !py-3.5" size="lg">Ajukan Deposit</Button>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.15 }}>
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl border border-primary-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineInformationCircle className="w-5 h-5 text-primary-600" />
              <h3 className="font-semibold text-primary-900">Informasi</h3>
            </div>
            <div className="text-sm text-primary-800 space-y-3">
              <p>✅ Minimal deposit: <strong>Rp 50.000</strong></p>
              <p>⏳ Proses deposit dikonfirmasi dalam 1×24 jam kerja.</p>
              <p>💡 Pastikan jumlah transfer sesuai dengan nominal yang diajukan.</p>
              <p>📞 Hubungi admin jika ada kendala.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default DepositPage;
