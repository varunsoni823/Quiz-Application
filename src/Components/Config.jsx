import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getquery } from "../store/actions/quizActions";
import "./Config.css";

const Config = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");

  const [allcategories, setallcategories] = useState([]);

  const GetCategory = async () => {
    try {
      const { data } = await axios.get("https://opentdb.com/api_category.php");
      setallcategories(data.trivia_categories);
      // console.log(data.trivia_categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetCategory();
  }, []);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const config = {
      amount,
      category,
      difficulty,
      type,
    };
    // console.log(config);
    dispatch(getquery(config));
    navigate("/quiz");
  };

  let c_render = "";
  if (allcategories.length > 0) {
    c_render = allcategories.map((c) => (
      <option key={c.id} value={c.id}>
        {c.name}
      </option>
    ));
  }

  return (
    <div className="config">
      <Link to="/" className="back">⬅️</Link>
      <h1 className="textCss">Configuration Helpers</h1>

      <form onSubmit={SubmitHandler} className="formCss">
        <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          className="mb3"
          type="number"
          placeholder="Amount of Questions"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="mb3"
        >
          <option value="">Any Category</option>
          {c_render}
        </select>
        <select
          onChange={(e) => setDifficulty(e.target.value)}
          value={difficulty}
          className="mb3"
        >
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select
          onChange={(e) => setType(e.target.value)}
          value={type}
          className="mb3"
        >
          <option value="">Any Type</option>
          <option value="multiplechoice">Multiple Choice</option>
          <option value="boolean">True/False</option>
        </select>
        <button className="button"> Start Quiz</button>
      </form>
    </div>
  );
};

export default Config;
