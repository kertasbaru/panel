import { APP_NAME } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-white/50 backdrop-blur-sm border-t border-gray-100 px-6 py-4 text-center">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
