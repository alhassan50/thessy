import React from "react";

export default function Footer() {
  return (
    <footer className={`text-center py-6 bg-[var(--primary)]`}>
      <small className="px-[5%] text-[var(--background)]">
        &copy; {new Date().getFullYear()} Thessy Fashion. All Rights Reserved
      </small>
    </footer>
  );
}
