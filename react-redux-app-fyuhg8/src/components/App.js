import React from 'react'
import Footer from './Footer'
import AddHeroe from '../containers/AddHeroe'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddHeroe />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App