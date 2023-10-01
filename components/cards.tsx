import Link from 'next/link';

function CardButton(props) {
  const cardStyle = {
    background: 'white',
    borderRadius: '0.5em',
    border: '1px solid #f3eded',
    boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    margin: '1.25% 0.5% 0 0',
    width: '48%',
  };

  const linkStyle = {
    display: 'block',
    padding: '0.6em 1em',
  };

  return (
    <div style={cardStyle}>
      <Link href={props.href} style={linkStyle}>
        <button>
          {props.title}
        </button>
      </Link>
    </div>
  );
}

export default function Cards({ items }: any) {
  return (
    <>
      {items.map((item: any, index: number) => (
        <CardButton key={index} title={item.title} icon={item.icon} href={item.href} />
      ))}
    </>
  );
}
