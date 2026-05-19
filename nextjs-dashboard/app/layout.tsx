import { montserrat } from './ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
          {children}
          <footer>
            Made with love from Vercel people.
          </footer>
      </body>
    </html>
  );
}
