import 'package:ex9_model_exercise/repository/words_repository.dart';
import 'package:ex9_model_exercise/screens/detail_screen.dart';
import 'package:ex9_model_exercise/models/words.dart';
import 'package:flutter/material.dart';

class ListScreen extends StatelessWidget {
  final List<Words> words = WordsRepository().getWords();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('HSK Level 4 Words'),
      ),
      body: ListView.builder(
          itemCount: words.length,
          itemBuilder: (context, index) {
            return WordsTile(word: words[index]);
          }),
    );
  }
}

class WordsTile extends StatelessWidget {
  final Words word;
  WordsTile({required this.word});
  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(word.pinyin,
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.w300)),
      leading: Text(word.word,
          style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold)),
      subtitle: Text(word.description,
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600)),
      onTap: () {
        Navigator.of(context).push(MaterialPageRoute(
          builder: (context) => DetailScreen(
            word: word,
          ),
        ));
      },
    );
  }
}
