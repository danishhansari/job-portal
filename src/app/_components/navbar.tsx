import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-4">
      <Link href={"/"} className="font-semibold text-slate-100">
        Job Portal
      </Link>
      <div>
        <SignedOut>
          <SignInButton>
            <Button variant={"outline"}>Get started</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
