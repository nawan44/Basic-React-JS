import "./App.css";
import React from "react";
import Autosuggest from "react-autosuggest";
import ReactHook from "./react-hook";
const users = [
  {
    nickname: "crazyfrog",
    email: "frog@foobar.com",
    alamat: "Jakarta",
  },
  {
    nickname: "tatanka",
    email: "ttt@hotmail.com",
    alamat: "Bogor",
  },
  {
    nickname: "wild",
    email: "www@mail.ru",
    alamat: "Tangerang",
  },
  {
    nickname: "race car",
    email: "racing@gmail.com",
    alamat: "Bekasi",
  },
  {
    nickname: "cook",
    email: "cooking@yahoo.com",
    alamat: "Tangsel",
  },
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  const regex = new RegExp("^" + escapedValue, "i");

  return users.filter(
    (user) =>
      regex.test(user.nickname) ||
      regex.test(user.email) ||
      regex.test(user.alamat)
  );
}

function getSuggestionNickname(suggestion) {
  return suggestion.nickname;
}

function getSuggestionEmail(suggestion) {
  return suggestion.email;
}
function getSuggestionAlamat(suggestion) {
  return suggestion.alamat;
}
function renderSuggestion(suggestion) {
  return (
    <span>
      {suggestion.nickname} - {suggestion.email} - {suggestion.alamat}
    </span>
  );
}

class ReactClass extends React.Component {
  constructor() {
    super();

    this.state = {
      nicknameValue: "",
      nicknameSuggestions: [],
      emailValue: "",
      emailSuggestions: [],
      alamatValue: "",
      alamatSuggestions: [],
    };
  }

  onNicknameChange = (event, { newValue }) => {
    this.setState({
      nicknameValue: newValue,
    });
  };

  onEmailChange = (event, { newValue }) => {
    this.setState({
      emailValue: newValue,
    });
  };

  onAlamatChange = (event, { newValue }) => {
    this.setState({
      alamatValue: newValue,
    });
  };

  onNicknameSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      nicknameSuggestions: getSuggestions(value),
    });
  };

  onNicknameSuggestionsClearRequested = () => {
    this.setState({
      nicknameSuggestions: [],
    });
  };

  onNicknameSuggestionSelected = (event, { suggestion }) => {
    this.setState({
      emailValue: suggestion.email,
    });
  };

  onEmailSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      emailSuggestions: getSuggestions(value),
    });
  };

  onEmailSuggestionsClearRequested = () => {
    this.setState({
      emailSuggestions: [],
    });
  };

  onEmailSuggestionSelected = (event, { suggestion }) => {
    this.setState({
      nicknameValue: suggestion.nickname,
    });
  };

  onAlamatSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      alamatSuggestions: getSuggestions(value),
    });
  };

  onAlamatSuggestionsClearRequested = () => {
    this.setState({
      alamatSuggestions: [],
    });
  };

  onAlamatSuggestionSelected = (event, { suggestion }) => {
    this.setState({
      nicknameValue: suggestion.nickname,
    });
  };

  render() {
    const {
      nicknameValue,
      nicknameSuggestions,
      emailValue,
      emailSuggestions,
      alamatValue,
      alamatSuggestions,
    } = this.state;
    const nicknameInputProps = {
      placeholder: "nickname",
      value: nicknameValue,
      onChange: this.onNicknameChange,
    };
    const emailInputProps = {
      placeholder: "email",
      value: emailValue,
      onChange: this.onEmailChange,
    };
    const alamatInputProps = {
      placeholder: "alamat",
      value: alamatValue,
      onChange: this.onAlamatChange,
    };
    return (
      <div className="container">
        <Autosuggest
          suggestions={nicknameSuggestions}
          onSuggestionsFetchRequested={this.onNicknameSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onNicknameSuggestionsClearRequested}
          onSuggestionSelected={this.onNicknameSuggestionSelected}
          getSuggestionValue={getSuggestionNickname}
          renderSuggestion={renderSuggestion}
          inputProps={nicknameInputProps}
        />
        <Autosuggest
          suggestions={emailSuggestions}
          onSuggestionsFetchRequested={this.onEmailSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onEmailSuggestionsClearRequested}
          onSuggestionSelected={this.onEmailSuggestionSelected}
          getSuggestionValue={getSuggestionEmail}
          renderSuggestion={renderSuggestion}
          inputProps={emailInputProps}
        />{" "}
        <Autosuggest
          suggestions={alamatSuggestions}
          onSuggestionsFetchRequested={this.onAlamatSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onAlamatSuggestionsClearRequested}
          onSuggestionSelected={this.onAlamatSuggestionSelected}
          getSuggestionValue={getSuggestionAlamat}
          renderSuggestion={renderSuggestion}
          inputProps={alamatInputProps}
        />
      </div>
    );
  }
}

export default ReactClass;
