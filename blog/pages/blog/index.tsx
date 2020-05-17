import Link from 'next/link';

function BlogPage() {
  return (
    <div>
      <h3> Blog posts </h3>
      <h4> 2020 </h4>
      <ul>
        <Link href="/blog/2020">
          2020
        </Link>
      </ul>
    </div>
  )
}

export default BlogPage;
