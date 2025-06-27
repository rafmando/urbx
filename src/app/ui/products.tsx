import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { mockProducts } from '../data/mockProducts'
import Product from './product'
export default function Products() {
  return (
    <div style={{ textTransform: 'uppercase', fontWeight: '300' }}>
      <p>Products</p>
      <Row>
        {mockProducts.map((product: any) => (
          <Product key={product._id} product={product} />
        ))}
      </Row>
    </div>
  )
}
