import { Link } from 'react-router-dom';

function CatagoryItem(props) {
  return (
    <>
      <li className='catagory__item'>
        <Link className='catagory__item__link' to={props.path}>
          <figure className='catagory__item__pic-wrap' data-category={props.label}>
            <img
              className='catagory__item__img'
              alt='Catagories'
              src={props.src}
            />
          </figure>
          <div className='catagory__item__info'>
            <h5 className='catagory__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CatagoryItem;