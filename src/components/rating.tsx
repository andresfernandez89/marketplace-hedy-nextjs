export default function Rating({ rate }: { rate?: number }) {
  const starsArray: number[] = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-row font-normal text-gray-700 dark:text-gray-400">
      <p className="mr-1 text-base">
        {typeof rate === "number" && rate > 0 ? rate : ""}
      </p>
      <div className="flex items-center">
        {starsArray.map((star) => (
          <svg
            key={star}
            className={`ms-1 h-4 w-4 ${
              typeof rate === "number" && rate >= star
                ? "text-[#3b82f6]"
                : "stroke-[#94a3b8] text-[#020817]"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
    </div>
  );
}
