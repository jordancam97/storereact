import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";

const Home = () => {
  const [cart, setCart] = useState(true);
  const [product, setProduct] = useState(true);
  const [imgPro, setImgPro] = useState("");
  const [titlePro, setTitlePro] = useState("");

  // mostrar producto en barra lateral
  const proctState = () => {
    if (product === true) {
      setProduct(false);
      setCart(false);
    } else {
      setCart(false);
    }
  };

  // asignar imagenes y texto
  const produText = (texta) => {
    if (cart === false){
      setCart(true)
      setProduct(false)
    } else{
      setProduct(false)
    }
    
    
    if (texta === "alqueria") {
      setImgPro(
        <img
          className="objectFit w-100 h-100 "
          src={require("../assets/img/productAlqueria.webp")}
          alt="Product"
        />
      );
      setTitlePro("Leche")
    } else if (texta === "zucaritas"){
      setImgPro(
        <img
          className="objectFit w-100 h-100 "
          src={require("../assets/img/productZucaritas.webp")}
          alt="Product"
        />
      );
      setTitlePro("Cereales")
    }else if (texta === "milo"){
      setImgPro(
        <img
          className="objectFit w-100 h-100 "
          src={require("../assets/img/productMilo.webp")}
          alt="Product"
        />
      );
      setTitlePro("Chocolate")
    } else{
      setImgPro(
        <img
          className="objectFit w-100 h-100 "
          src={require("../assets/img/productDetodito.webp")}
          alt="Product"
        />
      );
      setTitlePro("Papitas")
    }
  };

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
          <a
            href="#todos"
            className="d-flex row boxCart border-radius align-items-center button"
            onClick={() => proctState()}
          >
            <BsCart4 size={20} />
            <div className="boxCart_amount">25.50</div>
          </a>
        ) : (
          <>
            {/* boton cancelar */}
            <div className="d-flex row ">
              <div className="d-flex bg-white row align-items-center boxShop_left">
                <BsCart4 size={20} />
                <div className="boxCart_amount">25.50</div>
              </div>

              <button
                className="d-flex align-items-center boxShop_right btnDelete"
                onClick={() => [setCart(!cart), setProduct(!product)]}
              >
                <div className="">X</div>
              </button>
            </div>
          </>
        )}
      </div>
      <div className="w-100 d-flex boxHome">
        <div className="pLeft boxProducts">
          <div className="font-bold boxHome_title text-blue">Store</div>
          <div className="w-100 d-flex row flex-wrap">
            <div className="column">
              <button
                className="column_button"
                href="#todos"
                onClick={() => produText("alqueria")}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productAlqueria.webp")}
                  alt="Product"
                />
                <div className="boxAmount boxAmount_left bg-azul d-flex justify-content-center align-items-center font-medium">
                  <div className="text-white">10</div>
                </div>
              </button>
              <button
                className="column_button"
                onClick={() => produText("zucaritas")}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productZucaritas.webp")}
                  alt="Product"
                />
              </button>

              <button
                className="column_button"
                onClick={() => produText("milo")}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productMilo.webp")}
                  alt="Product"
                />
              </button>

              <button
                className="column_button"
                onClick={() => produText()}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productDetodito.webp")}
                  alt="Product"
                />
              </button>
            </div>

            <div className="column">
              <button
                className="column_button"
                onClick={() => produText()}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productDetodito.webp")}
                  alt="Product"
                />
              </button>

              <button
                className="column_button"
                onClick={() => produText("alqueria")}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productAlqueria.webp")}
                  alt="Product"
                />
              </button>

              <button
                className="column_button"
                onClick={() => produText("milo")}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productMilo.webp")}
                  alt="Product"
                />
              </button>

              <button
                className="column_button"
                onClick={() => produText("alqueria")}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productAlqueria.webp")}
                  alt="Product"
                />
              </button>
            </div>

            <div className="column">
              <button
                className="column_button"
                onClick={() => produText("milo")}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productMilo.webp")}
                  alt="Product"
                />
              </button>

              <button
                className="column_button"
                onClick={() => produText()}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productDetodito.webp")}
                  alt="Product"
                />
              </button>

              <button
                className="column_button"
                onClick={() => produText("zucaritas")}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productZucaritas.webp")}
                  alt="Product"
                />
              </button>

              <button
                className="column_button"
                onClick={() => produText("alqueria")}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productAlqueria.webp")}
                  alt="Product"
                />
              </button>
            </div>

            <div className="column">
              <button
                className="column_button"
                onClick={() => produText()}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productDetodito.webp")}
                  alt="Product"
                />
              </button>

              <button
                className="column_button"
                onClick={() => produText("alqueria")}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productAlqueria.webp")}
                  alt="Product"
                />
              </button>

              <button
                className="column_button"
                onClick={() => produText("milo")}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productMilo.webp")}
                  alt="Product"
                />
                <div className="boxAmount boxAmount_left bg-azul d-flex justify-content-center align-items-center font-medium">
                  <div className="text-white">2</div>
                </div>
              </button>

              <button
                className="column_button"
                onClick={() => produText("alqueria")}
              >
                <img
                  className="objectFit w-100"
                  src={require("../assets/img/productAlqueria.webp")}
                  alt="Product"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="pRight boxProducts boxHome_titleRight" id="todos">
          {product ? (
            <>
              <div className="font-bold boxHome_title text-blue"></div>
              <div className="textChoose font-medium text-opacity">
                Please choose a product <span className="textDirection"></span>
              </div>
            </>
          ) : (
            <>
              {cart ? (
                <>
                  <div className="font-bold boxHome_title text-blue">
                    Product
                  </div>
                  <div className="boxImgSelect">
                    {imgPro}

                    <div className="boxAmount bg-azul d-flex justify-content-center align-items-center font-medium">
                      <div className="text-white">10</div>
                    </div>
                  </div>
                  <div className="d-flex row boxTitleAmount">
                    <div className="d-flex row align-items-center w-60">
                      <div className="font-bold text-black ">{titlePro}</div>
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
                    Hay muchas variaciones de los pasajes de Lorem Ipsum
                    disponibles, pero la mayoría sufrió alteraciones en alguna
                    manera, ya sea porque se le agregó humor, o palabras
                    aleatorias que no parecen ni un poco creíbles. Si vas a
                    utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de
                    que no hay nada avergonzante escondido en el medio del
                    texto. Todos los generadores de Lorem Ipsum que se
                    encuentran en Internet tienden a repetir trozos predefinidos
                    cuando sea necesario, haciendo a este el único generador
                    verdadero (válido) en la Internet.
                  </div>
                  <div className=" textChoose font-bold boxHome_color text-blue"></div>
                </>
              ) : (
                <>
                  <div className="font-bold boxHome_title text-blue">
                    Shoppig Cart
                  </div>
                  <div className="d-flex row w-40">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="boxAmoCart bg-azul d-flex justify-content-center align-items-center font-medium">
                        <div className="text-white">10</div>
                      </div>
                    </div>

                    <div className="boxImgCart w-70">
                      <img
                        className="objectFit w-100 h-100 "
                        src={require("../assets/img/productAlqueria.webp")}
                        alt="Product"
                      />
                    </div>
                  </div>

                  <div className=" textChoose font-bold boxHome_color text-blue"></div>

                  <div className="d-flex row w-40">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="boxAmoCart bg-azul d-flex justify-content-center align-items-center font-medium">
                        <div className="text-white">2</div>
                      </div>
                    </div>

                    <div className="boxImgCart w-70">
                      <img
                        className="objectFit w-100 h-100 "
                        src={require("../assets/img/productMilo.webp")}
                        alt="Product"
                      />
                    </div>
                  </div>

                  <div className=" textChoose font-bold boxHome_color text-blue"></div>

                  <div className="w-100 displayFlexEnd row boxTotal ">
                    <div className="font-medium text-opacity">Total:</div>
                    <div className="font-medium text-blue">
                      $<span>25.50</span>
                    </div>
                  </div>

                  <form action="https://checkout.wompi.co/p/" method="GET">
                    <input
                      type="hidden"
                      name="public-key"
                      value="pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf"
                    />
                    <input type="hidden" name="currency" value="COP" />
                    <input
                      type="hidden"
                      name="amount-in-cents"
                      value="7890000"
                    />
                    <input
                      type="hidden"
                      name="reference"
                      value="EKBVNUBNE867"
                    />

                    <input
                      type="hidden"
                      name="redirect-url"
                      value="https://transaction-redirect.wompi.co/check"
                    />
                    <input
                      type="hidden"
                      name="tax-in-cents:vat"
                      value="1290000"
                    />
                    <input
                      type="hidden"
                      name="tax-in-cents:consumption"
                      value="590000"
                    />
                    <input
                      type="hidden"
                      name="customer-data:email"
                      value="lola@perez.com"
                    />
                    <input
                      type="hidden"
                      name="customer-data:full-name"
                      value="Lola Perez"
                    />
                    <input
                      type="hidden"
                      name="customer-data:phone-number"
                      value="3019777777"
                    />
                    <input
                      type="hidden"
                      name="customer-data:legal-id"
                      value="123456789"
                    />
                    <input
                      type="hidden"
                      name="customer-data:legal-id-type"
                      value="CC"
                    />
                    <input
                      type="hidden"
                      name="shipping-address:address-line-1"
                      value="Carrera 123 #4-5"
                    />
                    <input
                      type="hidden"
                      name="shipping-address:country"
                      value="CO"
                    />
                    <input
                      type="hidden"
                      name="shipping-address:phone-number"
                      value="3019988888"
                    />
                    <input
                      type="hidden"
                      name="shipping-address:city"
                      value="Bogota"
                    />
                    <input
                      type="hidden"
                      name="shipping-address:region"
                      value="Cundinamarca"
                    />

                    <button type="submit" className="waybox-button">
                      Paga con Wompi
                    </button>
                  </form>
                </>
              )}
            </>
          )}

          {/* <div className="font-bold boxHome_title text-blue">Product</div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
