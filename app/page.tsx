import StartButton from "@/components/home/StartButton";

export default function Home() {
  return (
    <>
      <main className="h-[calc(100%-12rem)] flex flex-col items-center justify-center">
        <article className="flex flex-col items-center w-10/12 text-center gap-8">
          <p className="text-4xl">
            {" "}
            Tu música te define, <br /> ¡descubre cómo!{" "}
          </p>

          <StartButton />
        </article>
      </main>
    </>
  );
}
