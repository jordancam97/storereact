import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";

const Home = () => {
  const [cart, setCart] = useState(true);

  return (
    <>
      <div
        className={
          "headerFix boxHeader d-flex row justify-content-between align-items-center w-100"
        }
      >
        <div className="h-100">
          <img
            className="objectFit h-100"
            src={require("../assets/img/logo512.webp")}
            alt="LogoPrincipal"
          />
        </div>

        {cart ? (
          <button
            className="d-flex row boxCart border-radius align-items-center button"
            onClick={() => setCart(!cart)}
          >
            <BsCart4 size={20} />
            <div className="boxCart_amount">25.50</div>
          </button>
        ) : (
          <div className="d-flex row ">
            <div className="d-flex bg-white row align-items-center boxShop_left">
              <BsCart4 size={20} />
              <div className="boxCart_amount">25.50</div>
            </div>

            <button className="d-flex align-items-center boxShop_right btnDelete" onClick={() => setCart(!cart)}>
              <div className="">X</div>
            </button>
          </div>
        )}

        {/* boton cancelar */}
      </div>
      <div className="w-100 d-flex boxHome">
        <div className="pLeft boxProducts">
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
          </div>
        </div>
        <div className="pRight boxProducts">
          {cart ? (
            <div className="font-bold boxHome_title text-blue">Product</div>
          ) : (
            <div className="font-bold boxHome_title text-blue">
              Shoppig Cart
            </div>
          )}
          {/* <div className="font-bold boxHome_title text-blue">Product</div> */}
          <div className="boxImgSelect">
            <img
              className="objectFit w-100 h-100 "
              src={require("../assets/img/productAlqueria.webp")}
              alt="Product"
            />
            <div className="boxAmount bg-azul d-flex justify-content-center align-items-center font-medium">
              <div className="text-white">1</div>
            </div>
          </div>
          <div className="d-flex row boxTitleAmount">
            <div className="d-flex row align-items-center w-60">
              <div className="font-bold text-black ">Milk</div>
              <div className="ponit bg-azul"></div>
              <div className="text-blue font-bold">
                $<span>1.50</span>
              </div>
            </div>
            <div className="boxOperation w-40 d-flex row justify-content-center ">
              <button className="bg-opacity h-100 d-flex align-items-center justify-content-center boxOperation_label text-black font-bold">
                -
              </button>
              <button className="bg-azul h-100 d-flex align-items-center justify-content-center boxOperation_label text-white font-bold">
                +
              </button>
            </div>
          </div>
          <div className="font-bold boxHome_color text-blue"></div>
          <div className="textChoose font-medium text-opacity">
            Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles,
            pero la mayoría sufrió alteraciones en alguna manera, ya sea porque
            se le agregó humor, o palabras aleatorias que no parecen ni un poco
            creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás
            estar seguro de que no hay nada avergonzante escondido en el medio
            del texto. Todos los generadores de Lorem Ipsum que se encuentran en
            Internet tienden a repetir trozos predefinidos cuando sea necesario,
            haciendo a este el único generador verdadero (válido) en la
            Internet.
          </div>
          <div className=" textChoose font-bold boxHome_color text-blue"></div>

          <div className="textChoose font-medium text-opacity">
            Please choose a product <span className="textDirection"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
