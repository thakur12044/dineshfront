import axios from 'axios';
import { useEffect, useState } from 'react';



const Productscat = ()  => {

    const params = window.location.pathname.split('/Productscat/');
    const [products, setProducts] = useState([]);
    
    const [pricedata , setPriceData] = useState({});

    // console.log(params[1]);
    useEffect(() => {
        Products();
    },[])
    useEffect(() => {
      fetchapi();
      
      },[pricedata]);

    async function Products(){
        const res = await axios.post("http://127.0.0.1:5000/all_Products",{
            id: params[1]
        });
        setProducts(res.data);
        console.log(res.data);
    }


  
      function fetchapi() {
          const websocket= new WebSocket("wss://stream.binance.com:9443/ws");
         websocket.onopen = () => {
          console.log("web socket connected");
          websocket.send( JSON.stringify({
                  method: "SUBSCRIBE",
                  params: ["ethusdt@miniTicker"],
                  id: 1
                  }
                  
                  ));
         }
  




    websocket.onmessage = (event) => {

      const data = JSON.parse(event.data);

     console.log(data);  
 setPriceData(data);
 
  }


  // websocket.onclose = () => {
  //     console.log("close web socket connected");
  //     websocket.send( JSON.stringify({
  //             method: "UNSUBSCRIBE",
  //             params: ["ethusdt@miniTicker"],
  //             id: 1
  //             }
              
  //             ));
  //    }

 

}

return(

<>

<table>
            <tr>
                <td>
                    {pricedata.s}
                </td>
                <td>
                    {pricedata.c}
                </td>
            </tr>

        </table>









<div className="album py-5 bg-body-tertiary">
  <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div className="col-lg-12 d-flex gap-2">
    
{products.map((item) => {
  return(
    <div className="card" style={{ width: "20rem" }}>
    <img src={item.images} className="card-img-top  " alt="..." />
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text fw-bold">
      {item.description}
      </p>
      <botton>price</botton>
   
    </div>
  </div>

  )
}

)}








      </div>
     
    
    </div>
  </div>
</div>


</>

);



}


export default Productscat ;