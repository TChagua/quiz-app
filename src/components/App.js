import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Loadable from 'react-loadable'
import Header from './Header'
import Questions from './Questions'

const SelectOptions = Loadable({
  loader: () => import(/* webpackChunkName: 'SelectOptions' */ './SelectOptions'),
  loading: () => <span />,
})

const Results = Loadable({
  loader: () => import(/* webpackChunkName: 'Results' */ './Results'),
  loading: () => <span />,
})

const App = () => {
  const [data, setData] = useState(undefined)
  const [category, setCategory] = useState('general-knowledge')
  const [difficulty, setDifficulty] = useState('easy')
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = () => {
      const url = `https://cocktail-trivia-api.herokuapp.com/api/category/${category}/difficulty/${difficulty}`
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data || []))
    }
    fetchData()
  }, [category, difficulty])

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const onDragEnd = (result) => {
    if (!result.destination || result.destination.index === result.source.index) return

    const questions = reorder(data, result.source.index, result.destination.index)

    setData(questions)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Header />
      {data && (
        <SelectOptions
          onSetCategory={setCategory}
          onSetDifficulty={setDifficulty}
          category={category}
          difficulty={difficulty}
        />
      )}
      <Droppable droppableId='list'>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Questions data={data} onSetCount={setCount} count={count} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {data && data.length > 0 && <Results count={count} />}
    </DragDropContext>
  )
}

export default App
