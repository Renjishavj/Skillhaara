import React, { useState } from "react";
import axios from "axios";
import certificate from "../assets/images/certificate.jpg";
import locker from "../assets/images/locker.png";
import "../assets/styles/style.css";

function Certificate() {
  const [studentId, setStudentId] = useState("");
  const [certificateData, setCertificateData] = useState(null);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleVerify = async () => {
    try {
      const response = await axios.post("http://localhost:3300/user/certificate", { studentId });

      if (response.data.message === "Verified") {
        setCertificateData(response.data.certificate); 
        setMessage(""); 
        setShowModal(true); // Show modal on successful verification
      } else {
        setMessage("Certificate not found");
        setCertificateData(null); 
      }
    } catch (error) {
      setMessage("Certificate not found");
      setCertificateData(null); 
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="cert-img">
        <img src={certificate} alt="" />
      </div>
      <div className="cert-main">
        <h1 className="cert-head">Certificate Verification</h1>
        <p>
          SkillHaara's online student certificate verification facility confirms
          the authenticity of the certificate quickly and efficiently. Please
          enter your student ID to verify.
        </p>
        <div className="cert-locker">
          <div>
            <img src={locker} alt="" className="locker-img" />
          </div>
          <div className="authenticate">
            <h3> Authenticate your digital certificate</h3>
            <p>
              Note: Student/Participant details can be viewed only after the
              course completion/issuance of the certificate
            </p>
          </div>
        </div>
        <div className="verify-btn">
          <div>
            <input 
              type="text" 
              placeholder="StudentId" 
              className="id-input" 
              value={studentId} 
              onChange={(e) => setStudentId(e.target.value)} 
            />
          </div>
          <div className="cert-msg-div">
            <div> 
              <button className="verify-button" onClick={handleVerify}>Verify</button>
            </div>
            <div>
              {message && <p className="verify-msg">{message}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content bounce">
            <span className="close-btn" onClick={closeModal}>×</span>
            <h2 className="cert-hh">Certificate Details</h2>
            <p><strong style={{color:"green"}} className="cert-det">Name: {certificateData.name}</strong></p>
            <p><strong style={{color:"green"}} className="cert-det">Course: {certificateData.course}</strong></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;
