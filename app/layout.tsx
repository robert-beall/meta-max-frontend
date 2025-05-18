import Navigation from "@/components/Navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="min-h-screen dark:bg-gray-800">
        <Navigation />
        {/* Main Content Section */}
        <main className="container max-w-5xl mx-auto pt-16 pb-12 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
