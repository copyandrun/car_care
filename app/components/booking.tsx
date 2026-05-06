"use client";

import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";

export function Booking() {
  const [note, setNote] = useState("");
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const date = String(data.get("date") ?? "");
    const time = String(data.get("time") ?? "");

    setNote(`${name}，已记录 ${date} ${time} 的「${service}」预约，我们会尽快电话确认。`);
    form.reset();
  }

  return (
    <section className="bg-[#edf3f7] py-[82px] pb-24 max-sm:py-[58px]" id="booking">
      <div className="mx-auto grid w-[min(1160px,calc(100%_-_40px))] grid-cols-[0.9fr_1.1fr] items-start gap-[34px] max-[980px]:grid-cols-1 max-sm:w-[min(100%_-_28px,1160px)]">
        <div className="pt-2.5">
          <p className="mb-2 text-[13px] font-black text-[var(--teal-dark)]">BOOKING</p>
          <h2 className="mb-[18px] text-4xl font-extrabold leading-[1.15] tracking-normal max-sm:text-[29px]">
            预约你的洗护时段
          </h2>
          <p className="text-[var(--muted)]">提交后门店会通过电话确认车型、污渍情况和到店时间。急单建议直接拨打门店电话。</p>

          <div className="mt-[30px] grid gap-3.5">
            <ContactItem label="电话" value={<a href="tel:400-886-0199">400-886-0199</a>} />
            <ContactItem label="微信" value={<strong>RxwyDetailing</strong>} />
            <ContactItem label="预计停留" value={<strong>45 分钟 - 1 天</strong>} />
          </div>
        </div>

        <form
          className="grid gap-4 rounded-lg border border-[var(--line)] bg-white p-7 shadow-[var(--shadow)] max-sm:p-5"
          id="bookingForm"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <FormField label="姓名" htmlFor="booking-name">
              <input id="booking-name" type="text" name="name" placeholder="例如：陈先生" required />
            </FormField>
            <FormField label="手机" htmlFor="booking-phone">
              <input id="booking-phone" type="tel" name="phone" placeholder="用于确认预约" required />
            </FormField>
            <FormField label="车型" htmlFor="booking-car">
              <select id="booking-car" name="car" required defaultValue="">
                <option value="">请选择车型</option>
                <option>轿车</option>
                <option>SUV</option>
                <option>MPV / 商务车</option>
                <option>新能源车</option>
              </select>
            </FormField>
            <FormField label="预约项目" htmlFor="booking-service">
              <select id="booking-service" name="service" required defaultValue="">
                <option value="">请选择项目</option>
                <option>通勤精洗</option>
                <option>全车焕新</option>
                <option>热心网友镀膜</option>
                <option>到店检查后推荐</option>
              </select>
            </FormField>
            <FormField label="到店日期" htmlFor="booking-date">
              <input id="booking-date" type="date" name="date" min={today} required />
            </FormField>
            <FormField label="到店时段" htmlFor="booking-time">
              <select id="booking-time" name="time" required defaultValue="">
                <option value="">请选择时段</option>
                <option>09:30 - 11:30</option>
                <option>12:00 - 14:00</option>
                <option>14:30 - 17:00</option>
                <option>18:00 - 20:30</option>
              </select>
            </FormField>
            <div className="col-span-full">
              <FormField label="备注" htmlFor="booking-message">
                <textarea id="booking-message" name="message" placeholder="可填写车身污渍、内饰异味、停车位置等信息" />
              </FormField>
            </div>
          </div>
          <button
            className="inline-flex min-h-[46px] items-center justify-center rounded-lg border border-transparent bg-[var(--teal)] px-5 py-3 font-extrabold text-white shadow-[0_14px_30px_rgba(0,155,142,0.26)] transition hover:-translate-y-0.5 hover:bg-[var(--teal-dark)]"
            type="submit"
          >
            提交预约
          </button>
          <p className="min-h-6 text-sm font-extrabold text-[var(--teal-dark)]" aria-live="polite">
            {note}
          </p>
        </form>
      </div>
    </section>
  );
}

function ContactItem({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[rgba(17,24,39,0.13)] py-4 font-extrabold">
      <span className="text-sm font-bold text-[var(--muted)]">{label}</span>
      {value}
    </div>
  );
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-extrabold text-[#343b48]" htmlFor={htmlFor}>
      {label}
      {children}
    </label>
  );
}
