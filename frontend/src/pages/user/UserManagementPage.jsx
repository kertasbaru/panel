import Card from '../../components/common/Card';
import UserList from '../../components/user/UserList';
import Button from '../../components/common/Button';
import SearchBar from '../../components/common/SearchBar';
import AnimatedPage, { fadeInUp } from '../../components/common/AnimatedPage';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiOutlineUsers, HiOutlinePlus } from 'react-icons/hi';

const UserManagementPage = () => {
  const [search, setSearch] = useState('');

  return (
    <AnimatedPage>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
            <HiOutlineUsers className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Manajemen User</h2>
            <p className="text-sm text-gray-500">Kelola semua pengguna platform</p>
          </div>
        </div>
        <Button className="!rounded-xl">
          <HiOutlinePlus className="w-4 h-4 mr-1" />
          Tambah User
        </Button>
      </div>

      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <Card>
          <div className="mb-4 max-w-sm">
            <SearchBar value={search} onChange={setSearch} placeholder="Cari user..." />
          </div>
          <UserList />
        </Card>
      </motion.div>
    </AnimatedPage>
  );
};

export default UserManagementPage;
