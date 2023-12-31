"use client";

import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export const dynamic = "force-dynamic";
async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <div className="flex justify-center items-center"></div>
      ),
    },
  };

  return (
    <div className="flex flex-col text-black items-center min-h-screen bg-aboutMe">
      {/* Removed the 'h-screen' class and added 'min-h-screen' to ensure the container takes at least full height */}
      <div className="bg-white w-full max-w-3xl text-xl mx-4 md:mx-auto flex flex-col justify-center items-center">
        {/* Added 'max-w-3xl' to limit the content width on large screens and mx-4 md:mx-auto for horizontal margins */}
        <div className="font-bold text-5xl m-4">{data.title}</div>
        {/* Added margin-top to create spacing between the Y-axis and the bold header */}
        <div className="font-bold mt-4">{data.overview}</div>
        <div className="flex flex-col justify-center items-center text-xl mt-4">
          <Image
            className="rounded-xl"
            src={urlFor(data.image).url()}
            alt="logos"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={urlFor(data.image).width(24).height(24).blur(10).url()}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
          <div className="w-full px-4 mt-10 text-left border-2 border-gray-100 rounded-xl bg-white p-4 shadow-md text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700">
            {/* Added a wrapper with padding to keep the text within a reasonable width on small screens */}

            <PortableText
              value={data.content}
              components={PortableTextComponent}
            />
          </div>
        </div>
        <Link href="/">
          <button className="mt-2 text-md rounded-xl bg-gray-300 p-2 hover:opacity-70">
            <FaHome />
          </button>
        </Link>
      </div>
    </div>
  );
}
