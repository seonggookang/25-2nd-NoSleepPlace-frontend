import React, { Component } from 'react';
import styled from 'styled-components';

export default class SearchModal extends Component {
  constructor() {
    super();
    this.state = {
      searchList: [],
    };
  }

  componentDidMount() {
    fetch('/data/SearchModalData.json')
      .then(res => res.json())
      .then(result =>
        this.setState({
          searchList: result,
        })
      );
  }

  render() {
    const { searchList } = this.state;

    return (
      <Serch>
        <SearchBox>
          <IconeBox>
            <i className="fas fa-search" />
            <i className="fas fa-camera" />
          </IconeBox>
          <input placeholder="어떤 장소에서 콘텐츠를 만들고 싶으세요?" />
        </SearchBox>
        <Popularity>
          <div>
            <span>인기 검색어</span>
            <ul>
              {searchList.popularity?.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          </div>
        </Popularity>
      </Serch>
    );
  }
}

const Serch = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const IconeBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  font-size: 25px;
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 964px;
  border-bottom: 1px solid #e7eaee;
  padding: 0.3em 0;

  .fa-search {
    position: absolute;
    left: 0;
    font-weight: 300;
  }

  .fa-camera {
    position: absolute;
    right: 0;
    font-weight: 300;
  }

  input {
    line-height: 1.31;
    width: 100%;
    padding: 0.4em 2em;
    font-size: 26px;
    border: none;
    outline: none;

    &::placeholder {
      color: #9ea4aa;
      font-size: 26px;
    }
  }
`;

const Popularity = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 964px;
  width: 100%;
  margin: 3em 0 2em;

  span {
    font-weight: bolder;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.8em;

    Li {
      padding: 0.7em 1.2em;
      background-color: #eff3f5;
      border-radius: 5px;
      margin: 0 0.5em 0.7em 0;
      font-size: 14px;
    }
  }
`;