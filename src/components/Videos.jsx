import { Link } from "react-router-dom";
import Video from "./Video";
import useVideos from "../hooks/useVideos";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";

const Videos = () => {
  const [page, setPage] = useState(0); // Start at 0 for the first page
  const { loading, err, videos, hasMore } = useVideos(page);
  const [showVideos, setShowVideos] = useState([]); // State to hold videos with fade-in effect

  const fetchMoreVideos = () => {
    if (hasMore) {
      setTimeout(() => {
        setPage((prevPage) => prevPage + 1); // Increment the page for the next fetch
      }, 1000); // Wait for 300ms before fetching more videos
    }
  };

  // Update showVideos when videos change
  useEffect(() => {
    if (videos.length > 0) {
      setShowVideos((prev) => [...prev, ...videos]);
    }
  }, [videos]);

  return (
    <div className="videos">
      {loading && (
        <div>
          Video is loading! <br />
          Please wait...
        </div>
      )}

      {err && <div>There was an error loading videos. Please try again later.</div>}

      {showVideos.length > 0 && (
        <InfiniteScroll
          dataLength={showVideos.length} // Length of videos
          next={fetchMoreVideos} // Function to call when loading more
          hasMore={hasMore} // Determine if there's more to load
          loader={<h4>Loading more videos...</h4>}
        >
          {showVideos.map((video) => (
            <Link to="/" key={video.youtubeID}>
              <div className="fade-in">
                {" "}
                {/* Apply fade-in class here */}
                <Video title={video.title} id={video.youtubeID} noq={video.noq} />
              </div>
            </Link>
          ))}
        </InfiniteScroll>
      )}

      {showVideos.length === 0 && !loading && !err && <div>No videos found.</div>}
    </div>
  );
};

export default Videos;
