/**
 * Created by albertogiovanelli on 10/04/18.
 */
import React from 'react';
import {string, node, func} from 'prop-types';
import classNames from 'classnames';
import './FlexContainer.css';

const FlexContainer = (props) => {
    return (
      <div
          className={classNames('FlexContainer', props.className)}>
          {props.children}
      </div>
    );
};

FlexContainer.propTypes = {
    className: string,
    children: node
};

export default FlexContainer;