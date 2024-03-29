import React from "react";
import { getEntriesBySlug } from "@/utils/contentful";
import Image from "next/image";
import { findAsset } from "@/utils/findAsset";
import { BLOCKS } from "@contentful/rich-text-types";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import Navbar from "@/app/components/Navbar";
import { BlogDetail } from "@/types/blog.type";

const BlogDetail = async (params: BlogDetail) => {
  const { slug } = params.params;
  const blogs = await getEntriesBySlug(slug);
  const blog = blogs.items[0];
  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    },
  };
  return (
    <>
      <Navbar />
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto mt-6">
        <div className="max-w-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="grow">
                <div className="flex justify-between items-center gap-x-2">
                  <div>
                    <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                      <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {blog.fields.author}
                        </span>
                      </div>
                    </div>

                    <ul className="text-xs text-gray-500">
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                        {blog.fields.createdAt}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        className="size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                      Tweet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 md:space-y-8">
            <figure>
              <Image
                className="w-full object-cover rounded-xl"
                width={300}
                height={300}
                src={`https:${
                  findAsset(blog.fields.thumbnail.sys.id, blogs.includes.Asset)
                    ?.fields.file.url
                }`}
                alt={blog.fields.title}
              />
            </figure>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
                {blog?.fields.title}
              </h2>

              <div className="text-lg text-gray-800 dark:text-gray-200">
                {documentToReactComponents(blog.fields.content, options)}
              </div>
            </div>

            <div>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                {blog.fields.category}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
