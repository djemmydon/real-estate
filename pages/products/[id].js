import React from "react";
import PropertiesDetails from "../../Components/PageComponents/PropertyDetails/PropertyDetails";
import { client } from "../../lib/client";

function ProductDetails({ posts, trendingPosts }) {
  console.log(trendingPosts);
  return (
    <div>
      <PropertiesDetails
        propertyDetail={posts}
        trendingProperty={trendingPosts}
      />
    </div>
  );
}

export default ProductDetails;

export const getStaticPaths = async () => {
  const query = `*[_type == 'post']{
        _id
     }`;

  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: { id: post?._id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const query = `*[_type == 'post' && _id == '${id}'][0]{
   
    title,
    extrasrc,
    mainImage,
    description,

    author -> {
      name,
      image,
    },
    _id,
  
   
      amenities[] -> {
        title,
      }

     


  }`;
  const trending = `*[_type == 'post']`;
  const posts = await client.fetch(query);
  const trendingPosts = await client.fetch(trending);
  return {
    props: {
      posts,
      trendingPosts: trendingPosts.slice(0, 2),
    },
  };
};
