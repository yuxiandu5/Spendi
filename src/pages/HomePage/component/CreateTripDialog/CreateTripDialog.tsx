import Button from '@/components/ui/Button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/Dialog'
import type { FC } from 'react'
import MemberTable from './components/MemberTable'
import TripNameAndDates from './components/TripNameAndDates'
import Currency from './components/Currency'
import Actions from './components/Actions'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

const CreateTripDialog: FC = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: undefined,
  })

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>New Trip</Button>
        </DialogTrigger>

        <DialogContent className="space-y-5 pb-1">
          <DialogHeader className="mb-2">
            <DialogTitle className="font-bold">Create Trip</DialogTitle>
            <DialogDescription>
              Fill in the details below to create a new trip
            </DialogDescription>
          </DialogHeader>
          <TripNameAndDates dateRange={dateRange} setDateRange={setDateRange} />
          <div className="flex w-full gap-17.5">
            <div className="flex-1">
              <MemberTable />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <Currency />
              <Actions />
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default CreateTripDialog
