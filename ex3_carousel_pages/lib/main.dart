import 'dart:async';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Slide View Example',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 5,
      child: Scaffold(
        appBar: AppBar(
          title: Text('Slidable Tab'),
          bottom: TabBar(
            tabs: <Widget>[
              Tab(icon: Icon(Icons.tag_faces), text: '메뉴1'),
              Tab(icon: Icon(Icons.abc), text: '메뉴2'),
              Tab(icon: Icon(Icons.info), text: '메뉴3'),
              Tab(icon: Icon(Icons.dangerous), text: '메뉴4'),
              Tab(icon: Icon(Icons.earbuds), text: '메뉴5'),
            ],
          ),
        ),
        body: TabBarView(children: <Widget>[
          ImageCapture(),
          Container(color: Colors.cyan[100]),
          Container(color: Colors.amber[100]),
          Container(color: Colors.amber[50]),
          Container(color: Colors.lightGreenAccent[100]),
        ]),
      ),
    );
  }
}

class ImageCapture extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return PageView(
      children: <Widget>[
        Image.asset("assets/pororo01.jpeg", width: 400, height: 600),
        Image.asset("assets/pororo02.jpeg", width: 400, height: 600),
        Image.asset("assets/pororo03.jpeg", width: 400, height: 600),
        Image.asset("assets/pororo04.jpeg", width: 400, height: 600),
        Image.asset("assets/pororo05.jpeg", width: 400, height: 600),
        Image.asset("assets/pororo06.jpeg", width: 400, height: 600),
        Image.asset("assets/pororo07.jpeg", width: 400, height: 600),
        Image.asset("assets/pororo08.jpeg", width: 400, height: 600),
        Image.asset("assets/pororo09.jpeg", width: 400, height: 600),
        Image.asset("assets/pororo10.jpeg", width: 400, height: 600),
      ],
    );
  }
}
