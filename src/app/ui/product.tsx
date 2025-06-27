'use client'
import React from 'react'
import Card from 'react-bootstrap/Card'
import CardImg from 'react-bootstrap/CardImg'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardText from 'react-bootstrap/CardText'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import { useAppDispatch } from '../lib/hooks'
import { addToCart } from '../lib/features/products/productsSlice'
import Rating from './rating'

interface ProductProps {
  product: {
    _id: string
    name: string
    image: string
    price: number
    rating: number
    numReviews: number
  }
}

export default function Product({ product }: ProductProps) {
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product._id))
  }

  return (
    <Card
      className="my-3 h-100 text-center"
      style={{ border: 'none', boxShadow: 'none' }}
    >
      <Link href={`/products/${product._id}`}>
        <CardImg
          variant="top"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            margin: '0 auto',
            display: 'block',
          }}
          src={product.image}
          alt={product.name}
        />
      </Link>

      <CardBody className="d-flex flex-column align-items-center">
        <Link
          href={`/products/${product._id}`}
          className="text-decoration-none"
        >
          <CardTitle
            as="h5"
            style={{
              letterSpacing: '3px',
              fontSize: '14px',
              fontWeight: '300',
              textTransform: 'uppercase',
              margin: '15px 0',
            }}
          >
            {product.name}
          </CardTitle>
        </Link>

        <CardText as="div" className="my-2 text-center">
          <Rating value={product.rating} />
          <small className="text-muted d-block">
            {product.rating} from {product.numReviews} reviews
          </small>
        </CardText>

        <CardText
          as="h5"
          className="text-primary"
          style={{ fontSize: '16px', fontWeight: '400' }}
        >
          ${product.price}
        </CardText>

        <Button
          variant="outline-dark"
          onClick={handleAddToCart}
          className="mt-auto"
          style={{
            letterSpacing: '1px',
            fontSize: '12px',
            textTransform: 'uppercase',
            border: '1px solid #000',
            padding: '8px 20px',
          }}
        >
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  )
}
