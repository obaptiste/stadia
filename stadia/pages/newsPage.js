import useSwr from 'swr'
import Link from 'next/link'
import NewsItem from '../components/NewsItem'; 

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/newsItems', fetcher)

  if (error) return <div>Failed to load newsItems</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((newsItem, i) => (
        <NewsItem key={i} newsItem={newsItem} />
      ))}
    </ul>
  )
}