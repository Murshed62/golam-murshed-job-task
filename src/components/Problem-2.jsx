import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ContactDetailsModal from "./ContactDetailsModal";
import { fetchContacts, fetchCountryContacts } from "../assets/api";
import ModalAContent from "./ModalAContent";
import ModalBContent from "./ModalBContent";

const Problem2 = () => {
  const [allContacts, setAllContacts] = useState([]);
  const [usContacts, setUSContacts] = useState([]);
  const [modalAOpen, setModalAOpen] = useState(false);
  const [modalBOpen, setModalBOpen] = useState(false);
  const [modalCOpen, setModalCOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [onlyEven, setOnlyEven] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageA, setPageA] = useState(1);
  const [pageB, setPageB] = useState(1);
  const [showOnlyEven, setShowOnlyEven] = useState(false);

  useEffect(() => {
    // Fetch all contacts
    fetchContacts({ page: pageA, searchTerm, onlyEven })
      .then((data) => setAllContacts((prev) => [...prev, ...data.results]))
      .catch((error) => console.error("Error fetching all contacts:", error));
  }, [pageA, searchTerm, onlyEven]);

  useEffect(() => {
    // Fetch US contacts
    fetchCountryContacts("United States", { page: pageB, searchTerm, onlyEven })
      .then((data) => setUSContacts((prev) => [...prev, ...data.results]))
      .catch((error) => console.error("Error fetching US contacts:", error));
  }, [pageB, searchTerm, onlyEven]);

  const handleOpenModalA = () => {
    setModalAOpen(true);
    setModalBOpen(false);
    setModalCOpen(false);
    setPageA(1);
  };

  const handleOpenModalB = () => {
    setModalAOpen(false);
    setModalBOpen(true);
    setModalCOpen(false);
    setPageB(1);
  };

  const handleOpenModalC = (contact) => {
    setModalAOpen(false);
    setModalBOpen(false);
    setModalCOpen(true);
    setSelectedContact(contact);
  };

  const handleCloseModals = () => {
    setModalAOpen(false);
    setModalBOpen(false);
    setModalCOpen(false);
    setSelectedContact(null);
  };

  const handleCheckboxChange = () => {
    setOnlyEven((prev) => !prev);
    setAllContacts([]);
    setUSContacts([]);
    setPageA(1);
    setPageB(1);
  };

  const handleSwitchToAllContacts = () => {
    // Logic to switch to Modal A
    setModalAOpen(true);
    setModalBOpen(false);
  };

  const handleSwitchToUSContacts = () => {
    // Logic to switch to Modal B
    setModalAOpen(false);
    setModalBOpen(true);
  };

  const handleToggleOnlyEven = () => {
    // Logic to toggle the 'Only even' checkbox
    setShowOnlyEven((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleOpenModalA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={handleOpenModalB}
          >
            US Contacts
          </button>
        </div>

        {modalAOpen && (
          <Modal
            title="Modal A"
            color="#46139f"
            onClose={handleCloseModals}
            onSwitchToAllContacts={handleSwitchToAllContacts}
            onSwitchToUSContacts={handleSwitchToUSContacts}
            onToggleOnlyEven={handleToggleOnlyEven}
            showOnlyEven={showOnlyEven}
          >
            <ModalAContent showOnlyEven={showOnlyEven} />
          </Modal>
        )}

        {modalBOpen && (
          <Modal
            title="Modal B"
            color="#ff7f50"
            onClose={handleCloseModals}
            onSwitchToAllContacts={handleSwitchToAllContacts}
            onSwitchToUSContacts={handleSwitchToUSContacts}
            onToggleOnlyEven={handleToggleOnlyEven}
            showOnlyEven={showOnlyEven}
          >
            <ModalBContent showOnlyEven={showOnlyEven} />
          </Modal>
        )}

        {modalCOpen && selectedContact && (
          <ContactDetailsModal
            contact={selectedContact}
            onClose={handleCloseModals}
          />
        )}
      </div>
    </div>
  );
};

export default Problem2;
