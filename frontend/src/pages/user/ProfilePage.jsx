import { motion } from 'framer-motion';
import Card from '../../components/common/Card';
import ProfileForm from '../../components/user/ProfileForm';
import ChangePasswordForm from '../../components/user/ChangePasswordForm';
import AnimatedPage, { fadeInUp } from '../../components/common/AnimatedPage';
import { HiOutlineUser } from 'react-icons/hi';

const ProfilePage = () => {
  return (
    <AnimatedPage>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <HiOutlineUser className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Profil Saya</h2>
          <p className="text-sm text-gray-500">Kelola informasi profil dan keamanan akun</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <Card title="Informasi Profil">
            <ProfileForm />
          </Card>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.15 }}>
          <Card title="Ubah Password">
            <ChangePasswordForm />
          </Card>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default ProfilePage;
