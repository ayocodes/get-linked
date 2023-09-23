import { useEffect } from "react";

const Flare = () => {
  useEffect(() => {
    document.body.classList.add("overflow-x-hidden");

    return () => {
      document.body.classList.remove("overflow-x-hidden");
    };
  }, []);

  return (
    <div>
      <img
        src="/flare.svg"
        className=" absolute top-[0px] z-[-1] opacity-40 w-[700px] "
        alt=""
      />
      <img
        src="/flare.svg"
        className=" absolute top-[1400px] z-[-1] opacity-40 w-[700px] overflow-x-hidden"
        alt=""
      />
      <img
        src="/flare.svg"
        className=" absolute top-[1700px] right-[-400px] z-[-1] opacity-40 w-[700px]"
        alt=""
      />
      <img
        key={3}
        src="/flare.svg"
        className="absolute top-[2200px] left-[-90px] z-[-1] opacity-40 w-[700px]"
        alt=""
      />
      <img
        key={4}
        src="/flare.svg"
        className="absolute top-[2600px] left-[700px] z-[-1] opacity-40 w-[700px]"
        alt=""
      />
      <img
        key={5}
        src="/flare.svg"
        className="absolute top-[5000px] left-[153px] z-[-1] opacity-40 w-[700px]"
        alt=""
      />
      <img
        key={6}
        src="/flare.svg"
        className="absolute top-[5209px] right-[-300px] z-[-1] opacity-40 w-[700px]"
        alt=""
      />
      <img
        key={7}
        src="/flare.svg"
        className="absolute top-[5868px] left-[-208px] z-[-1] opacity-40 w-[700px]"
        alt=""
      />
      <img
        key={8}
        src="/flare.svg"
        className="absolute top-[6304px] right-[-200px] z-[-1] opacity-40 w-[700px]"
        alt=""
      />
      <img
        key={9}
        src="/flare.svg"
        className="absolute top-[6926px] left-[-202px] z-[-1] opacity-40 w-[700px]"
        alt=""
      />
    </div>
  );
};

export default Flare;
