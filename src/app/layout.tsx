import HomePage from "./pages/homepage/HomePage";

export const metadata = {
  title: 'DropNotes',
  description: 'A simple note-taking app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <HomePage />
        {children}
      </body>
    </html>
  );
}