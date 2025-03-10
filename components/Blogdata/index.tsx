import Link from 'next/link'
import Image from 'next/image'
import parse from 'html-react-parser'
const BlogCard = ({ image, index, date, title, linkText, linkHref, featured }) => (
  <>
    <div key={index} className="border rounded-lg overflow-hidden shadow-sm p-0 md:h-[350px] flex">
      <Link href={`articles/${linkHref} `} className="w-full h-full flex">
        <Image src={image || '/No_Image.jpg'} alt="" className="object-cover" width={1000} height={1000} />
      </Link>
    </div>
    <div className="border rounded-lg shadow-sm p-6 flex flex-col justify-between md:h-[350px] mb-10">
      <p className="text-sm text-gray-500 hidden">{date}</p>
      <div className="flex flex-col justify-end h-full">
        {featured && (
          <span className="inline-block bg-black text-white w-fit text-xs px-3 py-1  rounded-full uppercase font-bold tracking-wider mb-4 uppercase">
            Featured
          </span>
        )}
        <h3
          className="text-[24px] max-[1028px]:text-[19px] font-normal mb-5 text-gray-900 mt-2 leading-normal"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {/* <div className="text-gray-700 text-[14px] mb-9 leading-[16.94px] mt-2 line-clamp-5">{parse(content || '')}</div> */}
        <Link
          href={`articles/${linkHref} `}
          className="flex items-center gap-2.5 w-fit mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300"
        >
          {linkText}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
            <g
              fill="none"
              fillRule="evenodd"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M1 13 13 1M4 1h9v9"></path>
            </g>
          </svg>
        </Link>
      </div>
    </div>
  </>
)

export default BlogCard
