import React, {Component} from 'react';
import MenuItem from './MenuItem';

class MenuSection extends Component {

    _onMenuItemSelect(menuItemKey,numOfItems) {
        const { onMenuItemSelect } = this.props;
        onMenuItemSelect(menuItemKey, numOfItems);
        
    }

    render() {
        const {title, items, activeMenuItem} = this.props;
        return (
            <div className="menu_section">
                <h3>{title}</h3>
                <ul className="nav side-menu">
                    {items.map((item, i) => (
                        <MenuItem key={item.id} id={item.id} title={item.title} icon={item.icon} items={item.items}  onSelect={this._onMenuItemSelect.bind(this)} isActive={item.id === activeMenuItem} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default MenuSection;