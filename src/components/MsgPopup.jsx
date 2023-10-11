import { useDispatch } from "react-redux";
import { setVisibility } from "../rtk/slices/lowerMsg-slice";

export default function MsgPopup({ message }) {
  const dispatch = useDispatch();

  function handleExit() {
    document.querySelector(".lowerMsg").style.visibility = "visible";
    dispatch(setVisibility(false));
  }

  return (
    <div className="msgLayer">
      <div className="msgPopup">
        <div>{message}</div>
        <button className="exit" onClick={handleExit}> EXIT </button>
      </div>
      <div className="blink"></div>
    </div>
  );
}
