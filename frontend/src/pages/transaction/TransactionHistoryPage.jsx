import Card from '../../components/common/Card';
import Table from '../../components/common/Table';
import SearchBar from '../../components/common/SearchBar';
import Pagination from '../../components/common/Pagination';
import AnimatedPage, { fadeInUp } from '../../components/common/AnimatedPage';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiOutlineClock, HiOutlineDownload } from 'react-icons/hi';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'product_name', label: 'Produk' },
  { key: 'customer_no', label: 'Nomor Tujuan' },
  { key: 'amount', label: 'Nominal' },
  { key: 'status', label: 'Status' },
  { key: 'created_at', label: 'Tanggal' },
];

const TransactionHistoryPage = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  return (
    <AnimatedPage>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
            <HiOutlineClock className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Riwayat Transaksi</h2>
            <p className="text-sm text-gray-500">Lihat semua riwayat transaksi Anda</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
          <HiOutlineDownload className="w-4 h-4" />
          Export
        </button>
      </div>

      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <Card>
          <div className="mb-4 max-w-sm">
            <SearchBar value={search} onChange={setSearch} placeholder="Cari transaksi..." />
          </div>
          <Table columns={columns} data={[]} loading={false} />
          <Pagination currentPage={page} totalPages={1} onPageChange={setPage} />
        </Card>
      </motion.div>
    </AnimatedPage>
  );
};

export default TransactionHistoryPage;
