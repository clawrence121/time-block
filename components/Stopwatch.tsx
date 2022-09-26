import { useEffect, useState } from "react";
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
  Bars3Icon,
  BellIcon,
  ClockIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Stopwatch() {
  const [time, setTime] = useState(1800000);
  const [running, setRunning] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);

  useEffect(() => {
    let interval: any;

    if (running) {
      if (startTime) {
        interval = setInterval(() => {
          setTime((prevTime) => startTime?.getTime() - Date.now());
        }, 100);
      } else {
        setStartTime(new Date(new Date().getTime() + 1800000));
      }
    } else if (!running) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running, startTime]);

  useEffect(() => {
    if (time <= 0) {
      setRunning(false);
      setTime(1800000);
      setStartTime(null);

      alert("Time is up! Great job! 🎉");
    }
  }, [time]);

  return (
    <div className="flex flex-col relative min-h-[35rem] justify-between pt-[5vh] max-w-3xl mx-auto">
      <h1 className="text-6xl text-gray-50 font-semibold flex gap-4">
        Let&apos;s block some time...
        <ClockIcon className="h-16" />
      </h1>
      <div className="text-white text-7xl w-48 mx-auto">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl text-gray-50 font-semibold flex gap-4">
          I would like to block 30 minutes to focus on:
        </h2>
        <div className="border-b-2 border-gray-200 focus-within:border-pink-400 transition duration-150">
          <label htmlFor="comment" className="sr-only">
            What do you need to focus on?
          </label>
          <textarea
            rows={3}
            name="comment"
            id="comment"
            className="block w-full resize-none placeholder-gray-200 text-gray-100  bg-purple-700 focus:outline-none"
            placeholder="What do you need to focus on?"
            defaultValue={""}
            disabled={running}
          />
        </div>
        <div className="flex justify-between items-end">
          <button
            className="flex items-center group text-5xl text-gray-50"
            onClick={() => setRunning(true)}
          >
            Start
            <ArrowRightCircleIcon className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-150 h-12" />
          </button>
          <div className="text-white text-md items-end flex flex-col">
            <button onClick={() => setRunning(false)}>Stop</button>
            <button
              onClick={() => {
                setTime(1800000);
                setStartTime(null);
                setRunning(false);
              }}
              className="text-purple-200 hover:text-purple-400 transition duration-150"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
