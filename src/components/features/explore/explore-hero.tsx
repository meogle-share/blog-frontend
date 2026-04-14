"use client";

import { useEffect, useState } from "react";

const QUEST_MESSAGE = "용사여、오늘의 포스트를 확인하고 영감이 가득한 이야기를 탐험하라.";

export function ExploreHero() {
  const [typed, setTyped] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < QUEST_MESSAGE.length) {
        setTyped(QUEST_MESSAGE.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(t);
      }
    }, 55);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="px-6 pt-8 pb-6 max-w-[1280px] mx-auto">
      {/* 퀘스트 메시지 박스 */}
      <div
        className="pixel-box-flat p-5 mb-6"
        style={{ maxWidth: "900px" }}
      >
        <p
          className="font-pixel text-[9px] text-muted-foreground mb-3"
          style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
        >
          ※ 시스템 메시지
        </p>
        <p
          className="font-content text-[14px] leading-[1.9] text-foreground"
          style={{ fontFamily: "Pretendard Variable, Pretendard, sans-serif", minHeight: "28px" }}
        >
          {typed}
          {(!done || cursorOn) && (
            <span
              style={{
                display: "inline-block",
                width: "9px",
                height: "16px",
                background: "var(--foreground)",
                marginLeft: "2px",
                verticalAlign: "middle",
                opacity: cursorOn ? 1 : 0,
              }}
            />
          )}
        </p>
      </div>

      {/* 통계 4칸 박스 — 레퍼런스의 대기/조사/완료/실패와 동일한 레이아웃 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { icon: "📄", label: "전체 포스트", count: "06", color: "var(--status-pending)" },
          { icon: "✏️", label: "작성 중", count: "02", color: "var(--status-active)" },
          { icon: "✅", label: "완료", count: "03", color: "var(--status-complete)" },
          { icon: "❤️", label: "좋아요", count: "18", color: "var(--status-failed)" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 px-4 py-4"
            style={{
              background: "var(--card)",
              border: "3px solid var(--border)",
              boxShadow: "3px 3px 0 var(--border)",
            }}
          >
            {/* 컬러 아이콘 박스 */}
            <div
              className="flex items-center justify-center w-10 h-10 flex-shrink-0 text-[18px]"
              style={{
                background: stat.color,
                border: "2px solid var(--border)",
              }}
            >
              {stat.icon}
            </div>

            <div className="flex flex-col gap-1">
              <p
                className="font-pixel text-[7px] text-muted-foreground"
                style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
              >
                {stat.label}
              </p>
              <p
                className="font-pixel text-[20px] text-foreground leading-none"
                style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
              >
                {stat.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
