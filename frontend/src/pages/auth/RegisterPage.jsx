import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { register as registerApi } from '../../api/authApi';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineUserAdd, HiOutlineMail, HiOutlinePhone, HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi';

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const password = watch('password');

  const onSubmit = async (formData) => {
    if (formData.password !== formData.password_confirmation) {
      toast.error('Password dan konfirmasi password tidak cocok');
      return;
    }
    try {
      setLoading(true);
      await registerApi(formData);
      toast.success('Kode OTP telah dikirim ke email Anda');
      navigate('/verify-otp', { state: { email: formData.email } });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registrasi gagal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-6">
        <div className="mx-auto w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
          <HiOutlineUserAdd className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Buat Akun Baru</h2>
        <p className="text-sm text-gray-500 mt-1">Daftar untuk mulai menggunakan layanan PPOB</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        <div className="relative">
          <div className="absolute left-3 top-[38px] text-gray-400">
            <HiOutlineUser className="w-5 h-5" />
          </div>
          <Input
            label="Nama Lengkap"
            name="name"
            placeholder="Masukkan nama lengkap"
            register={register}
            error={errors.name?.message}
            className="[&_input]:pl-10"
          />
        </div>
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
            <HiOutlinePhone className="w-5 h-5" />
          </div>
          <Input
            label="No. Handphone"
            name="phone"
            placeholder="08xxxxxxxxxx"
            register={register}
            error={errors.phone?.message}
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
            placeholder="Minimal 8 karakter"
            register={register}
            error={errors.password?.message}
            className="[&_input]:pl-10"
          />
        </div>
        <div className="relative">
          <div className="absolute left-3 top-[38px] text-gray-400">
            <HiOutlineLockClosed className="w-5 h-5" />
          </div>
          <Input
            label="Konfirmasi Password"
            name="password_confirmation"
            type="password"
            placeholder="Ulangi password"
            register={register}
            error={errors.password_confirmation?.message}
            className="[&_input]:pl-10"
          />
        </div>

        <Button type="submit" loading={loading} className="w-full !mt-4" size="lg">
          Daftar Sekarang
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        Sudah punya akun?{' '}
        <Link to="/login" className="font-semibold text-primary-600 hover:text-primary-700 transition-colors">
          Masuk
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
