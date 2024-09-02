"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/?sign-in=true");
    }
  }, [isLoaded, isSignedIn, router]);

  // Show nothing or a loading spinner while the user status is being loaded
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
