import SearchForm from "@/components/SearchForm";
import StartUpCard, { StartUpTypeCard } from "@/components/StartUpCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = await client.fetch(STARTUPS_QUERY)
  console.log(JSON.stringify(posts, null, 2 ))
  return (
    <>
      <section className="pink_container " style={{ background: "#EE2B69" }}>
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `search results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartUpTypeCard, index: number) => (
              <StartUpCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-resilts">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
