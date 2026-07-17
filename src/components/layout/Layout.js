// layout/Layout.js
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="my-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">{children}</main>
      <Footer />
    </div>
  );
}