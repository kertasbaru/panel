import Card from '../../components/common/Card';
import Table from '../../components/common/Table';
import SearchBar from '../../components/common/SearchBar';
import Pagination from '../../components/common/Pagination';
import { useState } from 'react';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'product_name', label: 'Produk' },
  { key: 'customer_no', label: 'Nomor Tujuan' },
  { key: 'amount', label: 'Nominal' },
  { key: 'status', label: 'Status' },
  { key: 'created_at', label: 'Tanggal' },
];

const TransactionHistoryPage = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Riwayat Transaksi</h2>
      <Card>
        <div className="mb-4 max-w-sm">
          <SearchBar value={search} onChange={setSearch} placeholder="Cari transaksi..." />
        </div>
        <Table columns={columns} data={[]} loading={false} />
        <Pagination currentPage={page} totalPages={1} onPageChange={setPage} />
      </Card>
    </div>
  );
};

export default TransactionHistoryPage;
