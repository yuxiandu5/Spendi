import { render, screen } from '@testing-library/react'
import Car from './Car'

describe('Car', () => {
  test('renders car', () => {
    render(<Car />)
    expect(screen.getByLabelText('Car Animation')).toBeInTheDocument()
  })
})
