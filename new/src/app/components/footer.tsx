"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const About =
    "Music School is a premier institution dedicated to teaching the art and science of music. We nurture talent from the ground up, fostering a vibrant community of music enthusiasts.";

  const links = [
    { text: "Home", href: "/" },
    { text: "Our Courses", href: "/courses" },
    { text: "Contact", href: "/contact" },
    { text: "Register", href: "/register" },
  ];

  const follow = [
    { text: "Facebook", href: "/" },
    { text: "Twitter", href: "/" },
    { text: "Instagram", href: "/" },
  ];

  const contact = {
    address: "Abotabbad, Pakistan",
    email: "abcd@gmail.com",
    phone: "03123456789",
  };

  return (
    <div className="relative bg-black text-white p-10 mt-10 border-white border-2">
      <div className="text-center mb-6">
        <h2 className="text-4xl hover:text-blue-600">Footer Section</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="space-y-4 hover:text-blue-600">
          <h3 className="text-lg font-semibold">About Us</h3>
          <p>{About}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold hover:text-blue-600">Quick Links</h3>
          <div>
            {links.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="block text-blue-400 hover:underline hover:text-blue-600"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold hover:text-blue-600">Follow us on</h3>
          <div>
            {follow.map((media) => (
              <Link
                key={media.text}
                href={media.href}
                className="block hover:text-blue-600 hover:underline text-blue-400"
              >
                {media.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4 hover:text-blue-600">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>{contact.address}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
