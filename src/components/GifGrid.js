import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category); //a data se le cambio el nombre de images

    return (
        <>
            <h3 className="animate__animated animate__bounce animate__fadeIn animate__faster"> { category } </h3>

            {/*loading ? <p>Loading</p> : null          --> operador ternario if?{loading} else {null}  */}
            {loading && <p className="animate__animated animate__bounce animate__flash animate__repeat-3">Loading</p> /* si loading es true, muestra el parrafo*/}
            {<div className="card-grid">
                {
                    images.map( img =>(
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>}
        </>
    )
}
