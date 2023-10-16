import React from "react"
import { createRoot } from "react-dom/client"
import Opening from "./Opening.jsx"
import Songs from "./Songs.jsx"

const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <Opening />
    <Songs />
  </>
)
