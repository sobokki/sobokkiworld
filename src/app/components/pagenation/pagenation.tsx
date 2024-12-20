"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./pagenation.module.scss";
import Link from "next/link";

interface PagenationProps {
  totalItems: number;
  itemCountPerPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  className: string;
}

export default function Pagenation({
  totalItems,
  itemCountPerPage,
  pageCount,
  onPageChange,
  className,
}: PagenationProps) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const currentPage = page && parseInt(page) > 0 ? parseInt(page) : 1;
  const totalPages = Math.ceil(totalItems / itemCountPerPage);
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  useEffect(() => {
    if (currentPage >= start + pageCount) {
      setStart((prev) => prev + pageCount);
    } else if (currentPage < start) {
      setStart((prev) => prev - pageCount);
    }
    onPageChange(currentPage);
  }, [currentPage, pageCount, start, onPageChange]);

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <ul>
        <li className={`${styles.move} ${noPrev ? styles.invisible : ""}`}>
          <Link href={`?page=${start - 1}`}>이전</Link>
        </li>
        {[...Array(pageCount)].map(
          (_, i) =>
            start + i <= totalPages && (
              <li
                key={i}
                className={`${currentPage === start + i ? styles.active : ""}`}
              >
                <Link className={`${styles.page}`} href={`?page=${start + i}`}>
                  {start + i}
                </Link>
              </li>
            )
        )}
        <li className={`${styles.move} ${noNext ? styles.invisible : ""}`}>
          <Link href={`?page=${start + pageCount}`}>다음</Link>
        </li>
      </ul>
    </div>
  );
}
