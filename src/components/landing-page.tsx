import Link from "next/link";
import { Button } from "./ui/button";
import CompanyCarousel from "./carousel";
const LandingPage: React.FC = () => {
  return (
    <main>
      <section className="flex w-full flex-col items-center justify-center text-center">
        <h1 className="gradient-title mt-6 max-w-4xl py-4 text-4xl font-extrabold tracking-tighter sm:text-6xl md:mt-24 lg:text-8xl">
          Find your Dream Job and get Hired
        </h1>
        <h3 className="w-3/4 text-sm text-gray-300 sm:mt-2 sm:text-2xl md:w-full">
          Explore thousands of job listings or find the perfect candidate
        </h3>
      </section>
      <div className="mt-4 flex w-full items-center justify-center gap-4 md:mt-8">
        <Link href={"/jobs"}>
          <Button>Find Jobs</Button>
        </Link>
        <Link href={"/post-job"}>
          <Button variant={"secondary"}>Post Jobs</Button>
        </Link>
      </div>

      {/* Carousel */}
      <CompanyCarousel />
    </main>
  );
};

export default LandingPage;
