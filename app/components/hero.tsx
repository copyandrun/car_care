const stats = [
  { value: "45 分钟", label: "标准精洗最快交付" },
  { value: "9 道", label: "外观安全清洁流程" },
  { value: "24h", label: "镀膜养护回访" },
  { value: "4.9", label: "车主到店评分" },
];

export function Hero() {
  return (
    <section
      className="hero-background flex min-h-[78svh] max-h-[760px] items-end px-0 pb-[54px] pt-[116px] text-white max-sm:min-h-[72svh] max-sm:bg-[position:62%_center] max-sm:pb-7 max-sm:pt-[82px]"
      aria-label="热心网友洗护中心"
    >
      <div className="mx-auto grid w-[min(1160px,calc(100%_-_40px))] grid-cols-[minmax(0,650px)_minmax(280px,360px)] items-end gap-12 max-[980px]:grid-cols-1 max-sm:w-[min(100%_-_28px,1160px)]">
        <div>
          <p className="kicker mb-4 inline-flex items-center gap-2.5 text-sm font-extrabold text-[#b5f5ec]">
            精洗 · 内饰 · 镀膜 · 养护
          </p>
          <h1 className="mb-5 max-w-[11ch] text-[78px] font-extrabold leading-[0.98] tracking-normal max-[980px]:text-[62px] max-sm:text-[40px]">
            热心网友
            <br />
            洗护中心
          </h1>
          <p className="mb-[30px] max-w-[620px] text-lg text-white/80 max-sm:text-base">
            从预洗去砂到漆面收水，每一步都按精细化施工标准完成。给通勤车更干净的日常，也给爱车玩家更稳定的光泽。
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              className="inline-flex min-h-[46px] items-center justify-center rounded-lg border border-transparent bg-[var(--teal)] px-5 py-3 font-extrabold text-white shadow-[0_14px_30px_rgba(0,155,142,0.26)] transition hover:-translate-y-0.5 hover:bg-[var(--teal-dark)]"
              href="#booking"
            >
              立即预约
            </a>
            <a
              className="inline-flex min-h-[46px] items-center justify-center rounded-lg border border-white/40 bg-white/10 px-5 py-3 font-extrabold text-white transition hover:-translate-y-0.5"
              href="#packages"
            >
              查看套餐
            </a>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-3 max-[980px]:max-w-[560px] max-sm:grid-cols-[repeat(4,minmax(94px,1fr))] max-sm:overflow-x-auto max-sm:pb-0.5"
          aria-label="门店数据"
        >
          {stats.map((stat) => (
            <div
              className="min-h-[110px] rounded-lg border border-white/20 bg-white/10 p-[18px] backdrop-blur-[14px] max-sm:min-h-20 max-sm:p-3"
              key={stat.label}
            >
              <strong className="block text-[30px] leading-none max-sm:text-[22px]">{stat.value}</strong>
              <span className="mt-2.5 block text-[13px] text-white/80 max-sm:mt-2 max-sm:text-[11px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
