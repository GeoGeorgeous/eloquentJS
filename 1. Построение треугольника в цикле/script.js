/*
Напишите цикл, который делает 7 вызовов console.log() и выводит следующий теругольник:
#
##
###
####
#####
######
#######
*/

let string = '#'
while (string.length < 8) {
  console.log(string);
  string += string[0];
}
