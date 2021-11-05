import Head from "next/head";
import { useState, useEffect } from "react";
import { fetchQuery } from "./utils/api_helper";
import MainContainer from "./components/main_container";

export default function Home({ miniSites }) {
  // const [answer, setAnswer] = useState("");
  // const [from, setFrom] = useState("C");
  // const [to, setTo] = useState("F");
  // const [temperature, setTemperature] = useState(1);
  // const [options, setOptions] = useState([]);
  useEffect(() => {
    // setOptions(getUniqueTemp(miniSites, "from"));
  }, [miniSites]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setAnswer(`${converter(miniSites, from, to, Number(temperature))} ${to}`);
  };

  return (
    <div>
      <Head>
        <title>Mini Sites</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
        />
        <link rel="stylesheet" href="/assets/css/carousel.css" />
      </Head>
      <MainContainer></MainContainer>
      {/* <script src="/assets/js/carousel.js"></script> */}
    </div>
  );
}
export async function getStaticProps() {
  const miniSites = await fetchQuery("mini-sites", "name=testing");
  return {
    props: {
      miniSites,
    },
  };
}
