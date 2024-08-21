import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Banner from './components/Banner';
import MovieList from './components/MovieList';

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handSubmit = async (search) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchM = await fetch(url, options);
      const data = await searchM.json();
      console.log(data);
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
      const [res1, res2] = await Promise.all([
        fetch(url, options),
        fetch(url2, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className='bg-black pb-10'>
        <Header onSearch={handSubmit} />
        <Banner />
        {movieSearch.length > 0 ? (
          <MovieList title="Kết quả tìm kiếm" data={movieSearch} />
        ) : (
          <>
            <MovieList title={"Phim hot"} data={movie} />
            <MovieList title={"Phim đề cử"} data={movieRate} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
