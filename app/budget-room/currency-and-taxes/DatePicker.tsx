"use client";
import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DatePicker = () => {
  return (
    <div className="px-4 py-5 border-b flex md:items-center gap-8 flex-col md:flex-row">
      <p className="text-sm font-medium">Financial year</p>
      <div className="flex md:items-center gap-4 flex-col md:flex-row">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Start</p>
          <DateCalendar />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">End</p>
          <DateCalendar />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;

const DateCalendar = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full md:w-[145px] justify-start text-left font-medium bg-muted border-none rounded-lg px-3 text-xs",
            !date && ""
          )}
        >
          <CalendarIcon className="h-4 w-4" />
          {date ? format(date, "dd MMMM, yy") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
