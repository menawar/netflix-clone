import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Row from './components/Rows/Row';
import requests from './requests';

function App() {
  return (
    <div className="app">
        <Header />
        <Banner />
        <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
		    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
		    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
		    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
		    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
		    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
