import { prompt } from 'inquirer';
import colors from 'colors';
import KeyManager from '../lib/KeyManager';

const key = {
  async set(){
    debugger;
    const keyManager = new KeyManager();
    const input = await prompt([
        {
          type:'input',
          name: 'key',
          message:'Enter API Key '.green + 'https://nomics.com'
        }
      ]
    );

    const key = keyManager.setKey(input.key);
    if(key){
      console.log('API Key Set'.blue);
    }
  },
  show(){
    console.log('Show Key')
  },
  remove(){
    console.log('Remove Key')
  }
}

export default key;