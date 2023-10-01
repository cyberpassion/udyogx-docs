const Cards = (items:any) => {
  return (
    <>
      {items.map((item:any)=>{
        return (<div>{item.title}</div>)
      })}
    </>
  );
}

export default Cards;
