function Tecnologias() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Tecnologias
            </h2>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://img.icons8.com/color/480/git.png"
                  alt=""
                  className="h-[35px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
                />
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Git
                  </h3>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://img.icons8.com/ios-filled/500/github.png"
                  alt=""
                  className="h-[35px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Github
                  </h3>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://img.icons8.com/dusk/512/postman-api.png"
                  alt=""
                  className="h-[35px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Postman
                  </h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Tecnologias;
