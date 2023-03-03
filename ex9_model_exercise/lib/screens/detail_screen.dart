import 'package:flutter/material.dart';
import 'package:ex9_model_exercise/models/words.dart';

class DetailScreen extends StatelessWidget {
  final Words word;
  DetailScreen({required this.word});
  @override
  Widget build(BuildContext) {
    return Scaffold(
      appBar: AppBar(
        title: Text(word.word),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Padding(
              padding: EdgeInsets.all(5),
            ),
            Container(
              child: Text(
                word.word,
                style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
              ),
            ),
            Container(
              child: Text(
                word.pinyin,
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w200),
              ),
            ),
            Padding(
              padding: EdgeInsets.all(5),
            ),
            Container(
              child: Text(
                word.description,
                style: TextStyle(fontSize: 18),
              ),
            ),
            Container(
              child: Text(
                word.example,
                style: TextStyle(fontSize: 16),
              ),
            ),
            Container(
              child: Text(
                word.examplePinyin,
                style: TextStyle(fontSize: 14),
              ),
            ),
            Container(
              child: Text(
                word.exampleDesc,
                style: TextStyle(fontSize: 14),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
