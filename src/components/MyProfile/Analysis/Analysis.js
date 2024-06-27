import React, { useState, useEffect } from "react";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";
import Chart from "../../charts/Chart";
import "./analysis.css";

export default function Analysis() {
    const [filters, setFilters] = useState({ startDate: "", endDate: "" });

    const onChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    // Fetching tags of asked questions
    const [questions, setQuestions] = useState([]);
    const [Tags, setTags] = useState([]);
    const [count, setCount] = useState([]);
    const [queLen, setQueLen] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/api/question/fetchUserQuestions/${localStorage.getItem("username")}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setQuestions(data));
    }, []);

    useEffect(() => {
        const freqOfTags = {};
        let cnt = 0;

        if (filters.startDate && filters.endDate) {
            cnt = questions.filter((question) => {
                const questionDate = question.date.substring(0, 10);
                return questionDate >= filters.startDate && questionDate <= filters.endDate;
            }).length;

            questions.forEach((question) => {
                const questionDate = question.date.substring(0, 10);
                if (questionDate >= filters.startDate && questionDate <= filters.endDate) {
                    question.tags.split(" ").forEach((tag) => {
                        freqOfTags[tag] = (freqOfTags[tag] || 0) + 1;
                    });
                }
            });
        } else {
            questions.forEach((question) => {
                question.tags.split(" ").forEach((tag) => {
                    freqOfTags[tag] = (freqOfTags[tag] || 0) + 1;
                });
            });
            cnt = questions.length;
        }

        setQueLen(cnt);

        const tags = Object.keys(freqOfTags);
        const counts = Object.values(freqOfTags);
        setTags(tags);
        setCount(counts);
    }, [questions, filters]);

    // Fetching tags of accepted answered questions
    const [acceptedansweredQues, setAcceptedAnsweredQues] = useState([]);
    const [AcAnsTags, setAcAnsTags] = useState([]);
    const [AcAnsCount, setAcAnsCount] = useState([]);
    const [actAnsLen, setActAnsLen] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/api/answer/fetchUserAcceptedAnsweredQuestions/${localStorage.getItem("username")}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setAcceptedAnsweredQues(data));
    }, []);

    useEffect(() => {
        const acAnsFreqOfTags = {};
        let cnt = 0;

        if (filters.startDate && filters.endDate) {
            cnt = acceptedansweredQues.filter((ques) => {
                const tags = ques[0].tags;
                const quesDate = ques[0].date.substring(0, 10);
                return quesDate >= filters.startDate && quesDate <= filters.endDate;
            }).length;

            acceptedansweredQues.forEach((ques) => {
                const tags = ques[0].tags;
                const quesDate = ques[0].date.substring(0, 10);
                if (quesDate >= filters.startDate && quesDate <= filters.endDate) {
                    tags.split(" ").forEach((tag) => {
                        acAnsFreqOfTags[tag] = (acAnsFreqOfTags[tag] || 0) + 1;
                    });
                }
            });
        } else {
            acceptedansweredQues.forEach((ques) => {
                const tags = ques[0].tags;
                tags.split(" ").forEach((tag) => {
                    acAnsFreqOfTags[tag] = (acAnsFreqOfTags[tag] || 0) + 1;
                });
            });
            cnt = acceptedansweredQues.length;
        }

        setActAnsLen(cnt);

        const tags = Object.keys(acAnsFreqOfTags);
        const counts = Object.values(acAnsFreqOfTags);
        setAcAnsTags(tags);
        setAcAnsCount(counts);
    }, [acceptedansweredQues, filters]);

    // Fetching tags of answered questions
    const [answeredQues, setAnsweredQues] = useState([]);
    const [AnsTags, setAnsTags] = useState([]);
    const [AnsCount, setAnsCount] = useState([]);
    const [ansLen, setAnsLen] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/api/answer/fetchUserAnsweredQuestions/${localStorage.getItem("username")}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setAnsweredQues(data));
    }, []);

    useEffect(() => {
        const ansFreqOfTags = {};
        let cnt = 0;

        if (filters.startDate && filters.endDate) {
            cnt = answeredQues.filter((ques) => {
                const tags = ques[0].tags;
                const quesDate = ques[0].date.substring(0, 10);
                return quesDate >= filters.startDate && quesDate <= filters.endDate;
            }).length;

            answeredQues.forEach((ques) => {
                const tags = ques[0].tags;
                const quesDate = ques[0].date.substring(0, 10);
                if (quesDate >= filters.startDate && quesDate <= filters.endDate) {
                    tags.split(" ").forEach((tag) => {
                        ansFreqOfTags[tag] = (ansFreqOfTags[tag] || 0) + 1;
                    });
                }
            });
        } else {
            answeredQues.forEach((ques) => {
                const tags = ques[0].tags;
                tags.split(" ").forEach((tag) => {
                    ansFreqOfTags[tag] = (ansFreqOfTags[tag] || 0) + 1;
                });
            });
            cnt = answeredQues.length;
        }

        setAnsLen(cnt);

        const tags = Object.keys(ansFreqOfTags);
        const counts = Object.values(ansFreqOfTags);
        setAnsTags(tags);
        setAnsCount(counts);
    }, [answeredQues, filters]);

    return (
        <div className="container">
            <ProfileSidebar />
            <div className="header_and_content">
                <ProfileHeader />

                <div className="filters_menu">
                    <input type="date" name="startDate" onChange={onChange} />
                    <strong style={{ display: "inline" }}>To</strong>
                    <input type="date" name="endDate" onChange={onChange} />
                </div>

                {/* <div className="title_row1">
                    <p className="title1">Total No of Questions asked by You: {questions.length}</p>
                    <p className="title2">Total No of Answers answered by You: {answeredQues.length}</p>
                </div> */}

                <div className="charts">
                    <div className="first_row">
                        <Chart title={`Total ${queLen} questions asked by you & used tags as follows`} count={count} Tags={Tags} />
                        <Chart title={`Total ${ansLen} answers given by you & used tags as follows`} count={AnsCount} Tags={AnsTags} />
                    </div>
                    <div className="last_chart">
                        <Chart title={`Your total ${actAnsLen} answers accepted & used tags as follows`} count={AcAnsCount} Tags={AcAnsTags} />
                    </div>
                </div>

                <hr style={{ border: "0.7px solid #ccc", marginBottom: "20px" }} />

            </div>
        </div>
    );
}

