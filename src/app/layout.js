import { Menu, Navbar, AppLayout, Footer } from "@/components/ui";
import Global from "@/components/Global";
import { NavMenuProvider } from "@/state/navMenuState/navMenuContext";

export const metadata = {
  title: "Oasis Games",
  description: "Play Hard. Play Different",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Global />
        <NavMenuProvider>
          <Navbar />
          <Menu />
        </NavMenuProvider>
        <AppLayout>{children}</AppLayout>
        <Footer />
      </body>
    </html>
  );
}
