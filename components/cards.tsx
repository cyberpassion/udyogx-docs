const Cards = (items:any) => {
  return (
    <>
      {items.map((item)=>{
        return (<div>{{item.title}}</div>)
      })}
    </>
  );
}

export default Cards;
