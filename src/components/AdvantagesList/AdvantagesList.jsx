import data from "./data";
import AdvantagesListItem from "../AdvantagesListItem/AdvantagesListItem";
import styles from "./AdvantagesList.module.css";
import Warning from "../Warning/Warning";

const AdvantagesList = () => {
  return (
    <ul className={styles.list}>
      {data.map((item, idx) => {
        return (
          <AdvantagesListItem
            key={idx}
            item={item}
            totalItems={data.length}
            index={idx}
          />
        );
      })}
      <Warning key={data.length + 1} />
    </ul>
  );
};

export default AdvantagesList;
