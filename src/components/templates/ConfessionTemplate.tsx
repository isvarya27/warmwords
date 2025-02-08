// src/components/templates/ConfessionTemplate.tsx

import React from 'react';

interface ConfessionTemplateProps {
  recipient: string;
}

export default function ConfessionTemplate({ recipient }: ConfessionTemplateProps) {
  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-md">
      <p className="text-xl">
        Dear {recipient}, this is a heartfelt confession specially crafted just for you.
      </p>
    </div>
  );
}
