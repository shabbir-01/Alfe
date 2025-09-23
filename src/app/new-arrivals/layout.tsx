import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Arrivals - Alfè',
  description: 'Discover the latest fashion arrivals at Alfè. Shop new collections and trending styles.',
};

export default function NewArrivalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}