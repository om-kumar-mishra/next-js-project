import Link from 'next/link'
function Home() {
    return (
        <>
            <div className='container border  bg-light mt-5'>
                <div className='row p-5'>
                    <div className='col-md-6'>
                        <img src='solution-img4.jpg'  style={{ maxHeight: "400px", maxWidth: "400px" }}></img>
                    </div>
                    <div className='col-md-6 '>

                        <img src='solution-img4.jpg'className='rounded-circle' style={{ maxHeight: "100px", maxWidth: "100px" }}></img>
                        <p className='text-dark mt-3 ' style={{ textAlign: "left" }} ></p>
                    </div>
                </div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

         

            <section className="mt-2" >
                <div  id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="solution-img1.jpg" style={{height:"400px"}} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="solution-img2.jpg" style={{height:"400px"}} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="solution-img3.jpg" style={{height:"400px"}} className="d-block w-100" alt="..."/>
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
            </section>
            

        </>
    )
}

export default Home