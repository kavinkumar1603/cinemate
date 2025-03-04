import { Routes , Route, Router } from 'react-router-dom';
import { MovieList, MovieDetails, Search, PageNotFound} from '../pages';


import React from 'react'

export const Allroutes = () => {
  return (
  <>
    <Routes>
        <Route path=" /" element={<MovieList />} />
        <Route path="movies/:id" element={<MovieList />} />
        <Route path="movies/popular" element={<MovieList />} />
        <Route path="movies/top" element={<MovieList />} />
        <Route path="movies/upcoming " element={<MovieList />} />
        <Route path="Search" element={<MovieList />} />
        <Route path=" " element={<Search />} />
        <Route path=" " element={<PageNotFound/>} />
    </Routes>
  </>

)
    
}
