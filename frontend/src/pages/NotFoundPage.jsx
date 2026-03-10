import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineHome } from 'react-icons/hi';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
        >
          <h1 className="text-[10rem] md:text-[12rem] font-bold leading-none bg-gradient-to-br from-primary-400 to-purple-600 bg-clip-text text-transparent select-none">
            404
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mt-2">Halaman Tidak Ditemukan</h2>
          <p className="text-gray-500 mt-2 max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <HiOutlineHome className="w-5 h-5" />
            Kembali ke Dashboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
