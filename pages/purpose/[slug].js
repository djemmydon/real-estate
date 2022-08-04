import React from "react";
import ProductPage from "../../Components/PageComponents/Products/Products";
import { client } from "../../lib/client";

function ForSale({ allProperty }) {
  return (
    <div>
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
  const url1 = `*[_type == 'post' && references(*[_type=="purpose" && slug.current == "${slug}" ]._id) ]`;

  const data = await client.fetch(url1);

  return {
    props: {
      allProperty: data,
    },
  };
};
