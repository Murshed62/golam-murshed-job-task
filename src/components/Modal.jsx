import React from 'react';
import '../style/Modal.css';

const Modal = ({
  title,
  color,
  onClose,
  onSwitchToAllContacts,
  onSwitchToUSContacts,
  onToggleOnlyEven,
  showOnlyEven,
  children
}) => {

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal">
        <div className="modal-header" style={{ backgroundColor: color, color: 'white' }}>
          <h3>{title}</h3>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button style={{marginRight:5}} onClick={onSwitchToAllContacts}>All Contacts</button>
          <button style={{marginRight:5}} onClick={onSwitchToUSContacts}>US Contacts</button>
          <button onClick={onClose}>Close</button>
          <div className="checkbox-container">
            <label style={{marginTop:5}}>
              <input type="checkbox" onChange={onToggleOnlyEven} checked={showOnlyEven} />
              Only even
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
