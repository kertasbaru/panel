import { NavLink } from 'react-router-dom';
import { HiOutlineHome, HiOutlineDeviceMobile, HiOutlineClock, HiOutlineCash, HiOutlineUser, HiOutlineCog, HiOutlineLogout, HiOutlineDocumentReport, HiOutlineUsers } from 'react-icons/hi';
import { useAuthStore } from '../../store/authSlice';
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
      'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
      isActive
        ? 'bg-primary-50 text-primary-700'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    );

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4 flex flex-col">
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={linkClass}>
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}

        {isAdmin && (
          <>
            <hr className="my-3 border-gray-200" />
            <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Admin</p>
            {adminMenuItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                <item.icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            ))}
          </>
        )}
      </nav>

      <button
        onClick={logout}
        className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
      >
        <HiOutlineLogout className="w-5 h-5" />
        Keluar
      </button>
    </aside>
  );
};

export default Sidebar;
