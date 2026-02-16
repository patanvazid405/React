import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/esm/Spinner";

function GetProduct() {

    const [recipes, setProducts] = useState("");

    const getProducts = () => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then((response) => {
                console.log(response,"response");
                setProducts(response.recipes);   //store products array  
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    };

    //mounting 
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {recipes?
            <>
                {recipes.map(e=> <img src={e.image} style={{width:"230px",margin:"10px"}}></img>
            )}
                
            </>
            : <Spinner/>}
        
        </div>
    );
}

export default GetProduct;
