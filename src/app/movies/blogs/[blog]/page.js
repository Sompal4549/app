async function getData(params) {
  const res = await fetch(`https://api.vercel.app/blog/${params.blog}`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Error while fetching data");
  }
  return res.json();
}
export default async function Page(props) {
  const params = await props.params;
  const blogData = await getData(params);
  return (
    <div>
      <p>Params let console it</p>
      {params.blog}
      <h2>{blogData?.title}</h2>
      <p color="#fff">{blogData?.content}</p>
      <address>{blogData?.author}</address>
    </div>
  );
}
export async function generateStaticParams() {
  const blogs = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json()
  );
  return blogs.map((blog) => ({
    slug: blog.id,
  }));
}
