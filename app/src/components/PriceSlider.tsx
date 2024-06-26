import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Slider from "@mui/material/Slider"
import MuiInput from "@mui/material/Input"
import { styled } from "@mui/material/styles"

interface InputSliderProps {
  totalPrice: number
  pieceValue: number
  boughtValue: number
  onChange: (value: number) => void
}

const Input = styled(MuiInput)`
  width: auto;
`

const InputSlider: React.FC<InputSliderProps> = ({
  totalPrice,
  pieceValue,
  boughtValue,
  onChange,
}) => {
  const [value, setValue] = React.useState<number>(1)

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const newVal = newValue as number
    setValue(newVal)
    onChange(newVal)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = event.target.value === "" ? 0 : Number(event.target.value)
    setValue(newVal)
    onChange(newVal)
  }

  const handleBlur = () => {
    if (value < 1) {
      setValue(1)
      onChange(1)
    } else if (value > totalPrice / pieceValue) {
      const maxValue = Math.floor(totalPrice / pieceValue)
      setValue(maxValue)
      onChange(maxValue)
    }
  }

  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            step={1}
            min={1}
            max={100}
            sx={{
              "& .MuiSlider-thumb": {
                background:
                  "linear-gradient(93.73deg, #B3CA85 5.04%, #4DAAD3 95.09%)",
              },
              "& .MuiSlider-track": {
                background:
                  "linear-gradient(93.73deg, #B3CA85 5.04%, #4DAAD3 95.09%)",
              },
              "& .MuiSlider-rail": {
                background:
                  "linear-gradient(93.73deg, #B3CA85 5.04%, #4DAAD3 95.09%)",
              },
            }}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: Math.floor(totalPrice / pieceValue),
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default InputSlider
