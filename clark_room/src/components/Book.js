import '../App.css';

class Book extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          visible: false,
          number: -1
        };
        this.books=[
            {
                text: "Lorem ipsum dolor",
                title: "The meaning of life"
            },
            {
                text: "Lorem ipsum dolor",
                title: "The next one"
            },
        ]
    }

  
    render() {
        new_style = {visible: this.state.number >=0 && this.state.number < this.books.length && this.state.visible}
        return (
            <div style={new_style} className="overlay" onClick={off}>
                <h1>{this.books[this.state.number.text]}</h1>
            </div>
        );
    }

    off(){
        this.setState(state =>({
            visible: false,
            number: -1
        }));
        
    }
  }


export default Book;
