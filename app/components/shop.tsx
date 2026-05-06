const mapUrl =
  "https://ditu.amap.com/search?query=%E6%B1%9F%E8%8B%8F%E7%9C%81%E5%8D%97%E4%BA%AC%E5%B8%82%E7%A7%A6%E6%B7%AE%E5%8C%BA%E5%A4%A7%E6%98%8E%E8%B7%AF276%E5%8F%B7";

export function Shop() {
  return (
    <section className="bg-white py-[82px] max-sm:py-[58px]" id="shop">
      <div className="mx-auto grid w-[min(1160px,calc(100%_-_40px))] grid-cols-[0.95fr_1.05fr] items-stretch gap-[34px] max-[980px]:grid-cols-1 max-sm:w-[min(100%_-_28px,1160px)]">
        <MapCard />
        <div>
          <p className="mb-2 text-[13px] font-black text-[var(--teal-dark)]">VISIT US</p>
          <h2 className="m-0 text-4xl font-extrabold leading-[1.15] tracking-normal max-sm:text-[29px]">
            到店更快，交付更稳
          </h2>
          <p className="mt-0 max-w-[430px] text-[15px] text-[var(--muted)] max-sm:mt-3.5">
            门店位于主干道旁，设有独立等候区和两条施工工位。预约车辆优先排队，雨天可改期。
          </p>

          <div className="grid gap-4">
            <InfoRow title="营业时间" value="周一至周日 09:30 - 21:00" first />
            <InfoRow title="门店地址" value="江苏省南京市秦淮区大明路276号" />
            <InfoRow title="适合车型" value="轿车、SUV、MPV、新能源车、性能车" />
          </div>

          <div className="mt-[26px] grid grid-cols-[1.1fr_0.9fr] gap-4 max-sm:grid-cols-1" aria-label="洗护实景">
            <img
              className="h-[190px] rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1761312834165-c27d037b3a6b?auto=format&fit=crop&fm=jpg&q=72&w=700"
              alt="覆盖泡沫的车辆外观"
            />
            <img
              className="h-[190px] rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1746079074447-73c1bc30bf70?auto=format&fit=crop&fm=jpg&q=72&w=700"
              alt="汽车内饰蒸汽清洁"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ title, value, first = false }: { title: string; value: string; first?: boolean }) {
  return (
    <div
      className={[
        "grid grid-cols-[120px_1fr] gap-4 border-b border-[var(--line)] py-5 max-sm:grid-cols-1 max-sm:gap-2",
        first ? "border-t" : "",
      ].join(" ")}
    >
      <span className="text-sm font-extrabold text-[var(--muted)]">{title}</span>
      <p className="m-0 text-lg font-extrabold">{value}</p>
    </div>
  );
}

function MapCard() {
  return (
    <div className="shop-map" role="group" aria-label="店铺地图：江苏省南京市秦淮区大明路276号">
      <div className="map-block one" aria-hidden="true" />
      <div className="map-block two" aria-hidden="true" />
      <div className="map-block three" aria-hidden="true" />
      <div className="map-block four" aria-hidden="true" />
      <div className="map-road side" aria-hidden="true" />
      <div className="map-road main" aria-hidden="true" />
      <div className="map-road inner" aria-hidden="true" />
      <span className="map-label place landmark-one">东门</span>
      <span className="map-label place landmark-two">汽车维修中心</span>
      <span className="map-label place landmark-three">MI 大明路店</span>
      <span className="map-label place landmark-four">东风村</span>
      <span className="map-label shop-name">热心网友洗护中心</span>
      <span className="map-label road-name">大明路</span>
      <span className="map-poi blue poi-one" aria-hidden="true">
        <span>P</span>
      </span>
      <span className="map-poi blue poi-two" aria-hidden="true">
        <span>车</span>
      </span>
      <span className="map-poi purple poi-three" aria-hidden="true">
        <span>店</span>
      </span>
      <span className="map-poi orange poi-four" aria-hidden="true">
        <span>食</span>
      </span>
      <span className="brand-pin">
        <img src="/assets/logo.svg" alt="热心网友洗护中心 logo" />
      </span>
      <div className="absolute bottom-6 left-6 right-6 z-[5] flex items-center justify-between gap-4 rounded-lg border border-white/80 bg-white/90 px-[18px] py-4 shadow-[0_16px_36px_rgba(17,24,39,0.12)] backdrop-blur-[10px] max-sm:bottom-3.5 max-sm:left-3.5 max-sm:right-3.5 max-sm:grid max-sm:p-3.5">
        <div>
          <strong className="block text-[17px] leading-[1.3] text-[var(--ink)]">江苏省南京市秦淮区大明路276号</strong>
          <span className="mt-0.5 block text-[13px] font-extrabold text-[var(--muted)]">热心网友洗护中心定位点</span>
        </div>
        <a
          className="shrink-0 rounded-lg bg-[var(--teal)] px-3 py-2 text-[13px] font-black text-white max-sm:w-full max-sm:text-center"
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          打开地图
        </a>
      </div>
    </div>
  );
}
