import React, { useState } from "react";
import { filterData, getFilterValues } from "./SearchData";
import { NotFound, SearchBody, SearchFLex, SearchSelect } from "./SearchStyle";
import { useRouter } from "next/router";
import { Card, Card2, Card3 } from "../../UI/Card/Card";
import { urlFor } from "../../../lib/client";
import Heading from "../../Utils/Heading/Heading";
import moment from "moment";

function SearchFilter({ property }) {
  const [filterSearch, setFilterSearch] = useState(filterData);

  const router = useRouter();

  const propertyFilterHandler = (filterValue) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValue);

    values.forEach((item) => {
      if (item.value && filterValue?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };
  return (
    <>

    
      <SearchBody>
      <Heading title="Search Properties." smallTtitle="" />

        <div className="search_heading">
          <h1>Search Poperty By:</h1>
        </div>

        <SearchFLex>
          {filterSearch.map((item) => (
            <SearchSelect key={item.queryName}>
              <select
           
                onChange={(e) =>
                  propertyFilterHandler({ [item.queryName]: e.target.value })
                }
              >
                <option>{item.placeholder}</option>
                {item.items?.map((filter) => (
                  <option key={filter.value} value={filter.value}>
                    {filter.name}
                  </option>
                ))}
              </select>
            </SearchSelect>
          ))}
        </SearchFLex>

        <SearchFLex>
          {property?.map((item) => (
            <Card3
              _id={item._id}
              key={item._id}
              src={urlFor(item.mainImage)}
              name={item.title}
              address={item.address}
              bedroom={item.bedroom}
              bathroom={item.bathroom}
              price={item.price.toLocaleString("en-US")}
              date={item.createdAt}
            />
          ))}
        </SearchFLex>

        <SearchFLex>
          {property?.length == 0 && (
            <NotFound>
              <div>
                <h1>No Property Found</h1>
              </div>
            </NotFound>
          )} 
        </SearchFLex>
      </SearchBody>
    </>
  );
}

export default SearchFilter;
