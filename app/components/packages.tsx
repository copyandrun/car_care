const packages = [
  {
    title: "通勤精洗",
    summary: "适合每周一次的基础外观护理。",
    price: "¥68",
    cta: "选择套餐",
    featured: false,
    features: ["车身预洗与泡沫覆盖", "轮毂、轮眉、门边清洁", "玻璃外侧去污与毛巾收水", "胎壁上光与基础质检"],
  },
  {
    title: "全车焕新",
    summary: "外观精洗加内饰深洁，适合换季或长途后。",
    price: "¥268",
    cta: "预约焕新",
    featured: true,
    features: ["外观精洗全流程", "座椅、脚垫、后备箱吸尘", "蒸汽清洁出风口与门板缝隙", "皮革养护与车内除味", "施工后灯光质检"],
  },
  {
    title: "热心网友镀膜",
    summary: "面向追求光泽、泼水和抗污表现的车主。",
    price: "¥888",
    cta: "咨询镀膜",
    featured: false,
    features: ["漆面深度去污", "局部轻抛与脱脂处理", "单层镀膜施工", "24 小时养护提醒"],
  },
];

export function Packages() {
  return (
    <section className="packages-background py-[82px] max-sm:py-[58px]" id="packages">
      <div className="mx-auto w-[min(1160px,calc(100%_-_40px))] max-sm:w-[min(100%_-_28px,1160px)]">
        <div className="mb-[34px] flex items-end justify-between gap-6 max-sm:block">
          <div>
            <p className="mb-2 text-[13px] font-black text-[var(--teal-dark)]">PACKAGES</p>
            <h2 className="m-0 text-4xl font-extrabold leading-[1.15] tracking-normal max-sm:text-[29px]">
              透明套餐价格
            </h2>
          </div>
          <p className="max-w-[430px] text-[15px] text-[var(--muted)] max-sm:mt-3.5">
            价格按常见轿车/SUV设置，商务车、重度污渍或特殊材质会到店确认后报价。
          </p>
        </div>

        <div className="grid grid-cols-3 items-stretch gap-[18px] max-[980px]:grid-cols-1">
          {packages.map((item) => (
            <article
              className={[
                "relative flex min-h-[430px] flex-col rounded-lg border bg-white p-[26px]",
                item.featured
                  ? "border-[rgba(0,155,142,0.55)] shadow-[0_22px_58px_rgba(0,155,142,0.18)]"
                  : "border-[var(--line)] shadow-[0_12px_38px_rgba(17,24,39,0.07)]",
              ].join(" ")}
              key={item.title}
            >
              {item.featured ? (
                <span className="absolute right-[18px] top-[18px] rounded-lg bg-[#fff3dd] px-2 py-1 text-xs font-black text-[#875200]">
                  到店推荐
                </span>
              ) : null}
              <h3 className="mb-1.5 text-[23px] font-extrabold">{item.title}</h3>
              <p className="mb-[22px] min-h-12 text-sm text-[var(--muted)]">{item.summary}</p>
              <div className="mb-[22px] flex items-baseline gap-1.5">
                <strong className="text-[40px] leading-none">{item.price}</strong>
                <span className="text-sm text-[var(--muted)]">起 / 次</span>
              </div>
              <ul className="mb-[26px] grid list-none gap-3 p-0 text-[15px] text-[#303744]">
                {item.features.map((feature) => (
                  <li className="grid grid-cols-[22px_1fr] items-start gap-2" key={feature}>
                    <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-[#ddf5f1] text-[13px] font-black text-[var(--teal-dark)]">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className={[
                  "mt-auto inline-flex min-h-[46px] w-full items-center justify-center rounded-lg border px-5 py-3 font-extrabold transition hover:-translate-y-0.5",
                  item.featured
                    ? "border-transparent bg-[var(--teal)] text-white shadow-[0_14px_30px_rgba(0,155,142,0.26)] hover:bg-[var(--teal-dark)]"
                    : "border-[var(--line)] bg-white text-[var(--ink)]",
                ].join(" ")}
                href="#booking"
              >
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
