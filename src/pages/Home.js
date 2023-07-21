import headerNav from "../data/headernav";
import Electronics from "../data/Electronics";
import Bstuff from "../data/Bstuff";
import Summershop from "../data/Summershop";
import Sports from "../data/Sports";
import { useEffect, useState } from "react";
import axios from 'axios';

const Home =() => {
  
  const [headerNav, setheaderNav] = useState([]);
   const [products, setproducts] = useState([]);
  useEffect(() => {
    getcategories();
    getproducts();
  },[]);

  async function getcategories(){
    const res =await axios.get("http://127.0.0.1:5000/getcategories");
    setheaderNav(res.data);
  }
  
  async function getproducts(){
    const res =await axios.post("http://127.0.0.1:5000/all_products");
    console.log(res.data);
    // setproducts(res.data);
  }
  

return(

<>

<section className="package bg-white text-center mt-1 border-bottom border-dark-subtle bg-dark mb-2">
        <div className="container-fluid">
          <div className="row">
          <div className="col">
          <ul className="nav justify-content-between text-center ps-3 pe-3">
            {headerNav.map((item)  => {
               return (
                <li className="nav-item"> <a className="text-decoration-none" href={"/Productscat/"+item._id}>
                <img src={"/assets/images/"+item.image} className="w-50" />
                <h6>{item.name}</h6></a>
              </li>
               )
            } )}
          
          </ul>
        </div>
          </div>
        </div>
        </section>

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div className="carousel-item active">
    <img src="/assets/images/realme.webp" className="d-block w-100" alt="..."/>
  </div>
  <div className="carousel-item">
    <img src="/assets/images/furn.webp" className="d-block w-100" alt="..."/>
  </div>
  <div className="carousel-item">
    <img src="/assets/images/flight.webp" className="d-block w-100" alt="..."/>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>


<div className="eproduct mt-3 bg-white">

<div className="container-fluid">

<div className="row">

<div className="col-2">

<div className="firstdeal">

 <div className="whitebox  ms-4 mt-5">

 <h2 className=" ome ms-4 mb-2 fw-normal">Best of</h2>

<h2 className="moe fw-normal ms-2 ">    Electronics</h2>

<button type="button" className="btn btn-primary mt-3 mb-2 ms-4">VIEW ALL</button>

 </div>

<img src="/assets/images/first.webp" className="ptoho  mt-4 img-fluid w-100" />

</div>

</div>

<div className="col">
          <ul className="nav justify-content-between text-center ps-3 pe-3">
            {products.map((item)  => {
               return (
                <li className="nav-item">
                <img src={"/assets/images/"+item.image} className="w-100" />
                <h6>{item.name}</h6>
                <span>{item.price}</span>
                <p>{item.disc}</p>
              </li>
               )
            } )}
          
          </ul>
        </div>




 

    

</div>
 </div>
</div>

</>

)};

export default Home;
