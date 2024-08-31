import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <h2>Job Portal</h2>
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
