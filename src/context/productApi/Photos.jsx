import React from "react"

import { useApi } from "./Context";

export default function Photos() {
const { allPhotos }= useApi();

 return(
    <div>
        <h1>Photos</h1>
        {allPhotos.map(p=>(
            <div>
            <li key={p.id}>{p.title}</li>
            <li>{p.price}</li>
            <li>{p.category}</li>
            <li>{p.description}</li>
            {/* <img src={p.image} alt=""/> */}
            <input type="image" img src = {p.image} alt="photo" />
            
            </div>
        ))}
    </div>
  );


}
