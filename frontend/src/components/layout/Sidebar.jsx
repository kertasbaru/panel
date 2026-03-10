import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineHome, HiOutlineDeviceMobile, HiOutlineClock, HiOutlineCash, HiOutlineUser, HiOutlineCog, HiOutlineLogout, HiOutlineDocumentReport, HiOutlineUsers } from 'react-icons/hi';
import { useAuthStore } from '../../store/authSlice';
import { APP_NAME } from '../../utils/constants';
import clsx from 'clsx';

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: HiOutlineHome },
  { path: '/transaksi/pulsa', label: 'Beli Pulsa', icon: HiOutlineDeviceMobile },
  { path: '/transaksi/riwayat', label: 'Riwayat Transaksi', icon: HiOutlineClock },
  { path: '/deposit', label: 'Deposit', icon: HiOutlineCash },
  { path: '/profil', label: 'Profil', icon: HiOutlineUser },
];

const adminMenuItems = [
  { path: '/admin/users', label: 'Manajemen User', icon: HiOutlineUsers },
  { path: '/admin/laporan/penjualan', label: 'Laporan Penjualan', icon: HiOutlineDocumentReport },
  { path: '/admin/pengaturan', label: 'Pengaturan', icon: HiOutlineCog },
];

const Sidebar = () => {
  const { user, logout } = useAuthStore();
  const isAdmin = user?.role === 'admin';

  const linkClass = ({ isActive }) =>
    clsx(
      'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
      isActive
        ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md shadow-primary-200'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    );

  return (
    <aside className="w-64 bg-white border-r border-gray-100 min-h-screen p-4 flex flex-col">
      {/* Brand */}
      <div className="flex items-center gap-3 px-3 py-2 mb-6">
        <img src="/icon.png" alt={APP_NAME} className="w-9 h-9 rounded-xl shadow-sm" />
        <span className="text-lg font-bold text-gray-900">{APP_NAME}</span>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <NavLink to={item.path} className={linkClass}>
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          </motion.div>
        ))}

        {isAdmin && (
          <>
            <hr className="my-4 border-gray-100" />
            <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Admin</p>
            {adminMenuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (menuItems.length + index) * 0.05 }}
              >
                <NavLink to={item.path} className={linkClass}>
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </>
        )}
      </nav>

      {/* User info */}
      <div className="px-3 py-3 mb-2 bg-gray-50 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-sm font-bold">
            {user?.name?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
        </div>
      </div>

      <button
        onClick={logout}
        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200"
      >
        <HiOutlineLogout className="w-5 h-5" />
        Keluar
      </button>
    </aside>
  );
};

export default Sidebar;
