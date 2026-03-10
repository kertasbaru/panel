import Table from '../common/Table';
import Badge from '../common/Badge';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatShortDate } from '../../utils/formatDate';
import { DEPOSIT_STATUS_LABEL } from '../../utils/constants';

const statusVariant = {
  pending: 'warning',
  paid: 'info',
  confirmed: 'success',
  expired: 'danger',
  cancelled: 'danger',
};

const columns = [
  { key: 'id', label: 'ID' },
  {
    key: 'amount',
    label: 'Jumlah',
    render: (row) => formatCurrency(row.amount),
  },
  { key: 'method', label: 'Metode' },
  {
    key: 'status',
    label: 'Status',
    render: (row) => (
      <Badge variant={statusVariant[row.status] || 'info'}>
        {DEPOSIT_STATUS_LABEL[row.status] || row.status}
      </Badge>
    ),
  },
  {
    key: 'created_at',
    label: 'Tanggal',
    render: (row) => formatShortDate(row.created_at),
  },
];

const DepositList = ({ deposits = [], loading = false }) => {
  return <Table columns={columns} data={deposits} loading={loading} />;
};

export default DepositList;
