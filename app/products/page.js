'use client'

// NOTE: This is a simple example of a search filter created with url search

import { useCallback } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

export default function Page() {
  const PRODUCTS = ['iPhone', 'iPad', 'MacBook', 'AirPods', 'Apple Watch']

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const search = searchParams.get('search') || ''

  const filteredProducts = PRODUCTS.filter((product) => {
    return product.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <h1>Products</h1>
      <p>These products are filtered with url search</p>

      {/* SEARCH INPUT */}
      <label htmlFor='search'>Search: </label>
      <input
        id='search'
        type='search'
        placeholder='Search products...'
        value={search}
        onChange={(e) => {
          // if search is empty, remove search param from url
          e.target.value === ''
            ? router.push(pathname)
            : // else add search param to url with value and replace current history entry
              // <pathname>?search=<value>
              router.replace(`${pathname}?search=${e.target.value}`)
        }}
      />

      {/* SHOW PRODUCTS OR FILTERED PRODUCTS */}
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => {
            return <li key={product}>{product}</li>
          })}
        </ul>
      ) : (
        <p>No products found...</p>
      )}
    </>
  )
}
