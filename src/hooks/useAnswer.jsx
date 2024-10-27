import { useEffect, useState } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

const useAnswers = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const answerRef = ref(db, "quiz/" + videoID + "/answers");
      const answerQuery = query(answerRef, orderByKey());

      try {
        setErr(false);
        setLoading(true);
        const snapshot = await get(answerQuery);
        setLoading(false);

        if (snapshot.exists()) {
          const fetchedVideos = Object.values(snapshot.val());
          setAnswers((prevAnswers) => [...prevAnswers, ...fetchedVideos]);
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
    answers,
  };
};

export default useAnswers;
