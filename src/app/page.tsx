"use client"
import Image from "next/image";
import bg from "../images/endless-constellation (1).png";
import { LiaSellsy } from "react-icons/lia";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
const [showOverLay, setShowOverLay] = useState(false)

  const components: {id:number; title: string; href: string; description: string }[] = [
    { id:1,
      title: "Title of your Card",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {id:2,
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {id:3,
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {id:4,
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {id:5,
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {id:6,
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },

    {id:7,
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {id:8,
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  return (
    <div>
      <main className="flex-grow bg-cover h-[60vh]  bg-gradient-to-r from-cyan-200 to-blue-300">
        <div className="text-center  p-10 rounded-lg">
          <h2 className="text-[50px] font-bold text-white">
            We Empower Business
          </h2>
          <p className="text-gray-500 mb-10 px-[150px] text-[22px] leading-relaxed">
            We're dedicated to help our client achieve their goals
          </p>
          <div className="relative group">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <span className="relative  block px-6 py-3 rounded-xl bg-gray-950">
                <div className="relative  flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Let's get started
                  </span>
                  <FaChevronRight />
                </div>
              </span>
            </button>
          </div>
        </div>
      </main>
      {/* <ul className="grid grid-cols-4 gap-4 gap-4 px-10 py-10 animate-loop-scroll ">
        {components.map((component) => (
          <div key={component.id} className={`flex flex-col items-center bg-gradient-to-r from-cyan-100 to-blue-100 w-72 h-auto pt-5 pb-7 border border-gray-200  space-y-8`}>
            <section className="flex flex-col text-center space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                {component.title}
              </h2>
              <p className="text-slate-500 text-sm">Subtitle on your Card</p>
            </section>
            <section className="space-y-2">
              <div className="flex gap-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-slate-500 text-sm">Name Product</span>
              </div>
              <div className="flex gap-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-slate-500 text-sm">Name Product</span>
              </div>
              <div className="flex gap-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-slate-500 text-sm">Name Product</span>
              </div>
            </section>
            <section className="flex w-full flex-col space-y-2 px-9">
             
              <button className="py-3 mt-10 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600">
                Accept
              </button>
            </section>
          </div>
        ))}
      </ul> */}
    </div>
  );
}
