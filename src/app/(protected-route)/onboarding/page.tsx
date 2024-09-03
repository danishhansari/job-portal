import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import { Button } from "~/components/ui/button";

const OnboardingLoading = async () => {
  const user = await currentUser();

  // const handleRoleSelection = async (role: string) => {
  //   if (user) {
  //     await updateUser(user.id, {
  //       unsafeMetadata: { role },
  //     });
  //   }
  // };

  return (
    <>
      <section className="flex flex-col items-center justify-center pt-32">
        <h2 className="gradient-title text-5xl font-extrabold tracking-wide sm:text-8xl">
          I am a...
        </h2>
        <div className="mt-6 flex w-full items-center justify-center gap-4 md:mt-16 md:px-40">
          <Button
          // onClick={() => handleRoleSelection("candidate")}
          >
            Candidate
          </Button>
          <Button
            variant={"secondary"}
            // onClick={() => handleRoleSelection("recruiter")}
          >
            Recruiter
          </Button>
        </div>
      </section>
    </>
  );
};

const Onboarding = () => {
  return (
    <Suspense
      fallback={<BarLoader className="mb-4" width={"100%"} color="#36d7b7" />}
    >
      <OnboardingLoading />
    </Suspense>
  );
};

export default Onboarding;
