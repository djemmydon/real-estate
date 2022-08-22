import React from "react";
import { client } from "../../lib/client";
import dynamic from "next/dynamic";
import HeroForPage from "../../Components/Utils/Hero/HeroForPage";

const ProductPage = dynamic(
  () => import("../../Components/PageComponents/Products/Products"),
  { ssr: false }
);

function ForSale({ allProperty }) {
  return (
    <div>
      <HeroForPage
        name={` Home / Properties / Purpose `}
        title="All Properties"
      />

      <ProductPage property={allProperty} />
    </div>
  );
}

export default ForSale;

export const getStaticPaths = async () => {
  const query = `*[_type == 'purpose']{
        slug
     }`;

  const slugs = await client.fetch(query);

  const paths = slugs.map((item) => ({
    params: { slug: item.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const url1 = `*[_type == 'post' && references(*[_type=="purpose" && slug.current == "${slug}" ]._id) ] {
    title,
    price,
    extrasrc,
    mainImage,
    description,
    bathroom,
    bedroom,
    _createdAt,

    author -> {
      name,
      image,
    },
    _id,
  
   
    amenities[] -> {
      title,
    },

    categories -> {
      title,
    },

    purposes-> {
      title,
    },

  }`;

  const url2 = `*[_type == 'purpose']`;

  const data = await client.fetch(url1);
  const data1 = await client.fetch(url2);

  return {
    props: {
      allProperty: data,
    },
  };
};
