"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const UserDropdown = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Redirect to login page
  const handleButtonClick = () => {
    router.push("/login");
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className="cursor-pointer hidden lg:block hover:opacity-85"
        aria-label="User menu"
      >
        <img src="/icons/user-alt.svg" alt="User icon" aria-hidden="true" />
      </button>
    </div>
  );
};

export default UserDropdown;
