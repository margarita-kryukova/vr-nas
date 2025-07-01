import styles from "./index.module.scss";
import { useState } from "react";
import ServiceItem, { IService } from "../../entities/Service";

interface IServiceListProps {
  list: IService[];
}

const ServiceList: React.FC<IServiceListProps> = ({ list }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className={styles["service-list"]}>
      {list.map((item, index) => (
        <ServiceItem
          {...item}
          key={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </ul>
  );
};

export default ServiceList;
