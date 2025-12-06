import { render, screen } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router'

describe('App', () => {
  test('renders home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
