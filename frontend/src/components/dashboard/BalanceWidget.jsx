import { formatCurrency } from '../../utils/formatCurrency';
import { HiOutlineCash, HiOutlinePlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const BalanceWidget = () => {
  return (
    <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <HiOutlineCash className="w-5 h-5 text-white/80" />
          <p className="text-sm text-white/80 font-medium">Saldo Anda</p>
        </div>
        <p className="text-3xl font-bold">{formatCurrency(0)}</p>
        <p className="text-xs text-white/60 mt-1">Saldo tersedia</p>
        <Link
          to="/deposit"
          className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-sm font-medium transition-colors backdrop-blur-sm"
        >
          <HiOutlinePlus className="w-4 h-4" />
          Top Up Saldo
        </Link>
      </div>
    </div>
  );
};

export default BalanceWidget;
