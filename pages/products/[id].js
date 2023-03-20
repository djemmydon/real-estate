import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import PropertiesDetails from "../../Components/PageComponents/PropertyDetails/PropertyDetails";
import HeroForPage from "../../Components/Utils/Hero/HeroForPage";
import { client } from "../../lib/client";
import GoogleMapReact from "google-map-react";

function ProductDetails({ posts, trendingPosts }) {
  const coodinat = { lat: 0, lng: 0 };
  console.log(trendingPosts);
  return (
    <div>
      <HeroForPage
        name=" Home / Properties / Property Details"
        title="Property Details"
      />
      <PropertiesDetails
        propertyDetail={posts}
        trendingProperty={trendingPosts}
      />

      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coodinat}
        center={coodinat}
        defaultZoom={14}
        option={""}
        margin={[50, 50]}
      ></GoogleMapReact>
      
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
