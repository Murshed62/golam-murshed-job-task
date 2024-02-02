import React from 'react';
import '../style/ContactDetailsModal.css';

const ContactDetailsModal = ({ contact, onClose }) => {
    console.log(contact)
  return (
    <div className="contact-details-modal-overlay">
      <div className="contact-details-modal">
        <div className="modal-header">
          <h3>Contact Details</h3>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p><strong>Name:</strong> {contact.country.name}</p>
          <p><strong>ID:</strong> {contact.id}</p>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsModal;
