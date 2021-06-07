import React, { useState, useEffect } from 'react'

import { getGifs } from '../helpers/getGifs'
import GifGridItem from './GifGridItem'



const GifGrid = ({category}) => {

    const [gifs, setGifs] = useState([])

    useEffect( ()=>{
        getGifs(category).then( gifs =>{
            setGifs(gifs)
        })
    },[category])

    console.log(gifs)

    return (

        <div className="gif-grid">

            {gifs.map( gif => (
                <GifGridItem 
                    key={gif.id}
                    {...gif}
                />
            ))}
            <h4>{category}</h4>
        </div>
    )
}

export default GifGrid
