import renderer from 'react-test-renderer'
import { Link } from './Link'

it('renders correctly', () => {
    const tree = renderer.create(<Link>Some link to nowhere</Link>).toJSON()
    console.log(tree)
    expect(tree).toMatchSnapshot()
})
