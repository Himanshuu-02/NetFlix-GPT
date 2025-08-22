import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './UpperMainContainer'
import SecondaryContainer from './SecondContainer'
import UpperMainContainer from './UpperMainContainer'

const Browse = () => {
  useNowPlayingMovies()
  
  return (
    <div >
    <Header/>
    <UpperMainContainer/>
    <SecondaryContainer/> 
    
    {
      /*MainContainer
           -VideoBackground
           -VideoTitle
        SecondaryContainer
            -movieList *n
            -cards *n
       */
    }

    </div>
  )
}

export default Browse