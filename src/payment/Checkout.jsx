import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function CheckoutPage() {
  const [userLocation, setUserLocation] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const getUserLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <Container>
      <h2 className="mt-4">Checkout</h2>
      <Row className="mt-4">
        <Col>
          <div>
            <h4>Product Information</h4>
            <p>Product Name: Your Product</p>
            <p>Price: $XX.XX</p>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Form onSubmit={handleSubmit}>
            <h4>Shipping Information</h4>
            <Button variant="primary" onClick={getUserLocation}>
              Use My Location
            </Button>
            <p>{userLocation ? `Latitude: ${userLocation.latitude}, Longitude: ${userLocation.longitude}` : 'Click the button to allow location access.'}</p>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="fullName" onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" onChange={handleChange} required />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name="city" onChange={handleChange} required />
              </Form.Group>
              <Form.Group as={Col} controlId="postalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="text" name="postalCode" onChange={handleChange} required />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
              Place Order
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckoutPage;
