import React from "react";
import {string} from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const SectionTitleWrapper = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    text-align: left;
`;

export default function SectionTitle ({title, iconName}){

    return (
        <SectionTitleWrapper>
            <FontAwesomeIcon icon={faSolid[iconName]} color="#307ab0" /> {title} 
        </SectionTitleWrapper>               
    )
}

SectionTitle.propTypes = {
    title: string,
    iconName: string
}

