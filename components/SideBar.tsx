/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import NewChat from "./NewChat";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";

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
          <div></div>

          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <div className="flex flex-col">
          <img
            src={session.user?.image!}
            alt=""
            className="h-12 w-12 rounded-full  mx-auto mb-2 hover:opacity-50"
          />
          <button
            className="text-white text-lg m-5 border rounded-md w-15 h-10 hover:bg-[#343541]"
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
