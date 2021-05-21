import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css'
import React from 'react';
const DialogItem = (props)=>{
    return(
        <div className={classes.dialogs__items}>
                   <NavLink to={`/messages/${props.id}`} className={classes.item} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;