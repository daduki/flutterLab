import 'package:flutter/material.dart';
import 'package:ex9_model_exercise/screens/list_screen.dart';
import 'package:ex9_model_exercise/screens/detail_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Model Excercise',
      home: ListScreen(),
    );
  }
}
