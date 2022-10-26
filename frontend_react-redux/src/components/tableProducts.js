import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addProduct } from '../action/productAction';

function Title(props) {

    return (
        <header>
            <h2>{props.text}</h2>
            <hr />
        </header>
    );
}

export default Title;