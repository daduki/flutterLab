import 'package:ex8_page_navigator/second_screen.dart';
import 'package:flutter/material.dart';

class FirstScreen extends StatefulWidget {
  _FirstScreenState createState() => _FirstScreenState();
}

class _FirstScreenState extends State<FirstScreen> {
  int count = 0;

  void increase() {
    setState(() {
      count = count + 1;
    });
  }

  void decrease() {
    setState(() {
      count = count - 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Counter App'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Count : $count', style: TextStyle(fontSize: 25)),
            Padding(padding: EdgeInsets.all(20)),
            Text('This is first screen'),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(onPressed: decrease, child: Text('- Dec')),
                ElevatedButton(onPressed: increase, child: Text('+ Inc')),
              ],
            ),
            ElevatedButton(
                onPressed: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (BuildContext context) => SecondScreen(
                        screenData: 'This is data from FirstScreen',
                      ),
                    ),
                  );
                },
                child: Text('Go to Second'))
          ],
        ),
      ),
    );
  }
}
