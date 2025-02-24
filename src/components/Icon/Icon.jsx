const Icon = ({ id, style, width, height }) => {
  return (
    <svg className={style} width={width} height={height}>
      <use href={`../../../public/icons/icons.svg#${id}`} />
    </svg>
  );
};

export default Icon;
