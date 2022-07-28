import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchFilter from "../Components/PageComponents/Search/SearchFilter";
import { Card } from "../Components/UI/Card/Card";
import { client, urlFor } from "../lib/client";

const prices = [
  {
    name: "$1 to $50",
    value: "1-50",
  },
  {
    name: "$51 to $200",
    value: "51-200",
  },
  {
    name: "$201 to $1000",
    value: "50000-300000",
  },
];

const ratings = [1, 2, 3, 4, 5];

function Search({ allProperty }) {
  const router = useRouter();
  // const {
  //   category = "all",
  //   query = "all",
  //   price = "all",
  //   rating = "all",
  //   sort = "default",
  // } = router.query;
  // const [state, setState] = useState({
  //   categories: [],
  //   products: [],
  //   error: "",
  //   loading: true,
  // });

  // const { loading, products, error } = state;
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/products/categories`);
  //       setCategories(data);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };
  //   fetchCategories();

  //   const fetchData = async () => {
  //     try {
  //       let gQuery = '*[_type == "post"';
  //       if (category !== "all") {
  //         gQuery += ` && category match "${category}" `;
  //       }
  //       if (query !== "all") {
  //         gQuery += ` && name match "${query}" `;
  //       }
  //       if (price !== "all") {
  //         const minPrice = Number(price.split("-")[0]);
  //         const maxPrice = Number(price.split("-")[1]);
  //         gQuery += ` && price >= ${minPrice} && price <= ${maxPrice}`;
  //       }
  //       if (rating !== "all") {
  //         gQuery += ` && rating >= ${Number(rating)} `;
  //       }
  //       let order = "";
  //       if (sort !== "default") {
  //         if (sort === "lowest") order = "| order(price asc)";
  //         if (sort === "highest") order = "| order(price desc)";
  //         if (sort === "toprated") order = "| order(rating desc)";
  //       }

  //       gQuery += `] ${order}`;
  //       setState({ loading: true });

  //       const products = await client.fetch(gQuery);
  //       setState({ products, loading: false });
  //     } catch (err) {
  //       setState({ error: err.message, loading: false });
  //     }
  //   };
  //   fetchData();
  // }, [category, price, query, rating, sort]);

  // const filterSearch = ({ category, sort, searchQuery, price, rating }) => {
  //   const path = router.pathname;
  //   const { query } = router;
  //   if (searchQuery) query.searchQuery = searchQuery;
  //   if (category) query.category = category;
  //   if (sort) query.sort = sort;
  //   if (price) query.price = price;
  //   if (rating) query.rating = rating;

  //   router.push({
  //     pathname: path,
  //     query: query,
  //   });
  // };
  // const categoryHandler = (e) => {
  //   filterSearch({ category: e.target.value });
  // };
  // const sortHandler = (e) => {
  //   filterSearch({ sort: e.target.value });
  // };
  // const priceHandler = (e) => {
  //   filterSearch({ price: e.target.value });
  // };
  // const ratingHandler = (e) => {
  //   filterSearch({ rating: e.target.value });
  // };

  console.log(allProperty);
  return <div>{SearchFilter && <SearchFilter property={allProperty} />}</div>;
}

export default Search;

export const getServerSideProps = async ({ query }) => {
  const purpose = query.purpose || "For Rent";
  // const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.price || 0;
  const maxPrice = query.maxPrice || 1000000;
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  // const areaMax = query.areaMax || '35000';
  // const locationExternalIDs = query.locationExternalIDs || '5002';
  // const categoryExternalID = query.categoryExternalID || '4';

  const url1 = ` *[_type == 'post'  && price >= ${minPrice} && price <= ${maxPrice} && bedroom >= ${roomsMin}  && bathroom >=${bathsMin}    ] {
    
    title,
    extrasrc,
    mainImage,
    description,
    price,
    bathroom,
    bedroom,
    address,
 _id,
  

    author -> {
      name,
      image,
    },
   
   
      category[] -> {
        title,
      },

      
      purposes[] -> {
        title,
      },


      amenities[] -> {
        title,
      },

     


  
  }`;

  const data = await client.fetch(url1);

  return {
    props: {
      allProperty: data,
    },
  };
};
