import { useEffect, useState } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

const useQuestions = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setErr(false);
        setLoading(true);
        const snapshot = await get(quizQuery);
        setLoading(false);

        if (snapshot.exists()) {
          const fetchedVideos = Object.values(snapshot.val());
          setQuestions((prevQuestions) => [...prevQuestions, ...fetchedVideos]);
        }
      } catch (error) {
        console.error("Error fetching Questions:", error);
        setLoading(false);
        setErr(true);
      }
    }

    fetchQuestions();
  }, []);

  return {
    loading,
    err,
    questions,
  };
};

export default useQuestions;
