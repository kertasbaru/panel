import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { register as registerApi } from '../../api/authApi';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useState } from 'react';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      await registerApi(formData);
      toast.success('Registrasi berhasil! Silakan login.');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registrasi gagal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Daftar Akun</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nama Lengkap" name="name" placeholder="Masukkan nama lengkap" register={register} error={errors.name?.message} />
        <Input label="Email" name="email" type="email" placeholder="nama@email.com" register={register} error={errors.email?.message} />
        <Input label="No. Handphone" name="phone" placeholder="08xxxxxxxxxx" register={register} error={errors.phone?.message} />
        <Input label="Password" name="password" type="password" placeholder="Minimal 8 karakter" register={register} error={errors.password?.message} />
        <Input label="Konfirmasi Password" name="password_confirmation" type="password" placeholder="Ulangi password" register={register} error={errors.password_confirmation?.message} />
        <Button type="submit" loading={loading} className="w-full mt-2">
          Daftar
        </Button>
      </form>
      <div className="mt-4 text-center text-sm text-gray-600">
        Sudah punya akun?{' '}
        <Link to="/login" className="text-primary-600 hover:underline">
          Masuk
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
