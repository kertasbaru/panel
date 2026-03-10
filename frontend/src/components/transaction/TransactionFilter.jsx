import { useState } from 'react';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';

const TransactionFilter = ({ onFilter }) => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const handleFilter = () => {
    onFilter?.({ search, status });
  };

  return (
    <div className="flex flex-wrap items-end gap-4 mb-4">
      <div className="flex-1 min-w-[200px]">
        <SearchBar value={search} onChange={setSearch} placeholder="Cari transaksi..." />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Semua</option>
          <option value="pending">Menunggu</option>
          <option value="processing">Diproses</option>
          <option value="success">Berhasil</option>
          <option value="failed">Gagal</option>
        </select>
      </div>
      <Button onClick={handleFilter} size="md">
        Filter
      </Button>
    </div>
  );
};

export default TransactionFilter;
