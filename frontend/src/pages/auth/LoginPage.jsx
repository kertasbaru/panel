import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { login as loginApi } from '../../api/authApi';
import { useAuthStore } from '../../store/authSlice';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineLockClosed, HiOutlineMail, HiOutlineLogin } from 'react-icons/hi';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      const { data } = await loginApi(formData);
      login(data.data.user, data.data.accessToken, data.data.refreshToken);
      toast.success('Login berhasil!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login gagal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-6">
        <div className="mx-auto w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
          <HiOutlineLogin className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Selamat Datang</h2>
        <p className="text-sm text-gray-500 mt-1">Masuk ke akun PPOB Anda</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        <div className="relative">
          <div className="absolute left-3 top-[38px] text-gray-400">
            <HiOutlineMail className="w-5 h-5" />
          </div>
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="nama@email.com"
            register={register}
            error={errors.email?.message}
            className="[&_input]:pl-10"
          />
        </div>
        <div className="relative">
          <div className="absolute left-3 top-[38px] text-gray-400">
            <HiOutlineLockClosed className="w-5 h-5" />
          </div>
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Masukkan password"
            register={register}
            error={errors.password?.message}
            className="[&_input]:pl-10"
          />
        </div>

        <div className="flex justify-end">
          <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors">
            Lupa password?
          </Link>
        </div>

        <Button type="submit" loading={loading} className="w-full !mt-4" size="lg">
          Masuk
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        Belum punya akun?{' '}
        <Link to="/register" className="font-semibold text-primary-600 hover:text-primary-700 transition-colors">
          Daftar Sekarang
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
