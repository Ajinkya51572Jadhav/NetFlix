import Link from 'next/link'
import "@/app/globals.css";


    
const Nav = () => {
  return (
    <div className='links'>
      <nav className="navbar">
      <Link href={"/"}>
    <img src={"https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"} alt='home' height={50} width={100}/>
    </Link>
       <div className='link_right'>
      <Link href={"/"}>HOME</Link>
      <Link href={"/movie"}>MOVIE</Link>
      <Link href={"/about"}>ABOUT</Link>    
      <Link href={"/contact"}>CONTACT</Link>
      </div>
      </nav>
   </div>
  )
}

export default Nav