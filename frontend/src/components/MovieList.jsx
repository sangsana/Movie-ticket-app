import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../api/client';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiClient
      .get('/movies')
      .then((res) => setMovies(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="spinner">Loading movies...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <section className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.poster_url} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.genre} · {movie.duration_minutes} min</p>
          <Link to={`/movies/${movie.id}/shows`} className="btn-primary">
            View Shows
          </Link>
        </div>
      ))}
    </section>
  );
}
