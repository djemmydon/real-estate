import React from "react";
import { Card, Card2 } from "../../../Components/UI/Card/Card";
import { client } from "../../../lib/client";

function AllCategory({ posts, trendingPosts }) {
  console.log(trendingPosts.title);
  return (
    <div>
      {posts.map((item) => (
        <div key={item._id}>
      <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default AllCategory;

export const getStaticPaths = async () => {
  const query = `*[_type == 'category']{
        title
     }`;

  const cate = await client.fetch(query);

  const paths = cate.map((post) => ({
    params: { title: post?.title },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { title } }) => {
  const query = `*[_type == 'post' && references(*[_type=="category" && title == "${title}" ]._id)]`;

  const trending = `*[_type == 'category' && title == '${title}']`;
  // const trending = `*[_type == 'post']`;
  const posts = await client.fetch(query);
  const trendingPosts = await client.fetch(trending);
  return {
    props: {
      posts,
      trendingPosts: trendingPosts,
    },
  };
};
