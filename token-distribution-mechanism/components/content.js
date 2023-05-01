import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { TextBox, StyledGrid } from "./grid-style/gridcontent"
import Button from "@mui/material/Button"

const MyComponent = styled("div")({
  typography: "body2",
  backgroundColor: "green",
  padding: 8,
  borderRadius: 4,
  alignItems: "center",
  alignContent: "center",
  direction: "column",
})

export default function BasicGrid() {
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        height: "30em",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "grid",
          backgroundColor: "cyan",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <TextBox>Styled text box</TextBox>
        <StyledGrid container spacing={0}>
          <center>
            <Button variant="contained">SPECIAL BUTTON</Button>
            <div>Simple text</div>
            <MyComponent>MyComponent</MyComponent>
          </center>
        </StyledGrid>
        <StyledGrid>sss</StyledGrid>
      </div>
    </div>
  )
}
