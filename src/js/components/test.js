import React, { Component } from "react";
import ReactDOM from "react-dom";
import testInput from "./test-input"

class Test extends Component {
    constructor() {
        super();
        this.state = {
          seo_title: ""
        };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
      }
      render() {
        const { seo_title } = this.state;
        return (
          <form id="article-form">
          <p>This is a Test</p>
            <testInput
              text="SEO title"
              label="seo_title"
              type="text"
              id="seo_title"
              value={seo_title}
              handleChange={this.handleChange}
            />
          </form>
        );
      }
    }
export default Test;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<Test />, wrapper) : false;