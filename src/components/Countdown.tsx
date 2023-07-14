import Countdown, { zeroPad } from "react-countdown";

type Renderer = {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};
//@ts-ignore
let renderer = ({ days, hours, minutes, seconds, completed }: Renderer) => {

    // Render a countdown
  
    return (
      <div suppressHydrationWarning={true}>
        {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </div>
    );

};

export default function CountDownComponent({
  dateInMilliseconds
}: {
  dateInMilliseconds: number;
}) {
  return (
    <Countdown
      date={dateInMilliseconds}
      renderer={renderer}
      daysInHours
    />
  );
}
