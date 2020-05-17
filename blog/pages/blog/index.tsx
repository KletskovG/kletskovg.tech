import Link from 'next/link';

function BlogPage() {
  return (
    <div>
      <div> Blog page works </div>
      <Link href="/blog/2020">
        2020
      </Link>
    </div>
  )
}

export default BlogPage;
