import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchField extends Component {
    render() {
        const Food = () => (
            <p>
               <FontAwesomeIcon icon="stroopwafel" />
            </p>
        )


        return (
            <form className='col-3'>
                <input className="search" type="text" placeholder="Search" />
            </form>

        )
    }
}

export default SearchField;
