import { useDispatch, useSelector } from "react-redux";
import { setVisibility } from "../rtk/slices/lowerMsg-slice";
import { useRef } from "react";

export default function ScreenMsg({ upperMsg, middleMsg }) {
  const lower = useRef(null);
  let visibility = useSelector((state) => state.lowerMsg);
  let dispatch = useDispatch();

  function handleLowerMsg() {
    lower.current.style.visibility = "hidden";
    dispatch(setVisibility(true));
  }

  return (
    <div className="bgOverlay">
      <div className="upper">
        <p className={visibility ? "upperMsg" : "upperMsg glitchUpperMsg"}>
          {upperMsg}
        </p>
        <p className="midlleMsg">{middleMsg}</p>
      </div>
      <p ref={lower} className="lowerMsg" onClick={handleLowerMsg}>
        CLICK TO OPEN
      </p>
    </div>
  );
}
