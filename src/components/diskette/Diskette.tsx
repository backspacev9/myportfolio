import "./Diskette.scss";

interface DisketteProps {
  label: string;
  image: string;
}
const Diskette = (props: DisketteProps) => {
  return (
    <div className="Diskette">
      <span className="label">{props.label}</span>
      <img src={props.image} alt="" />
    </div>
  );
};

export default Diskette;
