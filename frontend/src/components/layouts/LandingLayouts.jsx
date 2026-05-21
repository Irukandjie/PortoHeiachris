import Header from "../Header";
import Footer from "../Footer";

export default function LandingLayout({ children }) {
  return (
    <div className="min-h-screen bg-backgroundPrimary text-content1 font-sans selection:bg-primary selection:text-white flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
