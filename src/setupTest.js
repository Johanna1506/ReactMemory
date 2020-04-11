import chai from 'chai'
import dirtychai from 'dirty-chai'
import createChaiJestDiff from 'chai-jest-diff'
import Adapter from 'enzyme-adapter-react-16'
import createChaiEnzyme from 'chai-enzyme'
import { configure as configureEnzyme } from 'enzyme'

chai
    .use(dirtychai)
    .use(createChaiJestDiff())
    .use(createChaiEnzyme())

configureEnzyme({adapter: new Adapter()})