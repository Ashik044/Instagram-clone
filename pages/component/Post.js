import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="">
      {/* Header */}
      <div className="flex items-center pr-5 pl-4 pt-1 pb-1">
        <img
          src={userImg}
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold ">{username}</p>
        <DotsHorizontalIcon className="h-5 " />
      </div>

      {/* img */}
      <img src={img} alt="" />

      {/* button */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>

        <BookmarkIcon className="btn" />
      </div>

      {/* caption */}
      <p className="px-5 pt-4 pb-4 truncate ">
        <span className="font-bold mr-1">{username} </span>
        <span className="text-gray-500"> {caption}</span>
      </p>

      {/* comments */}

      {/* imput box */}
      <form className="flex items-center px-4 pb-4">
        <EmojiHappyIcon className="w-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none px-2 text-gray-500"
        />
        <button className="font-bold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
