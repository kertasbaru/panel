import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { changePassword } from '../../api/userApi';
import toast from 'react-hot-toast';

const ChangePasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  });

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (formData.new_password !== formData.confirm_password) {
      toast.error('Password baru dan konfirmasi tidak cocok');
      return;
    }
    if (formData.new_password.length < 8) {
      toast.error('Password baru minimal 8 karakter');
      return;
    }
    try {
      setLoading(true);
      await changePassword({
        current_password: formData.current_password,
        new_password: formData.new_password,
      });
      toast.success('Password berhasil diubah');
      setFormData({ current_password: '', new_password: '', confirm_password: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Gagal mengubah password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Input label="Password Lama" name="current_password" type="password" placeholder="Masukkan password lama" value={formData.current_password} onChange={handleChange('current_password')} />
      <Input label="Password Baru" name="new_password" type="password" placeholder="Masukkan password baru" value={formData.new_password} onChange={handleChange('new_password')} />
      <Input label="Konfirmasi Password Baru" name="confirm_password" type="password" placeholder="Ulangi password baru" value={formData.confirm_password} onChange={handleChange('confirm_password')} />
      <Button onClick={handleSubmit} loading={loading}>Ubah Password</Button>
    </div>
  );
};

export default ChangePasswordForm;
