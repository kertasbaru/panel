import { useAuthStore } from '../../store/authSlice';
import StatCard from '../../components/dashboard/StatCard';
import RecentTransactions from '../../components/dashboard/RecentTransactions';
import SalesChart from '../../components/dashboard/SalesChart';
import BalanceWidget from '../../components/dashboard/BalanceWidget';
import { HiOutlineCash, HiOutlineShoppingCart, HiOutlineUsers, HiOutlineTrendingUp } from 'react-icons/hi';

const DashboardPage = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Selamat Datang, {user?.name || 'Pengguna'}!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard title="Saldo" value="Rp 0" icon={HiOutlineCash} color="blue" />
        <StatCard title="Total Transaksi" value="0" icon={HiOutlineShoppingCart} color="green" />
        <StatCard title="Total Member" value="0" icon={HiOutlineUsers} color="purple" />
        <StatCard title="Pendapatan" value="Rp 0" icon={HiOutlineTrendingUp} color="orange" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <BalanceWidget />
        </div>
      </div>

      <div className="mt-6">
        <RecentTransactions />
      </div>
    </div>
  );
};

export default DashboardPage;
