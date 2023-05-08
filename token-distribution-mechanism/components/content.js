import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Join from "components/join.js"

import { TextBox, StyledGrid } from "./grid-style/gridcontent"
import buttonEffect from "./grid-style/fullbordereffect.module.css"
import defaultButton from "./grid-style/default-button.module.css"
import topGrid from "./grid-style/top-grid.module.css"

const MyComponent = styled("div")({
  typography: "body2",
  backgroundColor: "green",
  padding: 8,
  borderRadius: 4,
  alignItems: "center",
  alignContent: "center",
  direction: "column",
})

export default function BasicGrid({ BorderEffect }) {
  return (
    <div>
      <div className={topGrid["top-grid"]}>
        <TextBox>Styled text box</TextBox>
        <Join>DIV NUMBER 6</Join>

        <div className={buttonEffect.BorderEffect}> SPECIAL EFFECT</div>

        <div></div>
        <StyledGrid>GET ENTRANCE FEE</StyledGrid>
        <button className={defaultButton.BorderEffect}>Simpler Button</button>
      </div>
      <div className={topGrid["top-grid"]}></div>
      <div className={topGrid["top-grid"]}></div>
    </div>
  )
}
