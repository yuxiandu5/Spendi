import type { FC } from 'react'
import Button from '@/components/ui/Button'
import { X, Users } from 'lucide-react'
import Input from '@/components/ui/Input'

const MEMBERS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Frank',
  'George',
  'Harry',
  'Ivy',
  'Jack',
  'Liam',
  'Mason',
  'Noah',
  'Oliver',
  'Parker',
  'Quinn',
  'Ryan',
  'Sam',
  'Thomas',
  'Uma',
  'Violet',
  'William',
  'Xavier',
  'Zoe',
]

const MemberTable: FC = () => (
  <div className="flex h-full max-h-[430px] flex-col space-y-5">
    <h3 className="flex items-center text-xl font-bold">
      Members <Users className="ml-2 text-emerald-700" />
    </h3>

    <div className="flex items-center gap-5">
      <Input placeholder="Add member name" />
      <Button className="text-emerald-700" variant="outline" size="sm">
        Add
      </Button>
    </div>

    <ul className="flex-1 overflow-y-auto rounded-2xl border border-gray-200">
      {MEMBERS.map((member) => (
        <li
          key={member}
          className="flex items-center justify-between rounded-2xl p-3"
        >
          <span>{member}</span>
          <Button
            size="icon"
            className="bg-transparent text-gray-600 hover:bg-gray-100"
          >
            <X />
          </Button>
        </li>
      ))}
    </ul>
  </div>
)

export default MemberTable
