import {useEffect, useLayoutEffect, useRef, useState} from "react";
import "./index.scss";
interface ProgressBar {
  name: string;
  percent: number;
}
const ProgressBar = (props: ProgressBar) => {
  const {name, percent} = props;
  const progressRef = useRef<HTMLDivElement>(null);
  const [spans, setSpans] = useState<Array<JSX.Element>>([]);
  const [currentWidth, setCurrentWidth] = useState(0);

  const getWidth = () => {
    if (progressRef.current) {
      let width = progressRef.current.clientWidth;
      let computedStyle = getComputedStyle(progressRef.current);
      width -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
      setCurrentWidth(width);
    }
  };
  const calculateSpans = () => {
    let count = currentWidth * (percent / 100);
    count = Math.round(count / (10 + 5));
    let tempArray = [];
    for (let i = 1; i < count; i++) {
      tempArray.push(<span key={i} />);
    }
    setSpans(tempArray);
  };

  useEffect(() => {
    getWidth();
  });

  useEffect(() => {
    calculateSpans();
  }, [currentWidth]);

  return (
    <div className="ProgressBar">
      <div className="progress-header">
        <span className="progress-title">{name}</span>
        <span className="progress-percent">{percent}%</span>
      </div>
      <div className="progress-bar" ref={progressRef}>
        {spans}
        <span></span>
      </div>
    </div>
  );
};

export default ProgressBar;
