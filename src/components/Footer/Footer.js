"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { translations } = useLanguage();

  return (
    <footer
      className="flex text-white text-center py-4 h-96 bg-[#2F2E2E] md:h-[26.625rem] items-center justify-center"
      data-testid="footer"
      aria-label="Footer"
    >
      <div className="flex flex-col relative items-center gap-1 bottom-3 md:mb-32 md:flex-row md:gap-6 lg:gap-9 xl:gap-12">
        <Link href="/" className="navbar-brand" aria-label="logo">
          <img
            className="h-[5.351rem] w-[7.75rem] rounded relative mt-6 mb-4 md:mt-0 md:mb-0 md:right-4 md:top-6"
            src="/images/donna-vino-logo-transparent.png"
            alt="Donna Vino Logo - Red background, white text saying 'Donna Vino'"
            data-testid="logo-footer"
          />
        </Link>

        <div className="flex flex-col order-1 md:order-4 items-center md:relative md:top-5">
          <h4 className="text-bodyLarge text-semibold mb-1 md:mb-3 md:mt-3">
            {translations["footer.follow"]}
          </h4>
          <div
            className="flex gap-4 justify-center mt-3 mb-1"
            aria-label="Social media icons"
          >
            <a
              href="https://www.facebook.com/donnavino.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <img
                src="/icons/footer/facebook-line.svg"
                alt="Facebook Logo"
                className="h-[1.5rem] w-[1.5rem] filter brightness-0 invert"
              />
            </a>
            <a
              href="https://www.instagram.com/donna_vino_winetastings/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <img
                src="/icons/footer/instagram-original.svg"
                alt="Instagram Logo"
                className="h-[1.5rem] w-[1.5rem] filter brightness-0 invert"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/donna-vino-aps/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <img
                src="/icons/footer/linkedin-alt.svg"
                alt="LinkedIn Logo"
                className="h-[1.5rem] w-[1.5rem] filter brightness-0 invert"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
