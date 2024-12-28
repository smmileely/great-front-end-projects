import { useState } from 'react';
import abstractImage from '../assets/abstract.jpg';
import { IoMdCheckmark } from 'react-icons/io';

const NewsLetterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear error message when input changes
    if (status.type === 'error' && (!email || !validateEmail(email))) {
      setStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    if (!email) {
      setStatus({
        type: 'error',
        message: 'Email address is required.',
      });
      return;
    }

    if (!validateEmail(email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        'https://www.greatfrontend.com/api/projects/challenges/newsletter',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setStatus({
          type: 'error',
          message:
            data.error ||
            'Failed to subscribe. Please ensure your email is correct or try again later.',
        });
        return;
      }

      setStatus({
        type: 'success',
        message: data.message,
      });
      setEmail('');
    } catch {
      setStatus({
        type: 'error',
        message: 'Failed to subscribe. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-[#d2d6db] flex flex-col items-center'>
      <div className='p-4 flex-1 flex items-center w-full relative'>
        {/* Status Messages */}
        {status.type && !(!email || !validateEmail(email)) && (
          <div className='fixed top-8 left-1/2 -translate-x-1/2 z-10'>
            <div
              className={`flex items-center gap-2 ${
                status.type === 'success' ? 'bg-green-50' : 'bg-red-50'
              } py-1 pl-1 pr-2.5 rounded-[2000px] shadow-sm`}
            >
              <div
                className={`bg-white shadow-sm rounded-full px-2 py-0.5 text-sm font-medium ${
                  status.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}
              >
                {status.type === 'success' ? 'Success' : 'Error'}
              </div>
              <p
                className={`text-sm ${
                  status.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}
              >
                {status.message}
              </p>
            </div>
          </div>
        )}

        <div className='bg-white w-full max-w-[1408px] min-h-[800px] rounded-[6px] p-8 md:p-16 lg:p-24 mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 h-full'>
            <div>
              <h1 className='text-[32px] md:text-[40px] lg:text-[48px] leading-tight font-semibold text-neutral-900'>
                Get the finest curated abstracts delivered weekly to your inbox
              </h1>

              <ul className='mt-8 space-y-4'>
                {[
                  'Exclusive access to new abstract images and collections',
                  'Unlock special promotions only for subscribers',
                  'Regular doses of artistic inspiration',
                ].map((feature, index) => (
                  <li key={index} className='flex items-start'>
                    <div className='relative h-5 w-5 mt-1 mr-3 flex-shrink-0'>
                      <div className='absolute inset-0 bg-indigo-50 rounded-full'></div>
                      <IoMdCheckmark className='relative z-10 h-5 w-5 text-indigo-500' />
                    </div>
                    <span className='text-neutral-500 text-base'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <form
                onSubmit={handleSubmit}
                className='mt-8 md:mt-12 lg:mt-[48px]'
              >
                <div className='flex gap-4'>
                  <input
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='Enter your email'
                    disabled={isLoading}
                    className={`w-[334px] h-10 px-4 rounded-[4px] border bg-neutral-50 ${
                      (!email || !validateEmail(email)) &&
                      status.type === 'error'
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  <button
                    type='submit'
                    disabled={isLoading}
                    className='bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-medium h-10 px-4 rounded-[6px] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center whitespace-nowrap'
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>

                {status.type === 'error' &&
                  (!email || !validateEmail(email)) && (
                    <div className='mt-2'>
                      <p className='text-sm text-red-600'>{status.message}</p>
                    </div>
                  )}
              </form>

              <p className='mt-4 text-sm text-gray-500'>
                We only send you the best! No spam.
              </p>
            </div>

            <div className='relative'>
              <div className='relative'>
                <img
                  src={abstractImage}
                  alt='Abstract art'
                  className='w-full rounded-[12px]'
                />
                <div className='absolute inset-0 translate-x-4 translate-y-4 -z-10 bg-gray-100 rounded-lg'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterPage;
