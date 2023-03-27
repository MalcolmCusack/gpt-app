import Header from "@/components/Header";
import "../styles/globals.css";
import SideBar from "@/components/SideBar";

export const metadata = {
  title: "GPT App",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[15rem]">
            <SideBar />
          </div>
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
