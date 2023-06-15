import { Product } from '../../types/Product';
import './Card.scss';
import { Page } from '../../types/Page';
import { BasketEdit } from '../../types/BasketEdit';

interface Props {
  product:Product,
  style: React.CSSProperties,
  onBasketIdsSet: (id: string, operation: BasketEdit) => void,
  currentPage: Page,
}

export const Card:React.FC<Props> = ({product,
  onBasketIdsSet, style, currentPage}) => {
  const cardClassName = currentPage === Page.HOME
    ? 'card'
    : 'card card--phones-page';

  return (
    <section className={cardClassName} style={style}>
      <img
        className="card__photo"
        src={require(`../../${product.image}`)}
        alt={product.name}
      ></img>
      <h1 className="card__name">{product.name}</h1>
      <div className="card__price">${product.price}</div>

      <div className='card__divider'></div>

      <div className="card__info">
        <div className="card__info--details">Screen:</div>
        <div className="card__info--value">{product.screen}</div>
      </div>

      <div className="card__info">
        <div className="card__info--details">Capacity:</div>
        <div className="card__info--value">{product.capacity}</div>
      </div>

      <div className="card__info">
        <div className="card__info--details">RAM:</div>
        <div className="card__info--value">{product.ram}</div>
      </div>

      <div className='card__buttons'>
        <a
          className="card__buttons--buy"
          onClick={() => onBasketIdsSet(product.id, BasketEdit.ADD)}
        >
          {currentPage === Page.HOME ? 'Buy' : 'Add to cart'}
        </a>
        <a className="card__buttons--fav">
          {currentPage === Page.HOME ? '3' : '4'}
        </a>
      </div>
    </section>
  );
};
