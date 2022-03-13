import { defaultConfig } from 'next/dist/server/config-shared'
import Link from "next/link";

export default function NewsItem({ newsItem }) {
  return (
    <li>
      <Link href="/newsItem/[id]" as={`/newsItem/${newsItem.id}`}>
        <a>{newsItem.name}</a>
      </Link>
      <img src={`${newsItem.imgSrc}`}/>
    </li>
  );
}