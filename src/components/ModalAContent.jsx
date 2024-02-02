import React, { useEffect, useState } from "react";
import ContactDetailsModal from "./ContactDetailsModal";
import { fetchContacts } from "../assets/api";

const ModalAContent = ({ showOnlyEven }) => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseContactDetails = () => {
    setSelectedContact(null);
  };

  useEffect(() => {
    fetchContacts({ page: 1 })
      .then((data) => {
        const filteredContacts = showOnlyEven
          ? data.results.filter((contact) => contact.id % 2 === 0)
          : data.results;
        setContacts(filteredContacts);
      })
      .catch((error) => console.error("Error fetching contacts:", error));
  }, [showOnlyEven]);

  return (
    <div>
      <h4>Contact List</h4>
      <ul>
        {contacts.map((contact) => (
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

export default ModalAContent;
