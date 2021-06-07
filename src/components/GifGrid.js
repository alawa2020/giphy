import React, { useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'



const GifGrid = ({category}) => {

    useEffect( ()=>{
        getGifs(category)
    })

    return (

        <div className="gif-grid">
            <h4>{category}</h4>
        </div>
    )
}

export default GifGrid
