import { HiOutlineClock, HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const RecentTransactions = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between p-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <HiOutlineClock className="w-5 h-5 text-gray-400" />
          <h3 className="font-semibold text-gray-900">Transaksi Terbaru</h3>
        </div>
        <Link to="/transaksi/riwayat" className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors">
          Lihat Semua
          <HiOutlineArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="p-8 text-center">
        <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-3">
          <HiOutlineClock className="w-7 h-7 text-gray-300" />
        </div>
        <p className="text-gray-500 text-sm">Belum ada transaksi terbaru.</p>
        <Link to="/transaksi/pulsa" className="text-primary-600 text-sm font-medium hover:text-primary-700 mt-1 inline-block">
          Mulai transaksi pertama →
        </Link>
      </div>
    </div>
  );
};

export default RecentTransactions;
