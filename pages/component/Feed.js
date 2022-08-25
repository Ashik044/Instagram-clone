import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-3xl xl:grid-cols-3 xl:max-w-3xl mx-auto mt-4">
      <section className="col-span-2 sm:flex sm:flex-col justify-self-center">
        {/* Stories */}
        <Stories className="" />
        {/* Posts */}
        <div className="">
          <Posts className="" />
          <Posts className="" />
          <Posts className="" />
          <Posts className="" />
          <Posts className="" />
        </div>
      </section>

      <section className="">
        <div className="sticky top-24">
          {/* Mini profile */}
          <MiniProfile />
          {/* Suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
}

export default Feed;
