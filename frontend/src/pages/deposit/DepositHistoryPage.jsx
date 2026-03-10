import Card from '../../components/common/Card';
import Table from '../../components/common/Table';
import Pagination from '../../components/common/Pagination';
import AnimatedPage, { fadeInUp } from '../../components/common/AnimatedPage';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiOutlineCollection, HiOutlineDownload } from 'react-icons/hi';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'amount', label: 'Jumlah' },
  { key: 'method', label: 'Metode' },
  { key: 'status', label: 'Status' },
  { key: 'created_at', label: 'Tanggal' },
];

const DepositHistoryPage = () => {
  const [page, setPage] = useState(1);

  return (
    <AnimatedPage>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
            <HiOutlineCollection className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Riwayat Deposit</h2>
            <p className="text-sm text-gray-500">Lihat semua riwayat deposit Anda</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
          <HiOutlineDownload className="w-4 h-4" />
          Export
        </button>
      </div>

      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <Card>
          <Table columns={columns} data={[]} loading={false} />
          <Pagination currentPage={page} totalPages={1} onPageChange={setPage} />
        </Card>
      </motion.div>
    </AnimatedPage>
  );
};

export default DepositHistoryPage;
