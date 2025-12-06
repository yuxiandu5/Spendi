import { render, screen } from '@testing-library/react'
import HomePage from './HomePage'

describe('HomePage', () => {
  test('renders home page', () => {
    render(<HomePage />)

    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
