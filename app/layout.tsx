import Header from "@/components/Header";
import "../styles/globals.css";
import SideBar from "@/components/SideBar";
import { SessionProvider } from "@/components/auth/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import Login from "@/components/auth/Login";
import ClientProvider from "@/components/ClientProvider";
export const metadata = {
  title: "GPT App",
  description: "...",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <>
              <div className="flex">
                <ClientProvider>
                  <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[15rem]">
                    <SideBar />
                  </div>

                  <div className="bg-white dark:bg-[#343541] flex-1">
                    {children}
                  </div>
                </ClientProvider>
              </div>
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
