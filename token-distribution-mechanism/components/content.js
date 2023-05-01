import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { TextBox, StyledGrid } from "./grid-style/gridcontent"
import Button from "@mui/material/Button"
import Join from "components/join.js"

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
    <div style={{}}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "8em 4em",
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
          height: "18em",
          backgroundColor: "#2196F3",
        }}
      >
        <TextBox>Styled text box</TextBox>
        <Button variant="contained">SPECIAL BUTTON</Button>
        <MyComponent>To be implemented</MyComponent>
        <StyledGrid>GET ENTRANCE FEE</StyledGrid>
        <Join>DIV NUMBER 6</Join>
      </div>
    </div>
  )
}
