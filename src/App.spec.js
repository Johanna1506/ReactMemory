import React from "react";
import { shallow } from 'enzyme'
import { expect } from 'chai'

import App from './App'
import GuessCount from "./GuessCount";

it('renders without crashing', () => {
    const wrapper = shallow(<App/>)

    expect(wrapper).to.contain(<GuessCount guesses={0} />)
})