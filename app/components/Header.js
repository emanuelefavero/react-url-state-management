import Link from 'next/link'

export default function Header() {
  return (
    <>
      <Link href='/'>Home</Link>
      <Link href='/products'>Products</Link>
      <Link href='/products-2'>Products 2</Link>
    </>
  )
}
