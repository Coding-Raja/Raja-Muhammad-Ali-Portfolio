// components/Footer.jsx
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 shadow-[0_0_15px_4px_rgba(59,130,246,0.5)]">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Links */}
        <div className="flex space-x-8 mb-4">
          <Link
            href="https://github.com/"
            className="hover:underline italic"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/"
            className="hover:underline italic"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Coding-Raja. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
