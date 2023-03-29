/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import NewChat from "./chat/NewChat";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./chat/ChatRow";
import ModelSelection from "./chat/ModelSelection";
import DarkModeButton from "./DarkModeButton";

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div className="hidden sm:inline">
            <ModelSelection />
          </div>
          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}

            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      {session && (
        <div className="flex flex-col items-center">
          <img
            src={session.user?.image!}
            alt=""
            className="h-12 w-12 rounded-full  mx-auto mb-2 hover:opacity-50"
          />
          <div className="">
            <DarkModeButton />
          </div>
          <button
            className="text-white  m-5 border rounded-md md:w-15 w-10 text-sm md:text-lg h-10 hover:bg-[#343541]"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default SideBar;
