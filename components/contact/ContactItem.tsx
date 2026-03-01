import React from 'react';

export default function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="contact-item">
      <strong>{label}</strong>: {value}
    </div>
  );
}
