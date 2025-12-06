import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import { useState, type FC } from 'react'
import { CalendarIcon } from 'lucide-react'
import Button from '@/components/ui/Button'
import { Calendar } from '@/components/ui/Calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover'
import type { DateRange } from 'react-day-picker'

interface Props {
  dateRange: DateRange | undefined
  setDateRange: (dateRange: DateRange | undefined) => void
}

const TripNameAndDates: FC<Props> = ({ dateRange, setDateRange }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex w-full gap-17.5">
      <div className="flex flex-1 flex-col space-y-5">
        <Label htmlFor="trip-name">Trip Name</Label>
        <Input id="trip-name" placeholder="Weekend Hiking" className="w-full" />
      </div>

      <div className="flex flex-1 gap-5">
        <div className="flex-1 flex-col space-y-5">
          <Label htmlFor="date">Trip Dates</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                className="w-full justify-between text-gray-600"
              >
                {dateRange?.from
                  ? dateRange.from.toLocaleDateString()
                  : 'Start date'}
                {' - '}
                {dateRange?.to
                  ? dateRange.to.toLocaleDateString()
                  : 'Return date'}
                <CalendarIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="mt-1 w-auto overflow-hidden"
              align="center"
            >
              <Calendar
                mode="range"
                selected={dateRange}
                captionLayout="dropdown"
                onSelect={setDateRange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default TripNameAndDates
