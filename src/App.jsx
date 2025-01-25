import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  useEffect(() => {
    if (showContactForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showContactForm]);

  return (
    <div className="max-w-3xl m-auto">
      <Profile onContactClick={handleContactClick} />
      <Content />
      <Footer />

      {showContactForm && <ContactForm onClose={handleCloseContactForm} />}
    </div>
  );
}

export default App;
