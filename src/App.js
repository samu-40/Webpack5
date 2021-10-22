import { useState } from "react"

const App = () => {

    const [counter, setCounter] = useState(0)

    return (

        <div className='container'>

            <h1>Hola Samu!!!</h1>

            <h3>{ counter }</h3>
            <button onClick={ () => setCounter( counter + 1 ) } > +1 </button>
            <button onClick={ () => setCounter( counter - 1 ) } > -1 </button>
            <button onClick={ () => setCounter( 0 ) } > reset </button>

        </div>

    )

}

export default App
