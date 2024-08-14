import "./globals.css";

export const metadata = {
  title: "Cocalm",
  description: "Add watermark for free",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
