import { useEffect, useState } from "react";
import { getDatabase, ref, query, orderByKey, get, startAt, limitToFirst } from "firebase/database";

const useVideos = (page) => {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(videosRef, orderByKey(), startAt("" + page * 8), limitToFirst(8));

      try {
        setErr(false);
        setLoading(true);
        const snapshot = await get(videoQuery);
        setLoading(false);

        if (snapshot.exists()) {
          const fetchedVideos = Object.values(snapshot.val());
          setVideos((prevVideos) => [...prevVideos, ...fetchedVideos]);

          // If fewer videos were fetched than the limit, there are no more videos
          if (fetchedVideos.length < 8) {
            setHasMore(false);
          }
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false);
        setErr(true);
      }
    }

    fetchVideos();
  }, [page]);

  return {
    loading,
    err,
    videos,
    hasMore,
  };
};

export default useVideos;
