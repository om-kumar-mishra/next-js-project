import Link from 'next/link'
import Navbar from  "../components/Navbar"
import {useRouter} from 'next/router'
const Errorpage=()=>
{
    const router =useRouter();
   return(
      
    <div className='container text-light' style={{textAlign:" center",
      marginTop: "200px"}}>
       
        
        <h1 style={{    marginTop: "50px" ,
    display: "block"}} >PAGE NOT FOUND</h1>
   
        {/* <Link  onClick={()=>router.push("/")}>
           BACK TO HOME PAGE
         </Link> */}
         <a className='btn btn-primary d-inline-block ' style={{cursor: "pointer",marginTop:"10px"}} onClick={()=>router.push("/")}>BACK TO HOME PAGE</a>
    </div>
   ) 
          
}

export default Errorpage