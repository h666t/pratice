import { Command } from 'commander';
import {translate} from './main'
const program = new Command();

program
  .version('0.1.0')
  .arguments('<English>')
  .description('translation', {
    English: 'words to be translated'
  })
  .action((word) => {
    translate();
    console.log(word);
  });

program.parse();
