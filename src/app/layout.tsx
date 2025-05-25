import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: "Buddha's Wisdom",
  description: 'Journey to Inner Peace and Enlightenment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
