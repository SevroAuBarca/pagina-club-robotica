import fbm from "../assets/facebook.png";
import igm from "../assets/instagram.png";
import gmlm from "../assets/gmail.png";

const Footer = () => {
  return (
    <footer className="w-full p-5 bg-slate-300">
      <div className="flex justify-center items-center">
        <a href="#" className="mr-2">
          <img src={fbm} alt="" />
        </a>
        <a href="#" className="mr-2">
          <img src={igm} alt="" />
        </a>
        <a href="#" className="mr-2">
          <img src={gmlm} alt="" />
        </a>
      </div>
      <pre className="text-center">Tecnologico Nacional de Mexico</pre>
      <pre className="text-center">Instituto Tecnologico de Cuautla</pre>
      <pre className="text-center break-words">
        © Pagina desarrollada por <br className="lg:hidden" />
        Daniel Alejandro Contreras Martinez
      </pre>
    </footer>
  );
};

export default Footer;
