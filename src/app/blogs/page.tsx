import { getEntries } from "@/utils/contentful";
import { findAsset } from "@/utils/findAsset";

import Link from "next/link";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Blogs = async () => {
  
  const blogs = await getEntries();
  
  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-2 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.items.map((blog, index) => (
            <Link href={"blogs/" + blog.fields.slug} key={index}>
              <Card 
                image={`https:${
                  findAsset(blog.fields.thumbnail.sys.id, blogs.includes.Asset)
                    ?.fields.file.url
                }`}
                title={blog.fields.title}
                description={blog.fields.description}
                author={blog.fields.author}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
