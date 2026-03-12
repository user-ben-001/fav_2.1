import { useEffect, useState } from "react";

const Clock = () => {
  const [h, setH] = useState();
  const [m, setM] = useState();
  const [s, setS] = useState();

  useEffect(() => {
    const getTime = () => {
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      // document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
      setTimeout(Clock, 1000);
      setH(h);
      setM(m);
      setS(s);
    };
    getTime();

    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      } // add zero in front of numbers < 10
      return i;
    }
  }, [s]);

  return (
    <div>
      <p>{`${h}:${m}:${s}`}</p>
    </div>
  );
};

export default Clock;
