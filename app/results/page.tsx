export default function Results() {
  return (
    <>
      <main className="h-[calc(100%-12rem)] flex flex-col items-center">
        <article className="flex flex-col items-center w-10/12 text-center gap-8">
          <div>
            <p> Tu personalidad musical </p>
            <h2 className="italic text-6xl font-bold"> CURADOR </h2>
          </div>

          <div>
            <p className=" text-justify">
              {" "}
              Te gusta expandir tu gusto musical, tienes un repertorio variado y
              disfrutas compartiéndolo con los demás. Eres una persona social,
              ¡y tu música lo demuestra!.{" "}
            </p>
          </div>

          <div>
            <h2> Resultado de tus rasgos </h2>
            <div>
              <div>
                <p> Apertura (openness) </p>
                <div></div>
              </div>
              <div>
                <p> Escrupulosidad (conscientiousness) </p>
              </div>
              <div>
                <p> Extraversión (extraversion) </p>
              </div>
              <div>
                <p> Amabilidad (agreeableness) </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
