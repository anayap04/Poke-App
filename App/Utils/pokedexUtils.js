const mapInfo = (form, desc, type, abilities) => {
  const image = 
    form && 
    form.sprites && 
    form.sprites.front_default
      ? form.sprites.front_default 
      : null;
  const name = 
    desc && 
    desc.names 
      ? desc.names.filter(n => n.language.name === 'es')[0] 
      : null;
  const text = 
      desc && 
      desc.flavor_text_entries? desc.flavor_text_entries
        .filter(n => n.language.name === 'es')[0]
      : null;
  const typeP = 
    type &&
    type.name
      ? type.names.filter(n => n.language.name === 'es')[0]
      : null;
  const abilitiesList = 
    abilities &&
    abilities[0]
      ? abilities.map(a => 
          a.names.filter(n => n.language.name === 'es')[0].name) 
      : null;
  
  return {
    pokemonImage: image ? image: null,
    pokemonName: name ? name.name : null,
    pokemonText: text ? text.flavor_text: null,
    pokemonType: typeP ? typeP.name : null,
    pokemonAbilities: abilitiesList ? abilitiesList.toString() : null,
  };
}

const removeAccents = str => {
  return str 
    ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    : null;
} 

export {mapInfo, removeAccents}