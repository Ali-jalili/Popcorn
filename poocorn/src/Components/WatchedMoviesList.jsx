import PropTypes from "prop-types";
import WatchedMovie from "./WatchedMovie";


export default function WatchedMoviesList({ watched }) {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie movie={movie} key={movie.imdbID} />
            ))}
        </ul>
    );
}


WatchedMoviesList.propTypes = {
    watched: PropTypes.string,

};