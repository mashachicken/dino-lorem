export default class DinoService {
  async getDinos(paras, words) {
    try {
      let response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=`+paras+`&words=`+words);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("there was an error with your request:" + error.message);
      return false;
    }
  }
}
