import clsx from 'clsx';

const Card = ({ children, title, className }) => {
  return (
    <div className={clsx('bg-white rounded-2xl shadow-sm border border-gray-100', className)}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
    </div>
  );
};

export default Card;
