import React, { useState, useEffect } from "react";
import {createHistory} from "@reach/router"

import Hamburger from "../Hamburger";
import * as S from "./styled"

let history = createHistory(window)

const Header = () => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <S.Header>
      <S.GlobalStyles/>
      <S.Container>
        <S.Wrapper>
          <S.InnerHeader>
            <S.Logo>Marcus Rodrigues</S.Logo>
            <S.Menu disabled={disabled} onClick={handleMenu}>{state.menuName}</S.Menu>
          </S.InnerHeader>
        </S.Wrapper>
      </S.Container>
      <Hamburger state={state} />
    </S.Header>
  );
};

export default Header;
