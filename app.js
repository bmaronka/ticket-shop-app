const ValidationMessage = (props) => <p>{props.txt}</p>;

const OrderForm = (props) => (
    <form onSubmit={props.submit}>
        <input type="checkbox" id="age" onChange={props.change} checked={props.confirmed} />
        <label htmlFor="age">I am at least 16 years old</label>
        <br />
        <button type="submit">Buy ticket</button>
    </form>
)

class TicketShop extends React.Component {
    state = {
        isConfirmed: false,
        isFormSubmitted: false,
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true
            })
        }
    }

    displayMessage = () => {
        if (this.state.isFormSubmitted) {
            if (this.state.isConfirmed) {
                return <ValidationMessage txt="You can watch this movie. Enjoy!" />
            } else {
                return <ValidationMessage txt="You can't watch this movie if you are not 16 years old!" />
            }
        } else {
            return null
        }
    }

    render() {
        const { isConfirmed } = this.state;

        return (
            <>
                <h1>Buy ticket for the best horror movie of the year!</h1>
                <OrderForm change={this.handleCheckboxChange} submit={this.handleFormSubmit} confirmed={isConfirmed} />
                {this.displayMessage()}
            </>
        )
    }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'));