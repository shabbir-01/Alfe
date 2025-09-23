import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Alfè',
  description: 'Learn about Bomzan Closet and our mission to bring confidence and comfort through fashion. Discover our story from Pinterest inspiration to your closet.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}