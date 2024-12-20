function Navegacion() {
  return (
    <>
      <div className="justify-items-center">
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">
            Tab
          </label>

          <select id="Tab" className="w-full rounded-md border-gray-200">
            <option select>Home</option>
            <option>Tecnologias</option>
            <option>Repositorios</option>
            <option>Linkedin</option>
          </select>
        </div>

        <div className="sm:block">
          <nav className="flex gap-6 " aria-label="Tabs">
            <a
              href="#"
              className="shrink-0 rounded-lg p-2 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-700"
            >
              Home
            </a>

            <a
              href="#"
              className="shrink-0 rounded-lg p-2 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-700"
            >
              Tecnologias
            </a>

            <a
              href="#"
              className="shrink-0 rounded-lg p-2 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-700"
            >
              Repositorios
            </a>

            <a
              href="#"
              className="shrink-0 rounded-lg p-2 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-700"
              aria-current="page"
            >
              Linkedin
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navegacion;
