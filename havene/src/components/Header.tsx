import { addDays, format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { useState } from "react";

export default function Header() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <>
      <div className="main-container">
        {/* <div className="container"> */}
        <header className="text-black flex items-center justify-between h-[100px]">
          <div className="flex relative items-center justify-between h-full w-full py-0 px-4 wrapper">
            <div className="text-black p-4 flex items-center justify-between">
              <h1 className="text-2xl font-bold">Furever Home</h1>
              {/* <button
          aria-controls="primary-navigation"
          aria-expanded="false"
          className={`mobile-nav-toggle ${showNav ? "nav-open" : ""}`}
          onClick={() => setShowNav(!showNav)}
        /> */}
              {/* <nav className={`flex flex-row nav ${showNav ? "active" : ""}`}>
          <div className="nav-container">
            <ul
              id="primary-navigation"
              className={`nav-list primary ${showNav ? "active" : ""}`}
            >
              <li className="nav-item">Home</li>
              <li className="nav-item">Pets</li>
              <li className="nav-item">About</li>
            </ul>
            <ul
              id="primary-navigation"
              className={`nav-list ${showNav ? "active secondary" : ""}`}
            >
              <li className="nav-item">Sign In</li>
            </ul>
          </div>
        </nav> */}
            </div>
            <div className="flex-initial">
              <div className="search-carrier">
                <div className="relative">
                  <form action="" className="my-0 mx-auto max-w-[800px]">
                    <ul className="flex items-center h-[80px] justify-center">
                      <li className="p-4">Home</li>
                      <li className="p-4">Pets</li>
                      <li className="p-4">About</li>
                    </ul>
                    <div className="info-input flex justify-center h-full text-[15px]">
                      <div className="flex input-container border-inherit border-[1px] border-black rounded-full h-[100px] w-full shadow-md">
                        <div className="flex relative items-center h-full relative">
                          <label className="block p-6 w-fit border-[1px] border-solid border-transparent big-search hover:rounded-full">
                            <p>Where</p>
                            <input placeholder="Search Destinations" />
                          </label>
                        </div>
                        <div className="border-right"></div>
                        <Popover>
                          <PopoverTrigger asChild>
                            <div className="flex relative items-center h-full relative">
                              <label className="block p-6 w-fit border-[1px] border-solid border-transparent big-search hover:rounded-full">
                                <p>Check in</p>
                                {date?.from ? (
                                  date.to ? (
                                    <>
                                      {format(date?.from, "LLL dd, y")} -{" "}
                                      {format(date?.to, "LLL dd, y")}
                                    </>
                                  ) : (
                                    format(date.from, "LLL dd, y")
                                  )
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </label>
                            </div>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              initialFocus
                              mode="range"
                              defaultMonth={date?.from}
                              selected={date}
                              onSelect={setDate}
                              numberOfMonths={2}
                            />
                          </PopoverContent>
                        </Popover>
                        <div className="border-right"></div>
                        <div className="flex relative items-center h-full relative">
                          <label className="block p-6 w-fit border-[1px] border-solid border-transparent big-search hover:rounded-full">
                            <p>Check out</p>
                            <input placeholder="Add dates" />
                          </label>
                        </div>
                        <div className="border-right"></div>
                        <div className="flex relative items-center h-full relative">
                          <label className="block p-6 w-fit border-[1px] border-solid border-transparent big-search hover:rounded-full">
                            <p>Who</p>
                            <input placeholder="Add guests" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div>Sign in</div>
          </div>
        </header>
        {/* </div> */}
      </div>
      <div className="footer">
        <div className="center-footer">
          <h1>hello</h1>
        </div>
        <div className="right-footer">
          <h1>hello</h1>
        </div>
        <div className="bottom-footer">
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
}
