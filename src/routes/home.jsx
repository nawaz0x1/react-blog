import { useEffect, useState } from 'react';
import { getPost } from '../utils/utils';
const Home = () => {
  const [posts, setPosts] = useState([{}]);
  useEffect(() => {
    const helper = async () => {
      const data = await getPost();
      setPosts(data);
      data.reverse();
    };
    helper();
  }, []);
  console.log(posts);
  return (
    <div className="flex flex-col items-center gap-4">
      {posts.map((post) => {
        const { id, title, description } = post;
        return (
          <div key={id} className="shadow-lg flex flex-col sm:flex-row ">
            <img
              className="object-fill w-full rounded-t-lg w-screen h-52 sm:h-auto sm:w-48 md:rounded-none md:rounded-l-lg"
              src={`https://picsum.photos/seed/${title}/700/950`}
              alt=""
            />
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
            >
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">{description}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
