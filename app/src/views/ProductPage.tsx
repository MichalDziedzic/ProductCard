import { useState } from "react"
import InputSlider from "../components/PriceSlider"
import watch1 from "../assets/1.png"
import watch2 from "../assets/2.jpeg"
import watch3 from "../assets/3.jpeg"
import tetherSrc from "../assets/icons/usdt_icon.svg"
import tetherSrcGreen from "../assets/icons/usdt_icon_green.svg"
import { useProduct } from "../Hooks/useProduct"
import LoaderValue from "../components/bars/LoaderValue"

function ProductPage() {
  const product = useProduct()

  if (!product) return null

  const { totalValue, pieceValue, boughtValue } = product

  const [activeSlide, setActiveSlide] = useState(1)
  const [amountPieces, setAmountPieces] = useState(1)
  const [totalCost, setTotalCost] = useState(activeSlide * pieceValue)

  const handleSlideChange = (slide: number) => {
    setActiveSlide(slide)
  }

  const handleInputChange = (value: number) => {
    setAmountPieces(value)
    const costSummary = value * pieceValue
    setTotalCost(costSummary)
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
            <a
              href="#slide1"
              className={`btn btn-xs rounded-full w-3 h-3 ${
                activeSlide === 1 ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => handleSlideChange(1)}
            ></a>
            <a
              href="#slide2"
              className={`btn btn-xs rounded-full w-3 h-3 ${
                activeSlide === 2 ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => handleSlideChange(2)}
            ></a>
            <a
              href="#slide3"
              className={`btn btn-xs rounded-full w-3 h-3 ${
                activeSlide === 3 ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => handleSlideChange(3)}
            ></a>
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
            <span className="text-font_green  flex gap-2">
              <img
                src={tetherSrcGreen}
                alt="Tether"
                className="w-20 h-20 object-cover"
              />
              {pieceValue}
            </span>
            <span className="text-font_white flex gap-2">
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
            <span className=" uppercase tracking-[0.2em] font-500 text-font_white opacity-10">
              cost of pieces
            </span>
            <span className="flex gap-2 ">
              <img
                src={tetherSrc}
                alt="Tether"
                className="w-20 h-20 object-cover opacity-10"
              />
              {costOfPieces}
            </span>
          </div>
          <div className="flex justify-between font-700 pt-20 text-20px">
            <span className=" uppercase tracking-[0.2em] font-500 text-font_white opacity-10">
              operational fee
            </span>
            <span className="flex gap-2">
              <img
                src={tetherSrc}
                alt="Tether"
                className="w-20 h-20 object-cover opacity-10"
              />
              {operationalFee}
            </span>
          </div>
          <div className="flex justify-between font-700 text-font_white pt-20 text-20px">
            <span className="font-semibold uppercase tracking-[0.2em]  ">
              total cost
            </span>
            <span className="flex gap-2">
              <img
                src={tetherSrc}
                alt="Tether"
                className="w-20 h-20 object-cover "
              />
              {finalTotalCost}
            </span>
          </div>
          <button className="w-full text-white font-semibold mt-42  py-18 rounded-full bg-gradient-btn_main ">
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
    </div>
  )
}

export default ProductPage
