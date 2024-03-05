import './App.css'

import { Navbar } from './components'

function App() {

  return (
    <>
      <Navbar />
      <div className='content'>
        <div className='test1'>a</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'canter' }}>
          <h1>asdf</h1>
        </div>
        <div className='test2'>a</div>
      </div>
    </>
  )
}

export default App
