import Card from '../../components/common/Card';
import UserList from '../../components/user/UserList';
import Button from '../../components/common/Button';
import SearchBar from '../../components/common/SearchBar';
import { useState } from 'react';

const UserManagementPage = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Manajemen User</h2>
        <Button>Tambah User</Button>
      </div>
      <Card>
        <div className="mb-4 max-w-sm">
          <SearchBar value={search} onChange={setSearch} placeholder="Cari user..." />
        </div>
        <UserList />
      </Card>
    </div>
  );
};

export default UserManagementPage;
