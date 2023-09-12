function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  // imports all images from locationImages directory
  const importedImages = importAll(require.context('../locationImages', false, /\.(png|jpe?g|svg)$/));
  
  export default importedImages;
  