import Card from '../../components/common/Card';

const SettingPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Pengaturan</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Pengaturan Umum">
          <p className="text-gray-500">Konfigurasi umum aplikasi. Fitur dalam pengembangan.</p>
        </Card>
        <Card title="Pengaturan Margin">
          <p className="text-gray-500">Konfigurasi margin dan komisi. Fitur dalam pengembangan.</p>
        </Card>
      </div>
    </div>
  );
};

export default SettingPage;
