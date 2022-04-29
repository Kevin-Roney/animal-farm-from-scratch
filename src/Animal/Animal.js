import './Animal.css';


export default function Animal({ name, type, says, top, left }) {
  return (
    <div className='animal' style={{ position:'fixed', top:top, left:left }}>
      <img src={`/images/${type}.svg`}/>
      <h5 className='name'>{name}</h5>
      <h5 className='type'>{type}</h5>
      <h5 className='says'>{says}</h5>
    </div>
  );
}