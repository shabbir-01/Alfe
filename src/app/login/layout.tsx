import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Bomzan Closet',
  description: 'Sign in to your Bomzan Closet account to access exclusive features and track your orders.',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}