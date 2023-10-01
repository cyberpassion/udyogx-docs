import { useState } from 'react';

function CardButton(props) {
  return (
    <div>
      <button>
        {props.title}
      </button>
    </div>
  );
}

export default function Cards({ items }: any) {
  return (
    <>
      {items.map((item: any) => {
        return <CardButton title={item.title} icon={item.icon} />;
      })}
    </>
  );
}
