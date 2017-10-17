//Práctica de estados y eventos con ReactJs

class Counter extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			count: 0
		}
	}

	likeCount = (e) => {
		e.preventDefault();
		this.setState(function(prevState){
			return {
				count: prevState.count + 1
			}
		})
	};

	ughCount = (e) => {
		e.preventDefault();
		this.setState(function(prevState) {
			if(prevState.count >= 1) {
				return {
					count: prevState.count - 1
				}
			}
		})
	};

	restCount = (e) => {
		e.preventDefault();
		this.setState({count: 0})
	};

	render() {
		return (
			<div className="counter">
				<div className="count">{this.state.count}</div>
				<div className="cont">
					<a href="#" className="like" onClick={this.likeCount}>Like</a>
					<a href="#" className="like" onClick={this.ughCount}>Ugh</a>
					<a href="#" className="like" onClick={this.restCount}>Rest</a>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Counter/>, document.getElementById('app'));