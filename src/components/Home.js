import React, {useEffect, useState} from "react";
import { BsCart4 } from "react-icons/bs";

const Home = () => {

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 0 || scrollY - lastScrollY < -1)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();
  return (
    <>
      <div className={  "headerFix boxHeader d-flex row justify-content-between align-items-center w-100"}>
        <div className="h-100">
          <img
            className="objectFit h-100"
            src={require("../assets/img/logo512.webp")}
            alt="LogoPrincipal"
          />
        </div>
        <button className="d-flex row boxCart border-radius align-items-center button">
          <BsCart4 size={20} />
          <div className="boxCart_amount">25.50</div>
        </button>
      </div>
      <div className="w-100 d-flex row boxHome">
        <div className="w-60 boxProducts">
          <div className="font-bold boxHome_title text-blue">Store</div>
          <div className="w-100 d-flex row flex-wrap">
            <div className="column">
              <button className="column_button">
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productAlqueria.webp")}
                  alt="Product"
                />
              </button>
              <button className="column_button">
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productZucaritas.webp")}
                  alt="Product"
                />
              </button>

              <button className="column_button">
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productMilo.webp")}
                  alt="Product"
                />
              </button>

              <button className="column_button">
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productDetodito.webp")}
                  alt="Product"
                />
              </button>
            </div>

            <div className="column">
              <button className="column_button">
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productDetodito.webp")}
                  alt="Product"
                />
              </button>

              <button className="column_button">
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productAlqueria.webp")}
                  alt="Product"
                />
              </button>

              <button className="column_button">
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productMilo.webp")}
                  alt="Product"
                />
              </button>

              <button className="column_button">
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productAlqueria.webp")}
                  alt="Product"
                />
              </button>
            </div>

            <div className="column">
              <button className="column_button">
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productMilo.webp")}
                  alt="Product"
                />
              </button>

              <button className="column_button">
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productDetodito.webp")}
                  alt="Product"
                />
              </button>

              <button className="column_button">
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productZucaritas.webp")}
                  alt="Product"
                />
              </button>

              <button className="column_button">
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productAlqueria.webp")}
                  alt="Product"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-40 boxProducts">
          <div className="font-bold boxHome_title text-blue"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
