import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String? _title = 'こんにちは';
  String? _textDesc = 'EMPTY';
  List<String> _textList = [
    'Hello world',
    'Stack Overflow',
    'こんにちは',
    'Guten Tag',
    'Hola'
  ];
  Map<String, String> _textMap = {
    'Hello':
        '수 많은 프로그래머들이 대체로 가장 처음 만들어보는 앱이다.\n 프로그래머라면 새로운 개발환경에서 젤 처음 찍어보는 구문이다.',
    'Stack Overflow':
        'NPE(Null Pointer Exception)과 함께 프로그래머에게 재앙과도 같은 흔한 오류.\n 개발자들의 지식in과도 같은 동명의 사이트가 존재한다.',
    'こんにちは': 'Hello in Japanese.\n 同じ表現で\"おはいよ\"もある。',
    'Guten Tag': 'Hello in Germany',
    'Hola': 'Hello in Spanish'
  };
  int _indexNum = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          _title ?? 'Title',
          style: TextStyle(fontSize: 20),
        ),
      ),
      body: Text(
        _textDesc ?? 'Description',
        style: TextStyle(fontSize: 20, color: Colors.grey),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(() {
            _indexNum = (_indexNum + 1) % _textList.length;
            _title = _textList[_indexNum] ?? 'Title';
            _textDesc = _textMap[_title] ?? 'NULL';
          });
        },
        child: Icon(Icons.touch_app),
      ),
    );
  }
}
