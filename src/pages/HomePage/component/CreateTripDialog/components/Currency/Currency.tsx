import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import type { FC } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'
import Textarea from '@/components/ui/Textarea'
import { HandCoins } from 'lucide-react'

const Currency: FC = () => (
  <div className="mb-5 flex-1 space-y-5">
    <h3 className="flex items-center text-xl font-bold">
      Currency <HandCoins className="ml-2 text-emerald-700" />
    </h3>

    <div className="space-y-5">
      <div>Main Currency</div>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="USD" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="usd">USD - United States Dollar</SelectItem>
          <SelectItem value="eur">EUR - Euro</SelectItem>
          <SelectItem value="gbp">GBP - British Pound</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div className="space-y-5">
      <Label htmlFor="budget">Budget (optional)</Label>
      <Input id="budget" placeholder="$500" />
    </div>

    <div className="space-y-5">
      <Label htmlFor="note">Note</Label>
      <Textarea id="note" placeholder="Note" />
    </div>
  </div>
)

export default Currency
