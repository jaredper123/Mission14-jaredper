import { useState, useEffect } from 'react';
import data from '../MovieData.json';
import './Movies.css';
import { Movies } from '../types/Movies';

const fullList = data.MovieData;

function MovieList() {
  const [listOMovies, setListOMovies] = useState<Movies[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setListOMovies(temp);
      setLoading(false);
    };
    fetchMovie();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movies">
      <h1>Joel Hilton's Movie Collection</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Lent To</th>
            <th>Edited</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {listOMovies.map((m) => (
            <tr key={m.movieId}>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.category}</td>
              <td>{m.lentTo}</td>
              <td>{m.edited}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
