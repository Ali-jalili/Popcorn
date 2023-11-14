import PropTypes from "prop-types";


export default function Movie({ movie }) {
    return (
        <li>
            <img src={movie.image.original} alt={`${movie.name} poster`} />
            <h3>{movie.name}</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{movie.airdate}</span>
                </p>
            </div>
        </li>
    );
}


Movie.propTypes = {
    movie: PropTypes.object.isRequired,

};