import React from 'react';

export default function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="stat-card">
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </div>
  );
}
