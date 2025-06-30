import React, { Fragment, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import styles from "./Contact.module.scss";
import { FcBusinessContact } from "react-icons/fc";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import MetaData from "../../components/MetaData";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const telegramBotToken = "7735697042:AAF72kWwYT79gwQgqUZpvy7XioyaKDQMD18";
  const telegramChatId = "7307299784";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `📥 Yangi Contact Xabari:\n\n👤 Ismi: ${name}\n📧 Email: ${email}\n💬 Xabar: ${message}`;

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: text,
      }),
    });

    alert("Your message sended !");
    setName("");
    setEmail("");
    setMessage("");
  };

  const contacts = [
    {
      icon: <FcBusinessContact size={50} />,
      text1: "Tel: 043484434",
      text2: "Email: shopx@gmail.com",
    },
    {
      icon: <FcBusinessContact size={50} />,
      text1: "Tel: 043484434",
      text2: "Email: shopx@gmail.com",
    },
    {
      icon: <FcBusinessContact size={50} />,
      text1: "Tel: 043484434",
      text2: "Email: shopx@gmail.com",
    },
    {
      icon: <FcBusinessContact size={50} />,
      text1: "Tel: 043484434",
      text2: "Email: shopx@gmail.com",
    },
  ];

  return (
    <Fragment>
      <MetaData title={"Contact"} />
      <Navbar />
      <div className={styles.contact}>
        <div className={styles.contact_title}>
          <div className="container">
            <h3>Contact Us</h3>
          </div>
        </div>
        <div className={styles.contact_info}>
          <div className="container mt-5">
            <div className="row g-3">
              <div className="col-md-6">
                <div className={styles.about}>
                  <h4>Information About Us</h4>
                  <p className="mt-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Porro perferendis non dolore sequi ipsam quas deserunt magni
                    ex aperiam maiores!
                  </p>
                  <div>
                    <span>
                      <FaFacebook size={40} />
                    </span>
                    <span>
                      <BsInstagram size={40} />
                    </span>
                    <span>
                      <BsYoutube size={40} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.contact}>
                  <h4>Contact Way</h4>
                  <div className="row g-3 mt-2">
                    {contacts.map((contact, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="d-flex align-items-center">
                          <div>{contact.icon}</div>
                          <div className="ms-3">
                            <p>{contact.text1}</p>
                            <p>{contact.text2}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contact_form}>
          <div className="container">
            <div className="row g-3">
              <div className="col-md-6">
                <h3>Get In Touch</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.from_group}>
                    <label htmlFor="name_field">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name ..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.from_group}>
                    <label htmlFor="email_field">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email ..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.from_group}>
                    <label htmlFor="message_field">Message</label>
                    <textarea
                      placeholder="Enter your message ..."
                      cols="8"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className={styles.from_group}>
                    <button type="submit">Send</button>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div className={styles.contact_img}>
                  <img
                    src="https://res.cloudinary.com/mehedi08h/image/upload/v1648703985/shopx/Contact_us-rafiki_efzxlu.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
