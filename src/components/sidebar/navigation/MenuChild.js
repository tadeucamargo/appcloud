import React, {Component} from 'react';

class MenuChild extends Component {
    render() {
        const {title} = this.props;
        return (
            <li>
                <a>{title}</a>
            </li>
        );
    };
}

export default MenuChild;