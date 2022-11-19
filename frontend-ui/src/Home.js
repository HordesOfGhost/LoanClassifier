import React, { Component } from "react";

function Home() {
  return (
    <div>
      <h2>Enter details to get approval of your application:</h2>
      <JsonForm />
    </div>
  );
}

export default Home;

class JsonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Gender: "Male",
      Married: "No",
      Dependents: 0,
      Education: "Graduate",
      Self_Employed: "No",
      ApplicantIncome: 5489,
      CoapplicantIncome: 0,
      LoanAmount: 128,
      Loan_Amount_Term: 360,
      Credit_History: 1,
      Property_Area: "Urban",
      score: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //console.log(event.target + " " + event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    // this.setState({ score: 10 });

    const url = "http://localhost:8000/scoreFile";
    const bodyData = JSON.stringify({
      Gender: this.state.Gender,
      Married: this.state.Married,
      Dependents: this.state.Dependents,
      Education: this.state.Education,
      Self_Employed: this.state.Self_Employed,
      ApplicantIncome: this.state.ApplicantIncome,
      CoapplicantIncome: this.state.CoapplicantIncome,
      LoanAmount: this.state.LoanAmount,
      Loan_Amount_Term: this.state.Loan_Amount_Term,
      Credit_History: this.state.Credit_History,
      Property_Area: this.state.Property_Area,
    });
    const reqOpt = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: bodyData,
    };
    fetch(url, reqOpt)
      .then((res) => res.json())
      .then((resJ) => this.setState({ score: resJ.score }));
  }
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>Gender: </td>
                  <td>
                    <input
                      type="text"
                      name="Gender"
                      onChange={this.handleChange}
                      value={this.state.Gender}
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>Married: </td>
                  <td>
                    <input
                      type="text"
                      name="Married"
                      onChange={this.handleChange}
                      value={this.state.Married}
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>Dependents: </td>
                  <td>
                    <input
                      type="text"
                      name="Dependents"
                      onChange={this.handleChange}
                      value={this.state.Dependents}
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>Education: </td>
                  <td>
                    <input
                      type="text"
                      name="Education"
                      onChange={this.handleChange}
                      value={this.state.Education}
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>Self_Employed: </td>
                  <td>
                    <input
                      type="text"
                      name="Self_Employed"
                      onChange={this.handleChange}
                      value={this.state.Self_Employed}
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>ApplicantIncome: </td>
                  <td>
                    <input
                      type="text"
                      name="ApplicantIncome"
                      onChange={this.handleChange}
                      value={this.state.ApplicantIncome}
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>CoapplicantIncome: </td>
                  <td>
                    <input
                      type="text"
                      name="CoapplicantIncome"
                      onChange={this.handleChange}
                      value={this.state.CoapplicantIncome}
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>LoanAmount: </td>
                  <td>
                    <input
                      type="text"
                      name="LoanAmount"
                      onChange={this.handleChange}
                      value={this.state.LoanAmount}
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>Loan_Amount_Term: </td>
                  <td>
                    <input
                      type="text"
                      name="Loan_Amount_Term"
                      onChange={this.handleChange}
                      value={this.state.Loan_Amount_Term}
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>Credit_History: </td>
                  <td>
                    <input
                      type="text"
                      name="Credit_History"
                      onChange={this.handleChange}
                      value={this.state.Credit_History}
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>Property_Area: </td>
                  <td>
                    <input
                      type="text"
                      name="Property_Area"
                      onChange={this.handleChange}
                      value={this.state.Property_Area}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
        <div>The Probablity of getting approval is {this.state.score}</div>
      </div>
    );
  }
}
