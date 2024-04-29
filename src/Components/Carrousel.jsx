import "../App.css";
import { DotButton, useDotButton } from "./DotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowButtin";
import useEmblaCarousel from "embla-carousel-react";
import { imagenes } from "../images";
const Carrousel = () => {
  const OPTIONS = {};
  const SLIDE_COUNT = imagenes.length;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla mb-5 lg:mb-0">
      <h3 className="font-bold text-xl my-3 lg:text-2xl text-center">
        LOGROS DE NUESTROS EQUIPOS
      </h3>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {SLIDES.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <img
                  src={imagenes[index].src}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carrousel;
