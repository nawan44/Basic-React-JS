import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { TextField } from "@material-ui/core";
import moment from "moment";
import Autosuggest from "react-autosuggest";

const users = [
  {
    nickname: "crazyfrog",
    email: "frog@foobar.com",
  },
  {
    nickname: "tatanka",
    email: "ttt@hotmail.com",
  },
  {
    nickname: "wild",
    email: "www@mail.ru",
  },
  {
    nickname: "race car",
    email: "racing@gmail.com",
  },
  {
    nickname: "cook",
    email: "cooking@yahoo.com",
  },
];

function App() {
  // constructor() {
  //   super();

  //   this.state = {
  //     nicknameValue: '',
  //     nicknameSuggestions: [],
  //     emailValue: '',
  //     emailSuggestions: []
  //   };
  // }

  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    const regex = new RegExp("^" + escapedValue, "i");

    return users.filter(
      (user) => regex.test(user.nickname) || regex.test(user.email)
    );
  }

  function getSuggestionNickname(suggestion) {
    return suggestion.nickname;
  }

  function getSuggestionEmail(suggestion) {
    return suggestion.email;
  }

  function renderSuggestion(suggestion) {
    return (
      <span>
        {suggestion.nickname} - {suggestion.email}
      </span>
    );
  }
  const [state, setState] = useState({
    nicknameValue: "",
    nicknameSuggestions: [],
    emailValue: "",
    emailSuggestions: [],
  });

  const onNicknameChange = (event, { newValue }) => {
    setState({
      nicknameValue: newValue,
    });
  };

  const onEmailChange = (event, { newValue }) => {
    setState({
      emailValue: newValue,
    });
  };

  const onNicknameSuggestionsFetchRequested = ({ value }) => {
    setState({
      nicknameSuggestions: getSuggestions(value),
    });
  };

  const onNicknameSuggestionsClearRequested = () => {
    setState({
      nicknameSuggestions: [],
    });
  };

  const onNicknameSuggestionSelected = (event, { suggestion }) => {
    setState({
      emailValue: suggestion.email,
    });
  };

  const onEmailSuggestionsFetchRequested = ({ value }) => {
    setState({
      emailSuggestions: getSuggestions(value),
    });
  };

  const onEmailSuggestionsClearRequested = () => {
    setState({
      emailSuggestions: [],
    });
  };

  const onEmailSuggestionSelected = (event, { suggestion }) => {
    setState({
      nicknameValue: suggestion.nickname,
    });
  };

  const { nicknameValue, nicknameSuggestions, emailValue, emailSuggestions } =
    state;
  const nicknameInputProps = {
    placeholder: "nickname",
    value: nicknameValue,
    onChange: onNicknameChange,
  };
  const emailInputProps = {
    placeholder: "email",
    value: emailValue,
    onChange: onEmailChange,
  };

  return (
    <div className="App">
      {" "}
      <div>
        <Autosuggest
          suggestions={nicknameSuggestions}
          onSuggestionsFetchRequested={onNicknameSuggestionsFetchRequested}
          onSuggestionsClearRequested={onNicknameSuggestionsClearRequested}
          onSuggestionSelected={onNicknameSuggestionSelected}
          getSuggestionValue={getSuggestionNickname}
          renderSuggestion={renderSuggestion}
          inputProps={nicknameInputProps}
        />
        <Autosuggest
          suggestions={emailSuggestions}
          onSuggestionsFetchRequested={onEmailSuggestionsFetchRequested}
          onSuggestionsClearRequested={onEmailSuggestionsClearRequested}
          onSuggestionSelected={onEmailSuggestionSelected}
          getSuggestionValue={getSuggestionEmail}
          renderSuggestion={renderSuggestion}
          inputProps={emailInputProps}
        />
      </div>
    </div>
  );
}

export default App;
