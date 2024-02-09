//const [] = useState(0);

// input - {items: [], heading : string}
interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

import { MouseEvent, useState } from "react";

function ListGroup({ items, heading, onSelectedItem }: Props) {
  //let items = ["New York", "San Francisco", " Tokyo", "New Delhi", "Tokyo"];
  //const heading = "List Group";
  //items = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = function (
    event: MouseEvent,
    index: number,
    item: string
  ) {
    setSelectedIndex(index);
    onSelectedItem(item);
    console.log(index + "\t" + item);
  };

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 ? (
          <li>No Items Found.</li>
        ) : (
          items.map((item, index) => (
            <li
              className={
                index === selectedIndex
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={(event) => handleClick(event, index, item)}
            >
              {item}
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default ListGroup;
