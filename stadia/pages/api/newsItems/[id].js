import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function NewsItem() {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/newsItems/${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load news item</div>
  if (!data) return <div>Loading...</div>

  return <div><img src={`${data.imgSrc}`} alt={data.name}/> <p>{data.content}</p></div>
}