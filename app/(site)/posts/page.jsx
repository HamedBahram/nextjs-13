import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/mdx'

const Page = async () => {
  const posts = await getAllPostsMeta()

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>All Posts</h1>
        <div className='flex gap-6 mt-6'>
          {posts?.map(post => (
            <Link
              href={`posts/${post.slug}`}
              key={post?.title}
              className='p-8 rounded-md shadow-md'
            >
              <h3 className='font-semibold'>{post.title}</h3>
              <p className='text-sm'>{post.author}</p>
              <time className='text-[12px] text-gray-400'>
                {post.publishDate}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page
