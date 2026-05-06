const navItems = [
  { href: "#services", label: "项目" },
  { href: "#packages", label: "套餐" },
  { href: "#process", label: "流程" },
  { href: "#shop", label: "门店" },
];

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-20 w-full border-b border-white/20 bg-[rgba(10,13,18,0.72)] text-white backdrop-blur-[18px] max-sm:absolute">
      <div className="mx-auto flex min-h-[68px] w-[min(1160px,calc(100%_-_40px))] items-center justify-between gap-6 max-sm:min-h-[62px] max-sm:w-[min(100%_-_28px,1160px)]">
        <a
          className="inline-flex items-center gap-3 whitespace-nowrap font-extrabold"
          href="#home"
          aria-label="热心网友洗护中心首页"
        >
          <span className="block h-[42px] w-[42px] overflow-hidden rounded-lg border border-white/40 bg-[#11171d] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
            <img className="h-full w-full object-cover" src="/assets/logo.svg" alt="" />
          </span>
          <span className="max-sm:max-w-[132px] max-sm:whitespace-normal max-sm:leading-[1.15]">
            热心网友洗护中心
          </span>
        </a>

        <nav className="flex items-center gap-[22px] text-sm text-white/85 max-[980px]:hidden" aria-label="主导航">
          {navItems.map((item) => (
            <a className="hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="whitespace-nowrap rounded-lg bg-[var(--teal)] px-4 py-2.5 font-bold text-white max-sm:px-3 max-sm:py-2 max-sm:text-[13px]"
          href="#booking"
        >
          预约洗护
        </a>
      </div>
    </header>
  );
}
