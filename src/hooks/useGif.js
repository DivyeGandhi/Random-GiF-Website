import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
    const[gif,setGif]=useState('');
    const[loading,setloading]=useState(false);
    async function fetchData(tag){
        setloading(true);
        let Finalurl=tag ? `${url}&tag=${tag}` : url;
        console.log(Finalurl);
        const data = await axios.get(Finalurl);
        const imageSource = data.data.data.images.downsized_large.url;
        setGif(imageSource);
        setloading(false);
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return {gif,loading, fetchData};
};

export default useGif;
