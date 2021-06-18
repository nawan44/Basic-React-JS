import "./App.css";
import React from "react";
import Autosuggest from "react-autosuggest";
import { TextField } from "@material-ui/core";
const users = [
  {
    nickname: "crazyfrog",
    email: "frog@foobar.com",
    alamat: "Jakarta",
  },
  {
    nickname: "tatanka",
    email: "ttt@hotmail.com",
    alamat: "Tangerang",
  },
  {
    nickname: "wild",
    email: "www@mail.ru",
    alamat: "Bogor",
  },
  {
    nickname: "race car",
    email: "racing@gmail.com",
    alamat: "Depok",
  },
  {
    nickname: "cook",
    email: "cooking@yahoo.com",
    alamat: "bekasi",
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
    (user) => regex.test(user.nickname) || regex.test(user.email)
  );
}

function getSuggestionNickname(suggestion) {
  return suggestion.nickname;
}

function renderSuggestion(suggestion) {
  return (
    <span>
      {suggestion.nickname} - {suggestion.email}- {suggestion.alamat}
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
      emailSuggestions: [],
      alamatSuggestions: [],
    });
  };

  onNicknameSuggestionSelected = (event, { suggestion }) => {
    this.setState({
      emailValue: suggestion.email,
      alamatValue: suggestion.alamat,
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

        <TextField
          suggestions={emailSuggestions}
          variant="outlined"
          inputProps={emailInputProps}
        />
        <TextField
          suggestions={alamatSuggestions}
          variant="outlined"
          inputProps={alamatInputProps}
        />
      </div>
    );
  }
}

export default ReactClass;
