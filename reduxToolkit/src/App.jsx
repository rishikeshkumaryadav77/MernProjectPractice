import React from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { Provider } from 'react-redux'
import { store } from './components/redux/Store'
import AddTodo from './components/pages/AddTodo'


const App = () => {
  return (
    <>
    <Provider store={store}>
      <AddTodo />
    </Provider>
    {/* <Header />
    <Footer /> */}
    </>
  )
}

export default App