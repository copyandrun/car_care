const steps = [
  {
    number: "01",
    title: "车况确认",
    copy: "拍照记录漆面、轮毂、内饰重点污渍，确认施工范围与预计交付时间。",
  },
  {
    number: "02",
    title: "分区清洁",
    copy: "车身、轮毂、门缝、内饰按区域施工，清洁工具分色管理。",
  },
  {
    number: "03",
    title: "护理保护",
    copy: "根据套餐进行皮革养护、胎壁上光、漆面封体或镀膜固化。",
  },
  {
    number: "04",
    title: "灯光质检",
    copy: "在不同光线下检查水痕、残留泡沫、玻璃雾面与内饰角落。",
  },
];

export function Process() {
  return (
    <section className="bg-[var(--night)] py-[82px] text-white max-sm:py-[58px]" id="process">
      <div className="mx-auto w-[min(1160px,calc(100%_-_40px))] max-sm:w-[min(100%_-_28px,1160px)]">
        <div className="mb-[34px] flex items-end justify-between gap-6 max-sm:block">
          <div>
            <p className="mb-2 text-[13px] font-black text-[#b5f5ec]">PROCESS</p>
            <h2 className="m-0 text-4xl font-extrabold leading-[1.15] tracking-normal max-sm:text-[29px]">
              标准化施工流程
            </h2>
          </div>
          <p className="max-w-[430px] text-[15px] text-white/70 max-sm:mt-3.5">
            每台车建立施工记录，交付前由另一位技师复检容易遗漏的位置。
          </p>
        </div>

        <div className="grid grid-cols-4 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
          {steps.map((step) => (
            <article className="min-h-[230px] bg-[#151b26] p-[26px] max-sm:min-h-0" key={step.number}>
              <div className="mb-9 grid h-11 w-11 place-items-center rounded-lg bg-[var(--teal)] font-black">{step.number}</div>
              <h3 className="mb-2.5 text-xl font-extrabold">{step.title}</h3>
              <p className="m-0 text-sm text-white/70">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
