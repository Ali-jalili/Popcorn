import PropTypes from "prop-types";
import Movie from "./Movie";


export default function MovieList({ movies }) {
    return (
        <ul className="list">
            {movies?.map((movie) => (
                <Movie movie={movie} key={movie.id} />
            ))}
        </ul>
    );
}


MovieList.propTypes = {
    movies: PropTypes.array.isRequired,

};


