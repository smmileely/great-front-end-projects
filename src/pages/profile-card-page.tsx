import ProfileCard from '../components/profile-card';
import profilePic from '../assets/profile.png';

const ProfileCardPage = () => {
  return (
    <div className='h-[100vh] bg-gradient-to-b from-gray-50 to-[#d2d6db] pt-[200px] flex justify-center'>
      <ProfileCard
        image={profilePic}
        name={'Sarah Dole'}
        jobTitle={'Front End Engineer @ Microsoft'}
        info={
          'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.'
        }
      />
    </div>
  );
};

export default ProfileCardPage;
