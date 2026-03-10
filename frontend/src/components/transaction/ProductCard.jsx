import { formatCurrency } from '../../utils/formatCurrency';

const ProductCard = ({ product, onSelect }) => {
  return (
    <div
      onClick={() => onSelect?.(product)}
      className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-500 hover:shadow-sm cursor-pointer transition-all"
    >
      <h4 className="font-medium text-gray-900">{product?.name || 'Produk'}</h4>
      <p className="text-sm text-gray-500 mt-1">{product?.description || ''}</p>
      <p className="text-lg font-bold text-primary-600 mt-2">
        {formatCurrency(product?.price || 0)}
      </p>
    </div>
  );
};

export default ProductCard;
