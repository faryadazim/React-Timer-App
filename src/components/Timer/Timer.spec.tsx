import React from 'react'
import {shallow} from 'enzyme'
import Timer from './Timer'


let container = shallow(<Timer/>)

// this will not go testing in child/nesting component 
describe('Timer Component rendera',()=>{
it('Testing rendering of a div', ()=>{
    expect(container.find('div').length).toBeGreaterThanOrEqual(1)
}) 

})