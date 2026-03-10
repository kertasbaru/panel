import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mt-4">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-600 mt-2">Maaf, halaman yang Anda cari tidak tersedia.</p>
        <Link
          to="/dashboard"
          className="inline-block mt-6 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
