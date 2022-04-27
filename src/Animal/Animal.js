import './Animal.css';

export default function Animal({ name, type, says }) {
  return (
    <div className='animal'>
      <img src={`/images/${type}.svg`}/>
      <h5 className='name'>{name}</h5>
      <h5 className='type'>{type}</h5>
      <h5 className='says'>{says}</h5>
    </div>
  );
}