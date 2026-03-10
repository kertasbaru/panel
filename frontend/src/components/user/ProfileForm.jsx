import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { useAuthStore } from '../../store/authSlice';
import { updateProfile } from '../../api/userApi';
import toast from 'react-hot-toast';

const ProfileForm = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await updateProfile(formData);
      setUser(data.data || { ...user, ...formData });
      toast.success('Profil berhasil diperbarui');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Gagal memperbarui profil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Input label="Nama Lengkap" name="name" value={formData.name} onChange={handleChange('name')} />
      <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange('email')} disabled />
      <Input label="No. Handphone" name="phone" value={formData.phone} onChange={handleChange('phone')} />
      <Button onClick={handleSubmit} loading={loading}>Simpan Perubahan</Button>
    </div>
  );
};

export default ProfileForm;
