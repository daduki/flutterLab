import 'package:hive/hive.dart';
import 'package:json_annotation/json_annotation.dart';

part 'person.g.dart';

@HiveType(typeId: 1)
class Person {
  @HiveField(0)
  final String name;

  @HiveField(1)
  final String country;

  @HiveField(2)
  final String phoneNumber;

  @HiveField(3)
  final String email;

  Person({
    required this.name,
    required this.country,
    required this.phoneNumber,
    required this.email,
  });
}
