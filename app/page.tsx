import { Lato, Lobster } from "next/font/google";
import Image from "next/image";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });
const lato = Lato({ weight: "300", subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <header className="flex h-32 justify-center items-center">
                <div className="relative w-fit">
                    <Image
                        src="/musicality.svg"
                        width={32}
                        height={32}
                        alt="Musicality logo"
                    />
                </div>
            </header>

            <main className="h-[calc(100%-12rem)] flex flex-col items-center justify-center">
                <article className="flex flex-col items-center w-10/12 text-center gap-8">
                    <p className="text-4xl">
                        {" "}
                        Tu música te define, <br /> ¡descubre cómo!{" "}
                    </p>

                    <button className="flex gap-4 text-xl py-4 px-8 border border-black rounded-full">
                        <Image
                            src="/spotify.svg"
                            width={32}
                            height={32}
                            alt="Spotify logo"
                        />
                        Ingresa con Spotify
                    </button>
                </article>
            </main>

            <footer className="h-16 flex justify-center">
                <div className="border-t border-t-black">
                    <p> Diseñado por Tomás Barros y Pedro Yáñez</p>
                </div>
            </footer>
        </>
    );
}
