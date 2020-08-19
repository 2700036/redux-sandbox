import {createStore, bindActionCreators} from 'redux';
import * as actions from './actions';
import { reducer } from './reducer';
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter';


const store = createStore(reducer);
const {dispatch} = store;

const {inc, dec, rnd} = bindActionCreators(actions, dispatch)

const update = () => {
  ReactDOM.render(<Counter 
    counter={store.getState()}
    inc={inc}
    dec={dec}
    rnd={()=>{
      const payload = Math.floor(Math.random()*10);
      rnd(payload)
    }}
  />, document.getElementById('root'))
}
update();
store.subscribe(update)

