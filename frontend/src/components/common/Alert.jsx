import clsx from 'clsx';
import { HiX, HiInformationCircle, HiCheckCircle, HiExclamation, HiXCircle } from 'react-icons/hi';

const typeStyles = {
  info: 'bg-blue-50 text-blue-800 border-blue-200',
  success: 'bg-green-50 text-green-800 border-green-200',
  warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
  error: 'bg-red-50 text-red-800 border-red-200',
};

const typeIcons = {
  info: HiInformationCircle,
  success: HiCheckCircle,
  warning: HiExclamation,
  error: HiXCircle,
};

const Alert = ({ type = 'info', message, onClose }) => {
  const Icon = typeIcons[type];

  return (
    <div className={clsx('flex items-center gap-3 px-4 py-3 rounded-lg border', typeStyles[type])}>
      <Icon className="w-5 h-5 flex-shrink-0" />
      <p className="text-sm flex-1">{message}</p>
      {onClose && (
        <button onClick={onClose} className="flex-shrink-0 hover:opacity-70">
          <HiX className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Alert;
