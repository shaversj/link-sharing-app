import Image from "next/image";

export default function Links() {
  return (
    <div className={"px-4 antialiased"}>
      <div className={"rounded-md bg-white px-6 py-6"}>
        <div className={"space-y-[0.5rem] pt-[4rem]"}>
          <h2 className={"text-left align-top text-[1.5rem] font-bold leading-[150%] text-dark-gray"}>Customize your links</h2>
          <p className={"text-[0.994rem] leading-[150%] text-gray"}>Add/edit/remove links below and then share all your profiles with the world!</p>
        </div>
        <button className={"mt-[2.5rem] w-full rounded-md border border-purple px-[1.688rem] py-[0.688rem] text-[1rem] font-bold leading-[150%] text-purple"}>+ Add new Link</button>

        <div className={"mt-6 rounded-md bg-gray-light px-5 py-[2.906rem]"}>
          <div className={"space-y-6"}>
            <Image src="/images/illustration-empty.svg" className={"mx-auto"} alt="Add" width={124.77} height={80} />
            <h2 className={"text-center align-top text-[1.5rem] font-bold leading-[150%] text-dark-gray"}>Let's get you started</h2>
            <p className={"text-center text-[0.994rem] leading-[150%] text-gray"}>
              Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!
            </p>
          </div>
        </div>
      </div>
      <div className={"border border-white border-t-[#d9d9d9] bg-white p-4"}>
        <button className={"w-full rounded-md bg-[#d8ceff] px-[1.688rem] py-[0.688rem] align-top text-[1rem] font-bold leading-[150%] text-white"} type="submit">
          Save
        </button>
      </div>
    </div>
  );
}
