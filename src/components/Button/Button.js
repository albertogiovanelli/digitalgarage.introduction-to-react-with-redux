/**
 * Created by albertogiovanelli on 10/04/18.
 */
import React from 'react';
import {string, node, func, bool} from 'prop-types';
import classNames from 'classnames';
import FlexContainer from '../../components/FlexContainer/FlexContainer';
import './Button.css';

const Button = (props) => (
    <button
        className={classNames('btn', props.className)}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}>
        <FlexContainer className="justify-center">
        {/*<img className="btn__icon" src={require(`../../img/icons/eye_icon.png`)}/>*/}
        {props.label}
        </FlexContainer>
    </button>
);

Button.propTypes = {
    label: string.isRequired,
    onClick: func,
    disabled: bool,
    className: string,
    icon:string,
    type:string.isRequired
};

Button.defaultProps = {
    disabled: false
};

export default Button;