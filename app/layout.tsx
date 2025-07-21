import '../styles/globals.css'; // ✅ Correct CSS path
import { ReactNode } from 'react';
import { AppProvider } from './context'; // ✅ Your context wrapper

export const metadata = {
  title: "SaintVisionAI™ - Cookin' Knowledge",
  description: "AI doesn't just answer. It adapts. It empowers. It becomes your enterprise companion.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

