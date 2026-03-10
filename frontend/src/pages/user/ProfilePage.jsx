import Card from '../../components/common/Card';
import ProfileForm from '../../components/user/ProfileForm';
import ChangePasswordForm from '../../components/user/ChangePasswordForm';

const ProfilePage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Profil Saya</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Informasi Profil">
          <ProfileForm />
        </Card>
        <Card title="Ubah Password">
          <ChangePasswordForm />
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
