import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';

interface BlogCardProps {
  image: string;
  tag: string;
  title: string;
  info: string;
  link: string;
  linkText: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  tag,
  title,
  info,
  link,
  linkText,
}) => {
  return (
    <div className='w-[340px] h-[504px] rounded-[8px] shadow-md bg-white'>
      <img
        className='w-[340px] h-[288px] rounded-t-[8px] object-cover'
        src={image}
        alt='living-room'
      />
      <div className='w-[340px] h-[216px] py-[24px] px-[16px]'>
        <div className='text-sm bg-green-50 text-green-700 border border-green-200 rounded-full w-[67px] h-[24px] flex items-center justify-center'>
          {tag}
        </div>
        <h2 className='text-neutral-900 text-[18px] font-semibold pt-2'>
          {title}
        </h2>
        <p className='text-neutral-600 text-base pt-4'>{info}</p>
        <a
          href={link}
          className='flex items-center gap-1.5 pt-6 text-base bg-white text-indigo-700'
        >
          <div className='w-[84px] h-[24px] px-[2px]'>{linkText}</div>
          <IoMdArrowForward className='w-[16px] h-[16px]' />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
