import { Button } from "~/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 md:px-8 md:py-4">
      <h2>Job Portal</h2>

      <Button variant={"outline"}>Get Started</Button>
    </nav>
  );
};

export default Navbar;
