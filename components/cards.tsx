const Cards = (items:any) => {
  return (
    <>
      {items.map((item:any)=>{
        return (<div sx={{'boxShadow':'0 1px 2px 0 rgba(0,0,0,0.05)'}}>{item.title}</div>)
      })}
    </>
  );
}

export default Cards;
