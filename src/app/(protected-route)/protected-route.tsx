// "use client";

// import { useUser } from "@clerk/nextjs";
// import { ReactNode, useEffect } from "react";

// interface ProtectedRouteProps {
//   children: ReactNode;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//   const { isSignedIn, isLoaded } = useUser();

//   useEffect(() => {
//     if (isLoaded && !isSignedIn) {
//       window.location.href = "/?sign-in=true";
//     }
//   }, [isLoaded, isSignedIn]);

//   if (!isLoaded || !isSignedIn) {
//     return null;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = async ({ children }: ProtectedRouteProps) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/?sign-in=true");
  }

  return <>{children}</>;
};

export default ProtectedRoute;
