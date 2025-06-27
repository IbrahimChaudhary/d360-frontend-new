export const metadata = {
    title: "D360",
    description: "Redirect layout for default / route",
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }