import { render, screen } from '@testing-library/react'
import CreateTripDialog from '.'
import { userEvent } from '@testing-library/user-event'

describe('CreateTripDialog', () => {
  test('renders create trip dialog', async () => {
    render(<CreateTripDialog />)

    const user = userEvent.setup()
    await user.click(screen.getByText('New Trip'))

    expect(
      screen.getByRole('dialog', { name: 'Create Trip' })
    ).toBeInTheDocument()

    expect(
      screen.getByText('Fill in the details below to create a new trip')
    ).toBeInTheDocument()
    expect(screen.getByText('Trip Name')).toBeInTheDocument()
    expect(screen.getByText('Trip Dates')).toBeInTheDocument()
    expect(screen.getByText('Members')).toBeInTheDocument()
    expect(screen.getByText('Currency')).toBeInTheDocument()
    expect(screen.getByText('Note')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Create Trip' })
    ).toBeInTheDocument()
  })
})
