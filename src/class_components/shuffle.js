import React,{ Component } from 'react' 



class Shuffle extends Component {
  
  state = {
    array: []
  }
  

  shuffleLoop() {

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
            
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

  }

  render() {
    return (
      <>

      </>
    )
  }
}

export default Shuffle;
