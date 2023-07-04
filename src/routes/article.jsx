import { useParams } from 'react-router-dom';
import { getPostByID } from '../utils/utils';
import { useEffect, useState } from 'react';

const Article = () => {
  const [article, setArticle] = useState({
    title: '',
    description: '',
    post: '',
  });
  const { id } = useParams();
  const { title, post } = article;
  const postFetcher = async () => {
    const { data, error } = await getPostByID(id);
    setArticle(error ? false : data[0]);
  };

  useEffect(() => {
    postFetcher();
  }, []);

  if (!article.title)
    return (
      <section className="flex items-center mx-auto">
        <h1 className="text-3xl"> Loading </h1>
      </section>
    );

  return (
    <section className="flex flex-col container items-center mx-auto justify-center gap-4">
      <h1 className="text-2xl">{title}</h1>
      <div>
        <img
          className="min-w-max h-60 aspect-video"
          src={`https://picsum.photos/seed/${title}/700/950`}
          alt=""
        />
      </div>
      <div>
        <p>{post}</p>
      </div>
    </section>
  );
};

export default Article;
