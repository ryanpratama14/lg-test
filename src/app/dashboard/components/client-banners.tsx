"use client";

import Img from "@/components/html/img";
import { Icon } from "@iconify-icon/react";
import type { StaticImageData } from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = { images: { id: number; src: StaticImageData }[] };

export default function ClientBanners({ images }: Props) {
  return (
    <section className="row-span-3">
      <Swiper className="relative size-full" slidesPerView={1} loop navigation={{ nextEl: ".nav-next", prevEl: ".nav-prev" }} modules={[Navigation]}>
        {images.map((e) => {
          return (
            <SwiperSlide key={e.id} className="group">
              <Img src={e.src} className="size-full object-cover rounded-3xl" alt="" />
            </SwiperSlide>
          );
        })}

        <section className="absolute z-10 flex gap-3 top-8 right-6">
          <button
            type="button"
            className="nav-prev flex items-center justify-center size-10 4k:size-20 p-1 rounded-full shadow bg-white button-shadow-nav"
          >
            <Icon icon="weui:arrow-filled" rotate={2} className="text-[#636C78] text-3xl 4k:text-6xl" />
          </button>
          <button
            type="button"
            className="nav-next flex items-center justify-center size-10 4k:size-20 p-1 rounded-full shadow bg-white button-shadow-nav"
          >
            <Icon icon="weui:arrow-filled" className="text-[#636C78] text-3xl 4k:text-6xl" />
          </button>
        </section>
      </Swiper>
    </section>
  );
}
