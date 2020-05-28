import React from 'react';
import styled from "styled-components";
import {string} from 'prop-types';

export const LoadingWrapper = styled.div`
  text-align: center;

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${({type}) => type === 'primary' ? 'white' : '#307ab0'};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

const InlineLoadingWrapper = styled(LoadingWrapper)`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
    .lds-ellipsis {
      display: inline-block;
      position: relative;
      width: 49%;
      height: 10px;
      margin: auto;
    }
    .lds-ellipsis div {
      position: absolute;
      top: 0;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
`;


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