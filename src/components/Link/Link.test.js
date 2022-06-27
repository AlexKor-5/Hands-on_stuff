import React from 'react'
import renderer from 'react-test-renderer'
import { logRoles, render, screen } from '@testing-library/react'
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

it('works great', () => {
    const { getByText, getByRole, asFragment } = render(<Link>Link to nowhere!</Link>)
    // const component = getByText(/Link to nowhere!/i)
    const component = getByRole(/Link/i)
    // console.log(component)
    // logRoles(component)
})
