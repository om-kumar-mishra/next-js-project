import Navbar from  "../components/Navbar"
import Image from "next/image";
export default function About() {
    return (
      <div>
        
        {/* <div style={{textAlign:"center"}}>
        <Image  src="/tree-736885__340.jpg" height="300"  width="300" alt=""></Image>
        
        </div> */}
        <div className="border rounded bg-light " style={{ display:"block", height: "450px", width: "700px", margin: "auto", boxShadow: "4px 4px 4px 4px #000000" }}>
            
            <h3 className="m-2">Introduction</h3>
            <p className="text-dark" style={{textAlign:"left" ,marginLeft:"10px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>

            <h3 className="m-2" >Service offered</h3>
            <p className="text-dark" style={{textAlign:"left" ,marginLeft:"10px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
            <h3 className="m-2" >Contact us</h3>
            <p className="text-dark" style={{textAlign:"left" ,marginLeft:"10px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
        </div>
      </div>
    )
  }