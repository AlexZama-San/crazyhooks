import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'
import { CounterApp } from './useState/CounterApp'
import './index.css'
import { CounterWithCustomHook } from './useState/CounterWithCustomHook'
import { SimpleForm } from './useEffect/SimpleForm'
import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
import { FocusScreen } from './useRef/FocusScreen'
import { Layout } from './useLayoutEffect/Layout'
import { Memorize } from './memo/Memorize'
import { MemoHook } from './memo/MemoHook'
import { CallbackHook } from './memo/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
// import './useReducer/intro-reducer'
import { TodoApp } from './useReducer/TodoApp'
import { MainApp } from './useContext/MainApp'
import { BrowserRouter as Router } from 'react-router-dom' 


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <MainApp/>

    </Router>

)
