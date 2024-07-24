export const AboutUsPage = () => {
  return (
    <div className="bg-black-bg h-full flex flex-col items-center">
      <h1 className="text-heading-xl font-bold font-lato text-white py-8">
        SOBRE NOSOTROS
      </h1>
      <div className="w-full bg-lima-100 text-black flex flex-col items-center p-4 gap-y-4">
        <h2 className="text-heading-md font-bold font-lato">NUESTRA MISIÓN</h2>
        <p className="text-heading font-normal font-lato min-[566px]:max-w-xl">
          Empoderar a las personas a alcanzar sus objetivos de fitness de manera
          integral, accesible y personalizada, eliminando las barreras de
          desplazamiento, tiempo y ansiedad, y brindándoles el apoyo y la guía
          de profesionales certificados.
        </p>
        <p className="min-[566px]:max-w-xl">
          Creemos que el fitness es una herramienta poderosa que puede
          transformar vidas. Al eliminar las barreras y brindar el apoyo
          adecuado, podemos ayudar a las personas a sentirse mejor, vivir más
          sanas y alcanzar su máximo potencial.
        </p>
      </div>
      <div className="text-white h-full p-4 pl-8 flex flex-col items-center gap-y-4">
        <h2 className="text-heading-md font-bold font-lato">
          NUESTROS VALORES
        </h2>
        <ul className="min-[566px]:max-w-xl">
          <li className="list-disc">
            <strong>Accesibilidad:</strong> Creemos que el fitness debería ser
            accesible para todos, independientemente de su ubicación, nivel de
            condición física o estilo de vida.
          </li>
          <li className="list-disc">
            <strong>Personalización:</strong> Ofrecemos distintas clases y
            programas adaptados a las necesidades individuales de cada persona.
          </li>
          <li className="list-disc">
            <strong>Profesionalismo:</strong> Contamos con un equipo de
            entrenadores, fisioterapeutas y nutricionistas certificados que
            brindan orientación experta.
          </li>
          <li className="list-disc">
            <strong>Integralidad:</strong> Abordamos el fitness desde una
            perspectiva holística, considerando tanto el aspecto físico como el
            mental y nutricional.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;
