import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-react';

const Notification = ({ type, title, message, onClose }) => {
  const getNotificationStyles = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          iconColor: 'text-green-600',
          iconBg: 'bg-green-100',
          titleColor: 'text-green-800',
          messageColor: 'text-green-700'
        };
      case 'error':
        return {
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          iconColor: 'text-red-600',
          iconBg: 'bg-red-100',
          titleColor: 'text-red-800',
          messageColor: 'text-red-700'
        };
      case 'info':
        return {
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          iconColor: 'text-blue-600',
          iconBg: 'bg-blue-100',
          titleColor: 'text-blue-800',
          messageColor: 'text-blue-700'
        };
      case 'warning':
        return {
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          iconColor: 'text-yellow-600',
          iconBg: 'bg-yellow-100',
          titleColor: 'text-yellow-800',
          messageColor: 'text-yellow-700'
        };
      default:
        return {
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          iconColor: 'text-gray-600',
          iconBg: 'bg-gray-100',
          titleColor: 'text-gray-800',
          messageColor: 'text-gray-700'
        };
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'error':
        return <XCircle className="w-5 h-5" />;
      case 'info':
        return <Info className="w-5 h-5" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const styles = getNotificationStyles();

  return (
    <div className={`${styles.bgColor} ${styles.borderColor} border rounded-lg p-4 flex items-start gap-3 transform transition-all duration-300 hover:scale-105 hover:shadow-md`}>
      <div className={`${styles.iconBg} ${styles.iconColor} p-2 rounded-full flex-shrink-0`}>
        {getIcon()}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className={`font-semibold ${styles.titleColor} text-sm mb-1`}>{title}</h4>
        <p className={`${styles.messageColor} text-sm leading-relaxed`}>{message}</p>
      </div>
      <button
        onClick={onClose}
        className={`${styles.iconColor} hover:bg-opacity-20 hover:bg-current rounded-full p-1 transition-colors duration-200 transform hover:scale-110`}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Notification;
