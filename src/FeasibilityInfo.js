import React, { useEffect, useState } from 'react'
import { Button } from "react-bootstrap"
import FormHeader from './FormHeader';
import { useNavigate } from "react-router-dom";
import { questionsList } from "./QuestionsList"

function FeasibilityInfo() {


    let navigate = useNavigate();

    let [answers, setAnswers] = useState([]);

    let [loading, setLoading] = useState(false);


    let [questions, setQuestions] = useState(questionsList);

    let [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {

        // console.log(answers)

    }, [answers])

    function onSelectAnswerChange(questionIndex, question, item) {

        let filteredQuestions = answers.filter((item) => item.question !== questionIndex);

        setAnswers([...filteredQuestions, { questionIndex: questionIndex, question: question, answer: item }])
    }

    function onCheckBoxAnswerSelected(questionIndex, question, item, answerText) {

        let currentAnswer = answers.find((item) => item.questionIndex === questionIndex);

        console.log(currentAnswer);

        let filteredQuestions = answers.filter((item) => item.questionIndex !== questionIndex);

        let result = []

        let filteredAnswer = []

        if (currentAnswer === undefined) {
            filteredAnswer = [answerText];
            result = [...filteredQuestions, { questionIndex: questionIndex, question: question, answer: filteredAnswer }];
        } else {
            filteredAnswer = [...currentAnswer.answer, answerText];
            result = [...filteredQuestions, { questionIndex: questionIndex, question: question, answer: filteredAnswer }];
        }

        setAnswers(result)

    }

    function onTextInputChanged(text, question, questionIndex) {

        let filteredQuestions = answers.filter((item) => item.questionIndex !== questionIndex);

        console.log(questionIndex);

        let result = [...filteredQuestions, { questionIndex: questionIndex, question: question, answer: text }]

        setAnswers(result)

    }


    function getSelectInput(question, answer, questionIndex) {


        return <div className="form-input">
            <select class="form-select" aria-label="Default select example" onChange={(item) => onSelectAnswerChange(questionIndex, question, item.target.value)}>
                <option index={0} selected>{question}</option>
                {answer.map((option, index) => <option value={index}>{option.trim()}</option>)}
            </select>
        </div>
    }

    function getCheckInput(question, answer, questionIndex) {

        return <>
            <div style={{ textAlign: "right", paddingRight: 15, color: "#0497cc", fontSize: 24, }}><label>{question}</label></div>
            {answer.map((option, index) => <div className="form-check form-input">
                <input className="form-check-input" type="checkbox" onChange={() => onCheckBoxAnswerSelected(questionIndex, question, index, option)} />
                <label className='check-label'>
                    {option}
                </label>
            </div>)}
        </>

    }

    function getTextInput(question, answer, questionIndex) {

        return <div className="form-input">
            <label style={{ padding: 10, color: "#00A3E0", fontSize: 18, }}>{question}</label>
            <input className="form-control" type="text" onChange={(item) => onTextInputChanged(item.target.value, question, questionIndex)} />
        </div>

    }

    function getTextareaInput(question, answer, questionIndex) {

        return <div className="form-input">
            <label style={{ padding: 10, color: "#00A3E0", fontSize: 18, }}>{question}</label>
            <textarea style={{ width: "100%" }} className="form-control" type="text" onChange={(item) => onTextInputChanged(item.target.value, question, questionIndex)} />
        </div>

    }

    function submitInfo() {

        setLoading(true);

        let fullText = "";

        answers.map(({ question, answer }) => {

            let answerText = answer

            if (Array.isArray(answer)) {

                answerText = "";

                answer.map((answerItem) => {
                    answerText += answerItem + " و ";
                })

            }

            fullText += question + " هي " + answerText + "أصنع لي دراسة جدى"

        })

        console.log(fullText);

        let body = JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: fullText }],
            temperature: 1,
        });

        let headers = {
            Authorization: "Bearer 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",
            'Content-Type': 'application/json'
        };

        fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST", body,
            headers: headers,
        })
            .then((response) => {
                return response.json()
            }).then((answer) => {
                console.log("inside then");

                setLoading(false);

                navigate("/result/", { state: { message: answer.choices[0].message.content } });

            });


    }


    return (
        <div style={{ textAlign: "center" }}>
            <header className="App-header">
                <div>
                    <Button variant="success" className="homeButton" onClick={() => navigate("/")}>
                        الرئيسة
                    </Button>
                </div>
                <div className='headerTitle'>معلومات المشروع</div>
            </header>

            <form className='infoForm col-sm-10 col-md-10 col-lg-10'>
                <fieldset>
                    {/* <div className="mb-3 form-input">
                        <input type="text" className="form-control" placeholder="الاسم" />
                    </div> */}

                    <FormHeader currentPage={currentPage} />

                    {questions.map(({ question, answers, page, type }, index) => {
                        // console.log(question, answers)
                        if (page === currentPage) {

                            if (type === "select") {
                                return getSelectInput(question, answers, index)
                            } else if (type === "checkBox") {
                                return getCheckInput(question, answers, index)
                            } else if (type === "textarea") {
                                return getTextareaInput(question, answers, index)
                            } else {
                                return getTextInput(question, answers, index)
                            }

                        }
                    })}

                    <div className="formBottom">

                        {(currentPage > 1) &&
                            <Button variant="primary" className="nextButton" onClick={() => setCurrentPage(currentPage - 1)}>
                                السابق
                            </Button>
                        }

                        {
                            (currentPage < 4) ?
                                <Button variant="success" className="nextButton" onClick={() => setCurrentPage(currentPage + 1)}>
                                    التالي
                                </Button>
                                :
                                <Button variant="success" className="nextButton" onClick={() => submitInfo()}>
                                    إجراء دراسة الجدوى
                                </Button>
                        }

                        {loading &&
                            <div className="spinner" />
                        }


                    </div>

                </fieldset>
            </form>

        </div>
    )
}

export default FeasibilityInfo