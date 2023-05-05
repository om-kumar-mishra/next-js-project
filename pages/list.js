import { NextResponse, NextRequest } from 'next/server'
import { Link } from 'react-router-dom';

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:4005/users")

    // const resp = await fetch("https://jsonplaceholder.typicode.com/posts")

    //const resp_data = await resp.json();
    const data = await res.json();
    console.log(data)
    return {
        props: {
            // resp_data:resp_data,
            data: data
        }
    }
}



export default function List({ data }) {
   
   const  handelDelete=async (id)=>
    {
        const res = await fetch(`http://localhost:4005/user-delete?id=${id}`,{ method: 'DELETE' })
        const url = NextRequest.nextUrl.clone()
        url.pathname = '/about'
        return NextResponse.redirect(url)

        
    }

    return (
        <div className="border rounded bg-light p-4 " style={{  width: "950px", margin: "auto", boxShadow: "4px 4px 4px 4px #000000" }}>
            <table className="table table-striped ">
                {/* <div>
                  <h3>Add data</h3>    <Link className='btn btn-primary'>Add</Link>
                </div> */}
                <thead>
                    <tr>
                        <th scope="col">index</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">age</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.data?.map((ele) => {
                            return (
                                <>
                                    <tr>
                                        <td>{ele.id}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.age}</td>
                                        <td><img src={`http://localhost:4005/${ele.image}`} height={50} width={50}></img></td>
                                        <td><button  className="btn btn-primary">Update</button></td>
                                        <td><button onClick={()=>handelDelete(ele.id)} className="btn btn-warning">Delete</button></td>
                                    </tr>
                                </>
                            )

                        })

                    }



                </tbody>
            </table>
            <p>List page</p>
        </div>
    )
}