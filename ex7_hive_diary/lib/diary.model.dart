import 'package:hive/hive.dart';

part 'diary.model.g.dart';

@HiveType(typeId: 1)
class DiaryModel {
  @HiveField(0)
  String id;
  @HiveField(1)
  String title;
  @HiveField(2)
  String bodyJournal;
  @HiveField(3)
  String? category;
  @HiveField(4)
  DateTime? dateJournal;
  @HiveField(5)
  String? isStared;
  DiaryModel(this.id, this.title, this.bodyJournal, this.category,
      this.dateJournal, this.isStared);
}
