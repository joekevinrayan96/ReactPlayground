import React from "react";

interface CountPropsType {
  text: string;
  count: number;
}

const Count: React.FC<CountPropsType> = (props: CountPropsType) => {
  console.log(`Rendering ${props.text}`);
  return (
    <div>
      {props.text} - {props.count}
    </div>
  );
};

// export default React.memo(Count);
export default Count;
