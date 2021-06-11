#!/usr/bin/env node
import { testLanguage } from './helper';
import { arguments, Command } from 'commander';
import {translate} from './main'
const program = new Command();

program
  .version('0.1.0')
  .arguments('<firstWord> [otherWords...]')
  .description('add words to translate')
  .action((firstWord: string,otherWords: string[]) => {
    const inputLanguage = testLanguage(firstWord);
    let words = firstWord;
    if(inputLanguage === 'other') return console.log('请输入中文或英文单词')
    if(otherWords && otherWords.length > 0) words += " " + otherWords.join(" ")
    translate(words, inputLanguage);
  });

program.parse();
