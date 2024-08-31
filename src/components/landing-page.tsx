import Link from "next/link";
import { Button } from "./ui/button";

const LandingPage = () => {
  return (
    <main>
      <section className="flex w-full flex-col items-center justify-center text-center">
        <h1 className="gradient-title mt-6 max-w-4xl py-4 text-4xl font-extrabold tracking-tighter sm:text-6xl md:mt-24 lg:text-8xl">
          Find your Dream Job and get Hired
        </h1>
        <h3 className="text-xs text-gray-300 sm:mt-2 sm:text-2xl">
          Explore thousands of job listings or find the perfect candidate
        </h3>
      </section>
      <div className="mt-8 flex w-full items-center justify-center gap-4">
        <Link href={"/jobs"}>
          <Button className="border bg-transparent text-white hover:bg-slate-200 hover:text-black">
            Find Jobs
          </Button>
        </Link>
        <Link href={"/post-job"}>
          <Button variant={"secondary"}>Post Jobs</Button>
        </Link>
      </div>
    </main>
  );
};

export default LandingPage;
