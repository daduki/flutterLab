import 'dart:async';
import 'dart:io';
import 'package:ex3_carousel_pages/audio_main.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'audio_main.dart';

final List<String> imgList = [
  'https://caferoman.github.io/images/cec01.jpg',
  'https://caferoman.github.io/images/cec02.jpg',
  'https://caferoman.github.io/images/cec03.JPG',
  'https://caferoman.github.io/images/s1.jpg',
  'https://caferoman.github.io/images/s2.jpg',
  'https://caferoman.github.io/images/s3.jpg',
  'https://caferoman.github.io/images/s4.jpg',
  'https://caferoman.github.io/images/a0.jpg',
  'https://caferoman.github.io/images/a1.jpg',
  'https://caferoman.github.io/images/ab1.jpg',
  'https://caferoman.github.io/images/ab2.jpg',
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
          CarouselPage(),
          FullscreenSliderDemo(),
          Container(color: Colors.amber[50]),
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
