import { command, parse } from 'commander';
import key from '../commands/key';

command('set')
.description('Set API Key -- Get at https://nomics.com')
.action(key.set);

command('Show')
.description('Show API Key')
.action(key.show);

command('Remove')
.description('Remove API Key')
.action(key.remove);

parse(process.argv);