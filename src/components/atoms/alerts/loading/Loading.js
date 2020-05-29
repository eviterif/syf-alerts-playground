import React from 'react';
import {string} from 'prop-types';

import {LoadingWrapper, InlineLoadingWrapper} from './LoadingStyles';

export default function Loading({display, type}){
    switch(display){
      case 'inline':
        return(
          <InlineLoadingWrapper type={type}>
               <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </InlineLoadingWrapper>
        )
      default:
        return(
          <LoadingWrapper type={type}>
               <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </LoadingWrapper>
         )
    }
    
} 

Loading.propTypes = {
  display: string, 
  type: string
}