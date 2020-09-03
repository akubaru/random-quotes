import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class QuotesAuthor extends React.Component {
    render () {
        const randomColor = this.props.displayColor();
        const html = document.documentElement;
        html.style.backgroundColor = randomColor;

        return (
            <div>
                <div style={{ backgroundColor: "white" }} id="quote-box">
                    <div className="quote-text" key={Math.random()} style={{ color: randomColor }}>
                        <FontAwesomeIcon icon="quote-left" />
                        <span id="text"> {this.props.quote}.</span>
                    </div>
                    <div className="quote-author">
            - <span id="author">{this.props.author ? this.props.author : "Unknown"}</span>
                    </div>
                    <div className="buttons">
                        <button id="new-quote" className="button" style={{ backgroundColor: randomColor }} onClick={this.props.handleClick}> New quote </button>
                        <a className="button" id="tweet-quote" target="_blank" href="https://twitter.com/intent/tweet"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                    </div>
                </div>
                <div className="footer">
          Made by _<a className="button" target="_blank" href="https://github.com/akubaru">Akbar </a><FontAwesomeIcon icon={['fab', 'github']} size="lg"/>
                </div>
            </div>
        );
    }
}

export default QuotesAuthor;
