import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/authSlice';
import StatCard from '../../components/dashboard/StatCard';
import RecentTransactions from '../../components/dashboard/RecentTransactions';
import SalesChart from '../../components/dashboard/SalesChart';
import BalanceWidget from '../../components/dashboard/BalanceWidget';
import AnimatedPage, { staggerContainer, fadeInUp } from '../../components/common/AnimatedPage';
import { HiOutlineCash, HiOutlineShoppingCart, HiOutlineUsers, HiOutlineTrendingUp, HiOutlineDeviceMobile, HiOutlineLightningBolt, HiOutlineGlobe, HiOutlineGift } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const quickMenu = [
  { label: 'Pulsa', icon: HiOutlineDeviceMobile, path: '/transaksi/pulsa', color: 'from-blue-500 to-blue-600' },
  { label: 'Token PLN', icon: HiOutlineLightningBolt, path: '/transaksi/pulsa', color: 'from-yellow-500 to-orange-500' },
  { label: 'Internet', icon: HiOutlineGlobe, path: '/transaksi/pulsa', color: 'from-green-500 to-emerald-600' },
  { label: 'Voucher', icon: HiOutlineGift, path: '/transaksi/pulsa', color: 'from-purple-500 to-pink-500' },
];

const DashboardPage = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <AnimatedPage>
      {/* Welcome banner */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 via-primary-700 to-purple-700 p-6 md:p-8 mb-6 text-white"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Selamat Datang, {user?.name || 'Pengguna'}! 👋
          </h2>
          <p className="mt-2 text-white/80 text-sm md:text-base max-w-lg">
            Kelola transaksi PPOB Anda dengan mudah dan cepat. Semua layanan tersedia 24/7.
          </p>
        </div>
      </motion.div>

      {/* Stat cards */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
      >
        <motion.div variants={fadeInUp}><StatCard title="Saldo" value="Rp 0" icon={HiOutlineCash} color="blue" /></motion.div>
        <motion.div variants={fadeInUp}><StatCard title="Total Transaksi" value="0" icon={HiOutlineShoppingCart} color="green" /></motion.div>
        <motion.div variants={fadeInUp}><StatCard title="Total Member" value="0" icon={HiOutlineUsers} color="purple" /></motion.div>
        <motion.div variants={fadeInUp}><StatCard title="Pendapatan" value="Rp 0" icon={HiOutlineTrendingUp} color="orange" /></motion.div>
      </motion.div>

      {/* Quick menu */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Menu Cepat</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {quickMenu.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Charts and balance */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <BalanceWidget />
        </div>
      </motion.div>

      {/* Recent transactions */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.4 }}
        className="mt-6"
      >
        <RecentTransactions />
      </motion.div>
    </AnimatedPage>
  );
};

export default DashboardPage;
