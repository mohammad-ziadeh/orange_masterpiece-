import React from "react";
import pic from "./pics/327540545_1248307442722267_3352172243266963874_n.jpg";
import "./log.css";
import Button from "./button";
import Form from "react-bootstrap/Form";
export default function card() {
  return (
    <section className="form-card-container">
      <img src={pic} alt="wadiRamPic" className="WadiRamPic" />
      <div>
        <Form>
          <Form.Group className="mb-4 mt-5" controlId="formGroupEmail">
            <Form.Label style={{ color: " #f5a161" }}>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              style={{
                height: "40px",
                backgroundColor: "#f5a161",
                border: "#f5a161",
                opacity: "0.7",
              }}
            />
          </Form.Group>
          <Form.Group className="mb-5 mt-4" controlId="formGroupPassword">
            <Form.Label style={{ color: " #f5a161" }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{
                height: "40px",
                backgroundColor: "#f5a161",
                border: "#f5a161",
                opacity: "0.7",
              }}
            />
          </Form.Group>
          <Button  />
        </Form>
      </div>
    </section>
  );
}
