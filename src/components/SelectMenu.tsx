import { Fragment, useState } from "react";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const sites = [
  {
    id: 1,
    name: "Codepen",
    image: "/images/icon-codepen.svg",
  },
  {
    id: 2,
    name: "Codewars",
    image: "/images/icon-codewars.svg",
  },
  {
    id: 3,
    name: "Dev.to",
    image: "/images/icon-devto.svg",
  },
  {
    id: 4,
    name: "Email",
    image: "/images/icon-email.svg",
  },
  {
    id: 5,
    name: "Facebook",
    image: "/images/icon-facebook.svg",
  },
  {
    id: 6,
    name: "FreeCodeCamp",
    image: "/images/icon-freecodecamp.svg",
  },
  {
    id: 7,
    name: "Frontend Mentor",
    image: "/images/icon-frontend-mentor.svg",
  },
  {
    id: 8,
    name: "GitHub",
    image: "/images/icon-github.svg",
  },
  {
    id: 9,
    name: "GitLab",
    image: "/images/icon-gitlab.svg",
  },
  {
    id: 10,
    name: "Hashnode",
    image: "/images/icon-hashnode.svg",
  },
  {
    id: 11,
    name: "LinkedIn",
    image: "/images/icon-linkedin.svg",
  },
  {
    id: 12,
    name: "Twitch",
    image: "/images/icon-twitch.svg",
  },
  {
    id: 13,
    name: "Twitter",
    image: "/images/icon-twitter.svg",
  },
  {
    id: 14,
    name: "YouTube",
    image: "/images/icon-youtube.svg",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectMenu() {
  const [selected, setSelected] = useState(sites[3]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Label className="block text-xs leading-[150%] text-dark-gray">Platform</Label>
          <div className="relative mt-2">
            <ListboxButton className="ring-gray-300 relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-dark-gray shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img src={selected.image} alt="" className="h-4 w-4 flex-shrink-0 rounded-full" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="text-gray-400 h-5 w-5" aria-hidden="true" />
              </span>
            </ListboxButton>

            <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {sites.map((site) => (
                  <ListboxOption
                    key={site.id}
                    className={({ focus }) => classNames(focus ? "bg-indigo-600 text-white" : "", !focus ? "text-dark-gray" : "", "relative cursor-default select-none py-2 pl-3 pr-9")}
                    value={site}
                  >
                    {({ selected, focus }) => (
                      <>
                        <div className="flex items-center">
                          <img src={site.image} alt="" className="h-4 w-4 flex-shrink-0 rounded-full" />
                          <span className={classNames(selected ? "font-semibold" : "font-normal", "ml-3 block truncate")}>{site.name}</span>
                        </div>

                        {selected ? (
                          <span className={classNames(focus ? "text-white" : "text-indigo-600", "absolute inset-y-0 right-0 flex items-center pr-4")}>
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
