import Link from 'next/link'
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json();
  return {
    props: {
      data: data
    }
  }
}

export default function Index({ data }) {

  return (
    <div>
      <div className="container mt-5">
        <div className="row my-2">
          {
            data.slice(0,5).map((ele) => {
              // if(ele.id<=4)
              // {
              return (
                <>
                  <div key={ele.id} className="container  d-flex justify-content-center text-center d-flex mt-3">

                    <h5 style={{ height: "80px", width: "400px" }} className="bg-light rounded d-flex justify-content-start">
                      <span style={{left:0}}>
                      <b className="p-2 m-2 rounded mr-5 text-light bg-primary rounded-circle"  >
                        {ele.id}
                      </b>
                      </span>
                      <Link href={`/blog/${ele.id}`}>
                      {ele.title}
                      </Link>
                        
                      
                    </h5>

                  </div>


                </>
              )
              // }
            })
          }
        </div>

      </div>
      <p>blog folder</p>
    </div>
  )
}