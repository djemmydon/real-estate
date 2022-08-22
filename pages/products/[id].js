import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import PropertiesDetails from "../../Components/PageComponents/PropertyDetails/PropertyDetails";
import HeroForPage from "../../Components/Utils/Hero/HeroForPage";
import { client } from "../../lib/client";


function ProductDetails({ posts, trendingPosts }) {
  console.log(trendingPosts);
  return (
    <div>
      <HeroForPage name=" Home / Properties / Property Details" title="Property Details" />
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
    bathroom,
    bedroom,

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
