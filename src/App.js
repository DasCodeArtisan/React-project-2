
import React from "react";
import Questions from "./Components/Questions";

const questions=[
    {
        id:1,
        title:"Is this a test?",
        info:"lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet",
    }, 
     {
        id:2,
        title:"Is this a final test?",
        info:"lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet",
    },  
    {
        id:3,
        title:"what is the result?",
        info:"lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet",
    }
];


function App() {
    return  (
        <>
        <h1>Project 2: FAQ/Accordion</h1>
        <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="questions">
                {questions.map((question) =>(
                    <Questions  key={question.id} question={question}/>
                )
                )}
            </div>
        </div>
        </>
    )
}

export default App;