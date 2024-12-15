import { FC } from 'react';
import 'remixicon/fonts/remixicon.css';

interface ProfileCardProps {
  image: string;
  name: string;
  jobTitle: string;
  info: string;
}

const ContactButton = () => {
  return (
    <a href=''>
      <button
        className='w-[308px] h-[44px] rounded-[4px] bg-indigo-700 text-white'
        type='button'
      >
        Contact Me
      </button>
    </a>
  );
};

const SocialLinks = () => {
  const links = [
    { href: 'https://github.com', icon: 'ri-github-fill' },
    { href: 'https://linkedin.com', icon: 'ri-linkedin-box-fill' },
    { href: 'https://instagram.com', icon: 'ri-instagram-fill' },
    { href: 'https://twitter.com', icon: 'ri-twitter-x-fill' },
  ];

  return (
    <div className='w-[308px] h-[36px] flex items-center justify-center gap-4 text-[20px] text-indigo-700'>
      {links.map(({ href, icon }, index) => (
        <a key={index} href={href} target='_blank' rel='noopener noreferrer'>
          <i className={`${icon} w-[30px] h-[30px]`}></i>
        </a>
      ))}
    </div>
  );
};

const ProfileCard: FC<ProfileCardProps> = ({ image, name, jobTitle, info }) => {
  return (
    <div className='w-[340px] h-[428px] rounded-[8px] py-[24px] px-[16px] flex flex-col items-center shadow-md bg-white'>
      <img className='w-[64px] h-[64px]' src={image} alt='profile-pic' />
      <div className='text-neutral-900 text-[20px] font-medium leading-[28px] pt-[24px]'>
        {name}
      </div>
      <h2 className='text-neutral-600 text-[14px] font-regular leading-[20px]'>
        {jobTitle}
      </h2>
      <p className='text-neutral-600 text-[16px] font-regular leading-[24px] pt-[24px] text-center'>
        {info}
      </p>
      <div className='w-[308px] h-[104px] pt-[40px] flex flex-col gap-6'>
        <ContactButton />
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProfileCard;
