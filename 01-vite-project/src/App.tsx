import { useState } from 'react'
/* import { BasicFunctions, BasicTypes } from './typescript'
import { ObjectLiteral } from './typescript/ObjectLiteral'; */
import { Counter } from './components';
import { CounterWithHook } from './components/CounterWithHook';
import { UsersPage } from './components/UsersPage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Introduccion a Ts- react</h1>
     {/*  <BasicTypes />
      <ObjectLiteral/>
      <BasicFunctions/> */}

      <CounterWithHook/>
     <UsersPage/>
    </main>
  )
}

export default App
