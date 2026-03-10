import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button';
import AnimatedPage, { staggerContainer, fadeInUp } from '../../components/common/AnimatedPage';
import { formatCurrency } from '../../utils/formatCurrency';
import { HiOutlineDeviceMobile, HiOutlineSearch, HiOutlineWifi, HiOutlinePhone } from 'react-icons/hi';

const sampleProducts = [
  { id: 1, name: 'Pulsa 5.000', price: 6500, brand: 'All Operator', type: 'pulsa' },
  { id: 2, name: 'Pulsa 10.000', price: 11500, brand: 'All Operator', type: 'pulsa' },
  { id: 3, name: 'Pulsa 25.000', price: 26000, brand: 'All Operator', type: 'pulsa' },
  { id: 4, name: 'Pulsa 50.000', price: 50500, brand: 'All Operator', type: 'pulsa' },
  { id: 5, name: 'Pulsa 100.000', price: 100000, brand: 'All Operator', type: 'pulsa' },
  { id: 6, name: 'Data 1GB/30hr', price: 15000, brand: 'All Operator', type: 'data' },
  { id: 7, name: 'Data 3GB/30hr', price: 35000, brand: 'All Operator', type: 'data' },
  { id: 8, name: 'Data 10GB/30hr', price: 75000, brand: 'All Operator', type: 'data' },
];

const PulsaPage = () => {
  const [phone, setPhone] = useState('');
  const [activeTab, setActiveTab] = useState('pulsa');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = sampleProducts.filter(p => p.type === activeTab);

  return (
    <AnimatedPage>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <HiOutlineDeviceMobile className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Beli Pulsa & Paket Data</h2>
          <p className="text-sm text-gray-500">Beli pulsa dan paket data untuk semua operator</p>
        </div>
      </div>

      {/* Phone number input */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Tujuan</label>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <HiOutlinePhone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Contoh: 081234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
              />
            </div>
            <Button className="!rounded-xl px-6">
              <HiOutlineSearch className="w-5 h-5 mr-1" />
              Cari
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Product type tabs */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.1 }}>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('pulsa')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === 'pulsa' ? 'bg-primary-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
          >
            <HiOutlinePhone className="w-4 h-4" />
            Pulsa
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === 'data' ? 'bg-primary-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
          >
            <HiOutlineWifi className="w-4 h-4" />
            Paket Data
          </button>
        </div>
      </motion.div>

      {/* Product grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
      >
        {filteredProducts.map((product) => (
          <motion.div key={product.id} variants={fadeInUp}>
            <button
              onClick={() => setSelectedProduct(product.id)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${selectedProduct === product.id ? 'border-primary-500 bg-primary-50 shadow-md' : 'border-gray-100 bg-white hover:border-primary-200'}`}
            >
              <div className="text-sm font-medium text-gray-900">{product.name}</div>
              <div className="text-xs text-gray-500 mt-1">{product.brand}</div>
              <div className="text-primary-600 font-bold mt-2">{formatCurrency(product.price)}</div>
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Buy button */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6"
        >
          <Button className="w-full !rounded-xl !py-3.5 shadow-lg" size="lg">
            Beli Sekarang
          </Button>
        </motion.div>
      )}
    </AnimatedPage>
  );
};

export default PulsaPage;
