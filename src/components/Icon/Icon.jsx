import icons from "../../img/icons/icons.svg";

const Icon = ({ id, style, width, height }) => {
  return (
    <svg className={style} width={width} height={height}>
      <use href={`${icons}#${id}`} />
    </svg>
  );
};

export default Icon;
