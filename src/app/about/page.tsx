'use client'
import { useState } from "react";
import Image from "next/image";
import styles from "./about.module.scss";
import htmlImg from "../../../public/htmlPng.png";
import cssImg from "../../../public/cssPng.png";
import javaScriptImg from "../../../public/javascroptPng.png";
import reactImg from "../../../public/reactPng.png";
import nextImg from "../../../public/nextjsPng.png";
import reacthookFormImg from "../../../public/reactHookFormPng.png";
import viteImg from "../../../public/vitePng.png";
import typescriptImg from "../../../public/typescriptPng.png";
import styledComponentImg from "../../../public/styledComponentPng.png";
import scssImg from "../../../public/scssPng.png";
import tailwindImg from "../../../public/tailwindPng.png";
import githubImg from "../../../public/gitHubPng.png";
import upIcon from "../../../public/upIcon.svg";
import downIcon from "../../../public/downIcon.svg";

export default function About() {
  const [isBasicUp, setIsBasicUp] = useState<boolean>(true);
  const [isFrameworksUp, setIsFrameworksUp] = useState<boolean>(true);
  const [isToolsUp, setIsToolsUp] = useState<boolean>(true);
  const [isStylingUp, setIsStylingUp] = useState<boolean>(true);
  const [isCollabUp, setIsCollabUp] = useState<boolean>(true);

  return (
    <main className={styles.container}>
      <section className={styles.intro}>
        <h2 className={styles.title}>Introduce</h2>
        <div className={styles.comment}>
          <p>안녕하세요 프론트 엔드 엔지니어를 꿈 꾸는 전소은 입니다.</p>
          <p>저의 포트폴리오 사이트에 방문해 주셔서 감사합니다.</p>
        </div>
      </section>
      <section className={styles.edu}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.comment}>
          <p>2023.10~ 2024.04 코드잇 부트캠프 프론트엔드 과정 수료</p>
          <p>2019.03~ 2023.02 원광대학교 문예창작학과 (복수: 공연 영상 스토리텔링 학과) 졸업</p>
        </div>
      </section>
      <section className={styles.skills}>
        <h2 className={styles.title}>Skills</h2>
        <div>
          <span>Basic</span>
          <Image 
            src={isBasicUp ? downIcon : upIcon} 
            alt={isBasicUp ? "down" : "up"} 
            className={styles.toggleIcon} 
            onClick={() => setIsBasicUp(!isBasicUp)}
          />
          {isBasicUp && (
            <div className={styles.image}>
              <Image  className={styles.boxImg} src={htmlImg} alt="html이미지" />
              <Image  className={styles.boxImg} src={cssImg} alt="css이미지" />
              <Image  className={styles.boxImg} src={javaScriptImg} alt="javaScript이미지" />
            </div>
          )}
        </div>
        <div>
          <span>Frontend Frameworks & Libraries</span>
          <Image 
            src={isFrameworksUp ? downIcon : upIcon} 
            alt={isFrameworksUp ? "down" : "up"}  
            className={styles.toggleIcon} 
            onClick={() => setIsFrameworksUp(!isFrameworksUp)}
          />
          {isFrameworksUp && (
            <div className={styles.image}>
              <Image  className={styles.boxImg} src={reactImg} alt="react이미지" />
              <Image  className={styles.boxImg} src={nextImg} alt="next이미지" />
              <Image  className={styles.boxImg} src={reacthookFormImg} alt="reacthookform이미지" />
            </div>
          )}
        </div>
        <div>
          <span>Frontend Development Tools</span>
          <Image 
            src={isToolsUp? downIcon : upIcon} 
            alt={isToolsUp ? "down" : "up"} 
            className={styles.toggleIcon} 
            onClick={() => setIsToolsUp(!isToolsUp)}
          />
          {isToolsUp && (
            <div className={styles.image}>
              <Image  className={styles.boxImg} src={viteImg} alt="vite이미지" />
              <Image  className={styles.boxImg} src={typescriptImg} alt="typescript이미지" />
            </div>
          )}
        </div>
        <div>
          <span>Styling-related</span>
          <Image 
            src={isStylingUp ? downIcon : upIcon} 
            alt={isStylingUp ? "down" : "up"} 
            className={styles.toggleIcon} 
            onClick={() => setIsStylingUp(!isStylingUp)}
            width={12}
            height={12}
          />
          {isStylingUp && (
            <div className={styles.image}>
              <Image  className={styles.boxImg} src={styledComponentImg} alt="styledComponent이미지" />
              <Image  className={styles.boxImg} src={scssImg} alt="scss이미지" />
              <Image  className={styles.boxImg} src={tailwindImg} alt="tailwind이미지" />
            </div>
          )}
        </div>
        <div>
          <span>Collaboration & Version Control</span>
          <Image 
            src={isCollabUp ? downIcon : upIcon} 
            alt={isCollabUp ? "down" : "up"} 
            className={styles.toggleIcon} 
            onClick={() => setIsCollabUp(!isCollabUp)}
          />
          {isCollabUp && (
            <div className={styles.image}>
              <Image  className={styles.boxImg}src={githubImg} alt="github이미지" />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
