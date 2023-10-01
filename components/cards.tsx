import { useState } from 'react';

function CardButton(props) {
  return (
    <div style="background: white;border-radius: 0.5em;border: 1px solid #f3eded;box-shadow: 0 1px 2px rgba(0,0,0,0.04);margin:1.25% 0.5% 0 0;width:48%;">
      <a href={props.href} style="display:block;padding: 0.5em 1em;">
      <button>  {props.title}
      </button></a>
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
