import ShopItem from './ShopItem.jsx';
export default function ListView({ items }) { return <div className="list-view">{items.map((item, index) => <ShopItem item={item} key={`${item.name}-${item.color}-${index}`} />)}</div>; }
