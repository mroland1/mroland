import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function ContactForm({ onClose }) {
  const { t } = useTranslation();

  const [status, setStatus] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        "uU1wzu5J0nElZ36KA"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setStatus("success");
        },
        (error) => {
          console.log("Error:", error.text);
          setStatus("error");
        }
      );
  }

  const handleInputBlur = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const disableScroll = () => {
      const scrollY = window.scrollY;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.dataset.scrollY = scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    };

    const enableScroll = () => {
      const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      delete document.body.dataset.scrollY;
      window.scrollTo(0, scrollY);
    };

    if (show) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => enableScroll();
  }, [show]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-transparent backdrop-blur-sm flex items-center justify-center text-white transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-inherit bg-opacity-50 backdrop-blur-sm transition-all duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div
        className={`p-6 rounded-lg shadow-lg w-11/12 max-w-lg transition-all transform duration-500 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">{t("contact.title")}</h2>
        {status === "success" && (
          <div className="bg-green-500 text-white p-2 rounded mb-4">
            {t("contact.success")}
          </div>
        )}
        {status === "error" && (
          <div className="bg-red-500 text-white p-2 rounded mb-4">
            {t("contact.error")}
          </div>
        )}
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="name">
              {t("contact.labels.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 rounded bg-gray-700 text-white"
              onBlur={handleInputBlur}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="email">
              {t("contact.labels.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 rounded bg-gray-700 text-white"
              onBlur={handleInputBlur}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="message">
              {t("contact.labels.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 rounded bg-gray-700 text-white"
              onBlur={handleInputBlur}
              required
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleClose}
              className="bg-red-500 px-4 py-2 rounded text-white"
            >
              {t("contact.buttons.close")}
            </button>
            <button
              type="submit"
              className="bg-emerald-500 px-4 py-2 rounded text-white"
            >
              {t("contact.buttons.send")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
