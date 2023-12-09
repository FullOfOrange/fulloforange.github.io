import React from "react"

import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 8px;
`

const Text = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  color: ${props => props.theme.colors.secondaryText};
  word-break: break-all;
`

/**
 *
 * @param text {string}
 * @returns {JSX.Element}
 * @constructor
 */
export const Infos = ({text}) => {
    return (
        <Wrapper>{
            text.split('\n').map((line) => <Text>{line}</Text>)
        }</Wrapper>
    )
}