import Link from 'next/link'
function Home2() {
    return (
        <>
            <div className="conatainer">
                <div className="row  py-5">
                    <div className="col-md-6">
                        <img src="solution-img1.jpg"></img>
                    </div>
                    <div className="col-md-6">
                        <nav>
                            <ul className='menu-b'  >
                                <li>
                                    <Link href='/about'>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/blog'>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/contact'>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/home'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/product'>
                                        Product
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home2