"use client"
import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"

export default function page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div>page
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  )
}
