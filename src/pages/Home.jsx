import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="2" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowId="3" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowId="4" title="On The Air" fetchURL={requests.requestNowPlaying} />
      <Row rowId="5" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowId="6" title="Horror" fetchURL={requests.requestUpcoming} />
    </>
  );
};

export default Home;
