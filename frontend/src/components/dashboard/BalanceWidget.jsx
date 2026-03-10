import Card from '../common/Card';
import { formatCurrency } from '../../utils/formatCurrency';

const BalanceWidget = () => {
  return (
    <Card title="Saldo Anda">
      <div className="text-center py-4">
        <p className="text-3xl font-bold text-primary-600">{formatCurrency(0)}</p>
        <p className="text-sm text-gray-500 mt-2">Saldo tersedia</p>
      </div>
    </Card>
  );
};

export default BalanceWidget;
