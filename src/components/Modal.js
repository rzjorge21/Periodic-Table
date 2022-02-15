import React, { useState, useEffect } from "react";
import Element from "./Element";

export default function Modal({ element, closeModal }) {
  const [customClass, setCustomClass] = useState("");

  const { name = "", appearance = "", atomic_mass = "", boil = "", category = "", density = "",
    discovered_by = "", melt = "", molar_heat = "", named_by = "",
    number = "", phase = "", symbol = "", electron_configuration = "", source = "" } = element

  useEffect(() => {
    if (!element.name) {
      setCustomClass(`modal__wrap ${category.replaceAll(" ", "-")}`)
    } else {
      setCustomClass(`modal__wrap ${category.replaceAll(" ", "-")}`)
    }
  })

  return (
    <>
      <div className={customClass}>
        <div className="modal__header">
          <p className="modal__number">{number}</p>
          <p className="modal__symbol">{symbol}</p>
          <p className="modal__name">{name}</p>
          <p className="modal__atomic_mass">{atomic_mass}</p>
        </div>
        <div className="modal__body">
          <table>
            <tbody>
              <tr>
                <th>Standard State: </th>
                <td>{phase? phase : 'Unknown'}</td>
              </tr>
              <tr>
                <th>Atomic Mass: </th>
                <td>{atomic_mass? atomic_mass : 'Unknown'}</td>
              </tr>
              <tr>
                <th>Electron Configuration: </th>
                <td className="electron_configuration">{electron_configuration? electron_configuration : 'Unknown'}</td>
              </tr>
              <tr>
                <th>Appearance: </th>
                <td>{appearance? appearance : 'Unknown'}</td>
              </tr>
              <tr>
                <th>Boil  at: </th>
                <td>{boil? boil : 'Unknown'}</td>
              </tr>
              <tr>
                <th>Density: </th>
                <td>{density? density : 'Unknown'}</td>
              </tr>
              <tr>
                <th>Discovered By: </th>
                <td>{discovered_by? discovered_by : 'Unknown'}</td>
              </tr>
              <tr>
                <th>Melt: </th>
                <td>{melt}</td>
              </tr>
              <tr>
                <th>Molar heat: </th>
                <td>{molar_heat? molar_heat : 'Unknown'}</td>
              </tr>
              <tr>
                <th>Named by: </th>
                <td>{named_by? appearance : 'Unknown'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <a href={source} target={"_blank"}>{`${name} Element Page`}</a>
      </div>
    </>
  )
}