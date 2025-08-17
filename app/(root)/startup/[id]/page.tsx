import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'
import { formatDate } from "@/lib/utils";

import Image from "next/image";
import { Suspense } from "react";
import Link from 'next/link';
import markdownit from "markdown-it";
import { Skeleton } from '@/components/ui/skeleton';
import View from '@/components/View';

const md = markdownit();

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
  if (!post) return notFound();
  

    const parsedContent = md.render(post?.pitch || "");

    return (
      <>
        <section className="w-full min-h-[230px] bg-yellow-500 bg-[repeating-linear-gradient(to_right,white,white_0px,transparent_1px,transparent_60px)] flex justify-center items-center flex-col py-10 px-6">
        <p className="bg-[#EE2B69] px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative before:content-[''] before:absolute before:top-2 before:left-2 before:border-t-[10px] before:border-t-black before:border-r-[10px] before:border-r-transparent after:content-[''] after:absolute after:bottom-2 after:right-2 after:border-b-[10px] after:border-b-black after:border-l-[10px] after:border-l-transparent">
            {formatDate(post?._createdAt)}</p>

        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">{post.title}</h1>
        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words !max-w-5xl">{post.description}</p>
      </section>
      

        <section className="px-6 py-10 max-w-3xl mx-auto">
        <Image
          src={post.image}
          alt="thumbnail"
          width={800}
          height={450}
          className="w-full h-auto rounded-xl object-cover"
          priority
        />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex justify-between items-center gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author?.image || "/default-avatar.jpeg"}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="font-medium text-[20px] text-black">{post.author?.name}</p>
                <p className="font-medium text-[16px] text-black !text-black-300">
                  @{post.author?.username}
                </p>
              </div>
            </Link>

            <p className="font-medium text-[16px] bg-yellow-100 px-4 py-2 rounded-full">{post.category}</p>
          </div>

          <h3 className="text-[30px] font-bold text-black">Pitch Details</h3>
          {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="text-black-100 text-sm font-normal">No details provided</p>
          )}
        </div>

        <hr className="border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto" />

        {/* {editorPosts?.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-30-semibold">Editor Picks</p>

            <ul className="mt-7 card_grid-sm">
              {editorPosts.map((post: StartupTypeCard, i: number) => (
                <StartupCard key={i} post={post} />
              ))}
            </ul>
          </div>
        )} */}

        <Suspense fallback={<Skeleton className=" bg-zinc-400 h-10 w-24 rounded-lg fixed bottom-3 right-3" />}>
          <View id={id} />
        </Suspense>
      </section>




      </>
  )
}

export default page