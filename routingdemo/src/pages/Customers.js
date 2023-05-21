import { useParams } from "react-router-dom";

const Customers =()=>{
    //useParams it is hook in react-router-dom which we saved in one variable which will return the array of id
    const routerParams=useParams();
    return( 
        <div>
            <h1>This is Customers page</h1>
            <h2>{routerParams.id}</h2>
        </div>
    )
}

export default Customers;