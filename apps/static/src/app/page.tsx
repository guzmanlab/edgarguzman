import type { Metadata, NextPage } from "next";

export function metadata(): Metadata {
  return {
    title: "Coming Soon",
  };
}

const ComingSoon: NextPage = () => {
  return (
    <main className="grid min-h-screen grid-cols-1 place-items-center text-black">
      <div className="grid grid-col-1 place-items-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-[5rem]">
          Coming Soon
        </h1>

        <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-1 sm:grid-rows-2 md:gap-8">
          <div className="text-lg">
            This is a description of coming soon page.
          </div>
        </div>
      </div>
    </main>
  );
};

export default ComingSoon;
