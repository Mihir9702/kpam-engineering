export default function BlogText() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="flex flex-col w-fit mx-auto">
        <h1 className="text-4xl font-semibold text-center text-kpam-blue">
          Discover our latest posts
        </h1>
        <h2 className="text-xl text-center my-2">
          We always have something to share!
        </h2>

        <h3 className="text-center my-12">
          Hmm... it seems like there are no posts currently. <br /> 
          Come back soon when there are more posts!
        </h3>

        {/* <div className="flex flex-col gap-4 p-4 my-8">
          {[post1, post2, post1, post2, post1, post2].map((post, i) => {
            return (
              <div
                key={i}
                className="bg-white hover:bg-gray-100 cursor-pointer shadow-md rounded-md flex p-2 gap-4 items-center"
              >
                <Image
                  src={post.src}
                  alt="blog-image"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h1 className="font-bold text-kpam-blue">
                    Lorem ipsum dolor sit amet.
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, quas?
                  </p>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
