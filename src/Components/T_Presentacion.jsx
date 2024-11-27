function Tarjeta_Presentacion() {
  return (
    <>
      <div className="justify-items-center">
        <img
          className="w-64 h-64 border-2 border-[#2b2d42] rounded-full my-8 group block overflow-hidden"
          src="/src/assets/perfil.jpg"
          alt="Soy ese"
        />
        <div className="text-3xl rounded-3xl text-[#ffffff] bg-gradient-to-t from-[#98989831] to-transparent ">
          <h2>Ingeniero Informatico</h2>
          <h3>Manuel Antonio Solis Gonzalez</h3>
          <p>
            Soy un desarrollador apasionado con experiencia en programación. Mi
            interés radica en la creación de soluciones innovadoras y eficientes
            a través del código. Estoy constantemente aprendiendo y mejorando
            mis habilidades para mantenerme al día con las últimas tendencias y
            tecnologías en el campo del desarrollo de software. Mi objetivo es
            contribuir con mis conocimientos y crecer profesionalmente en
            equipos dinámicos y orientados al desarrollo.
          </p>
        </div>
      </div>
    </>
  );
}

export default Tarjeta_Presentacion;
