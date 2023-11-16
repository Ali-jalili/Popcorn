import { useEffect, useState } from "react";
import './App.css'
import NavBar from './Components/NavBar'
import NumResults from './Components/NumResults'
import Main from "./Components/Main";
import Box from "./Components/Box";
import MovieList from "./Components/MovieList";
import WatchedMoviesList from "./Components/WatchedMoviesList";
import WatchedSummary from "./Components/WatchedSummary";
import Loader from "./Components/Loader";
import Error from "./Components/Error";
/**
 * The main component of the application.
 * @returns The JSX code for rendering the application.
 */

export default function App() {

  const [movies, setMovis] = useState([]);
  const [watched] = useState([]);
  const [isloading, setloading] = useState(false);
  const [error, setError] = useState("")

  useEffect(() => {


    async function fetchMovis() {

      try {
        setloading(true)
        const res = await fetch(`https://api.tvmaze.com/shows/82/episodes`);

        if (!res.ok) throw new Error("Error");

        const data = await res.json()
        setMovis(data)
        console.log(data);

      }
      catch (err) {
        console.log(err.message);
        setError(err.message)
      }
      finally {
        setloading(false)

      }

    }

    fetchMovis()

  }, [])


  return (
    <>
      <NavBar>

        <NumResults movies={movies} />
      </NavBar>

      <Main>

        <Box>
          {/* {isloading ? <Loader /> : <MovieList movies={movies} />} */}
          {isloading && <Loader />}
          {!isloading && !error && <MovieList movies={movies} />}
          {error && <Error message={error} />}

        </Box>

        <Box>

          <WatchedSummary watched={watched} />

          <WatchedMoviesList watched={watched} />

        </Box>

      </Main>
    </>
  );
}
















