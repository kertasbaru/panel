import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { login as loginApi } from '../../api/authApi';
import { useAuthStore } from '../../store/authSlice';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useState } from 'react';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      const { data } = await loginApi(formData);
      login(data.data.user, data.data.token, data.data.refreshToken);
      toast.success('Login berhasil!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login gagal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Masuk</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="nama@email.com"
          register={register}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Masukkan password"
          register={register}
          error={errors.password?.message}
        />
        <Button type="submit" loading={loading} className="w-full mt-2">
          Masuk
        </Button>
      </form>
      <div className="mt-4 text-center text-sm text-gray-600">
        <Link to="/forgot-password" className="text-primary-600 hover:underline">
          Lupa password?
        </Link>
      </div>
      <div className="mt-2 text-center text-sm text-gray-600">
        Belum punya akun?{' '}
        <Link to="/register" className="text-primary-600 hover:underline">
          Daftar
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
