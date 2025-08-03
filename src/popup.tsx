import React, { useState } from "react"

import "./styles/global.css"

function IndexPopup() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4 min-w-[200px] flex flex-col items-center gap-4">
      <p className="text-4xl font-bold">{count}</p>

      <button
        className="bg-blue-600 px-4 py-2 rounded-lg text-white"
        onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default IndexPopup
