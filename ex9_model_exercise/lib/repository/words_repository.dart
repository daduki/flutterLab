import 'package:ex9_model_exercise/models/words.dart';

class WordsRepository {
  final List<Words> _dummyWords = [
    Words(
      word: '来得及',
      pinyin: 'lái ‧de jí',
      description: '늦지 않다',
      example: '现在就去, 也许还来得及',
      examplePinyin: 'xiànzài jiù qù yĕxŭ hái láidéjí',
      exampleDesc: '지금 곧 가면 아마 아직 늦지 않을 것이다',
    ),
    Words(
      word: '散步',
      pinyin: 'sàn bù',
      description: '산보하다, 산책하다',
      example: '在河边散步',
      examplePinyin: 'zài hébiān sànbù',
      exampleDesc: '강가에서 산책하다',
    ),
    Words(
      word: '失望',
      pinyin: 'shīwàng',
      description: '실망하다, 낙담하다, 예상치 못하다',
      example: '大失所望, 感到失望',
      examplePinyin: 'dàshīsuŏwàng, găndào shīwàng',
      exampleDesc: '크게 실망하다, 낙담하다',
    ),
  ];

  List<Words> getWords() {
    return _dummyWords;
  }
}
