import { render, screen } from '@testing-library/react'
import Actions from './Actions'
import { Dialog } from '@/components/ui/Dialog'

describe('Actions', () => {
  test('renders cancel and create trip buttons', () => {
    render(
      <Dialog>
        <Actions />
      </Dialog>
    )

    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Create Trip' })
    ).toBeInTheDocument()
  })
})
