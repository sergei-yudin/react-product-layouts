import ShopCard from './ShopCard.jsx';
export default function CardsView({ cards }) { return <div className="cards-view">{cards.map((card, index) => <ShopCard card={card} key={`${card.name}-${card.color}-${index}`} />)}</div>; }
