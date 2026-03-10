import Badge from '../common/Badge';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDateTime } from '../../utils/formatDate';
import { TRANSACTION_STATUS_LABEL } from '../../utils/constants';

const statusVariant = {
  pending: 'warning',
  processing: 'info',
  success: 'success',
  failed: 'danger',
  refunded: 'info',
};

const TransactionDetail = ({ transaction }) => {
  if (!transaction) return null;

  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-500">ID Transaksi</span>
        <span className="font-medium">{transaction.id}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Produk</span>
        <span className="font-medium">{transaction.product_name}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Nomor Tujuan</span>
        <span className="font-medium">{transaction.customer_no}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Nominal</span>
        <span className="font-medium">{formatCurrency(transaction.amount)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Status</span>
        <Badge variant={statusVariant[transaction.status] || 'info'}>
          {TRANSACTION_STATUS_LABEL[transaction.status] || transaction.status}
        </Badge>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Tanggal</span>
        <span className="font-medium">{formatDateTime(transaction.created_at)}</span>
      </div>
    </div>
  );
};

export default TransactionDetail;
