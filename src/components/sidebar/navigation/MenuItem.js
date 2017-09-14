import React, {Component} from 'react';
import MenuChild from './MenuChild';




class MenuItem extends Component {

    _onSelect()
    {
        const { id, items, onSelect } = this.props;
        
        onSelect(id, items.length);
        
    }
    render() {

        const { id, isActive, items, icon, title } = this.props;
        
        return (
            <li className={(isActive ? 'active' : '')}>
                <a onClick={this._onSelect.bind(this)}><i className={"fa " + icon}></i> {title} <span className={(isActive ? 'fa fa-chevron-up' : 'fa fa-chevron-down')}></span></a>
                <ul id={'childMenu'+id} className='nav child_menu' >
                    {items.map((child,i) => (
                        <MenuChild key={child.id} title={child.title} />
                    ))}
                </ul>
            </li>

        );
    };
}

export default MenuItem;