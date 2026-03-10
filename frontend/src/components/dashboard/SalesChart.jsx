import { HiOutlineChartBar } from 'react-icons/hi';

const SalesChart = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-2 p-5 border-b border-gray-100">
        <HiOutlineChartBar className="w-5 h-5 text-gray-400" />
        <h3 className="font-semibold text-gray-900">Grafik Penjualan</h3>
      </div>
      <div className="h-64 flex flex-col items-center justify-center text-center p-6">
        <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-3">
          <HiOutlineChartBar className="w-7 h-7 text-gray-300" />
        </div>
        <p className="text-sm text-gray-500">Grafik penjualan akan ditampilkan di sini.</p>
        <p className="text-xs text-gray-400 mt-1">Data grafik akan tersedia setelah ada transaksi.</p>
      </div>
    </div>
  );
};

export default SalesChart;
