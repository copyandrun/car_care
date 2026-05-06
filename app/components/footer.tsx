const credits = [
  {
    href: "https://unsplash.com/photos/two-cars-being-washed-with-foam-DtrI63-Z46I",
    label: "Willian Cittadin",
  },
  {
    href: "https://unsplash.com/photos/man-steam-cleans-the-interior-of-a-car-0a36BVNdWek",
    label: "Fine Automotive Detailing",
  },
  {
    href: "https://unsplash.com/photos/a-dark-car-being-washed-with-foam-and-water-kQdY2pR-ic8",
    label: "Clarence Tioh",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0c1017] py-[30px] text-sm text-white/75">
      <div className="mx-auto flex w-[min(1160px,calc(100%_-_40px))] items-center justify-between gap-5 max-sm:grid max-sm:w-[min(100%_-_28px,1160px)]">
        <span>© 2026 热心网友洗护中心</span>
        <span>
          图片来源：
          {credits.map((credit, index) => (
            <span key={credit.href}>
              {index > 0 ? "、" : ""}
              <a className="underline underline-offset-3" href={credit.href}>
                {credit.label}
              </a>
            </span>
          ))}
        </span>
      </div>
    </footer>
  );
}
