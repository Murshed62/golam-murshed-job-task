import React, { useState, useEffect } from "react";
import ContactDetailsModal from "./ContactDetailsModal";
import { fetchCountryContacts } from "../assets/api";

const ModalBContent = ({ showOnlyEven }) => {
  const [usContacts, setUSContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseContactDetails = () => {
    setSelectedContact(null);
  };

  useEffect(() => {
    fetchCountryContacts("United States", { page: 1 })
      .then((data) => {
        const filteredUSContacts = showOnlyEven
          ? data.results.filter((contact) => contact.id % 2 === 0)
          : data.results;
        setUSContacts(filteredUSContacts);
      })
      .catch((error) => console.error("Error fetching US contacts:", error));
  }, [showOnlyEven]);

  return (
    <div>
      <h4>US Contact List</h4>
      <ul>
        {usContacts.map((contact) => (
          <li key={contact.id} onClick={() => handleContactClick(contact)}>
            {contact.phone}
          </li>
        ))}
      </ul>

      {selectedContact && (
        <ContactDetailsModal
          contact={selectedContact}
          onClose={handleCloseContactDetails}
        />
      )}
    </div>
  );
};

export default ModalBContent;
