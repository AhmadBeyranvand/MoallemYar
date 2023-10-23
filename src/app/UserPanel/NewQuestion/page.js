<<<<<<< HEAD
import PreviewExam from "@/components/PreviewExam"
import QuestionSubject from "./QuestionSubject"

const NewQuestion = ()=>{
    return (
        <>
        <PreviewExam />
        <QuestionSubject/>
        </>
    )
}

export default NewQuestion
=======
import PreviewExam from "@/components/PreviewExam";
import SortableTestAnswer from "@/components/SortableTestAnswer/SortableTestAnswerArea";
const NewQuestion = () => {
  return (
    <div className="flex">
      <SortableTestAnswer />
      <PreviewExam />
    </div>
  );
};

export default NewQuestion;
>>>>>>> dc737918007aad31424c2bbe4e3be03cfea15254
