import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import MemberTable from './MemberTable'

describe('MemberTable', () => {
  test('renders members', () => {
    render(<MemberTable />)

    expect(screen.getByText('Members')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Add member name')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()
  })

  test('displays list of members', () => {
    render(<MemberTable />)

    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
    expect(screen.getByText('Charlie')).toBeInTheDocument()
  })

  test('allows user to type member name', async () => {
    const user = userEvent.setup()
    render(<MemberTable />)

    const memberInput = screen.getByPlaceholderText('Add member name')
    await user.type(memberInput, 'New Member')

    expect(memberInput).toHaveValue('New Member')
  })
})
