import React, { useEffect, useState } from 'react';
import ElementsData from './data/elements'
import { categories } from './data/categories'
import Modal from './components/Modal';
import Element from './components/Element';
import { groupBy } from './utils/groupBy';

function App() {
  const [data, setData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState({})
  const [modalClicked, setModalClicked] = useState(false)
  const [containerClass, setContainerClass] = useState("")
  const [modalContainerClass, setModalContainerClass] = useState("")

  useEffect(() => {
    let obj = groupBy(ElementsData, "ypos")
    setData(obj)
  }, [])


  const renderInRow = (row) => {
    let items = [];
    let n = 0;
    let head = row[n]
    for (let i = 0; i < 18; i++) {
      if (head === undefined) {
        continue
      }
      if (head.xpos === i + 1) {
        let temp = head;
        n++
        head = row[n]
        items.push(
          <Element
            key={i}
            number={temp.number}
            symbol={temp.symbol}
            name={temp.name}
            mass={temp.atomic_mass}
            category={temp.category}
            selectedCategory={selectedCategory}
            onClick={() => {
              onClickShowModal()
              setSelectedElement(temp)
            }}
          />
        )
      } else {
        items.push(<div key={i} className='empty-element'>{""}</div>)
      }
    }
    return items;
  }


  const renderTable = (d) => {
    return d.map((row, idx_row) => {
      return (
        <div className='row' key={idx_row}>
          {renderInRow(row)}
        </div>
      )
    })
  }

  const renderCategories = (d) => {
    return d.map((item, idx) => {
      return (
        <button
          key={idx}
          className={`button ${item.value}`}
          onClick={() => {
            if (selectedCategory != "" && selectedCategory.value == item.value) {
              setSelectedCategory("")
            } else {
              setSelectedCategory(item)
            }
          }}
        >
          {item.text}
        </button>
      )
    })
  }

  const disableCategory = () => {
    if (selectedCategory === "") {
      return;
    }
    setSelectedCategory("")
  }

  const onClickModalContainer = () => {
    setModalContainerClass("one out")
    setContainerClass(cc => cc.replace('modal-active', ''))
  }

  const onClickShowModal = () => {
    setModalContainerClass('one')
    setContainerClass('modal-active')
  }

  if (data.length === 0) {
    return (
      <p>Cargando</p>
    )
  }

  return (
    <div className={`container ${containerClass}`}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {renderCategories(categories)}
      </div>
      <div onClick={disableCategory}>
        {renderTable(data)}
      </div>
      {/* {selectedElement == null ? <></> : <Modal element={selectedElement} closeModal={()=>setSelectedElement(null)}/>} */}
      {/* <Modal element={selectedElement} closeModal={()=>setSelectedElement({})}/> */}
      <div id="modal-container" className={`${modalContainerClass}`}
        onClick={onClickModalContainer}>
        <div className="modal-background">
          <div className="modal">
            <Modal element={selectedElement} closeModal={() => setSelectedElement({})} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

