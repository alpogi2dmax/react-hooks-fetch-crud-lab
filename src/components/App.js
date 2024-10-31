import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions ] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(r => r.json())
      .then(data => setQuestions(data))
  }, [])

  function handleAddQuestions(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function handleDeleteQuestions(deleteQuestion) {
    console.log(deleteQuestion)
    setQuestions(questions.filter((question => question.id !== deleteQuestion.id)))
  }
  




  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestions={handleAddQuestions}/> : <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestions}/>}
    </main>
  );
}

export default App;
