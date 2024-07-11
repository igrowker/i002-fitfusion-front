export const Privacy = () => {
  return (
    <div className="bg-black-bg h-full flex flex-col items-center justify-center">
      <h1 className="text-heading-xl font-bold font-lato text-white py-8 m-auto text-center">
        POLITICAS DE PRIVACIDAD
      </h1>
      <div className="w-full bg-lima-100 text-black flex flex-col items-center p-4 gap-y-4 ">
        <h2 className="text-heading-md font-bold font-lato min-[566px]:max-w-xl text-center">
          Al utilizar nuestros servicios, nos confías tus datos. Entendemos que
          es una gran responsabilidad y nos esforzamos al máximo para proteger
          tu información y permitirte controlarla.
        </h2>
      </div>
      <div className="text-white h-full p-4 pl-8 flex flex-col items-center gap-y-4">
        <h2 className="text-heading-md font-bold font-lato min-[566px]:max-w-xl ">
          Queremos informarte del tipo de datos que recogemos cuando utilizas
          nuestros servicios
        </h2>
        <p className="text-heading font-normal font-lato min-[566px]:max-w-xl ">
          Recogemos información para proporcionar los mejores servicios a todos
          nuestros usuarios: desde determinar información básica, como el idioma
          que hablas, hasta datos más complejos, como los anuncios que te
          resultarán más útiles, las personas que más te interesan online o los
          vídeos de YouTube que te pueden gustar. El tipo de información que
          recoge FitFusion y cómo se utiliza esa información depende del uso que
          hagas de nuestros servicios y de cómo administres los controles de
          privacidad.{" "}
        </p>
        <p className="text-heading font-normal font-lato min-[566px]:max-w-xl ">
          Si no has iniciado sesión en una cuenta de FitFusion, almacenamos la
          información que recogemos con identificadores únicos vinculados al
          navegador, la aplicación o el dispositivo que utilices. Esto nos
          permite, por ejemplo, mantener tus preferencias en todas las sesiones
          de navegación, como tu idioma preferido o si quieres que te mostremos
          resultados de búsqueda o anuncios más relevantes basados en tu
          actividad.
        </p>
        <p className="text-heading font-normal font-lato min-[566px]:max-w-xl ">
          Si has iniciado sesión, también recogemos información que almacenamos
          en tu cuenta de FitFusion y que tratamos como información personal.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
