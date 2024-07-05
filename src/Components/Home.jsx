import Carrousel from "./Carrousel";
import Ingresar from "./Ingresar";
import Title from "./Title";

const Home = () => {
  return (
    <div className="w-full h-auto">
      <Title />
      <h2 className="text-2xl text-center font-bold my-5 lg:text-3xl">
        DESCRIPCIÓN
      </h2>
      <section className="flex flex-col lg:flex-row">
        <article className="w-full lg:w-1/2 p-6 flex flex-col items-center justify-center lg:p-12">
          <div className="w-full text-gray-500 ">
            <h3 className="font-bold text-xl mb-3 lg:text-2xl">
              ¿Quiénes somos?
            </h3>
            <p className="lg:text-xl">
              El Club de Robótica del Instituto Tecnológico de Cuautla es un
              espacio dinámico y emocionante donde los estudiantes tienen la
              oportunidad de explorar el fascinante mundo de la robótica. Con un
              enfoque en el aprendizaje práctico y la participación activa, el
              club ofrece una amplia gama de actividades diseñadas para
              desarrollar habilidades técnicas, fomentar la creatividad y
              promover el trabajo en equipo.
            </p>
          </div>
        </article>
        <article className="w-full bg-img2 bg-cover bg-center  h-[300px] lg:h-[400px] lg:w-1/2"></article>
      </section>
      <section className="flex flex-col-reverse lg:flex-row">
        <article className="w-full bg-img1 bg-cover bg-center  h-[300px] lg:h-[400px] lg:w-1/2"></article>
        <article className="w-full lg:w-1/2 p-6 flex flex-col items-center justify-center lg:p-12">
          <div className="w-full text-gray-500 ">
            <h3 className="font-bold text-xl mb-3 lg:text-2xl">¡Únetenos!</h3>
            <p className="lg:text-xl">
              Si eres apasionado de la robótica te esperamos en nuestro club.
              Contamos con instalaciones adecuadas para que puedas realizar
              aquello que requieras para tus proyectos. En el Instituto
              Tecnológico de cuautla tenemos cursos y talleres que ayudarán a
              potenciar tus conocimientos sobre circuitos y software.
            </p>
          </div>
        </article>
      </section>
      <section className="flex flex-col lg:flex-row">
        <article className="w-full lg:w-1/2 p-6 flex flex-col items-center justify-center lg:p-12">
          <div className="w-full text-gray-500 ">
            <h3 className="font-bold text-xl mb-3 lg:text-2xl">
              ¡Enfrenta nuevos retos!
            </h3>
            <p className="lg:text-xl">
              el Club de Robótica del Instituto Tecnológico de Cuautla ofrece a
              sus miembros una experiencia enriquecedora y estimulante donde
              pueden desarrollar habilidades técnicas y personales, explorar su
              pasión por la tecnología y la innovación, y prepararse para
              enfrentar los desafíos del mundo real en el campo de la robótica.
            </p>
          </div>
        </article>
        <article className="w-full bg-img3 bg-cover bg-center  h-[300px] lg:h-[400px] lg:w-1/2"></article>
      </section>
      <section className="flex flex-col-reverse lg:flex-row">
        <article className="w-full bg-img4 bg-cover bg-center  h-[300px] lg:h-[400px] lg:w-1/2"></article>
        <article className="w-full lg:w-1/2 p-6 flex flex-col items-center justify-center lg:p-12">
          <div className="w-full text-gray-500 ">
            <h3 className="font-bold text-xl mb-3 lg:text-2xl">
              Nuestros servicios
            </h3>
            <p className="lg:text-xl">
              Cuando te únes a nuestro club, puedes elegir entre la variedad de
              cursos y talleres que más te llamen la atención. Las clases son
              una excelente manera de conocer a algunos de nuestros amables
              miembros y desafiarte a ti mismo a aprender nuevas habilidades.
            </p>
          </div>
        </article>
      </section>
      <Carrousel />
      <Ingresar />
    </div>
  );
};

export default Home;
