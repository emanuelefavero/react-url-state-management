'use client'

import { useState } from 'react'

export default function Page() {
  const PRODUCTS = ['iPhone', 'iPad', 'MacBook', 'AirPods', 'Apple Watch']

  const [query, setQuery] = useState('')

  const filteredProducts = PRODUCTS.filter((product) => {
    return product.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <>
      <h1>Products</h1>

      {/* SEARCH INPUT */}
      <label htmlFor='search'>Search</label>
      <input
        id='search'
        type='search'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
