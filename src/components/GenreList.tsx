import React from 'react'
import useGenres from '../hooks/useGenres';

const GenreList = () => {

    const { genres, error, isLoading } = useGenres();

    return (
        <ul>
            {isLoading ? <p>Loading...</p> : null}
            {error ? <p>Error: {error}</p> : null}
            {genres.map((genre) => 
                (
                    <li key={genre.id}>{genre.name}</li>
                )
            )}

        </ul>
    )
}

export default GenreList