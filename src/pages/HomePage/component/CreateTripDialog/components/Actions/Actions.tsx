import Button from '@/components/ui/Button'
import { DialogClose, DialogFooter } from '@/components/ui/Dialog'
import type { FC } from 'react'

const Actions: FC = () => (
  <DialogFooter className="flex gap-5 pt-4">
    <DialogClose asChild>
      <Button variant="outline" className="text-gray-600" size="lg">
        Cancel
      </Button>
    </DialogClose>
    <Button type="submit" size="lg">
      Create Trip
    </Button>
  </DialogFooter>
)

export default Actions
