// main.dart
import 'package:flutter/material.dart';
import 'package:hive/hive.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:async/async.dart';
import 'dart:math';


void main() async {

  WidgetsFlutterBinding.ensureInitialized();

  await Hive.initFlutter();
  // await Hive.deleteBoxFromDisk('journal_box');
  await Hive.openBox('journal_box');
  await Hive.openBox('category_box');

  runApp(const MyApp());

}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Simple Diary',
      theme: ThemeData(
        primaryColor: Colors.black
      ),
      home: const HomePage(),
    );
  }
}

// Home Page
class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Map<String, dynamic>> _items = [];
  List<Map<String, dynamic>> _categoryItems = [];

  final _journalBox = Hive.box('journal_box');
  final _categoryBox = Hive.box('category_box');

  @override
  void initState() {
    super.initState();
    _refreshItems(); // Load data when app starts
  }

  // Get all items from the database
  void _refreshItems() {
    final data = _journalBox.keys.map((key) {
      final value = _journalBox.get(key);
      return {"key": key, "date": value["date"], "journal": value['journal']};
    }).toList();

    final cData = _categoryBox.keys.map((key) {
      final value = _categoryBox.get(key);
      return {"key": key, "date": value["date"], "category": value['category']};
    }).toList();

    setState(() {
      _items = data.reversed.toList();
      _categoryItems = cData.reversed.toList();
      // we use "reversed" to sort items in order from the latest to the oldest
    });
  }

  // Create new item
  Future<void> _createItem(Map<String, dynamic> newItem) async {
    await _journalBox.add(newItem);
    _refreshItems(); // update the UI
  }

  // Create new item
  Future<void> _createCategoryItem(Map<String, dynamic> newItem) async {
    await _categoryBox.add(newItem);
    _refreshItems(); // update the UI
  }

  // Retrieve a single item from the database by using its key
  // Our app won't use this function but I put it here for your reference
  Map<String, dynamic> _readItem(int key) {
    final item = _journalBox.get(key);
    return item;
  }

  Map<String, dynamic> _readCategoryItem(int key) {
    final item = _categoryBox.get(key);
    return item;
  }

  // Update a single item
  Future<void> _updateItem(int itemKey, Map<String, dynamic> item) async {
    await _journalBox.put(itemKey, item);
    _refreshItems(); // Update the UI
  }

  // Update a single item
  Future<void> _updateCategoryItem(int itemKey, Map<String, dynamic> item) async {
    await _categoryBox.put(itemKey, item);
    _refreshItems(); // Update the UI
  }

  // Delete a single item
  Future<void> _deleteItem(int itemKey) async {
    await _journalBox.delete(itemKey);
    await _categoryBox.delete(itemKey);
    _refreshItems(); // update the UI

    // Display a snackbar
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('An item has been deleted')));
  }

  // TextFields' controllers
  final TextEditingController _dateController = TextEditingController();
  final TextEditingController _journalController = TextEditingController();
  final TextEditingController _categoryController = TextEditingController();

  // This function will be triggered when the floating button is pressed
  // It will also be triggered when you want to update an item
  void _showForm(BuildContext ctx, int? itemKey, int? categoryItemKey) async {
    // itemKey == null -> create new item
    // itemKey != null -> update an existing item

    if (itemKey != null) {
      final existingItem =
          _items.firstWhere((element) => element['key'] == itemKey);
      _dateController.text = existingItem['date'];
      _journalController.text = existingItem['journal'];
    }

    if (categoryItemKey != null) {
      final existingCategoryItem =
          _categoryItems.firstWhere((element) => element['key'] == categoryItemKey);
      _dateController.text = existingCategoryItem['date'];
      _categoryController.text = existingCategoryItem['category'];
    }

    showModalBottomSheet(
        context: ctx,
        elevation: 5,
        isScrollControlled: true,
        builder: (_) => Container(
              padding: EdgeInsets.only(
                  bottom: MediaQuery.of(ctx).viewInsets.bottom,
                  top: 15,
                  left: 15,
                  right: 15),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  TextField(
                    controller: _dateController,
                    decoration: const InputDecoration(hintText: 'Date : YYMMDD'),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  TextField(
                    controller: _journalController,
                    keyboardType: TextInputType.multiline,
                    maxLines: 10,
                    decoration: const InputDecoration(hintText: 'Write journals here.'),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  TextField(
                    controller: _categoryController,
                    decoration: const InputDecoration(hintText: 'category #AAA #BBB'),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  ElevatedButton(
                    onPressed: () async {
                      // Save new item
                      if (itemKey == null) {
                        _createItem({
                          "date": _dateController.text,
                          "journal": _journalController.text
                        });
                        _createCategoryItem({
                          "date": _dateController.text,
                          "category": _categoryController.text
                        });
                      }

                      // update an existing item
                      if (itemKey != null) {
                        _updateItem(itemKey, {
                          'date': _dateController.text.trim(),
                          'journal': _journalController.text.trim()
                        });
                        _updateCategoryItem(itemKey, {
                          'date': _dateController.text.trim(),
                          'category': _categoryController.text.trim()
                        });
                      }

                      // Clear the text fields
                      _dateController.text = '';
                      _journalController.text = '';
                      _categoryController.text = '';

                      Navigator.of(context).pop(); // Close the bottom sheet
                    },
                    child: Text(itemKey == null ? 'Create New' : 'Update'),
                  ),
                  const SizedBox(
                    height: 15,
                  )
                ],
              ),
            ));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Simple Diary'),
      ),
      body: _items.isEmpty
          ? const Center(
              child: Text(
                'No Data',
                style: TextStyle(fontSize: 30),
              ),
            )
          : ListView.builder(
              // the list of items
              itemCount: _items.length,
              itemBuilder: (_, index) {
                final currentItem = _items[index];
                final currentCategoryItem = _categoryItems[index];
                return Slidable(
                  key: const ValueKey(0),
                  startActionPane: ActionPane(
                    // A motion is a widget used to control how the pane animates.
                    motion: const ScrollMotion(),

                    // A pane can dismiss the Slidable.
                    //dismissible: DismissiblePane(onDismissed: () {}),

                    // All actions are defined in the children parameter.
                    children: [
                      // A SlidableAction can have an icon and/or a label.
                      SlidableAction(
                        flex: 2,
                        onPressed: doNothing,
                        backgroundColor: Color(0xFF0392CF),
                        foregroundColor: Colors.white,
                        icon: Icons.save,
                        label: 'Save',
                      ),
                      SlidableAction(
                        onPressed: doNothing,
                        backgroundColor: Color(0xFF21B7CA),
                        foregroundColor: Colors.white,
                        icon: Icons.share,
                        label: 'Share',
                      ),
                    ],
                  ),

                  endActionPane: ActionPane(
                    motion: ScrollMotion(),
                    children: [
                      SlidableAction(
                        onPressed: (BuildContext context){
                          print('${currentItem['key']}');
                          _showForm(context, currentItem['key'], currentCategoryItem['key']);
                        },
                        flex: 2,
                        backgroundColor: Color(0xFF7BC043),
                        foregroundColor: Colors.white,
                        icon: Icons.edit,
                        label: 'Edit',
                      ),
                      SlidableAction(
                        onPressed: (BuildContext context){
                          print('${currentItem['key']}');
                          _deleteItem(currentItem['key']);
                        },
                        backgroundColor: Color(0xFFFE4A49),
                        foregroundColor: Colors.white,
                        icon: Icons.delete,
                        label: 'Delete',
                      ),
                    ],
                  ),

                  //color: Colors.orange.shade50,
                  //margin: const EdgeInsets.all(10),
                  //elevation: 3,
                  child: ListTile(
                    contentPadding : EdgeInsets.symmetric(horizontal: 10.0, vertical: 10.0),
                    tileColor: Colors.primaries[Random().nextInt(Colors.primaries.length)].withOpacity(0.1),
                    title: Text(currentItem['date']),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        const SizedBox(
                          height: 8,
                        ),
                        Text(
                          currentItem['journal'].toString(),
                          textAlign: TextAlign.left,
                        ),
                        const SizedBox(
                          height: 5,
                        ),
                        Text(
                          currentCategoryItem['category'].toString(),
                          textAlign: TextAlign.justify,
                        ),
                      ],
                    ),
                  ),
                );
              }),
      // Add new item button
      floatingActionButton: FloatingActionButton(
        onPressed: () => _showForm(context, null, null),
        child: const Icon(Icons.add),
      ),
    );
  }
}

void doNothing(BuildContext context) {
}
