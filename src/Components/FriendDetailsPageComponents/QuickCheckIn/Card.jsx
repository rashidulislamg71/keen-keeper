import { Children } from "react";

const Card = ({ children }) => {
  return (
    <div>
      <div className="p-3 bg-gray-100 rounded border border-gray-400 cursor-pointer hover:bg-gray-200 transition-all duration-300 flex flex-col items-center gap-2">
        <span>{children}</span>
      </div>
    </div>
  )
}

export default Card;