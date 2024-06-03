import React, { useEffect, useRef } from "react"
// import "./LoaderValue.scss"

interface LoaderValueProps {
  bought: number
  totalValue: number
}

const LoaderValue: React.FC<LoaderValueProps> = ({ bought, totalValue }) => {
  const progressRef = useRef<HTMLProgressElement>(null)

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.value = 0
      setTimeout(() => {
        progressRef.current!.value = (bought / totalValue) * 100
      }, 100)
    }
  }, [bought, totalValue])

  return (
    <div className="loader-wrapper">
      <progress
        ref={progressRef}
        className="progress progress-error progressBar"
        max="100"
      ></progress>
      <div className="progressBarText">
        <p>
          {bought} / {totalValue}
        </p>
      </div>
    </div>
  )
}

export default LoaderValue
