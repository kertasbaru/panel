import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { verifyOTP, resendOTP } from '../../api/authApi';
import { useAuthStore } from '../../store/authSlice';
import Button from '../../components/common/Button';
import toast from 'react-hot-toast';
import { HiOutlineMail, HiOutlineRefresh } from 'react-icons/hi';

const VerifyOTPPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const inputRefs = useRef(Array(6).fill(null));
  const location = useLocation();
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      navigate('/register');
    }
  }, [email, navigate]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted.length === 6) {
      const newOtp = pasted.split('');
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      toast.error('Masukkan 6 digit kode OTP');
      return;
    }

    try {
      setLoading(true);
      const { data } = await verifyOTP({ email, otp: otpString });
      login(data.data.user, data.data.accessToken, data.data.refreshToken);
      toast.success('Verifikasi berhasil! Selamat datang.');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Verifikasi gagal');
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      setResending(true);
      await resendOTP({ email });
      toast.success('Kode OTP baru telah dikirim');
      setCountdown(60);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Gagal mengirim ulang OTP');
    } finally {
      setResending(false);
    }
  };

  if (!email) return null;

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
          <HiOutlineMail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Verifikasi Email</h2>
        <p className="text-sm text-gray-500 mt-2">
          Kami telah mengirim kode OTP ke
        </p>
        <p className="text-sm font-semibold text-primary-600">{email}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="w-12 h-14 text-center text-xl font-bold border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 bg-gray-50 hover:bg-white"
            />
          ))}
        </div>

        <Button type="submit" loading={loading} className="w-full" size="lg">
          Verifikasi
        </Button>
      </form>

      <div className="mt-6 text-center">
        {countdown > 0 ? (
          <p className="text-sm text-gray-500">
            Kirim ulang kode dalam{' '}
            <span className="font-semibold text-primary-600">{countdown}s</span>
          </p>
        ) : (
          <button
            onClick={handleResend}
            disabled={resending}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors disabled:opacity-50"
          >
            <HiOutlineRefresh className={`w-4 h-4 ${resending ? 'animate-spin' : ''}`} />
            Kirim Ulang Kode
          </button>
        )}
      </div>

      <div className="mt-4 text-center">
        <Link to="/register" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
          ← Kembali ke halaman daftar
        </Link>
      </div>
    </div>
  );
};

export default VerifyOTPPage;
