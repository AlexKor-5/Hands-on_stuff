import renderer from 'react-test-renderer'
import { Link } from './Link'

it('renders correctly', () => {
    const component = renderer.create(<Link>Some link to nowhere</Link>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    renderer.act(() => {
        tree.props.onMouseEnter()
    })

    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    renderer.act(() => {
        tree.props.onMouseLeave()
    })

    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
