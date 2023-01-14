// main.dart
import 'dart:math';
import 'package:path_provider/path_provider.dart';
import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'dart:async';
import 'diary.model.dart';
import 'package:intl/intl.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Hive.initFlutter();

  Hive.registerAdapter(DiaryModelAdapter());
  var dir = await getApplicationDocumentsDirectory();
  Hive.init(dir.path);
  await Hive.openBox('diary_box');

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Simple Diary',
      theme: ThemeData(primaryColor: Colors.black),
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

  final _diaryBox = Hive.box('diary_box');

  @override
  void initState() {
    super.initState();
    _refreshItems(); // Load data when app starts
  }

  // Get all items from the database
  void _refreshItems() {
    final data = _diaryBox.keys.map((key) {
      final value = _diaryBox.get(key);
      return {
        "key": key,
        "id": value["id"],
        "title": value["title"],
        "bodyJournal": value["bodyJournal"],
        "category": value["category"],
        "dateJournal": value["dateJournal"],
        "isStared": value['isStared']
      };
    }).toList();

    setState(() {
      _items = data.reversed.toList();
      // we use "reversed" to sort items in order from the latest to the oldest
    });
  }

  // Create new item
  Future<void> _createItem(Map<String, dynamic> newItem) async {
    await _diaryBox.add(newItem);
    _refreshItems(); // update the UI
  }

  // Retrieve a single item from the database by using its key
  // Our app won't use this function but I put it here for your reference
  Map<String, dynamic> _readItem(int key) {
    final item = _diaryBox.get(key);
    return item;
  }

  // Update a single item
  Future<void> _updateItem(int itemKey, Map<String, dynamic> item) async {
    await _diaryBox.put(itemKey, item);
    _refreshItems(); // Update the UI
  }

  // Delete a single item
  Future<void> _deleteItem(int itemKey) async {
    await _diaryBox.delete(itemKey);
    _refreshItems(); // update the UI

    // Display a snackbar
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('An item has been deleted')));
  }

  // TextFields' controllers
  final TextEditingController _idController = TextEditingController();
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _journalController = TextEditingController();
  final TextEditingController _categoryController = TextEditingController();
  final TextEditingController _isStaredController = TextEditingController();

  // This function will be triggered when the floating button is pressed
  // It will also be triggered when you want to update an item
  void _showForm(BuildContext ctx, int? itemKey) async {
    // itemKey == null -> create new item
    // itemKey != null -> update an existing item

    if (itemKey != null) {
      final existingItem =
          _items.firstWhere((element) => element['key'] == itemKey);
      _idController.text = existingItem['id'];
      _titleController.text = existingItem['title'];
      _journalController.text = existingItem['bodyJournal'];
      _categoryController.text = existingItem['category'];
      _isStaredController.text = existingItem['isStared'];
    }

    showModalBottomSheet(
        context: ctx,
        elevation: 5,
        isScrollControlled: true,
        builder: (_) => Container(
              padding: EdgeInsets.only(
                  bottom: MediaQuery.of(ctx).viewInsets.bottom,
                  top: 10,
                  left: 15,
                  right: 15),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  TextField(
                    style: TextStyle(fontWeight: FontWeight.bold),
                    controller: _titleController,
                    decoration: const InputDecoration(hintText: 'Title'),
                  ),
                  const SizedBox(
                    height: 5,
                  ),
                  TextField(
                    controller: _journalController,
                    keyboardType: TextInputType.multiline,
                    maxLines: 8,
                    decoration:
                        const InputDecoration(hintText: 'Write journals here.'),
                  ),
                  const SizedBox(
                    height: 5,
                  ),
                  TextField(
                    controller: _categoryController,
                    decoration:
                        const InputDecoration(hintText: 'category #AAA #BBB'),
                  ),
                  const SizedBox(
                    height: 5,
                  ),
                  TextField(
                    controller: _idController,
                    decoration:
                        const InputDecoration(hintText: 'Enter your ID'),
                  ),
                  const SizedBox(
                    height: 5,
                  ),
                  TextField(
                    controller: _isStaredController,
                    decoration:
                        const InputDecoration(hintText: 'isStared option(ING)'),
                  ),
                  const SizedBox(
                    height: 5,
                  ),
                  ElevatedButton(
                    onPressed: () async {
                      // Save new item
                      if (itemKey == null) {
                        _createItem({
                          "id": _idController.text,
                          "title": _titleController.text,
                          "bodyJournal": _journalController.text,
                          "category": _categoryController.text,
                          "dateJournal":
                              DateFormat('yyyy-MM-dd').format(DateTime.now()),
                          "isStared": _isStaredController.text,
                        });
                      }

                      // update an existing item
                      if (itemKey != null) {
                        _updateItem(itemKey, {
                          'id': _idController.text.hashCode,
                          'title': _titleController.text.trim(),
                          'bodyJournal': _journalController.text.trim(),
                          'category': _categoryController.text.trim(),
                          'dateJournal':
                              DateFormat('yyyy-MM-dd').format(DateTime.now()),
                          'isStared': _isStaredController.text.trim(),
                        });
                      }

                      // Clear the text fields
                      _idController.text = '';
                      _titleController.text = '';
                      _journalController.text = '';
                      _categoryController.text = '';
                      _isStaredController.text = '';

                      Navigator.of(context).pop(); // Close the bottom sheet
                    },
                    child: Text(itemKey == null ? 'Create New' : 'Update'),
                  ),
                  const SizedBox(
                    height: 10,
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
                return Slidable(
                  key: const ValueKey(0),
                  startActionPane: const ActionPane(
                    // A motion is a widget used to control how the pane animates.
                    motion: ScrollMotion(),

                    // A pane can dismiss the Slidable.
                    //dismissible: DismissiblePane(onDismissed: () {}),

                    // All actions are defined in the children parameter.
                    children: [
                      // A SlidableAction can have an icon and/or a label.
                      SlidableAction(
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
                    motion: const ScrollMotion(),
                    children: [
                      SlidableAction(
                        flex: 2,
                        onPressed: (_) =>
                            _showForm(context, currentItem['key']),
                        backgroundColor: Color(0xFF7BC043),
                        foregroundColor: Colors.white,
                        icon: Icons.edit,
                        label: 'Edit',
                      ),
                      SlidableAction(
                        onPressed: (BuildContext context) {
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
                    onTap: () => _showForm(context, currentItem['key']),
                    contentPadding:
                        EdgeInsets.symmetric(horizontal: 10.0, vertical: 10.0),
                    tileColor: Colors.primaries[(currentItem['key'] % 20)]
                        .withOpacity(0.2),
                    title: Text(
                      currentItem['title'],
                      style:
                          TextStyle(fontWeight: FontWeight.bold, fontSize: 15),
                    ),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        const SizedBox(
                          height: 8,
                        ),
                        Text(
                          currentItem['bodyJournal'].toString(),
                          textAlign: TextAlign.left,
                        ),
                        const SizedBox(
                          height: 5,
                        ),
                        Text(
                          currentItem['category'].toString(),
                          textAlign: TextAlign.justify,
                        ),
                        Text(
                          currentItem['id'].toString(),
                          textAlign: TextAlign.justify,
                        ),
                        Text(
                          currentItem['dateJournal'].toString(),
                          textAlign: TextAlign.justify,
                          style: TextStyle(color: Colors.grey, fontSize: 10),
                        ),
                      ],
                    ),
                  ),
                );
              }),
      // Add new item button
      floatingActionButton: FloatingActionButton(
        onPressed: () => _showForm(context, null),
        child: const Icon(Icons.add),
      ),
    );
  }
}

void doNothing(BuildContext context) {}
