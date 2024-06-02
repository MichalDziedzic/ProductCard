import { useState } from "react"
import InputSlider from "../components/PriceSlider"
import watch1 from "../assets/1.png"
import watch2 from "../assets/2.jpeg"
import watch3 from "../assets/3.jpeg"
import { useStoreProducts } from "../stores/productsStore"

function ProductPage() {
  const { product } = useStoreProducts()
  //   const product = useStore((state) => state.product)
  //   const productList = useStore((state) => state.productList)
  //   const increasePieceValue = useStore((state) => state.increasePieceValue)
  //   const decreasePieceValue = useStore((state) => state.decreasePieceValue)

  const [activeSlide, setActiveSlide] = useState(1)
  const [amountPieces, setAmountPieces] = useState(10)

  const handleSlideChange = (slide: number) => {
    setActiveSlide(slide)
  }

  return (
    <div className="bg-black flex items-center justify-center min-h-screen">
      <div
        className="bg-bg_dark_grey flex w-full max-w-[1282px] h-auto mx-4 min-h-[616px]"
        style={{ borderRadius: "25px" }}
      >
        <div className="relative bg-bg_dark_grey max-w-[506px] w-full flex-shrink-0 rounded-tl-[25px] rounded-bl-[25px] carousel">
          {/* Kropki nawigacyjne na górze */}
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

          {/* Zawartość lewego kontenera image bg */}
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
        {/* Prawy kontener */}
        <div className="flex-grow p-4">
          <h2 className="text-font_green">
            {product.producent} {product.model}
          </h2>
          <p>offer prepared by iCrowd sp.z.o.o</p>
          <div className="flex justify-between   ">
            <span className="font-semibold">Price for 1 piece:</span>
            <span className="font-semibold">Total value:</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">{product.pieceValue}</span>
            <span className="font-semibold">{product.totalValue}</span>
          </div>
          <InputSlider />
          <div className="flex justify-between">
            <span className="font-semibold">COST OF PIECES</span>
            <span className="font-semibold">{product.pieceValue}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">OPERATIONAL FEE</span>
            <span className="font-semibold">5</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">TOTAL COST</span>
            <span className="font-semibold">505</span>
          </div>
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg">
            Buy {amountPieces} pieces
          </button>

          {/* <p>Total Value: {product.totalValue}</p>
          <p>Piece Value: {product.pieceValue}</p>
          <p>Bought Value: {product.boughtValue}</p> */}
          <div className="mt-4">
            {/* <button
              onClick={decreasePieceValue}
              className="btn btn-primary mr-2"
            >
              Decrease
            </button>
            <span>{product.pieceValue}</span>
            <button
              onClick={increasePieceValue}
              className="btn btn-primary ml-2"
            >
              Increase
            </button> */}
          </div>

          {/* <h3 className="mt-4 text-font_green">Product List:</h3> */}
          {/* {productList ? (
            <ul>
              {productList.map((p) => (
                <li key={p.id}>
                  {p.producent} {p.model} - Total Value: {p.totalValue} - Piece
                  Value: {p.pieceValue} - Bought Value: {p.boughtValue}
                </li>
              ))}
            </ul>
          ) : (
            <p>No products available</p>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
