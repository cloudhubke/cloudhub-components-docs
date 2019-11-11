import React from 'react';

export default function NotFound() {
  if (typeof window !== 'undefined') {
    window.location = '/docs/getting-started/react';
  }

  return null;
}
