import clsx from 'clsx';

const colorMap = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-600' },
  green: { bg: 'bg-green-50', text: 'text-green-600', gradient: 'from-green-500 to-emerald-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', gradient: 'from-purple-500 to-violet-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', gradient: 'from-orange-500 to-red-500' },
};

const StatCard = ({ title, value, icon: Icon, color = 'blue' }) => {
  const c = colorMap[color] || colorMap.blue;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={clsx('p-3 rounded-xl bg-gradient-to-br shadow-sm', c.gradient)}>
          {Icon && <Icon className="w-6 h-6 text-white" />}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
