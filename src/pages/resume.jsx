import React from "react"

import Layout from "components/Layout"
import SEO from "components/SEO"
import Divider from "components/Divider"
import VerticalSpace from "components/VerticalSpace"

import {title, description, siteUrl} from "../../blog-config"
import styled from "styled-components";
import {Introductions} from "../components/Resume/Introductions";
import {About} from "../components/Resume/about";

const SectionWrapper = styled.div`
  margin-top: 20px;
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const Title = styled.h1`
  font-size: 33.6px;
  font-weight: 300;
  color: ${props => props.theme.colors.text};
  word-break: break-all;
`

const Resume = ({data}) => {
    return (
        <Layout>
            <SEO
                title={"백엔드 개발자 이력서, 육진혁"}
                description={"당근마켓 백엔드 개발자 육진혁 이력서"}
                url={siteUrl + "resume"}
            />
            <VerticalSpace size={48}/>
            <About/>
            <Divider/>
            <SectionWrapper>
                <Title size="bg">경력</Title>
                <Introductions
                    title={"당근마켓"}
                    subTitle={"Software Engineer | 2022.01 ~ "}
                    homepage={{
                        text: "www.daangn.com",
                        link: "https://www.daangn.com/"
                    }}
                    description={`
                        사용자들이 오프라인으로 모일 수 있도록 돕는 "모임" 플랫폼 개발. 당근마켓에 페스타가 인수되며 당근모임 첫 서버 개발자로서 합류. 
                    `}
                    infos={`
                        • Spring, Kotlin 기반의 모임 서비스 설계 및 개발  
                        • API 관리와 FE - BE 의 원활한 협업을 위한 OAS 팀 내 도입
                        • 피드 및 리스트 서빙을 위한 증분쿼리 도입 및 쿼리 최적화
                        • 이벤트 소싱 기반의 유저 프로모션 설계 및 개발
                        • 배포 시간 단축을 위한 Gradle 캐싱 및 튜닝 등
                    `}
                />
                <Introductions
                    title={"주식회사 페스타"}
                    subTitle={"Software Engineer | 2020.05 ~ 2021.12"}
                    homepage={{
                        text: "festa.io",
                        link: "https://festa.io/"
                    }}
                    description={`
                        컨퍼런스를 주최하고 편리하게 관리할 수 있는 플랫폼 페스타 개발. 
                        백엔드와 인프라 개발을 리딩했으며 프론트엔드 개발 병행.                        
                    `}
                    infos={`
                        • GraphQL, Typescript, AWS Lambda 기반 신규 시스템 개발
                        • Javascript 기반 레거시 시스템 유지보수
                        • 비용 절감을 위해 K8S 기반의 서비스를 AWS Lambda 로 마이그레이션
                        • 다양한 검색을 위한 Elasticsearch 기반 검색 시스템 개발
                        • 온라인 행사를 위한 웨비나 서비스 (채팅, 실시간 스트리밍 POC 등) 개발
                        • 서비스 성능 개선을 위한 캐싱 및 DB 성능 튜닝
                    `}
                />
                <Introductions
                    title={"Naver (V CIC)"}
                    subTitle={"Backend Developer, Intern | 2020.01 ~ 02"}
                    description={`
                        V CIC 서버 개발 인턴                       
                    `}
                    infos={`
                        • 예상치 못한 트래픽 대응을 위한 과제 수행 [2개월]
                        • 부하테스트와 Load Balance 알고리즘 등 학습 및 구현
                    `}
                />
            </SectionWrapper>
            <Divider/>
            <SectionWrapper>
                <Title size="bg">외부 활동</Title>
                <Introductions
                    title={"Jetbrains/Exposed"}
                    subTitle={"오픈소스 기여 | 2023 ~"}
                    homepage={{
                        text: "Pull requests",
                        link: "https://github.com/JetBrains/Exposed/pulls?q=author%3AFullOfOrange+"
                    }}
                    description={`
                        팀에서 사용중인 ORM의 문제점을 해결하기 위해 기여. 오픈되어있던 Spring 관련 이슈 대부분을 해결함.
                    `}
                    infos={`
                        • 다중 컨테이너 & 다중 DB 환경에서 Transaction 처리가 안되는 문제 해결
                        • propagation, isolation, timeout 등의 Transaction 기능 구현 및 개선
                        • Spring 기반의 Exposed 샘플 코드 추가
                    `}
                />
                <Introductions
                    title={"당근 SERVER 밋업 2회"}
                    subTitle={"발표 | 2023.10"}
                    homepage={{
                        text: "Youtube",
                        link: "https://youtu.be/heA_-vpZsWo?si=mrCEavGlPpGPCuh6"
                    }}
                    description={`
                        당근모임을 개발하며 만났던 기술적 고민들과 해결 과정을 가볍게 소개함.
                    `}
                />
            </SectionWrapper>
            <Divider/>
            <SectionWrapper>
                <Title size="bg">프로젝트</Title>
                <Introductions
                    title={"페스타 클론 프로젝트"}
                    subTitle={"부스트캠프 최종 프로젝트 | 2019.11 ~ 12"}
                    homepage={{
                        text: "Github Repository",
                        link: "https://github.com/connect-foundation/2019-12"
                    }}
                    description={`
                        이벤트 플랫폼인 페스타 클론 프로젝트에서 인프라와 백엔드 담당.
                        지속 가능한 개발을 위해 CICD, 100% 테스트 커버리지 등을 중심으로 진행
                    `}
                    infos={`
                        • Express, Typescript 기반의 RESTful API 서버 개발
                        • 티켓 구매 무결성 확인 및 예약 로직 구현
                        • K8S 기반의 인프라 설계 및 구축
                        • Travis CI 를 이용한 E2E, API 테스트 및 Docker Image 빌드 CI/CD 구축
                        • Hooks, Context API 를 이용한 React Store 구조 설계
                    `}
                />
            </SectionWrapper>
            <Divider/>
            <SectionWrapper>
                <Introductions
                    title={"부스트캠프 2019"}
                    subTitle={"2019.07 ~ 12"}
                    description={`
                        5개월간 진행되는 부스트캠프에 참여. JS 기반의 웹 프론트엔드와 백엔드 학습 및 프로젝트 진행.
                    `}
                />
                <Introductions
                    title={"육군 병장 만기 전역"}
                    subTitle={"전산병 | 2017.02 ~ 2018.11"}
                    description={`
                        대기업 규모 백본 및 L4 라우터 및 EJB 기반 서버 관리 및 유지보수
                    `}
                />
                <Introductions
                    title={"숭실대학교 컴퓨터학부"}
                    subTitle={"재학중 | 2016.03 ~"}
                />
            </SectionWrapper>
        </Layout>
    )
}

export default Resume
