import 'dart:ffi';

class Words {
  final String word;
  final String pinyin;
  final String description;
  final String example;
  final String examplePinyin;
  final String exampleDesc;

  Words(
      {required this.word,
      required this.pinyin,
      required this.description,
      required this.example,
      required this.examplePinyin,
      required this.exampleDesc});
}
