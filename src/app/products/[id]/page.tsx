import React from "react";
import { mockProducts } from "../../data/mockProducts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";

interface PageProps {
  params: Promise<{ id: string }>; 
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const product = mockProducts.find((p) => p._id === resolvedParams.id);

  if (!product) {
    return (
      <Container>
        <h1>Product not found</h1>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.name}
            fluid
            style={{ maxHeight: "600px", objectFit: "cover" }}
          />
        </Col>
        <Col md={6}>
          <Card style={{ textTransform: "uppercase", fontWeight: "300" }}>
            <CardBody>
              <CardTitle as="h1">{product.name}</CardTitle>
              <CardText as="div" className="my-3">
                Rating: {product.rating} from {product.numReviews} reviews
              </CardText>
              <CardText as="h3" className="text-primary">
                ${product.price}
              </CardText>
              <CardText>{product.description}</CardText>
              <CardText>
                <strong>Brand:</strong> {product.brand}
              </CardText>
              <CardText>
                <strong>Category:</strong> {product.category}
              </CardText>
              <CardText>
                <strong>In Stock:</strong>{" "}
                {product.countInStock > 0 ? "Yes" : "No"}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
