import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";

export const metadata = {
  title: "Kurt Urquico",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
