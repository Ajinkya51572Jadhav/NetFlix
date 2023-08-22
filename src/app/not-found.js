import Link from 'next/link';
import "@/app/globals.css";

const NotFound = () => {
  return (
    <div className='error'>
    <h1>404</h1>
    <Link href={"/"} className='btn-1 outer-shadow hover-in-shadow'>Go back Home Page</Link>
    </div>
    )
}
export default NotFound;