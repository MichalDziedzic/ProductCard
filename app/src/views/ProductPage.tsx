import { useState } from "react"
import InputSlider from "../components/PriceSlider"
import watch1 from "../assets/1.png"
import watch2 from "../assets/2.jpeg"
import watch3 from "../assets/3.jpeg"
import { useProduct } from "../Hooks/useProduct"

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

          <p className="text-14px text-font_green font-500 text-left">
            offer prepared by <span className="font-700">iCrowd sp.z.o.o</span>
          </p>

          <div className="border border-1 border-custom-white opacity-10"></div>
          <div className="flex justify-between">
            <span className="font-semibold">Price for 1 piece:</span>
            <span className="font-semibold">Total value:</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">{pieceValue}</span>
            <span className="font-semibold">{totalValue}</span>
          </div>
          <div className="border border-1 border-custom-white opacity-10"></div>
          <InputSlider
            pieceValue={pieceValue}
            totalPrice={totalValue}
            boughtValue={boughtValue}
            onChange={handleInputChange}
          />
          <div className="flex justify-between">
            <span className="font-semibold uppercase tracking-[0.2em]">
              cost of pieces
            </span>
            <span className="font-semibold">{costOfPieces}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold uppercase tracking-[0.2em]">
              operational fee
            </span>
            <span className="font-semibold">{operationalFee}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold uppercase tracking-[0.2em]">
              total cost
            </span>
            <span className="font-semibold">{finalTotalCost}</span>
          </div>
          <button className="w-full text-white font-semibold mt-42 mb-26 py-18 rounded-full bg-gradient-btn_main ">
            Buy {amountPieces} pieces
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
