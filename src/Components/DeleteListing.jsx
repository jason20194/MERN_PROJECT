import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export class DeleteListing extends Component {
  render() {
    // const listingId = this.props.listingId;
    // console.log(listingId);

    return (
      <div>
        <Button variant="primary" onClick={this.props.handleShow}>
          Delete
        </Button>

        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this product listing? Please press
            Yes to confirm
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              No
            </Button>
            <Button
              variant="primary"
              onClick={() => this.props.deleteListing(this.props.listingId)}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default DeleteListing;
