import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => { //los efectos nunca pueden ser async

        getGifs(category) //promesa
            .then( imgs => {

                setTimeout( () => {
                    setState({ //manda info igual que como se maneja en el state
                        data: imgs,
                        loading: false
                    });

                }, 800);
                
            })
        
    },[category])

    return state; //{ data : [] , loading : true };
}