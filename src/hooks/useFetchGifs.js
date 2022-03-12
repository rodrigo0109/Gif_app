import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data:[],
        loading:true
    })

    useEffect(() => {
        getGifs( category ) //esto devolvia una promesa
            .then( imgs => {
                    setState({
                        data:imgs,
                        loading:false
                    })
            })
            
    },[category])

    return state
}