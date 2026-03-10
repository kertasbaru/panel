import Table from '../common/Table';
import Badge from '../common/Badge';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatShortDate } from '../../utils/formatDate';
import { TRANSACTION_STATUS_LABEL } from '../../utils/constants';

const statusVariant = {
  pending: 'warning',
  processing: 'info',
  success: 'success',
  failed: 'danger',
  refunded: 'info',
};

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'product_name', label: 'Produk' },
  { key: 'customer_no', label: 'Nomor Tujuan' },
  {
    key: 'amount',
    label: 'Nominal',
    render: (row) => formatCurrency(row.amount),
  },
  {
    key: 'status',
    label: 'Status',
    render: (row) => (
      <Badge variant={statusVariant[row.status] || 'info'}>
        {TRANSACTION_STATUS_LABEL[row.status] || row.status}
      </Badge>
    ),
  },
  {
    key: 'created_at',
    label: 'Tanggal',
    render: (row) => formatShortDate(row.created_at),
  },
];

const TransactionList = ({ transactions = [], loading = false }) => {
  return <Table columns={columns} data={transactions} loading={loading} />;
};

export default TransactionList;
