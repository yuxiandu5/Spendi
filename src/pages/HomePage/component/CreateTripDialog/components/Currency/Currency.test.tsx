import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Currency from './Currency'

describe('CurrencyAndBudget', () => {
  test('renders currency', () => {
    render(<Currency />)

    expect(screen.getByText('Currency')).toBeInTheDocument()
    expect(screen.getByText('Main Currency')).toBeInTheDocument()
    expect(screen.getByLabelText('Budget (optional)')).toBeInTheDocument()
    expect(screen.getByLabelText('Note')).toBeInTheDocument()
  })

  test('types budget amount', async () => {
    const user = userEvent.setup()
    render(<Currency />)

    const budgetInput = screen.getByPlaceholderText('$500')
    await user.type(budgetInput, '1000')

    expect(budgetInput).toHaveValue('1000')
  })

  test('types note', async () => {
    const user = userEvent.setup()
    render(<Currency />)

    const noteTextarea = screen.getByPlaceholderText('Note')
    await user.type(noteTextarea, 'This is a test note')

    expect(noteTextarea).toHaveValue('This is a test note')
  })
})
