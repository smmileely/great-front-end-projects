import BlogCard from '../components/blog-card';
import coverPic from '../assets/spacejoy-unsplash.jpg';

const BlogCardPage = () => {
  return (
    <div className='h-[100vh] bg-gradient-to-b from-gray-50 to-[#d2d6db] pt-[120px] flex justify-center'>
      <BlogCard
        image={coverPic}
        tag={'Interior'}
        title={'Top 5 Living Room Inspirations'}
        info={
          'Curated vibrants colors for your living, make it pop & calm in the same time.'
        }
        link={''}
        linkText={'Read more'}
      />
    </div>
  );
};

export default BlogCardPage;
