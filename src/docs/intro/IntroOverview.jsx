import React from "react";
import src from "../../assets/README.md"
import Markdown from '../../markdown';
import "../markdown.css"
import QueryConsole from '../../queryConsole/QueryConsoleContainer'
import withMarkdown from "../MarkdownContainer"

class IntroContact extends React.Component {

    query = `{ 
  listing(id: "847") { 
    id 
    name 
  } 
}`;


    render() {
        return (
            <div>
                <Markdown exampleConsole={ <div style={{paddingTop:16, paddingBottom: 16}}><QueryConsole embedded={true} query={this.query} /> </div>}>
                {this.props.content}
                </Markdown>
            </div>
        )
    }
}

export default withMarkdown(IntroContact, src);