import ConfigStore from 'configstore';
import { name } from '../package.json';

class KeyManager {
  constructor(){
    this.conf = new ConfigStore(name);
  }

  setKey(key){
    this.conf.set('apiKey', key);
    return key;
  }

  getKey(){
    const key = this.conf.get('apiKey');

    if(!key){
      throw new Error('No API key found - Get a key at https://nomics.com');
    }
    return key;
  }

  deleteKey(){
    const key = this.conf.get('apiKey');

    if(!key){
      throw new Error('No API key found - Get a key at https://nomics.com');
    }

    this.conf.delete('apiKey');

    return;
  }
}

export default KeyManager;