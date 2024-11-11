"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/app/ui/button";
import { Calendar } from "~/app/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "~/app/ui/popover";

export function DatePicker({
  name,
  defaultValue,
}: {
  name: string;
  defaultValue?: Date;
}) {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    if (defaultValue) {
      setDate(defaultValue);
    }
  }, []);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
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
      <input
        type="hidden"
        id="date"
        name={name}
        defaultValue={date?.toISOString()}
      />
    </>
  );
}
