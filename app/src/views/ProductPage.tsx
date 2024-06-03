import { useState } from "react"
import InputSlider from "../components/PriceSlider"
import watch1 from "../assets/1.png"
import watch2 from "../assets/2.jpeg"
import watch3 from "../assets/3.jpeg"
import tetherSrc from "../assets/icons/usdt_icon.svg"
import tetherSrcGreen from "../assets/icons/usdt_icon_green.svg"
import { useProduct } from "../hooks/useProduct"
import LoaderValue from "../components/bars/LoaderValue"
import Breadcrumbs from "../components/BreadCrumbs"
import SnackBar from "../components/UI/SnackBar" // Import the new SnackBar component

function ProductPage() {
  const product = useProduct()

  if (!product) return null

  const { totalValue, pieceValue, boughtValue } = product

  const [activeSlide, setActiveSlide] = useState(1)
  const [amountPieces, setAmountPieces] = useState(5)
  const [totalCost, setTotalCost] = useState(activeSlide * pieceValue)
  const [showSnackBar, setShowSnackBar] = useState(false)

  const handleSlideChange = (slide: number) => {
    setActiveSlide(slide)
  }

  const handleInputChange = (value: number) => {
    setAmountPieces(value)
    const costSummary = value * pieceValue
    setTotalCost(costSummary)
  }

  const handleBuyClick = () => {
    setShowSnackBar(true)
  }

  const costOfPieces = amountPieces * pieceValue
  const operationalFee = totalCost * 0.01
  const finalTotalCost = totalCost + operationalFee

  return (
    <div className="bg-black flex items-center justify-center min-h-screen">
      <div className="bg-bg_dark_grey flex w-full max-w-[1282px] h-auto mx-4 min-h-[616px] rounded-full">
        <div className="relative bg-bg_dark_grey max-w-[506px] w-full flex-shrink-0 rounded-tl-[25px] rounded-bl-[25px] carousel">
          <LoaderValue
            bought={boughtValue}
            totalValue={Math.floor(totalValue / pieceValue)}
          />
          <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            <button
              className={`custom-dot ${activeSlide === 1 ? "active" : ""}`}
              onClick={() => handleSlideChange(1)}
            ></button>
            <button
              className={`custom-dot ${activeSlide === 2 ? "active" : ""}`}
              onClick={() => handleSlideChange(2)}
            ></button>
            <button
              className={`custom-dot ${activeSlide === 3 ? "active" : ""}`}
              onClick={() => handleSlideChange(3)}
            ></button>
          </div>

          <div
            id="slide1"
            className={`carousel-item relative w-full ${
              activeSlide === 1 ? "block" : "hidden"
            }`}
          >
            <img
              src={watch1}
              className="h-full w-full object-cover"
              alt="Watch 1"
            />
          </div>
          <div
            id="slide2"
            className={`carousel-item relative w-full ${
              activeSlide === 2 ? "block" : "hidden"
            }`}
          >
            <img
              src={watch2}
              className="h-full w-full object-cover"
              alt="Watch 2"
            />
          </div>
          <div
            id="slide3"
            className={`carousel-item relative w-full ${
              activeSlide === 3 ? "block" : "hidden"
            }`}
          >
            <img
              src={watch3}
              className="h-full w-full object-cover"
              alt="Watch 3"
            />
          </div>
        </div>

        <div className="flex-grow  pl-58 pr-92 pt-31 pb-26">
          <Breadcrumbs />
          <h2 className="text-font_white font-montserrat text-30px font-700 text-left">
            {product.producent} {product.model}
          </h2>
          <p className="text-14px text-font_green font-500 text-left pt-1">
            offer prepared by <span className="font-700">iCrowd sp.z.o.o</span>
          </p>
          <div className="border border-1 border-custom-white opacity-10 mb-20 mt-58"></div>
          <div className="flex justify-between text-14px ">
            <span className="">Price for 1 piece:</span>
            <span className="">Total value:</span>
          </div>
          <div className="flex justify-between text-20px font-500 paddingT_3px">
            <span className="text-font_green  flex gap-2 items-center">
              <img
                src={tetherSrcGreen}
                alt="Tether"
                className="w-20 h-20 object-cover"
              />
              {pieceValue}
            </span>
            <span className="text-font_white flex gap-2 items-center">
              <img
                src={tetherSrc}
                alt="Tether"
                className="w-20 h-20 object-cover"
              />
              {totalValue}
            </span>
          </div>
          <div className="border border-1 border-custom-white opacity-10 mt-27 "></div>
          <InputSlider
            pieceValue={pieceValue}
            totalPrice={totalValue}
            boughtValue={boughtValue}
            onChange={handleInputChange}
          />
          <div className="flex justify-between font-700 text-20px">
            <span className=" uppercase tracking-[0.2em] font-500 text-font_white opacity-10 text-14px">
              cost of pieces
            </span>
            <span className="flex gap-2 items-center">
              <img
                src={tetherSrc}
                alt="Tether"
                className="w-20 h-20 object-cover opacity-10"
              />
              {costOfPieces}
            </span>
          </div>
          <div className="flex justify-between font-700 pt-20 text-20px">
            <span className=" uppercase tracking-[0.2em] font-500 text-font_white opacity-10 text-14px">
              operational fee
            </span>
            <span className="flex gap-2 items-center">
              <img
                src={tetherSrc}
                alt="Tether"
                className="w-20 h-20 object-cover opacity-10"
              />
              {operationalFee}
            </span>
          </div>
          <div className="flex justify-between font-700 text-font_white pt-20 text-20px">
            <span className=" uppercase tracking-[0.2em] text-14px ">
              total cost
            </span>
            <span className="flex gap-2 items-center">
              <img
                src={tetherSrc}
                alt="Tether"
                className="w-20 h-20 object-cover "
              />
              {finalTotalCost}
            </span>
          </div>
          <button
            className="btn w-full text-font_green mt-42  py-18 rounded-full bg-gradient-btn_main "
            onClick={handleBuyClick}
          >
            Buy {amountPieces} pieces
          </button>
          <div className="flex font-600 text-14px pt-2.5 text-center">
            <p className="w-full">
              By purchasing pieces you accept Investment offer and Terms and
              regulations
            </p>
          </div>
        </div>
      </div>
      {showSnackBar && (
        <SnackBar
          message={`Done! You successfully invested in ${product.producent} ${product.model}`}
          onClose={() => setShowSnackBar(false)}
        />
      )}
    </div>
  )
}

export default ProductPage
