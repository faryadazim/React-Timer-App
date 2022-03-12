import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import Timer from '../Timer/Timer'



// this will not go testing in child/nesting component 
describe('App Component rendera',()=>{
it('Testing rendering of a div', ()=>{
    let container = shallow(<App/>)
    expect(container.find('div').length).toEqual(1)
}) 
it('Testing rendering of Timer Component', ()=>{
    let container = shallow(<App/>)
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)

})

})