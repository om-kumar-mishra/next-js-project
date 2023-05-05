import{useRouter} from "next/router";
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json();

  
  const paths =data.map((curElem)=>{
    return{
        params:{
            pageNo: curElem.id.toString()
        }
    }
  })
  return {
    paths,
    fallback:false,
  }
  };
  

  export const getStaticProps = async (context) => {
    const id=context.params.pageNo
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return {
      props: {
        data: data
      }
    }
  }



const PageNo=({data})=>{
    const router=useRouter();
    const pageNumber =router.query.pageNo;
    return(
        <>
        <div className="container rounded bg-light  mt-3" style={{padding:"15px"}}>
           <div>
           <b className=" bg-primary p-2 rounded-circle text-white">{data.id}</b>
           </div>
           
             <div>
             <h5 style={{textAlign:"left"}} className="mt-2"> Title: - {data.title}</h5>
             <br></br>
              <b style={{textAlign:"left" , display: "block"}}>Body : -</b>   <p style={{paddingBottom: "20px"}} className="text-dark">{data.body}</p> 
             </div>
           
              
           </div>
          
          
        


      </>
    ) 
}
export default PageNo;