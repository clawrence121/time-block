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
  const [state, setState] = useState(0);

  useEffect(() => {
    let interval: any;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 100);
      }, 100);
    } else if (!running) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

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
        <div className="border-b border-gray-200 focus-within:border-indigo-600">
          <label htmlFor="comment" className="sr-only">
            What do you need to focus on?
          </label>
          <textarea
            rows={3}
            name="comment"
            id="comment"
            className="block w-full resize-none placeholder-gray-300 text-gray-100 p-0 pb-2 bg-purple-700 focus:outline-none"
            placeholder="What do you need to focus on?"
            defaultValue={""}
            disabled={running}
          />
        </div>
        <div className="flex justify-between items-end">
          <button
            className="flex items-center group text-4xl text-gray-50"
            onClick={() => setRunning(true)}
          >
            Start
            <ArrowRightCircleIcon className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-150 h-12" />
          </button>
          <div className="space-x-2 text-white text-xl">
            <button onClick={() => setRunning(false)}>Stop</button>
            <button onClick={() => setTime(1800000)}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div> */
}
