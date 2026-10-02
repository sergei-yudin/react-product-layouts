import { Component } from 'react';
import IconSwitch from './IconSwitch.jsx';
import CardsView from './CardsView.jsx';
import ListView from './ListView.jsx';

export default class Store extends Component {
  state = { view: 'view_module' };

  switchView = () => this.setState(({ view }) => ({ view: view === 'view_module' ? 'view_list' : 'view_module' }));

  render() {
    const { products } = this.props;
    const isCardsView = this.state.view === 'view_module';
    return <main className="store"><IconSwitch icon={isCardsView ? 'view_list' : 'view_module'} onSwitch={this.switchView} />{isCardsView ? <CardsView cards={products} /> : <ListView items={products} />}</main>;
  }
}
