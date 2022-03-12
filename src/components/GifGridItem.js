import React from 'react'

const GifGridItem = ( {title,url} ) => {

    //console.log(props)

    return (
        <div className="card animate__animated animate animate__fadeIn">
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
        </div>
    )
}

export default GifGridItem
