import { HiOutlineBell, HiOutlineUser } from 'react-icons/hi';
import { useAuthStore } from '../../store/authSlice';
import { APP_NAME } from '../../utils/constants';

const Navbar = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <h1 className="text-xl font-bold text-primary-600">{APP_NAME}</h1>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-500 hover:text-gray-700">
          <HiOutlineBell className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <HiOutlineUser className="w-6 h-6 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">{user?.name}</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
