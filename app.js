//React sin JSX

/*const el = React.createElement(
		'h1', 
		{id:'title'}, 
		'Hola ',
		React.createElement('span', null, 'mundo')
	);
ReactDOM.render(el, document.getElementById('app')); */

//React con JSX




//Componentes y propiedades de React

/*function Title(props){
	return <h2 className="title"><a href="#">{props.name}</a></h2>
} */

const Avi = props => <img src={props.user.img} alt={props.user.name} className="img" />;
const Username = props => <h2 className="title"><a href="#">{props.user.name}</a></h2>;
const Texto = props => <p className="text">{props.user.texto}</p>;

const Article = props => {
	return (
		<article className="user">
			<Avi user={props.user} />
			<div className="ident">
				<Username user={props.user} />
				<Texto user={props.user} />
			</div>
		</article>
	)
};

const UserList = props => {
	const userList = props.list.map((user, i) => <Article user={user} key={i} />);
	return (
		<div className="user-list">
			{userList}
		</div>
	)
};

const user = [
	{
		name: '@Selina',
		img: "img/pearl1.png",
		texto: 'Esto es un texto simple de prueba. Mékiam es lo mejoooor'
	},
	{
		name: '@Darlene',
		img: "img/raven3.png",
		texto: 'Un texto simple de prueba. Ya dije que Mékiam es genial?'
	}, 
	{
		name: '@Kandance',
		img: "img/pearl5.png",
		texto: 'Más texto de prueba. La MT de Sean es una pasada'
	}, 
	{
		name: '@Natasha',
		img: "img/raven2.png",
		texto: 'El último texto de prueba para la lista. Hay que postear prontito <3'
	}
];

ReactDOM.render(
	<UserList list={user} />
	, document.getElementById('user')
);


//Otro ejemplo de React con JSX y Babel usando cdn version 5.8.1 OJO https://cdnjs.com/

/*const msg = React.createElement(
	'h2',
	{ id: "message", className: 'msg'},
	"Hello World"
	);

ReactDOM.render(msg, document.getElementById('msg-container')); */

/*const style = {
	backgroundColor: "#42426F",
	color: "white"
}

ReactDOM.render(<h1 id="message" 
					className="msg"
					style={style}> 
					Hello World
				</h1>,
				document.getElementById("msg-container")
				); */
