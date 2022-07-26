import Head from "next/head";
import {
  Cities,
  Feature,
} from "../Components/PageComponents/Home/Feature/Feature";
import { Hero, Provide } from "../Components/PageComponents/Home/Hero/Hero";
import { client } from "./lib/client";

export default function Home({allProperty}) {
  console.log(allProperty);
  return (
    <div>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Website " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Feature  home={allProperty}/>
        <Provide />
        <Cities />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const url1 = ` *[_type == 'post']`;

  const data = await client.fetch(url1);

  return{
    props :{
    allProperty: data.slice(0, 4)
    }
  }
};
