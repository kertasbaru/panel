import { Outlet } from 'react-router-dom';
import { APP_NAME } from '../../utils/constants';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-primary-600 mb-8">{APP_NAME}</h1>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
