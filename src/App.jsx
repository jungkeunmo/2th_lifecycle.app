import React from "react";

class App extends React.Component {
    componentDidMount() {
        console.log("didMount RUN!π");
    }; // 3λ²μ§Έ

    render() {
        console.log("render RUN!π°π₯");
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

                <button onClick={() => this.addStudentHandler()}> νμμΆκ° </button>
            </div>
        ); //μμ κ΄νΈκ° μμΌλ©΄ λ€μλ κ΄νΈκ° μλ€.
    }; // 2λ²μ§Έ

    addStudentHandler = () => {
        this.setState(prevState => {
            return {
                students: prevState.students.concat("λΌμ΄μΈ"),
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
        console.log("constructor RUN!πΆπΎ");

        this.state = {
            numberValue: 1,
            helloColor: "red",
            students : [
                "μ€μν",
                "κΉμ°μ§",
                "νλκΈ°",
                "μ κ·Όλͺ¨",
                "μ μμ§"
            ],
        };
    }; // 1λ²μ§Έ
}; //class app μ΄μλλΌλ©΄ μΈν°νλ¦°νΈ λ°©μμΌλ‘ ν΄μΌλ¨

export default App;