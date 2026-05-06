const services = [
  {
    title: "外观精洗",
    image:
      "https://images.unsplash.com/photo-1761312834165-c27d037b3a6b?auto=format&fit=crop&fm=jpg&q=72&w=900",
    alt: "两台覆盖泡沫的汽车正在清洗",
    copy: "预洗软化、细节刷缝、轮毂去污、两桶洗车、低压收水，减少砂砾拖拽带来的细纹。",
    tags: ["漆面安全", "轮毂清洁", "玻璃去膜"],
  },
  {
    title: "内饰深洁",
    image:
      "https://images.unsplash.com/photo-1746079074447-73c1bc30bf70?auto=format&fit=crop&fm=jpg&q=72&w=900",
    alt: "技师正在蒸汽清洁汽车内饰",
    copy: "座椅、脚垫、门板、出风口和后备箱分区清洁，针对咖啡渍、宠物毛发与异味做重点处理。",
    tags: ["蒸汽杀菌", "皮革养护", "除味净化"],
  },
  {
    title: "漆面护理",
    image:
      "https://images.unsplash.com/photo-1762933855598-273a51b47649?auto=format&fit=crop&fm=jpg&q=72&w=900",
    alt: "深色汽车正在泡沫和水雾中清洗",
    copy: "去铁粉、去柏油、轻度抛光、封体或镀膜，恢复漆面通透度并提升后续清洗效率。",
    tags: ["去污还原", "镜面增亮", "长效保护"],
  },
];

export function Services() {
  return (
    <section className="bg-white py-[82px] max-sm:py-[58px]" id="services">
      <div className="mx-auto w-[min(1160px,calc(100%_-_40px))] max-sm:w-[min(100%_-_28px,1160px)]">
        <div className="mb-[34px] flex items-end justify-between gap-6 max-sm:block">
          <div>
            <p className="mb-2 text-[13px] font-black text-[var(--teal-dark)]">SERVICES</p>
            <h2 className="m-0 text-4xl font-extrabold leading-[1.15] tracking-normal max-sm:text-[29px]">
              常用洗护项目
            </h2>
          </div>
          <p className="max-w-[430px] text-[15px] text-[var(--muted)] max-sm:mt-3.5">
            围绕城市日常用车场景设计：雨痕、灰尘、内饰异味、轮毂油泥和漆面轻微氧化都能对应处理。
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-1">
          {services.map((service) => (
            <article
              className="overflow-hidden rounded-lg border border-[var(--line)] bg-white shadow-[0_12px_34px_rgba(17,24,39,0.06)]"
              key={service.title}
            >
              <img className="h-[220px] bg-[#dbe5ec] object-cover" src={service.image} alt={service.alt} />
              <div className="p-[22px]">
                <h3 className="mb-2 text-[21px] font-extrabold">{service.title}</h3>
                <p className="mb-[18px] text-[15px] text-[var(--muted)]">{service.copy}</p>
                <ul className="flex list-none flex-wrap gap-2 p-0">
                  {service.tags.map((tag) => (
                    <li className="rounded-lg bg-[#edf7f6] px-2.5 py-1.5 text-xs font-extrabold text-[#075b54]" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
