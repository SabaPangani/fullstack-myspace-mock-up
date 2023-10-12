"use client";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
type Props = {
  children: React.ReactNode;
};
export default function AuthCheck({ children }: Props) {
  const { data: session, status } = useSession();
  if (!session) {
    redirect("api/auth/signin");
  }
  console.log(session, status);

  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    return <></>;
  }
}
