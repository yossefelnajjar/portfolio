import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CvBtn = () => {
  return (
    <div className="fixed top-0 right-0 p-3 text-2xl z-50 underline">
      <a href="../assets/CV.pdf" download>
        CV
        <FontAwesomeIcon icon={faFileLines} className="ml-1" />
      </a>
    </div>
  );
};

export default CvBtn;
