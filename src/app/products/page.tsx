import React from 'react'
import Products from '../ui/products'
import { mockProducts } from '../data/mockProducts'

export default function Page() {
  const initialProducts = mockProducts
  return (
    <div>
      <Products initialProducts={initialProducts} />
    </div>
  )
}
