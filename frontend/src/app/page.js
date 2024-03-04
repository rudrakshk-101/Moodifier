import Link from 'next/link'
 
function Home() {
  return (
    <ul>
      <li>
        <Link href="/about">About Us</Link>
      </li>
    </ul>
  )
}
 
export default Home