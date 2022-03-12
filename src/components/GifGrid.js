import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category )

    return (
        <>
        <h3 className="animate__animated animate animate__fadeIn title-category">{ category }</h3>

        { loading && <p className="animate__animated animate animate__flash loading">loading...</p> }
       
        <div className="card-grid">
                {
                    images.map(img => (
                       <GifGridItem  
                            key={img.id}
                            {...img} //le paso todas las props dek obj
                       />
                    ))
                }  
        </div> 
        </>
    )
}
