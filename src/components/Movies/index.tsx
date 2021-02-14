import React, {useEffect, useState} from 'react'

const API_KEY = "c2f82ef0"

const series = ['avengers', 'fast and furious', 'iron man', 'harry potter']

const Movies: React.FC = props => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const promises = series.map(series => {
            return fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(series)}&y=2019&apikey=${API_KEY}&page=1`)
            .then(res => res.json())
        })

        Promise.all(promises).then((movies: any) => {
            setMovies(movies)
        })
    }, [])
    return movies.map(movie => {
        return null
    })
}

export default Movies