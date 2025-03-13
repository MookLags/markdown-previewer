import { VscDebugContinueSmall } from 'react-icons/vsc';
import { RxEnterFullScreen } from "react-icons/rx";

const BoxHeader = ({name}) => {
  const bgc = "#4aa3a3";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid black",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 12px 0px 12px",
        height: "45px",
        width: "auto",
        backgroundColor: bgc,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100%",
          width: "auto"
        }}
      >
        <VscDebugContinueSmall />
        <strong>{name}</strong>
      </div>
      <RxEnterFullScreen />
    </div>
  )
}

export default BoxHeader;
