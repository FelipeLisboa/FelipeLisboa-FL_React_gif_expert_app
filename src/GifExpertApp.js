import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Nissan GTR']);

//    const handleAdd = () => {
//        //setCategories([...categories, 'HunterXHunter']); //[...categories] obtiene los objetos del arreglo y se añade otra
//        setCategories( catgs => [...catgs, 'HunterXHunter']);
//    }



    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map((category, i) =>
                        <GifGrid 
                            key = {category}
                            category = {category}
                        />
                    )
                }
            </ol>
        </>
    )
}
