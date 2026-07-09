// layout/Layout.js
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="my-auto">{children}</main>
      <Footer />
    </div>
  );
}
