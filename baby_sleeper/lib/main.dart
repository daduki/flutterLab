import 'dart:async';
import 'dart:io';
import 'package:ex3_carousel_pages/audio_main.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'audio_main.dart';

final List<String> imgList = [
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
              Tab(icon: Icon(Icons.abc), text: '메뉴2'),
              Tab(icon: Icon(Icons.info), text: '메뉴3'),
              Tab(icon: Icon(Icons.dangerous), text: '메뉴4'),
              Tab(icon: Icon(Icons.earbuds), text: 'Music'),
            ],
          ),
        ),
        body: TabBarView(children: <Widget>[
          ImageCapture(),
          FullscreenSliderDemo(),
          Container(color: Colors.amber[50]),
          Container(color: Colors.amber[100]),
          AudioMain(),
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

class CarouselPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
          child: CarouselSlider(
        options: CarouselOptions(),
        items: imgList
            .map((item) => Container(
                  child: Center(
                      child:
                          Image.network(item, fit: BoxFit.cover, width: 1000)),
                ))
            .toList(),
      )),
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
            items: imgList
                .map((item) => Container(
                      child: Center(
                          child: Image.network(
                        item,
                        fit: BoxFit.fitWidth,
                        height: height,
                      )),
                    ))
                .toList(),
          );
        },
      ),
    );
  }
}
