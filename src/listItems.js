import React from 'react';
import './listItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flipmove from 'react-flip-move'

function ListItems(props) {
    const items = props.items
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text"
                    key={item.key}
                    value={item.text}
                    onChange={
                        (e) => {
                            props.updateItem(e.target.value, item.key)
                        }
                    }
                />
                <span >
                    <FontAwesomeIcon className="faicons"
                        icon='trash'
                        onClick={() => props.deleteItem(item.key)} />
                </span>
            </p>

        </div>
    })
    return (
        <div>
            <Flipmove duration={500} easing="ease-in-out" >
                {listItems}
            </Flipmove>
        </div>
    )
}

export default ListItems