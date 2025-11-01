"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/cn"
import { buttonVariants } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface FrameworkOption {
  value: string
  label: string
}

interface FrameworkComboboxProps {
  value: string
  onChange: (value: string) => void
  options?: FrameworkOption[]
}

const defaultFrameworks: FrameworkOption[] = [
  {
    value: "nextjs",
    label: "Next.js",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "vue",
    label: "Vue",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "svelte",
    label: "Svelte",
  },
]

export function FrameworkCombobox({ value, onChange, options = defaultFrameworks }: FrameworkComboboxProps) {
  const [open, setOpen] = React.useState(false)

  const selectedFramework = options.find((framework) => framework.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          role="combobox"
          aria-expanded={open}
          aria-controls="framework-listbox"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full justify-between text-sm font-normal"
          )}
        >
          {selectedFramework ? selectedFramework.label : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {options.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
