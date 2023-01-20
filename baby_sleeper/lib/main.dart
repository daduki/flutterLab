import 'dart:async';
import 'dart:io';
import 'package:ex3_carousel_pages/audio_main.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'audio_main.dart';

final List<String> pororoImgList = [
  'https://daduki.github.io/images/pororo01.jpeg',
  'https://daduki.github.io/images/pororo02.jpeg',
  'https://daduki.github.io/images/pororo03.jpeg',
  'https://daduki.github.io/images/pororo04.jpeg',
  'https://daduki.github.io/images/pororo05.jpeg',
  'https://daduki.github.io/images/pororo06.jpeg',
  'https://daduki.github.io/images/pororo07.jpeg',
  'https://daduki.github.io/images/pororo08.jpeg',
  'https://daduki.github.io/images/pororo09.jpeg',
  'https://daduki.github.io/images/pororo10.jpeg',
  'https://daduki.github.io/images/pororo11.jpeg',
  'https://daduki.github.io/images/pororo12.jpeg',
  'https://daduki.github.io/images/pororo13.jpeg',
  'https://daduki.github.io/images/pororo14.jpeg',
  'https://daduki.github.io/images/pororo15.jpeg',
  'https://daduki.github.io/images/pororo16.jpeg',
  'https://daduki.github.io/images/pororo17.jpeg',
  'https://daduki.github.io/images/pororo18.jpeg',
  'https://daduki.github.io/images/pororo19.jpeg',
];

final List<String> tayoImgList = [
  'https://daduki.github.io/images/tayo001.jpg',
  'https://daduki.github.io/images/tayo002.jpg',
  'https://daduki.github.io/images/tayo003.jpg',
  'https://daduki.github.io/images/tayo004.jpg',
  'https://daduki.github.io/images/tayo005.jpg',
  'https://daduki.github.io/images/tayo006.jpg',
];

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
              Tab(icon: Icon(Icons.tag_faces), text: '음뽀'),
              Tab(icon: Icon(Icons.emoji_transportation), text: '타요'),
              Tab(icon: Icon(Icons.info), text: '메뉴3'),
              Tab(icon: Icon(Icons.dangerous), text: '메뉴4'),
              Tab(icon: Icon(Icons.earbuds), text: 'Music'),
            ],
          ),
        ),
        body: TabBarView(children: <Widget>[
          FullscreenSliderDemo(),
          FullscreenSliderDemo2(),
          Container(color: Colors.amber[50]),
          Container(color: Colors.amber[100]),
          AudioMain(),
        ]),
      ),
    );
  }
}

class FullscreenSliderDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Builder(
        builder: (context) {
          final double height = MediaQuery.of(context).size.height;
          return CarouselSlider(
            options: CarouselOptions(
              height: height,
              viewportFraction: 1.0,
              enlargeCenterPage: false,
              // autoPlay: false,
            ),
            items: pororoImgList
                .map((item) => Container(
                      child: Center(
                          child: Image.network(
                        item,
                        fit: BoxFit.fitWidth,
                      )),
                    ))
                .toList(),
          );
        },
      ),
    );
  }
}

class FullscreenSliderDemo2 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Builder(
        builder: (context) {
          final double height = MediaQuery.of(context).size.height;
          return CarouselSlider(
            options: CarouselOptions(
              height: height,
              viewportFraction: 1.0,
              enlargeCenterPage: false,
              // autoPlay: false,
            ),
            items: tayoImgList
                .map((item) => Container(
                      child: Center(
                          child: Image.network(
                        item,
                        fit: BoxFit.fitWidth,
                      )),
                    ))
                .toList(),
          );
        },
      ),
    );
  }
}
