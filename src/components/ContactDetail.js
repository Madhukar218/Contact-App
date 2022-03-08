import React from "react";

import "./App.css";
import { useNavigate, useParams } from "react-router-dom";

const ContactDetail = (props) => {
  const params = useParams();
  const [oneContact] = props.contacts.filter((z) => z.id === params.id);

  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="ui card centered" style={{ width: "auto" }}>
        <div className="content">
          <div className="header">{oneContact ? oneContact.name : ""}</div>
          <div className="description">
            {oneContact ? oneContact.description : ""}
          </div>
        </div>
      </div>

      <button className="ui button blue" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default ContactDetail;
