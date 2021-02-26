const colours = {
	normal: '#A8A77A',
	fuego: '#EE8130',
	agua: '#6390F0',
	electrico: '#F7D02C',
	hierba: '#7AC74C',
	hielo: '#96D9D6',
	lucha: '#C22E28',
	veneno: '#A33EA1',
	tierra: '#E2BF65',
	vuelo: '#A98FF3',
	pisiquico: '#F95587',
	insecto: '#A6B91A',
	roca: '#B6A136',
	fantasma: '#735797',
	dragon: '#6F35FC',
	oscuro: '#705746',
	acero: '#B7B7CE',
	hada: '#D685AD',
};

module.exports = type => colours[type] || '#777';
module.exports.colors = colours;