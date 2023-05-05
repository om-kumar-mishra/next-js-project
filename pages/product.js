import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const getServerSideProps = async () => {
  const res = await fetch("https://dummyjson.com/products")



 
 // const resp = await fetch("https://jsonplaceholder.typicode.com/posts")

  //const resp_data = await resp.json();
  const data = await res.json();
  return {
    props: {
     // resp_data:resp_data,
      data: data
    }
  }
}




export default function Product({data}) {

  
   // console.log("resp_data====",resp_data)
  //  const [data, setData] = useState([]);
  //  useEffect(() => {
  //    axios.get('https://dummyjson.com/products')
  //      .then(function (response) {
  //        // handle success
  //        //    console.log(response.data.data[0].title)
  //        console.log("response========",response.data.products)
  //        let d = response.data.products
 
  //        setData(d)
  //      })
  //      .catch(function (error) {
  //        // handle error
  //        console.log(error);
  //      })
  //  }, []);
 
  return (
    <div className="container" style={{    marginLeft: "100px"}}>
      <div className="row my-2">
          {
            data.products.map((ele) => {
                // if(ele.id<=4)
                // {
              return (
                <>
                <div key={ele.id} className="card col-md-3 my-2 mx-4 py-3" >
                  <img className="card-img-top" src={ele.images[0]}  style={{height:"200px"}}  />
                  <div className="card-body" style={{height:"250px"}}>
                    <h5 className="card-title py-2">{ele.title}</h5>
                    <b>Price</b> : &#8377;{ele.price}<br></br>
                    <b>Description</b> :{ele.description.slice(0,80)+"..."}
                    
                    <div className="d-flex my-3">
                       <a href="#" className="btn btn-primary">purchase</a>
                        <a href="#" className="btn btn-primary mx-2">Add To Cart</a>
                    </div>
                   
                  </div>
                </div>
                </>
              )
                // }
            })
          }
      </div>
     
    </div>
  )
}