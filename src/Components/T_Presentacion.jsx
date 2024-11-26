function Tarjeta_Presentacion() {
  return (
    <>
      <img
        style={{
          borderRadius: "50%",
          border: "2px solid white",
          width: "200px",
          height: "200px",
        }}
        src="/src/assets/perfil.jpg"
        alt="Soy ese"
      />
      <div className="text-3xl">
        <h2>Ingeniero Informatico</h2>
        <h3>Manuel Antonio Solis Gonzalez</h3>
        <p>
          Soy un desarrollador apasionado con experiencia en programación. Mi
          interés radica en la creación de soluciones innovadoras y eficientes a
          través del código. Estoy constantemente aprendiendo y mejorando mis
          habilidades para mantenerme al día con las últimas tendencias y
          tecnologías en el campo del desarrollo de software. Mi objetivo es
          contribuir con mis conocimientos y crecer profesionalmente en equipos
          dinámicos y orientados al desarrollo.
        </p>
      </div>
    </>
  );
}

export default Tarjeta_Presentacion;
