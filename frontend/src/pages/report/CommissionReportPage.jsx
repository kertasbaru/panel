import { motion } from 'framer-motion';
import Card from '../../components/common/Card';
import AnimatedPage, { fadeInUp } from '../../components/common/AnimatedPage';
import { HiOutlineCurrencyDollar, HiOutlineCalendar } from 'react-icons/hi';

const CommissionReportPage = () => {
  return (
    <AnimatedPage>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
          <HiOutlineCurrencyDollar className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Laporan Komisi</h2>
          <p className="text-sm text-gray-500">Lihat laporan komisi agen dan member</p>
        </div>
      </div>

      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <Card>
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-4">
              <HiOutlineCalendar className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Segera Hadir</h3>
            <p className="text-gray-500 text-sm mt-1 max-w-md">
              Fitur laporan komisi sedang dalam pengembangan. Anda akan bisa melihat detail komisi agen dan member.
            </p>
          </div>
        </Card>
      </motion.div>
    </AnimatedPage>
  );
};

export default CommissionReportPage;
