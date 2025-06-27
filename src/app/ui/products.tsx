'use client'
import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { mockProducts } from '../data/mockProducts'
import Product from './product'
import { useAppSelector, useAppDispatch } from '../lib/hooks'
import { setProducts } from '../lib/features/products/productsSlice'

interface Product {
  _id: string
  name: string
  image: string
  price: number
  rating: number
  numReviews: number
  brand: string
  category: string
  description: string
}

interface ProductsClientProps {
  initialProducts: Product[]
}

export default function Products({ initialProducts }: ProductsClientProps) {
  const dispatch = useAppDispatch()
  const { products } = useAppSelector(state => state.products)

  useEffect(() => {
    dispatch(setProducts(initialProducts))
  }, [initialProducts, dispatch]) // Fixed: moved dependency array outside dispatch

  return (
    <div style={{ textTransform: 'uppercase', fontWeight: '300' }}>
      <p>Products</p>
      <Row className="justify-content-center">
        {products.map(
          (
            product: any // Fixed: use products from Redux, not mockProducts
          ) => (
            <Col
              key={product._id}
              style={{
                flex: '0 0 20%',
                maxWidth: '20%',
              }}
              className="d-flex justify-content-center mb-4"
            >
              <div style={{ width: '180px' }}>
                <Product product={product} />
              </div>
            </Col>
          )
        )}
      </Row>
    </div>
  )
}
