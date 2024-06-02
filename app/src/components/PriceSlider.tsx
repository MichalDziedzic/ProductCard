import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

import Slider from "@mui/material/Slider"
import MuiInput from "@mui/material/Input"

import { styled } from "@mui/material/styles"

const Input = styled(MuiInput)`
  width: 42px;
`

const InputSlider: React.FC = () => {
  const [value, setValue] = React.useState<number>(30)

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value))
  }

  const handleBlur = () => {
    if (value < 0) {
      setValue(0)
    } else if (value > 100) {
      setValue(100)
    }
  }

  return (
    <Box sx={{ width: 250 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item></Grid>
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            sx={{
              "& .MuiSlider-thumb": {
                background:
                  "linear-gradient(93.73deg, #B3CA85 5.04%, #4DAAD3 95.09%)", // Ustaw kolor kciuka
              },
              "& .MuiSlider-track": {
                background:
                  "linear-gradient(93.73deg, #B3CA85 5.04%, #4DAAD3 95.09%)", // Ustaw gradient na ścieżce
              },
              "& .MuiSlider-rail": {
                background:
                  "linear-gradient(93.73deg, #B3CA85 5.04%, #4DAAD3 95.09%)", // Ustaw gradient na torze
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
              max: 100,
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
