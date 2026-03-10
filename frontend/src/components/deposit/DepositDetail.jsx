import Badge from '../common/Badge';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDateTime } from '../../utils/formatDate';
import { DEPOSIT_STATUS_LABEL } from '../../utils/constants';

const statusVariant = {
  pending: 'warning',
  paid: 'info',
  confirmed: 'success',
  expired: 'danger',
  cancelled: 'danger',
};

const DepositDetail = ({ deposit }) => {
  if (!deposit) return null;

  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-500">ID Deposit</span>
        <span className="font-medium">{deposit.id}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Jumlah</span>
        <span className="font-medium">{formatCurrency(deposit.amount)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Metode</span>
        <span className="font-medium">{deposit.method}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Status</span>
        <Badge variant={statusVariant[deposit.status] || 'info'}>
          {DEPOSIT_STATUS_LABEL[deposit.status] || deposit.status}
        </Badge>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Tanggal</span>
        <span className="font-medium">{formatDateTime(deposit.created_at)}</span>
      </div>
    </div>
  );
};

export default DepositDetail;
