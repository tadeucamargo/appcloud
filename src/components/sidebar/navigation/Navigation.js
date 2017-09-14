import React, {Component} from 'react';
import MenuSection from './MenuSection';
import Menu from '../../../json/menu.json';
import anime from 'animejs'

var activeOpenMenuAnimation, activeCloseMenuAnimation, openedMenuId = null

const openMenuAnimation = (id,numOfItems) => {
    console.log("openMenuAnimation was called")
    console.log("openMenuAnimation is is going to open menuitem: " + id)
    activeOpenMenuAnimation = anime({
        display: {
            value: 'block'
        },
        overflow: {
            value: 'hidden'
        },
        duration: 800,
        targets: '#childMenu'+id,
        height: [0,numOfItems * 35],
        easing: 'easeOutCirc',
        begin: function(anm) {
            console.log('openMenuAnimation has begun');
        },
        complete: function(anm) {
            if(!anm.reversed)
            {
                openedMenuId = id
                console.log("openMenuAnimation was not reversed, so openedMenuId is now: " + openedMenuId);
            }
            else{
                console.log('openMenuAnimation was reversed, so openedMenuId is unchanged');
            }
            activeOpenMenuAnimation = null;
        }
    })
}

const closeMenuAnimation = (id) => {
    console.log("closeMenuAnimation was called")
    console.log("closeMenuAnimation is going to close menuitem: " + id)
    activeCloseMenuAnimation = anime({
        duration: 800,
        targets: '#childMenu'+id,
        height: 0,
        easing: 'easeOutCirc',
        begin: function(anm) {
            console.log('closeMenuAnimation has begun');
        },
        complete: function(anm) {
            if(!anm.reversed)
            {
                openedMenuId = null
                console.log("closeMenuAnimation was not reversed, so openedMenuId is now null");
            }
            else{
                console.log('closeMenuAnimation was reversed, so openedMenuId is unchanged');
            }
            activeOpenMenuAnimation = null;
        }
    })
}

const animateMenu = (id,numOfItems)  => {
    console.log("AnimateMenu Called, openedMenuId value is: " + openedMenuId);
    var rewindedId = 0;

    //Close previous opened menu
    if(activeOpenMenuAnimation != null) {
        console.log("Rewinding open Animation");
        rewindedId = activeOpenMenuAnimation.animatables[0].target.id.replace('childMenu','');
        activeOpenMenuAnimation.reverse();
        console.log(id == rewindedId)
        
    }
    else 
    {
        if (openedMenuId) {
            closeMenuAnimation(openedMenuId);
        }
    }
    //Open new menu
    if(openedMenuId !== id && id != rewindedId) {
        openMenuAnimation(id, numOfItems);
    }

    
    

}
class Navigation extends Component {  
    constructor(){
        super();
        this.state = Menu;
    }  
    
    _onMenuItemSelect(menuItemKey,numOfItems) {
        var {activeMenuItem, activeMenuNumOfItems} = this.state

        if(this.state.activeMenuItem === menuItemKey){
            this.setState({'activeMenuItem': null});
        }
        else{
            this.setState({'activeMenuItem': menuItemKey});
            this.setState({'activeMenuNumOfItems': numOfItems});
        }
        animateMenu(menuItemKey, numOfItems);
    }
    render() {
        const { MenuSections, activeMenuItem } = this.state;
        return (
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">{MenuSections.map((section,i) => (
                <MenuSection key={section.id} title={section.title} items={section.items} onMenuItemSelect={this._onMenuItemSelect.bind(this)} activeMenuItem={activeMenuItem} />
            ))}
        </div>
        );
    }
}

export default Navigation;