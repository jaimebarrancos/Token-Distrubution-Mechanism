import upperGridStyles from "./grid-style/upper-grid.module.css"

export default function UpperGrid() {
  return (
    <>
      <div className={upperGridStyles["upper-grid"]}>
        <div></div>
        <div>
          <p>
            This project demonstrates an ERC20 Token creation with a distrubution protocol whilst
            communicating with a webpage.
          </p>
          <br></br>
          <p>
            It contains unit-testing, smart contracts, a styled Next.js website, penetration testing
            and custom configs.
          </p>
        </div>
      </div>
    </>
  )
}
