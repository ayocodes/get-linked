const Timeline = () => {
  const events = [
    {
      title: "Hackathon Announcement",
      description:
        "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023",
    },
    {
      title: "Teams Registration begins",
      description:
        "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      date: "November 18, 2023",
    },
    {
      title: "Teams Registration ends",
      description: "Interested Participants are no longer Allowed to register",
      date: "November 18, 2023",
    },
    {
      title: "Announcement of the accepted teams and ideas",
      description:
        "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      date: "November 18, 2023",
    },
    {
      title: "Getlinked Hackathon 1.0 Offically Begins",
      description:
        "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      date: "November 18, 2023",
    },
    {
      title: "Demo Day",
      description:
        "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      date: "November 18, 2023",
    },
  ];

  return (
    <div
      className="flex items-center py-[72px] flex-col px-[40px] border-b border-b-[#ffffff25] mx-auto"
      id="timeline"
    >
      <p className=" font-bold text-[20px] md:text-[32px] mb-4">Timeline</p>
      <p className=" text-sm w-[290px] md:w-[350px] text-center">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>
      <div className="flex flex-col gap-8  mt-[60px] lg:mt-[90px]">
        {events.map((event, index) => (
          <div key={index}>
            <div className=" flex flex-col gap-2 lg:hidden">
              <div className=" flex gap-[16px] ml-2.5">
                <div className=" bg-[#D434FE] max-w-[2px] w-full" />
                <div className=" text-xs w-[270px]">
                  <h2 className=" font-bold text-[#D434FE] mb-2">
                    {event.title}
                  </h2>
                  <p className=" leading-5">{event.description}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className=" flex justify-center items-center w-5 h-5 text-xs rounded-full bg-primary-button">
                  {index + 1}
                </div>
                <p className=" text-xs text-[#D434FE]">{event.date}</p>
              </div>
            </div>

            <div
              className={`lg:flex items-center hidden mb-20 xl:gap-10 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              } w-full`}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "items-end" : "items-start"
                } w-[460px]`}
              >
                <h2
                  className={`font-bold text-[#D434FE] mb-3 xl:text-xl w-full ${
                    index % 2 === 0 ? "text-end" : "text-start"
                  }`}
                >
                  {event.title}
                </h2>
                <p
                  className={`leading-6 text-xs xl:text-sm w-[400px] xl:w-[440px] ${
                    index % 2 === 0 ? "text-end" : "text-start"
                  }`}
                >
                  {event.description}
                </p>
              </div>
              <div className="flex justify-center items-center w-[90px] h-[90px] text-2xl font-bold rounded-full bg-primary-button border-[20px] border-[#150e28]">
                {index + 1}
              </div>
              <div
                className={`text-[#D434FE] xl:text-xl w-[460px] ${
                  index % 2 === 0 ? "text-start" : "text-end"
                }`}
              >
                {event.date}
              </div>
              <div className="bg-[#D434FE] h-[250px] z-[-10] absolute hidden lg:block w-1 left-1/2 transform -translate-x-1/2" />
            </div>
          </div>
        ))}
      </div>{" "}
      <img src="/star-w.svg" className=" relative left-[250px]" alt="" />
      <img src="/star-g.svg" className=" relative right-[250px] top-[-500px] w-4" alt="" />
      <img src="/star-p.svg" className=" relative left-[50px] top-[-700px] w-4" alt="" />
    </div>
  );
};

export default Timeline;
