'use client'

// NOTE: This is a simple example of a search filter created with useState

import { useState } from 'react'

export default function Page() {
  const PRODUCTS = ['iPhone', 'iPad', 'MacBook', 'AirPods', 'Apple Watch']

  const [query, setQuery] = useState('')

  const filteredProducts = PRODUCTS.filter((product) => {
    return product.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <>
      <h1>Products 2</h1>
      <p>These products are filtered with useState</p>

      {/* SEARCH INPUT */}
      <label htmlFor='search'>Search: </label>
      <input
        id='search'
        type='search'
        placeholder='Search products...'
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
