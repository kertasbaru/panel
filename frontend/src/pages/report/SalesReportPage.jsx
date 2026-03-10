import { motion } from 'framer-motion';
import Card from '../../components/common/Card';
import AnimatedPage, { fadeInUp } from '../../components/common/AnimatedPage';
import { HiOutlineChartBar, HiOutlineCalendar } from 'react-icons/hi';

const SalesReportPage = () => {
  return (
    <AnimatedPage>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
          <HiOutlineChartBar className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Laporan Penjualan</h2>
          <p className="text-sm text-gray-500">Analisis performa penjualan</p>
        </div>
      </div>

      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <Card>
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-4">
              <HiOutlineCalendar className="w-8 h-8 text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Segera Hadir</h3>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Fitur laporan penjualan sedang dalam pengembangan. Anda akan bisa melihat grafik dan statistik penjualan secara detail.
            </p>
          </div>
        </Card>
      </motion.div>
    </AnimatedPage>
  );
};

export default SalesReportPage;
