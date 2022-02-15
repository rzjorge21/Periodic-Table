import React, {useState, useEffect} from "react";

export default function Element({ number = 1, symbol = "H", name = "Hydrogen", mass = 1.088, category = "diactomic-nonmetal", selectedCategory="", onClick}) {
  const [customClass, setCustomClass] = useState("");

  useEffect(() => {
    if (selectedCategory === "") {
      setCustomClass(`${category.replaceAll(" ", "-")} selected`)
    } else {
      if (category.replaceAll(" ", "-") === selectedCategory.value) {
        setCustomClass(`${category.replaceAll(" ", "-")} selected`)
      } else {
        setCustomClass(`${category.replaceAll(" ", "-")} nonselected`)
      }
    }
  })
  return (
    <div className={`element modal-btn ${customClass}`} onClick={onClick}>
      <span className='element-number'>{number}</span>
      <p className='element-symbol'>{symbol}</p>
      <p className='element-name'>{name}</p>
      <p className='element-mass'>{mass}</p>
    </div>
  )
}