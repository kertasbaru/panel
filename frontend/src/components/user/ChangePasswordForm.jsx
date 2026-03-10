import Input from '../common/Input';
import Button from '../common/Button';

const ChangePasswordForm = () => {
  return (
    <div className="space-y-4">
      <Input label="Password Lama" name="current_password" type="password" placeholder="Masukkan password lama" />
      <Input label="Password Baru" name="new_password" type="password" placeholder="Masukkan password baru" />
      <Input label="Konfirmasi Password Baru" name="confirm_password" type="password" placeholder="Ulangi password baru" />
      <Button>Ubah Password</Button>
    </div>
  );
};

export default ChangePasswordForm;
