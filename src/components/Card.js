const Card = ({ firstname, image }) => {
	return (
		<div>
			<p>{firstname} </p>
			<img src={image} alt={firstname} />
		</div>
	)
}

export default Card
