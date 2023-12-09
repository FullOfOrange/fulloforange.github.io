import React from "react"

import Layout from "components/Layout"
import SEO from "components/SEO"
import Bio from "components/Bio"
import Divider from "components/Divider"
import VerticalSpace from "components/VerticalSpace"

import {title, description, siteUrl} from "../../blog-config"
import styled from "styled-components";
import {Introductions} from "../components/Resume/Introductions";
import Title from "../components/Title";
import {About} from "../components/Resume/about";

const SectionWrapper = styled.div`
  margin-top: 20px;
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const Resume = ({data}) => {
    return (
        <Layout>
            <SEO title={title} description={description} url={siteUrl}/>
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
                        • 동네생활 피드 트래픽 대응을 위한 증분쿼리 도입 및 쿼리 최적화
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
                    subTitle={"Backend Developer, Intern | 2019.03 ~ 2019.04"}
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
        </Layout>
    )
}

export default Resume
