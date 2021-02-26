const mapInfo = form => {
  const image = form ? form.sprites.front_default : null;
  return image;
}

export {mapInfo}