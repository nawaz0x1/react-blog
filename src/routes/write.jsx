import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';
import { blogPost } from '../utils/utils';

const defaultData = {
  title: '',
  description: '',
  thumbnail: '',
  post: '',
};

const Write = () => {
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const [data, setData] = useState(defaultData);
  const { title, description, thumbnail, post } = data;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const submitHandler = async () => {
    await blogPost(data);
    navigate('/');
  };

  return (
    <div className="p-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 container md:max-w-screen-md">
          <div className="flex gap-3 px-4 py-2 bg-white rounded-t-lg border-solid border-b-slate-900">
            <input
              id="title"
              value={title}
              onChange={changeHandler}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0"
              placeholder="Title"
              required
            />
          </div>
          <div className="flex  gap-3 px-4 py-2 bg-white rounded-t-lg  border-solid border-b-slate-900">
            <input
              id="description"
              value={description}
              onChange={changeHandler}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0  focus:ring-0 "
              placeholder="Description"
              required
            />
          </div>
          <div className="flex gap-3 px-4 py-2 bg-white rounded-t-lg border-solid border-b-slate-900">
            <label className="text-sm text-slate-400">Thumbnail</label>
            <input
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0 "
              id="thumbnail"
              type="file"
              value={thumbnail}
              onChange={changeHandler}
            />
          </div>
          <div className="flex gap-3 px-4 py-2 bg-white rounded-t-lg border-solid border-b-slate-900">
            <textarea
              id="post"
              value={post}
              onChange={changeHandler}
              rows={4}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0 "
              placeholder="Write a comment..."
              required=""
            />
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t ">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Write;
