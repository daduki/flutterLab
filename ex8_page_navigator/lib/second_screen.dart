import 'package:flutter/material.dart';
import 'package:ex8_page_navigator/third_screen.dart';

class SecondScreen extends StatelessWidget {
  final String screenData;
  SecondScreen({required this.screenData});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('screenData : ' + screenData),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                OutlinedButton(
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                  child: Text('Go Back'),
                ),
                OutlinedButton(
                  onPressed: () {
                    Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (BuildContext context) => ThirdScreen(
                          screenData: 'This is data from SecondScreen',
                        ),
                      ),
                    );
                  },
                  child: Text('Go to Third'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
