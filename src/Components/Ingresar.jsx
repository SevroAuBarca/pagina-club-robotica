import qr from "../assets/qrCode.png";
const Ingresar = () => {
  return (
    <section
      className="w-full flex flex-col justify-center items-center mb-5 lg:mb-0"
      id="qr"
    >
      <h3 className="font-bold text-xl my-3 lg:text-2xl">UNETE AL CLUB!</h3>
      <article className=" w-[160px] h-[200px] lg:w-[300px] lg:h-[500px] flex items-center">
        <a href="https://forms.gle/zjUv7KNXCgBsQcRy6" target="_BLANK">
          <img src={qr} alt="" className="w-full" />
        </a>
      </article>
    </section>
  );
};

export default Ingresar;
