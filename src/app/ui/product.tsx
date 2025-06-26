import React from 'react'
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import Rating from './rating';
import { CardText } from 'react-bootstrap';
export default function Product({product}:any) {
  return (
    <Card className="my-3 p-3 rounded" >
      <a href={`/products/${product._id}`}>
        <CardImg
          style={{ width: "200px", height: "auto" }}
          src={product.image}
        ></CardImg>
      </a>
      <CardBody>
        <a href={`/product/${product._id}`}>
          <CardTitle as="div">
            <strong>{product.name}</strong>
          </CardTitle>
        </a>
        <CardText as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
            <Rating
              value={product.rating}
              text={`${product.numReviews} ratings`}
              color={'#f8e825'}
            />
          </div>
        </CardText>
        <CardText as="h3">{product.price}</CardText>
      </CardBody>
    </Card>
  );
}
