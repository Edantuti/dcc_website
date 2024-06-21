import Image from "next/image";
import UnderLine from "@/public/underline.svg";
import Link from "next/link";
import { Suspense } from "react";
import { getEvents } from "./actions";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:'Events - Developers & Coders Club'
}

export default async () => {
  const state = await getEvents();
  return (
    <main className="min-h-screen">
      <section className="text-white py-24 space-y-10">
        <div className="relative">
          <h2 className="xl:text-5xl md:text-3xl absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Events
          </h2>
          <Image src={UnderLine} alt={"underline Image"} className="w-full" />
        </div>
        <h3 className="text-3xl text-center">Past Events</h3>
        <Suspense fallback={<p className="text-center">Loading...</p>}>
          {state.map((data: any) => {
            return (
              <article
                className=" p-10 rounded w-fit lg:flex lg:space-y-0 space-y-10 gap-10 mx-auto items-center justify-between bg-slate-900"
                key={data._id}
              >
                <Image
                  src={data.imageURL}
                  alt="Event photo"
                  className="w-96 aspect-auto mx-auto"
                  width={720}
                  height={1280}
                />
                <div className="flex flex-col space-y-5">
                  <h4 className="text-4xl w-[30rem]">{data.heading}</h4>
                  <p className="w-[30rem]">{data.description}</p>
                  <div className="font-semibold">
                    <time dateTime={data.date}>
                      <p>{new Date(data.date).toDateString()}</p>
                    </time>
                    <p>{data.location}</p>
                    <p>{data.time}</p>
                  </div>
                  <Link href={data.link} title="Know More" target="_blank" rel="noopener" className="font-semibold border w-fit px-4 py-2 rounded hover:bg-slate-950 transition-colors"> Know more</Link>
                </div>
              </article>
            );
          })}
        </Suspense>
        <article>

        </article>
      </section>
    </main>
  );
};
