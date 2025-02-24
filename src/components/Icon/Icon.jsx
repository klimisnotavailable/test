const Icon = ({ id, style, width, height }) => {
  return (
    <svg className={style} width={width} height={height}>
      <use href={`../../img/icons/icons#svg#${id}`} />
    </svg>
  );
};

export default Icon;
