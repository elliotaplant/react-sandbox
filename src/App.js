import React, {Component} from 'react';
import Home from './components/Home';
import styled from 'styled-components';
import {Route, Link} from 'react-router-dom'

const Header = styled.header `
  background-color: steelblue;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  letter-spacing: 2px;
  font-weight: 100;
`;

const HeaderLine = styled.h3 `
  color: #eee;
`;

const LinksList = styled.ul `
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

const RouteLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 10px;
`;

const CenterContainer = styled.div `
  max-width: 720px;
  margin: 20px auto 0;
`;

class App extends Component {
  render() {
    return (<div>
      <Header>
        <HeaderLine>React Sandbox</HeaderLine>
        <LinksList>
          <RouteLink to="/">Home</RouteLink>
          <RouteLink to="/forms">Forms</RouteLink>
        </LinksList>
      </Header>
      <CenterContainer>
        <Route exact="exact" path="/" component={Home}/>
        <Route path="/forms" component={<div>Forms</div>}/>
      </CenterContainer>
    </div>);
  }
}

export default App;
