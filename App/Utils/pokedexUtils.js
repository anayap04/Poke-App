const mapInfo = (form, desc, type, abilities) => {
  const image = form ? form.sprites.front_default : null;
  const name = 
    desc ? desc.names.filter(n => n.language.name === 'es')[0] : null;
  const text = 
    desc ? desc.flavor_text_entries
      .filter(n => n.language.name === 'es')[0]
    : null;
  const typeP = 
    type 
      ? type.names.filter(n => n.language.name === 'es')[0]
      : null;
  const abilitiesList = 
    abilities 
      ? abilities.map(a => 
          a.names.filter(n => n.language.name === 'es')[0].name) 
      : null;
  console.log(abilitiesList);
  return {
    pokemonImage: image ? image: null,
    pokemonName: name ? name.name : null,
    pokemonText: text ? text.flavor_text: null,
    pokemonType: typeP ? typeP.name : null,
  };
}

export {mapInfo}