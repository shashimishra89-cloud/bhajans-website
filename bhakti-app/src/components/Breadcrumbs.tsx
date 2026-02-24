import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav className={`flex items-center space-x-2 text-sm text-orange-600 ${className}`}>
      <Link href="/" className="flex items-center hover:text-orange-700 transition-colors">
        <Home className="h-4 w-4" />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="h-4 w-4 text-orange-400" />
          {item.href ? (
            <Link 
              href={item.href} 
              className="hover:text-orange-700 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-orange-800 font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

// Helper function to generate breadcrumbs for different content types
export const generateBreadcrumbs = (
  contentType: 'festivals' | 'aartis' | 'bhajans' | 'mantras',
  itemName?: string
): BreadcrumbItem[] => {
  const baseItems = [
    { label: contentType.charAt(0).toUpperCase() + contentType.slice(1), href: `/${contentType}` }
  ];

  if (itemName) {
    baseItems.push({ label: itemName });
  }

  return baseItems;
};
