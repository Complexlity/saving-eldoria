import CountDownComponent from "./Countdown";

const ComingSoon = () => {
  const date = new Date("August 3, 2023");
  const milliseconds = date.getTime();
  console.log({milliseconds})
  return (
    <div className="coming-soon not-prose mt-8 border-2 p-4 bg-blue-100 text- border-dotted border-gray-500 text-center justify-center grid gap-8">
      <h2 className="text-5xl uppercase font-bold">Book Two</h2>
      {/* CountDown */}
      <p className=" text-center text-5xl shadow-lg px-2 py-4 hover:scale-[101%]">
      <CountDownComponent dateInMilliseconds={milliseconds} />
      </p>
      <h2 className="text-5xl ">Coming Soon...</h2>
  </div>
   );
}

export default ComingSoon;