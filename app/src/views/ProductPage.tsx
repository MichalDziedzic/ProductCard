import watch from "../assets/1.png" // Import obrazka
function ProductPage() {
  return (
    <div className="bg-black flex items-center justify-center min-h-screen">
      <div
        className="bg-bg_dark_grey flex w-full max-w-[1282px] h-auto  mx-4 min-h-[616px] "
        style={{ borderRadius: "25px" }}
      >
        <div className="bg-bg_dark_grey max-w-[506px] w-full flex-shrink-0  rounded-tl-[25px] rounded-bl-[25px]">
          {/* Zawartość lewego kontenera image bg? */}
          <img
            src={watch}
            alt="Logo"
            className="h-full w-full object-cover"
            style={{ borderRadius: "25px" }}
          />{" "}
          {/* Użycie obrazka */}
        </div>
        {/* Prawy kontener */}
        <div className=" flex-grow p-4">
          {/* Zawartość prawego kontenera */}
          <h2 className="text-font_green">Prawy Kontener</h2>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
