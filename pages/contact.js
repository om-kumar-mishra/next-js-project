import { useState } from "react"
import Navbar from "../components/Navbar"



export default function Contact() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [desc, setdesc] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
     console.log(name,email,phone,desc)
  }
  
  const handleChange=(e)=>{
   console.log(e)
       if(e.target.name=="name")
       {
        setname(e.target.value)
       }
       else if(e.target.name=="email")
       {
        setemail(e.target.value)
       }
       else if(e.target.name=="phone")
       {
         setphone(e.target.value)
       }
       else if(e.target.name=="desc")
       {
        setdesc(e.target.value)
       }
  }
  return (
    <div style={{    marginTop: "100px"}}>

      
    <div className="border rounded bg-light " style={{ height: "450px", width: "450px", margin: "auto", boxShadow: "4px 4px 4px 4px #000000" }}>

      <div className="container">
        <h3 className="text-centers" style={{ margin: "auto" }}>Conatact Form</h3>
      </div>

      <form className="p-3" onSubmit={handleSubmit}>

        <div className="form-group">
          <label forHtml="exampleInputEmail1">Enter Name</label>
          <input type="text" value={name} name="name" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
        </div>

        <div className="form-group mt-2">
          <label forHtml="exampleInputEmail1">Email address</label>
          <input type="email" value={email} name="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>


        <div className="form-group mt-2">
          <label forHtml="exampleInputPassword1">Phone</label>
          <input type="text" value={phone} name="phone" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Enter the phone number" />
        </div>

        


        <div class="form-group">
          <label forHtml="exampleFormControlTextarea1">Description</label>
          <textarea className="form-control" name="desc" onChange={handleChange} id="exampleFormControlTextarea1" rows="3">{desc}</textarea>
        </div>

        <button type="submit" style={{ display: "block", margin: "auto" }} className="btn btn-primary mt-3 " >Submit</button>
      </form>
      <p >Contact page</p>
    </div>
    
    </div>
  )
}