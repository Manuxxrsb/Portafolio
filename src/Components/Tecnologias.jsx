function Tecnologias() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-2/4 py-8 sm:px-6 sm:py-12 lg:px-8 text-[#ffffff]">
          <header className="text-center">
            <h2 className="text-xl font-bold  sm:text-3xl">Tecnologias</h2>
          </header>

          <ul className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5">
            <li>
              <a
                href="#"
                className="rounded-3xl bg-gradient-to-t from-[#9898981e] via-transparent to-transparent group block  "
              >
                <img
                  src="https://img.icons8.com/color/480/git.png"
                  alt="Git.icon"
                  className="h-[100px] w-full object-scale-down transition duration-500 group-hover:scale-105 sm:h-[150px] lg:h-[250px]"
                />
              </a>
              Git
            </li>
            <li>
              <a
                href="#"
                className="rounded-3xl bg-gradient-to-t from-[#9898981e] via-transparent to-transparent group block "
              >
                <img
                  src="https://img.icons8.com/ios-filled/500/github.png"
                  alt="Github.icon"
                  className="h-[100px] w-full object-scale-down transition duration-500 group-hover:scale-105 sm:h-[150px] lg:h-[250px] "
                />
              </a>
              Github
            </li>

            <li>
              <a
                href="#"
                className="rounded-3xl bg-gradient-to-t from-[#9898981e] via-transparent to-transparent group block "
              >
                <img
                  src="https://img.icons8.com/dusk/512/postman-api.png"
                  alt="Postman.icon"
                  className="h-[100px] w-full object-scale-down transition duration-500 group-hover:scale-105 sm:h-[150px] lg:h-[250px] "
                />
              </a>
              Postman
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Tecnologias;
