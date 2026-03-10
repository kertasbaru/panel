import { motion } from 'framer-motion';
import Card from '../../components/common/Card';
import AnimatedPage, { staggerContainer, fadeInUp } from '../../components/common/AnimatedPage';
import { HiOutlineCog, HiOutlineAdjustments, HiOutlineCalendar } from 'react-icons/hi';

const SettingPage = () => {
  return (
    <AnimatedPage>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
          <HiOutlineCog className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Pengaturan</h2>
          <p className="text-sm text-gray-500">Konfigurasi sistem dan margin</p>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-4">
                <HiOutlineCog className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Pengaturan Umum</h3>
              <p className="text-gray-500 text-sm mt-1">Konfigurasi umum aplikasi. Segera hadir.</p>
            </div>
          </Card>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Card>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-4">
                <HiOutlineAdjustments className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Pengaturan Margin</h3>
              <p className="text-gray-500 text-sm mt-1">Konfigurasi margin dan komisi. Segera hadir.</p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatedPage>
  );
};

export default SettingPage;
