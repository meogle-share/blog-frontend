export function ArchiveHero() {
  return (
    <section className="relative py-20 px-8 overflow-hidden">
      {/* Watermark text */}
      <div className="absolute inset-0 flex flex-col justify-center items-end pr-8 pointer-events-none select-none opacity-[0.04]">
        <span className="font-heading font-bold text-[120px] sm:text-[200px] leading-[0.85] tracking-[-8px] uppercase">
          Voices
        </span>
        <span className="font-heading font-bold text-[120px] sm:text-[200px] leading-[0.85] tracking-[-8px] uppercase">
          Archives
        </span>
      </div>

      <div className="relative max-w-[640px]">
        <h1 className="text-[36px] sm:text-[48px] font-bold tracking-[-2px] leading-[1.1]">
          다양한 시각이
          <br />
          모이는 곳.
        </h1>
        <p className="text-[14px] text-muted-foreground mt-6 leading-[22px] max-w-[400px]">
          각기 다른 렌즈로 세상을 바라보는 큐레이터들의 아카이브. 그들의 시선이
          교차하는 지점에서 새로운 영감을 발견하세요.
        </p>
      </div>
    </section>
  );
}
