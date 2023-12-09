import React from 'react'

import styled from 'styled-components'
import {name, siteUrl} from "../../../../resume-config";

const Wrapper = styled.div`
  margin-bottom: 60px;
  display: flex;
  align-items: center;
`


const profileImageRoot =
    typeof window !== "undefined" && window.location.host === "localhost:8000"
        ? "http://localhost:8000"
        : siteUrl

const Profile = styled.div`
  flex: 0 0 auto;
  margin-right: 16px;
  width: 128px;
  height: 128px;
  border-radius: 999px;
  background-image: url(${profileImageRoot}/profile.png);
  background-size: cover;
  background-position: center;
`

const Name = styled.div`
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`

const Description = styled.div`
  margin-bottom: 11.2px;
  line-height: 1.6;
  font-size: 16px;
  color: ${props => props.theme.colors.secondaryText};
`

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const About = () => {

    return (
        <Wrapper>
            <Profile />
            <div>
                <Name>{name}</Name>
                <Description>{`
                    Spring & Kotlin / NodeJS & Typescript 를 기반으로 한 3년차 서버개발자로서
                    다양한 기술로 서비스를 빠르고 안정적으로 개발하는 일을 해왔습니다.
                `}</Description>
                <Description>{`
                    현재는 사업적인 성장과 팀원과의 원활한 소통에 관심을 두고 있습니다.
                    과한 엔지니어링을 최소화하고 사용자가 필요로 하는 기능을 빠르고 안정적으로 제공하는 것을 중요하게 생각합니다.
                `}</Description>
            </div>
        </Wrapper>
    )
}