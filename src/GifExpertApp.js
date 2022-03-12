import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([])


    return (
        <>
            <div className='form-container'>
                <h2>Find your Gif</h2>
                <AddCategory setCategories={ setCategories }/> 
            </div>
           
           <div className='list-container'>
               {
                   categories.length > 0 ?
                    <ol>
                        {
                            categories.map(category => {
                                return (
                                <GifGrid 
                                        category={ category } 
                                        key={ category }
                                    />
                                )   
                            })
                        }
                    </ol>
                    :
                    <h1 className='hero-container'>Write what you´re looking for...</h1>
               }
           </div>
        </>
    )
}

export default GifExpertApp
