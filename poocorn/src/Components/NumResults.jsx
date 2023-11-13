import PropTypes from "prop-types";
export default function NumResults({ movies }) {
    return (
        <p className="num-results">
            Found <strong>{movies.length}</strong> results
        </p>
    );
}

NumResults.propTypes = {
    movies: PropTypes.string,

};