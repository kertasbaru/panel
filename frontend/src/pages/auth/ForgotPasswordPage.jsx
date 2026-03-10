import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../../api/authApi';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ForgotPasswordPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      await forgotPassword(formData);
      setSent(true);
      toast.success('Link reset password telah dikirim ke email Anda.');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Gagal mengirim link reset');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Terkirim</h2>
        <p className="text-gray-600 mb-6">Silakan cek email Anda untuk link reset password.</p>
        <Link to="/login" className="text-primary-600 hover:underline">
          Kembali ke halaman login
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Lupa Password</h2>
      <p className="text-sm text-gray-600 mb-6">Masukkan email Anda untuk menerima link reset password.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" name="email" type="email" placeholder="nama@email.com" register={register} error={errors.email?.message} />
        <Button type="submit" loading={loading} className="w-full mt-2">
          Kirim Link Reset
        </Button>
      </form>
      <div className="mt-4 text-center text-sm text-gray-600">
        <Link to="/login" className="text-primary-600 hover:underline">
          Kembali ke login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
