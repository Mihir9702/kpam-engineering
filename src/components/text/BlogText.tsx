import post1 from "@/../public/post1.png";
import post2 from "@/../public/post2.png";
import Card from "../Card"

export default function BlogText() {
  const title = "Lorem ipsum dolor sit amet."
  const content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, distinctio."
  return (
    <section className="bg-gray-100 py-8">
      <div className="flex flex-col w-fit mx-auto">
        <h1 className="text-4xl font-semibold text-center text-kpam-blue">
          Discover our latest posts
        </h1>
        <h2 className="text-xl text-center">
          We always have something to share!
        </h2>

        <div className="flex gap-8 my-8">
          {[post1, post2, post1].map((post, i) => {
            return <Card key={i} title={title} content={content} src={post} href="#" />
          })}
        </div>
      </div>
    </section>
  );
}
