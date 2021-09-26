import { useState, useEffect, useRef } from "react";
import axios
 from "axios";
const useCountry = (name) => {
    const [ detail, setDetails ] = useState({found:false});
    useEffect(()=> {
        axios.get(`https://restcountries.com/v3/name/${name}?fullText=true`)
        .then(res => {
            if (res.status === 200){
                setDetails((preVal) => ({ ...res.data[0], found:true }))
            }
        })
        
    },[name])
    return{
        country: { ...detail }
    }
}

export default useCountry;