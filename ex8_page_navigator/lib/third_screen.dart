import 'package:flutter/material.dart';

class ThirdScreen extends StatelessWidget {
  final String screenData;
  ThirdScreen({required this.screenData});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('screenData : ' + screenData),
            OutlinedButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text('Go Back'),
            ),
          ],
        ),
      ),
    );
  }
}
