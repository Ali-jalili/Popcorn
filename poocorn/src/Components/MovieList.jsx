import PropTypes from "prop-types";
import Movie from "./Movie";


export default function MovieList({ movies }) {
    return (
        <ul className="list">
            {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID} />
            ))}
        </ul>
    );
}


MovieList.propTypes = {
    movies: PropTypes.string,

};