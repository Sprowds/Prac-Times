import styles from "./CircleButton.module.css";

interface IProps {
  inner: React.JSX.Element | string;
  width?: string;
  handleClick: () => void;
  disableState: boolean;
  additionalClass?: string;
}

const CircleButton = ({
  inner,
  width,
  handleClick,
  disableState,
  additionalClass,
}: IProps) => {
  return (
    <button
      className={
        additionalClass
          ? `${styles.circle_btn} ${additionalClass}`
          : `${styles.circle_btn}`
      }
      onClick={() => handleClick()}
      disabled={disableState}
      style={width ? { width: width } : {}}
    >
      {inner}
    </button>
  );
};

export default CircleButton;
