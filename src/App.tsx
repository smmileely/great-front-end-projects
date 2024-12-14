import './App.css';
import coverPic from './assets/spacejoy-unsplash.jpg';
import { IoMdArrowForward } from 'react-icons/io';

function App() {
  return (
    <div className='h-[100vh] bg-gradient-to-b from-gray-50 to-[#d2d6db] pt-[200px] flex justify-center'>
      <div className='w-[340px] h-[504px] rounded-[8px] shadow-md bg-white'>
        <img
          className='w-[340px] h-[288px] rounded-t-[8px] object-cover'
          src={coverPic}
          alt='living-room'
        />
        <div className='w-[340px] h-[216px] py-[24px] px-[16px]'>
          <div className='text-sm bg-green-50 text-green-700 border border-green-200 rounded-full w-[67px] h-[24px] flex items-center justify-center'>
            Interior
          </div>
          <h2 className='text-neutral-900 text-[18px] font-semibold pt-2'>
            Top 5 Living Room Inspirations
          </h2>
          <p className='text-neutral-600 text-base pt-4'>
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <a
            href=''
            className='flex items-center gap-1.5 pt-6 text-base bg-white text-indigo-700'
          >
            <div className='w-[84px] h-[24px] px-[2px]'>Read more</div>
            <IoMdArrowForward className='w-[16px] h-[16px]' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
