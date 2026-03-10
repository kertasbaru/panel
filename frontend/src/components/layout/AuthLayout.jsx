import { Outlet } from 'react-router-dom';
import { APP_NAME } from '../../utils/constants';
import { HiOutlineLightningBolt } from 'react-icons/hi';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - branding panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/5 animate-float" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] rounded-full bg-white/5 animate-float-delayed" />
        <div className="absolute top-[40%] left-[60%] w-[25%] h-[25%] rounded-full bg-white/5 animate-pulse-slow" />

        <div className="relative z-10 flex flex-col justify-center items-center w-full px-12 text-white">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 shadow-2xl border border-white/20">
            <HiOutlineLightningBolt className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center">{APP_NAME}</h1>
          <p className="text-lg text-white/80 text-center max-w-md leading-relaxed">
            Platform pembayaran digital terpercaya untuk pulsa, paket data, token listrik, dan berbagai layanan PPOB lainnya.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-white/60 mt-1">Produk</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-white/60 mt-1">Layanan</div>
            </div>
            <div>
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-sm text-white/60 mt-1">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - auth form */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center">
                <HiOutlineLightningBolt className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">{APP_NAME}</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 border border-gray-100">
            <Outlet />
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
