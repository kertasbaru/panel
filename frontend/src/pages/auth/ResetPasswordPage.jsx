import { useForm } from 'react-hook-form';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { resetPassword } from '../../api/authApi';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineLockClosed } from 'react-icons/hi';

const ResetPasswordPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');

  if (!token) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Link Tidak Valid</h2>
        <p className="text-gray-600 mb-6">Link reset password tidak valid atau sudah kedaluwarsa.</p>
        <Link to="/forgot-password" className="text-primary-600 hover:underline">
          Minta link reset baru
        </Link>
      </div>
    );
  }

  const onSubmit = async (formData) => {
    if (formData.password.length < 8) {
      toast.error('Password minimal 8 karakter');
      return;
    }
    if (formData.password !== formData.password_confirmation) {
      toast.error('Password dan konfirmasi password tidak cocok');
      return;
    }
    try {
      setLoading(true);
      await resetPassword({ token, password: formData.password });
      toast.success('Password berhasil direset. Silakan login.');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Gagal mereset password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-6">
        <div className="mx-auto w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
          <HiOutlineLockClosed className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
        <p className="text-sm text-gray-500 mt-1">Masukkan password baru Anda</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        <Input
          label="Password Baru"
          name="password"
          type="password"
          placeholder="Minimal 8 karakter"
          register={register}
          error={errors.password?.message}
        />
        <Input
          label="Konfirmasi Password"
          name="password_confirmation"
          type="password"
          placeholder="Ulangi password baru"
          register={register}
          error={errors.password_confirmation?.message}
        />

        <Button type="submit" loading={loading} className="w-full !mt-4" size="lg">
          Reset Password
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <Link to="/login" className="text-primary-600 hover:underline">
          Kembali ke login
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
