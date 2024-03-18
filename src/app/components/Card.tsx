import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  author: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, author }) => {
  return (
    <div>
      <div className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <div className="relative w-full h-[200px] mx-auto">
          <Image
            className="w-full rounded-xl object-cover"
            fill
            src={image}
            alt={title}
          />
        </div>
        <div className="my-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
            {title}
          </h3>
          <p className="mt-5 text-gray-600 dark:text-gray-400 line-clamp-3">{description}</p>
        </div>
        <div className="mt-auto flex items-center gap-x-3">
          <div>
            <h5 className="text-sm text-gray-800 dark:text-gray-200">
              {author}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;