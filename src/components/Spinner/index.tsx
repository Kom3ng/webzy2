import { faHurricane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spin, SpinProps } from "antd";

export default function Spinner(props: SpinProps) {
  return (
    <Spin {...props} indicator={<FontAwesomeIcon icon={faHurricane} spin />} />
  );
}
