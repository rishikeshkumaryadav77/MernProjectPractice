import React from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { Provider } from 'react-redux'
import { store } from './components/redux/Store'
import Home from './components/pages/Home'

const App = () => {
  return (
    <>
    <Provider store={store}>
      <Home/>
    </Provider>
    {/* <Header />
    <Footer /> */}
    </>
  )
}

export default App