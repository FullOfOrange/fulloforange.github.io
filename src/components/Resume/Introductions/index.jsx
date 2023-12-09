import React from "react"

import styled from "styled-components";
import {Infos} from "../Infos";

const Wrapper = styled.div`
  margin-top: 60px;
`

const TitleWrapper = styled.div`
  display: flex;
`

const Title = styled.h1`
  font-size: 22.6px;
  font-weight: 600;
  color: ${props => props.theme.colors.subText};
  word-break: break-all;
`

const SubTitle = styled.h1`
  margin-left: auto;
  margin-top: auto;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.secondaryText};
  word-break: break-all;
`

const ExtraWrapper = styled.div`
  margin-top: 4px;
  margin-bottom: 16px;
`

const HomepageLinkText = styled.a`
  font-weight: 400;
  font-size: 18px;
  color: ${props => props.theme.colors.link};
  word-break: break-all;
  text-decoration: none;
`

const Description = styled.p`
  margin-bottom: 36px;
  line-height: 1.6;
  font-size: 16px;
  color: ${props => props.theme.colors.tertiaryText};
  word-break: break-all;
`

/**
 * @param title {string}
 * @param subTitle {string}
 * @param homepage {{text: string, link: string} | undefined}
 * @param description {string | undefined}
 * @param infos {string | undefined}
 * @returns {JSX.Element}
 */
export const Introductions = (
    {
        title,
        subTitle,
        homepage,
        description,
        infos
    }
) => {
    return (
        <Wrapper>
            <TitleWrapper>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </TitleWrapper>
            <ExtraWrapper>{
                homepage && (
                    <HomepageLinkText
                        href={homepage.link}
                        target="_blank"
                        rel="noreferrer"
                    >{homepage.text}</HomepageLinkText>
                )
            }</ExtraWrapper>
            {description && <Description>{description}</Description>}
            {infos && <Infos text={infos}/>}
        </Wrapper>
    )
}