"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/app/(pages)/project/project.module.scss";
import KeepyUppyModal from "@/app/components/modal/projectModal/keepyUppyModal";
import keepyUppyDarkImg from "../../../../public/keepyUppyDarkPng.png";
import taskifyDarkImg from "../../../../public/taskifyDarkPng.png";
import rollingDarkImg from "../../../../public/rollingDarkPng.png";
import keepyUppyColorImg from "../../../../public/keepyUppyPng.png";
import taskifyColorImg from "../../../../public/taskifyPng.png";
import rollingColorImg from "../../../../public/rollingPng.png";
import TaskifyModal from "@/app/components/modal/projectModal/taskifyModal";
import RollingMdoal from "@/app/components/modal/projectModal/rollingModal";
export default function ProjectContents() {
  const [hovered, setHoverd] = useState({
    keepyUppy: false,
    taskify: false,
    rolling: false,
  });
  const [isKeepyUppyOpen, setIsKeepyUppyOpen] = useState<boolean>(false);
  const [isTaskifyOpen, setIsTaskifyOpen] = useState<boolean>(false);
  const [isRollingOpen, setIsRollingOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={styles.imageWrapper}
        onMouseEnter={() => setHoverd((prev) => ({ ...prev, keepyUppy: true }))}
        onMouseLeave={() =>
          setHoverd((prev) => ({ ...prev, keepyUppy: false }))
        }
      >
        <Image
          className={styles.keepyUppyDarkImg}
          src={hovered.keepyUppy ? keepyUppyColorImg : keepyUppyDarkImg}
          alt="키피어피 이미지"
          width={493}
          height={200}
        />
        {hovered.keepyUppy && (
          <button
            onClick={() => setIsKeepyUppyOpen(true)}
            className={styles.button}
          >
            협업 일정 관리 사이트{" "}
          </button>
        )}
      </div>
      {isKeepyUppyOpen && (
        <KeepyUppyModal closeClick={() => setIsKeepyUppyOpen(false)} />
      )}
      <div
        className={styles.imageWrapper}
        onMouseEnter={() => setHoverd((prev) => ({ ...prev, taskify: true }))}
        onMouseLeave={() => setHoverd((prev) => ({ ...prev, taskify: false }))}
      >
        <Image
          className={styles.image}
          src={hovered.taskify ? taskifyColorImg : taskifyDarkImg}
          alt="테스키파이 이미지"
          width={493}
          height={200}
        />
        {hovered.taskify && (
          <button
            onClick={() => setIsTaskifyOpen(true)}
            className={styles.button}
          >
            일정 관리 사이트{" "}
          </button>
        )}
      </div>
      {isTaskifyOpen && (
        <TaskifyModal closeClick={() => setIsTaskifyOpen(false)} />
      )}
      <div
        className={styles.imageWrapper}
        onMouseEnter={() => setHoverd((prev) => ({ ...prev, rolling: true }))}
        onMouseLeave={() => setHoverd((prev) => ({ ...prev, rolling: false }))}
      >
        <Image
          className={styles.image}
          src={hovered.rolling ? rollingColorImg : rollingDarkImg}
          alt="롤링 이미지"
          width={493}
          height={200}
        />
        {hovered.rolling && (
          <button
            onClick={() => setIsRollingOpen(true)}
            className={styles.button}
          >
            롤링 페이지 사이트{" "}
          </button>
        )}
      </div>
      {isRollingOpen && (
        <RollingMdoal closeClick={() => setIsRollingOpen(false)} />
      )}
    </>
  );
}
