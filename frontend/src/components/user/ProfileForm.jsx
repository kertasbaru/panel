import Input from '../common/Input';
import Button from '../common/Button';
import { useAuthStore } from '../../store/authSlice';

const ProfileForm = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="space-y-4">
      <Input label="Nama Lengkap" name="name" placeholder={user?.name || ''} />
      <Input label="Email" name="email" type="email" placeholder={user?.email || ''} />
      <Input label="No. Handphone" name="phone" placeholder={user?.phone || ''} />
      <Button>Simpan Perubahan</Button>
    </div>
  );
};

export default ProfileForm;
