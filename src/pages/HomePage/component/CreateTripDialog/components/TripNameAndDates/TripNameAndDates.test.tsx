import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import TripNameAndDates from './TripNameAndDates'

describe('TripNameAndDates', () => {
  test('renders trip name input and date picker', () => {
    render(<TripNameAndDates dateRange={undefined} setDateRange={vi.fn()} />)

    expect(screen.getByLabelText('Trip Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Weekend Hiking')).toBeInTheDocument()
    expect(screen.getByLabelText('Trip Dates')).toBeInTheDocument()
    expect(screen.getByText('Start date - Return date')).toBeInTheDocument()
  })

  test('allows user to type trip name', async () => {
    const user = userEvent.setup()

    render(<TripNameAndDates dateRange={undefined} setDateRange={vi.fn()} />)

    const tripNameInput = screen.getByPlaceholderText('Weekend Hiking')
    await user.type(tripNameInput, 'Summer Vacation')

    expect(tripNameInput).toHaveValue('Summer Vacation')
  })

  test('displays selected dates when dateRange is provided', () => {
    const dateRange = {
      from: new Date(2025, 0, 15),
      to: new Date(2025, 0, 20),
    }

    render(<TripNameAndDates dateRange={dateRange} setDateRange={vi.fn()} />)

    expect(screen.getByText('1/15/2025 - 1/20/2025')).toBeInTheDocument()
  })

  test('opens date picker when date button is clicked', async () => {
    const user = userEvent.setup()
    const setDateRange = vi.fn()

    const dateRange = {
      from: new Date(2025, 10, 4),
      to: new Date(2025, 10, 19),
    }

    render(
      <TripNameAndDates dateRange={dateRange} setDateRange={setDateRange} />
    )

    await user.click(screen.getByText('11/4/2025 - 11/19/2025'))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  test('calls setDateRange when user selects a date', async () => {
    const user = userEvent.setup()
    const setDateRange = vi.fn()

    const dateRange = {
      from: new Date(2025, 10, 4),
      to: new Date(2025, 10, 19),
    }

    render(
      <TripNameAndDates dateRange={dateRange} setDateRange={setDateRange} />
    )

    await user.click(screen.getByText('11/4/2025 - 11/19/2025'))

    await user.click(screen.getByLabelText('Thursday, November 20th, 2025'))

    expect(setDateRange).toHaveBeenCalledTimes(1)
  })
})
