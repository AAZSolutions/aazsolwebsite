import React from 'react';

export function Logo({ className = "h-8" }: { className?: string }) {
  // Use a relative or absolute URL that's accessible
  return (
    <img 
      src="https://aazsol.nyc3.cdn.digitaloceanspaces.com/website/logo.png" 
      alt="AAZ Solutions"
      className={className}
    />
  );
}