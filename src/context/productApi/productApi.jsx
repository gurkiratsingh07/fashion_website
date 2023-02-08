import React,{ useEffect} from "react"
import axios from "axios";

// const Context=createContext();


export default function products() {

// const [allPhotos,setAllPhotos] =useState([])

    


        async function fetchData(){
            const { data }= await axios.get(
            `https://fakestoreapi.com/products/`
            );
            console.log(data)
            return(data)
            // setAllPhotos(data)
    }
    fetchData();
}

//     return(
//         <Context.Provider 
//         value={{
//             allPhotos
//             }}
//         >
//               {children}
//         </Context.Provider>
//     );
// }

// export function useApi(){
//    const context_api= useContext(Context);
//    if(context_api === undefined){
//     throw new Error("Context must be used within a Provider")
//    }
//    return context_api;

// export function useApi(){
//    const context_api= useContext(Context);
//    if(context_api === undefined){
//     throw new Error("Context must be used within a Provider")
//    }
//    return context_api;
// }


// import axios from 'axios';

// // export const BASE_URL='https://fakestoreapi.com/products';


// export const fetchFromAPI= async()=>{
//     const {data}=await axios.get(`https://fakestoreapi.com/products/`);

//     return data
// }
