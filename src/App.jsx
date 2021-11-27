import React from "react";

class App extends React.Component {
    componentDidMount() {
        console.log("didMount RUN!🍀");
    }; // 3번째

    render() {
        console.log("render RUN!🐰🥕");
        return ( 
            <div>
                <p>{this.state.numberValue}</p>
                <button onClick={() => this.minusHandler()}>-</button> 
                <button onClick={() => this.plusHandler()}>+</button>

                <br />
                <br />
                <br />

                <article style={{ color: this.state.helloColor }}>Hello word</article>
                <button onClick={() => this.changeColorHandler("black")}>BLACK</button>
                <button onClick={() => this.changeColorHandler("blue")}>BLUE</button>
                <button onClick={() => this.changeColorHandler("red")}>RED</button>
                <button onClick={() => this.changeColorHandler("green")}>GREEN</button>

                <br />
                <br />
                <br />
                
                {this.state.students.map(st => {
                    return <div>{st}</div>;
                })}

                <button onClick={() => this.addStudentHandler()}> 학생추가 </button>
            </div>
        ); //앞에 괄호가 있으면 뒤에도 괄호가 있다.
    }; // 2번째

    addStudentHandler = () => {
        this.setState(prevState => {
            return {
                students: prevState.students.concat("라이언"),
            };
        });
    };

    changeColorHandler = (nextColor) => {
        this.setState((prevState) => {
            return {
                helloColor: nextColor,
            };
        });
    };

    plusHandler = () => {
        this.setState((prevState) => {
            return {
                numberValue : prevState.numberValue + 1,
            }
        });
    };

    minusHandler = () => {
        this.setState((prevState) => {
            return {
                numberValue : prevState.numberValue - 1,
            }
        });
    };

    constructor(props) {
        super(props);
        console.log("constructor RUN!🐶🐾");

        this.state = {
            numberValue: 1,
            helloColor: "red",
            students : [
                "오은하",
                "김우진",
                "홍도기",
                "정근모",
                "정은진"
            ],
        };
    }; // 1번째
}; //class app 이아니라면 인터프린트 방식으로 해야됨

export default App;