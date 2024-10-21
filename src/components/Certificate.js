import React, { useState } from "react";
import axios from "axios";
import certificate from "../assets/images/certificate.jpg";
import locker from "../assets/images/locker.png";

function Certificate() {
  const [studentId, setStudentId] = useState("");
  const [certificateData, setCertificateData] = useState(null);
  const [message, setMessage] = useState("");

  const handleVerify = async () => {
    try {
      const response = await axios.post("http://localhost:3300/user/certificate", { studentId });

      if (response.data.message === "Verified") {
        setCertificateData(response.data.certificate); 
        setMessage(""); 
      } else {
        setMessage("Certificate not found");
        setCertificateData(null); 
      }
    } catch (error) {
      setMessage("Certificate not found");
      setCertificateData(null); 
    }
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
              {certificateData && (
                <div className="cert-info">
                  <p><strong>Name: {certificateData.name}</strong></p>
                  <p><strong>Course: {certificateData.course}</strong></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
