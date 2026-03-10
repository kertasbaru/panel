import Card from '../../components/common/Card';
import Table from '../../components/common/Table';
import Pagination from '../../components/common/Pagination';
import { useState } from 'react';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'amount', label: 'Jumlah' },
  { key: 'method', label: 'Metode' },
  { key: 'status', label: 'Status' },
  { key: 'created_at', label: 'Tanggal' },
];

const DepositHistoryPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Riwayat Deposit</h2>
      <Card>
        <Table columns={columns} data={[]} loading={false} />
        <Pagination currentPage={page} totalPages={1} onPageChange={setPage} />
      </Card>
    </div>
  );
};

export default DepositHistoryPage;
