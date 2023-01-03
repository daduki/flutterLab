define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const html = dart_sdk.html;
  const indexed_db = dart_sdk.indexed_db;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = flutter_sdk.src__widgets__framework;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const binding = flutter_sdk.src__widgets__binding;
  const change_notifier = flutter_sdk.src__foundation__change_notifier;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const floating_action_button = flutter_sdk.src__material__floating_action_button;
  const navigator = flutter_sdk.src__widgets__navigator;
  const page = flutter_sdk.src__material__page;
  const icon = flutter_sdk.src__widgets__icon;
  const icons = flutter_sdk.src__material__icons;
  const value_listenable_builder = flutter_sdk.src__widgets__value_listenable_builder;
  const basic = flutter_sdk.src__widgets__basic;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const ink_well = flutter_sdk.src__material__ink_well;
  const list_tile = flutter_sdk.src__material__list_tile;
  const icon_button = flutter_sdk.src__material__icon_button;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const form = flutter_sdk.src__widgets__form;
  const editable_text = flutter_sdk.src__widgets__editable_text;
  const flex = flutter_sdk.src__rendering__flex;
  const text_form_field = flutter_sdk.src__material__text_form_field;
  const spacer = flutter_sdk.src__widgets__spacer;
  const container = flutter_sdk.src__widgets__container;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const queue_list = flutter_sdk.src__queue_list;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var hive_flutter = Object.create(dart.library);
  var person = Object.create(dart.library);
  var info_screen = Object.create(dart.library);
  var hive = Object.create(dart.library);
  var path_provider = Object.create(dart.library);
  var path = Object.create(dart.library);
  var update_screen = Object.create(dart.library);
  var add_screen = Object.create(dart.library);
  var crypto = Object.create(dart.library);
  var default_compaction_strategy = Object.create(dart.library);
  var default_key_comparator = Object.create(dart.library);
  var aes_cbc_pkcs7 = Object.create(dart.library);
  var crc32 = Object.create(dart.library);
  var hive_impl = Object.create(dart.library);
  var hive_list_impl = Object.create(dart.library);
  var hive_object = Object.create(dart.library);
  var extensions = Object.create(dart.library);
  var box_collection_indexed_db = Object.create(dart.library);
  var update_person_form = Object.create(dart.library);
  var add_person_form = Object.create(dart.library);
  var digest = Object.create(dart.library);
  var hash = Object.create(dart.library);
  var hmac = Object.create(dart.library);
  var md5 = Object.create(dart.library);
  var sha1 = Object.create(dart.library);
  var sha256 = Object.create(dart.library);
  var sha512 = Object.create(dart.library);
  var aes_engine = Object.create(dart.library);
  var big_int_adapter = Object.create(dart.library);
  var date_time_adapter = Object.create(dart.library);
  var storage_backend_memory = Object.create(dart.library);
  var box_base_impl = Object.create(dart.library);
  var box_impl = Object.create(dart.library);
  var lazy_box_impl = Object.create(dart.library);
  var type_registry_impl = Object.create(dart.library);
  var storage_backend = Object.create(dart.library);
  var hive_collection_mixin = Object.create(dart.library);
  var delegating_list_view_mixin = Object.create(dart.library);
  var box_collection_stub = Object.create(dart.library);
  var digest_sink = Object.create(dart.library);
  var hash_sink = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var sha512_slowsinks = Object.create(dart.library);
  var aes_tables = Object.create(dart.library);
  var frame$ = Object.create(dart.library);
  var frame_helper = Object.create(dart.library);
  var keystore$ = Object.create(dart.library);
  var change_notifier$ = Object.create(dart.library);
  var ignored_type_adapter = Object.create(dart.library);
  var backend_manager = Object.create(dart.library);
  var typed_data$ = Object.create(dart.library);
  var binary_reader_impl = Object.create(dart.library);
  var indexable_skip_list = Object.create(dart.library);
  var backend_manager$ = Object.create(dart.library);
  var typed_queue = Object.create(dart.library);
  var typed_buffers = Object.create(dart.library);
  var storage_backend_js = Object.create(dart.library);
  var typed_buffer = Object.create(dart.library);
  var binary_writer_impl = Object.create(dart.library);
  var $toString = dartx.toString;
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $_equals = dartx._equals;
  var $contains = dartx.contains;
  var $toSet = dartx.toSet;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $hashCode = dartx.hashCode;
  var $runtimeType = dartx.runtimeType;
  var $length = dartx.length;
  var $any = dartx.any;
  var $setAll = dartx.setAll;
  var $iterator = dartx.iterator;
  var $compareTo = dartx.compareTo;
  var $truncate = dartx.truncate;
  var $modulo = dartx['%'];
  var $setRange = dartx.setRange;
  var $fillRange = dartx.fillRange;
  var $rightShift = dartx['>>'];
  var $toLowerCase = dartx.toLowerCase;
  var $containsKey = dartx.containsKey;
  var $values = dartx.values;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $clear = dartx.clear;
  var $addAll = dartx.addAll;
  var $cast = dartx.cast;
  var $first = dartx.first;
  var $last = dartx.last;
  var $plus = dartx['+'];
  var $asMap = dartx.asMap;
  var $elementAt = dartx.elementAt;
  var $every = dartx.every;
  var $expand = dartx.expand;
  var $firstWhere = dartx.firstWhere;
  var $fold = dartx.fold;
  var $followedBy = dartx.followedBy;
  var $forEach = dartx.forEach;
  var $getRange = dartx.getRange;
  var $indexOf = dartx.indexOf;
  var $indexWhere = dartx.indexWhere;
  var $isNotEmpty = dartx.isNotEmpty;
  var $join = dartx.join;
  var $lastIndexOf = dartx.lastIndexOf;
  var $lastIndexWhere = dartx.lastIndexWhere;
  var $lastWhere = dartx.lastWhere;
  var $reduce = dartx.reduce;
  var $reversed = dartx.reversed;
  var $single = dartx.single;
  var $singleWhere = dartx.singleWhere;
  var $skip = dartx.skip;
  var $skipWhile = dartx.skipWhile;
  var $sublist = dartx.sublist;
  var $take = dartx.take;
  var $takeWhile = dartx.takeWhile;
  var $where = dartx.where;
  var $whereType = dartx.whereType;
  var $keys = dartx.keys;
  var $codeUnits = dartx.codeUnits;
  var $buffer = dartx.buffer;
  var $offsetInBytes = dartx.offsetInBytes;
  var $indexedDB = dartx.indexedDB;
  var $result = dartx.result;
  var $target = dartx.target;
  var $open = dartx.open;
  var $transaction = dartx.transaction;
  var $completed = dartx.completed;
  var $deleteDatabase = dartx.deleteDatabase;
  var $objectStore = dartx.objectStore;
  var $getAllKeys = dartx.getAllKeys;
  var $onSuccess = dartx.onSuccess;
  var $openCursor = dartx.openCursor;
  var $value = dartx.value;
  var $getObject = dartx.getObject;
  var $put = dartx.put;
  var $delete = dartx.delete;
  var $codeUnitAt = dartx.codeUnitAt;
  var $asUint8List = dartx.asUint8List;
  var $lengthInBytes = dartx.lengthInBytes;
  var $asByteData = dartx.asByteData;
  var $setUint32 = dartx.setUint32;
  var $getUint32 = dartx.getUint32;
  var $removeRange = dartx.removeRange;
  var $leftShift = dartx['<<'];
  var $asUint32List = dartx.asUint32List;
  var $getInt32 = dartx.getInt32;
  var $toInt = dartx.toInt;
  var $getFloat64 = dartx.getFloat64;
  var $createObjectStore = dartx.createObjectStore;
  var $noSuchMethod = dartx.noSuchMethod;
  var $onError = dartx.onError;
  var $getAll = dartx.getAll;
  var $elementSizeInBytes = dartx.elementSizeInBytes;
  var $insertAll = dartx.insertAll;
  var $setInt32 = dartx.setInt32;
  var $toDouble = dartx.toDouble;
  var $setFloat64 = dartx.setFloat64;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T$ = {
    VoidTodynamic: () => (T$.VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))(),
    ListOfString: () => (T$.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T$.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.ListOfString()])))(),
    JSArrayOfString: () => (T$.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T$.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T$.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T$.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T$.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfVoidTovoid: () => (T$.JSArrayOfVoidTovoid = dart.constFn(_interceptors.JSArray$(T$.VoidTovoid())))(),
    BoxEventTovoid: () => (T$.BoxEventTovoid = dart.constFn(dart.fnType(dart.void, [hive.BoxEvent])))(),
    ListN: () => (T$.ListN = dart.constFn(dart.nullable(core.List)))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    StringN: () => (T$.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNToFutureOfvoid: () => (T$.StringNToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [], [T$.StringN()])))(),
    IdentityMapOfint$dynamic: () => (T$.IdentityMapOfint$dynamic = dart.constFn(_js_helper.IdentityMap$(core.int, dart.dynamic)))(),
    BuildContextToAddScreen: () => (T$.BuildContextToAddScreen = dart.constFn(dart.fnType(add_screen.AddScreen, [framework.BuildContext])))(),
    ValueListenableBuilderOfBox: () => (T$.ValueListenableBuilderOfBox = dart.constFn(value_listenable_builder.ValueListenableBuilder$(hive.Box)))(),
    BuildContextToUpdateScreen: () => (T$.BuildContextToUpdateScreen = dart.constFn(dart.fnType(update_screen.UpdateScreen, [framework.BuildContext])))(),
    BuildContextAndintToInkWell: () => (T$.BuildContextAndintToInkWell = dart.constFn(dart.fnType(ink_well.InkWell, [framework.BuildContext, core.int])))(),
    WidgetN: () => (T$.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    BuildContextAndBoxAndWidgetNToWidget: () => (T$.BuildContextAndBoxAndWidgetNToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, hive.Box, T$.WidgetN()])))(),
    intTobool: () => (T$.intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))(),
    IdentityMapOfString$BoxBaseImpl: () => (T$.IdentityMapOfString$BoxBaseImpl = dart.constFn(_js_helper.IdentityMap$(core.String, box_base_impl.BoxBaseImpl)))(),
    IdentityMapOfString$Future: () => (T$.IdentityMapOfString$Future = dart.constFn(_js_helper.IdentityMap$(core.String, async.Future)))(),
    DateTimeAdapterOfDateTimeWithoutTZ: () => (T$.DateTimeAdapterOfDateTimeWithoutTZ = dart.constFn(date_time_adapter.DateTimeAdapter$(date_time_adapter.DateTimeWithoutTZ)))(),
    dynamicAnddynamicToint: () => (T$.dynamicAnddynamicToint = dart.constFn(dart.fnType(core.int, [dart.dynamic, dart.dynamic])))(),
    intAndintTobool: () => (T$.intAndintTobool = dart.constFn(dart.fnType(core.bool, [core.int, core.int])))(),
    BoxBaseImplToFutureOfvoid: () => (T$.BoxBaseImplToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [box_base_impl.BoxBaseImpl])))(),
    IdentityMapOfint$ResolvedAdapter: () => (T$.IdentityMapOfint$ResolvedAdapter = dart.constFn(_js_helper.IdentityMap$(core.int, type_registry_impl.ResolvedAdapter)))(),
    HiveListOfHiveObjectMixin: () => (T$.HiveListOfHiveObjectMixin = dart.constFn(hive.HiveList$(hive_object.HiveObjectMixin)))(),
    LinkedMapOfHiveListOfHiveObjectMixin$int: () => (T$.LinkedMapOfHiveListOfHiveObjectMixin$int = dart.constFn(_js_helper.LinkedMap$(T$.HiveListOfHiveObjectMixin(), core.int)))(),
    dynamicAndBoxBaseTovoid: () => (T$.dynamicAndBoxBaseTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, hive.BoxBase])))(),
    HiveListImplOfHiveObjectMixin: () => (T$.HiveListImplOfHiveObjectMixin = dart.constFn(hive_list_impl.HiveListImpl$(hive_object.HiveObjectMixin)))(),
    HiveListOfHiveObjectMixinTovoid: () => (T$.HiveListOfHiveObjectMixinTovoid = dart.constFn(dart.fnType(dart.void, [T$.HiveListOfHiveObjectMixin()])))(),
    HiveListOfHiveObjectMixinTobool: () => (T$.HiveListOfHiveObjectMixinTobool = dart.constFn(dart.fnType(core.bool, [T$.HiveListOfHiveObjectMixin()])))(),
    intToint: () => (T$.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    intAndintTovoid: () => (T$.intAndintTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.int])))(),
    intAndintToUint8List: () => (T$.intAndintToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [core.int, core.int])))(),
    intToUint8List: () => (T$.intToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [core.int])))(),
    JSArrayOfCollectionBox: () => (T$.JSArrayOfCollectionBox = dart.constFn(_interceptors.JSArray$(box_collection_indexed_db.CollectionBox)))(),
    VersionChangeEventTovoid: () => (T$.VersionChangeEventTovoid = dart.constFn(dart.fnType(dart.void, [indexed_db.VersionChangeEvent])))(),
    CollectionBoxTobool: () => (T$.CollectionBoxTobool = dart.constFn(dart.fnType(core.bool, [box_collection_indexed_db.CollectionBox])))(),
    TransactionToFutureOfvoid: () => (T$.TransactionToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [indexed_db.Transaction])))(),
    JSArrayOfTransactionToFutureOfvoid: () => (T$.JSArrayOfTransactionToFutureOfvoid = dart.constFn(_interceptors.JSArray$(T$.TransactionToFutureOfvoid())))(),
    ListOfTransactionToFutureOfvoid: () => (T$.ListOfTransactionToFutureOfvoid = dart.constFn(core.List$(T$.TransactionToFutureOfvoid())))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    ListOfObjectN: () => (T$.ListOfObjectN = dart.constFn(core.List$(T$.ObjectN())))(),
    MapOfString$ObjectN: () => (T$.MapOfString$ObjectN = dart.constFn(core.Map$(core.String, T$.ObjectN())))(),
    StringTobool: () => (T$.StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))(),
    GlobalKeyOfFormState: () => (T$.GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))(),
    TextEditingControllerN: () => (T$.TextEditingControllerN = dart.constFn(dart.nullable(editable_text.TextEditingController)))(),
    JSArrayOfWidget: () => (T$.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    ListOfint: () => (T$.ListOfint = dart.constFn(core.List$(core.int)))(),
    SinkOfDigest: () => (T$.SinkOfDigest = dart.constFn(core.Sink$(digest.Digest)))(),
    JSArrayOfint: () => (T$.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    ListOfUint32List: () => (T$.ListOfUint32List = dart.constFn(core.List$(typed_data.Uint32List)))(),
    intToUint32List: () => (T$.intToUint32List = dart.constFn(dart.fnType(typed_data.Uint32List, [core.int])))(),
    IterableOfint: () => (T$.IterableOfint = dart.constFn(core.Iterable$(core.int)))(),
    JSArrayOfFrame: () => (T$.JSArrayOfFrame = dart.constFn(_interceptors.JSArray$(frame$.Frame)))(),
    LinkedMapOfdynamic$Frame: () => (T$.LinkedMapOfdynamic$Frame = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, frame$.Frame)))(),
    IndexableSkipListOfdynamic$Frame: () => (T$.IndexableSkipListOfdynamic$Frame = dart.constFn(indexable_skip_list.IndexableSkipList$(dart.dynamic, frame$.Frame)))(),
    StreamControllerOfBoxEvent: () => (T$.StreamControllerOfBoxEvent = dart.constFn(async.StreamController$(hive.BoxEvent)))(),
    BoxEventTobool: () => (T$.BoxEventTobool = dart.constFn(dart.fnType(core.bool, [hive.BoxEvent])))(),
    ListOfdouble: () => (T$.ListOfdouble = dart.constFn(core.List$(core.double)))(),
    ListOfbool: () => (T$.ListOfbool = dart.constFn(core.List$(core.bool)))(),
    intN: () => (T$.intN = dart.constFn(dart.nullable(core.int)))(),
    ListOfintN: () => (T$.ListOfintN = dart.constFn(core.List$(T$.intN())))(),
    doubleN: () => (T$.doubleN = dart.constFn(dart.nullable(core.double)))(),
    ListOfdoubleN: () => (T$.ListOfdoubleN = dart.constFn(core.List$(T$.doubleN())))(),
    Int32x4N: () => (T$.Int32x4N = dart.constFn(dart.nullable(typed_data.Int32x4)))(),
    ListOfInt32x4N: () => (T$.ListOfInt32x4N = dart.constFn(core.List$(T$.Int32x4N())))(),
    Float32x4N: () => (T$.Float32x4N = dart.constFn(dart.nullable(typed_data.Float32x4)))(),
    ListOfFloat32x4N: () => (T$.ListOfFloat32x4N = dart.constFn(core.List$(T$.Float32x4N())))(),
    ListOfnum: () => (T$.ListOfnum = dart.constFn(core.List$(core.num)))(),
    CompleterOfList: () => (T$.CompleterOfList = dart.constFn(async.Completer$(core.List)))(),
    EventTovoid: () => (T$.EventTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))(),
    CursorWithValueToObjectN: () => (T$.CursorWithValueToObjectN = dart.constFn(dart.fnType(T$.ObjectN(), [indexed_db.CursorWithValue])))(),
    CompleterOfIterable: () => (T$.CompleterOfIterable = dart.constFn(async.Completer$(core.Iterable)))(),
    CursorWithValueTodynamic: () => (T$.CursorWithValueTodynamic = dart.constFn(dart.fnType(dart.dynamic, [indexed_db.CursorWithValue])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T$.VoidTodynamic());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: convert.Utf8Decoder.prototype,
        [Utf8Decoder__allowMalformed]: false
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: convert.Utf8Encoder.prototype
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: hive.HiveStorageBackendPreference.prototype,
        [_Enum__name]: "native",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: hive.HiveStorageBackendPreference.prototype,
        [_Enum__name]: "webWorker",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.constList([C[4] || CT.C4, C[5] || CT.C5], hive.HiveStorageBackendPreference);
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C7() {
      return C[7] = dart.constList([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], core.int);
    },
    get C8() {
      return C[8] = dart.fn(default_key_comparator.defaultKeyComparator, T$.dynamicAnddynamicToint());
    },
    get C9() {
      return C[9] = dart.fn(default_compaction_strategy.defaultCompactionStrategy, T$.intAndintTobool());
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: type_registry_impl._NullTypeRegistry.prototype
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 24,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: typed_data.Endian.prototype,
        [Endian__littleEndian]: false
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: md5._MD5.prototype,
        [blockSize]: 64
      });
    },
    get C14() {
      return C[14] = dart.constList([3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690, 4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745], core.int);
    },
    get C15() {
      return C[15] = dart.constList([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21], core.int);
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: sha1._Sha1.prototype,
        [blockSize$]: 64
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: sha256._Sha256.prototype,
        [blockSize$0]: 64
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: sha256._Sha224.prototype,
        [blockSize$1]: 64
      });
    },
    get C19() {
      return C[19] = dart.constList([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], core.int);
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: sha512._Sha384.prototype,
        [blockSize$2]: 128
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: sha512._Sha512.prototype,
        [blockSize$3]: 128
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: sha512._Sha512224.prototype,
        [blockSize$4]: 128
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: sha512._Sha512256.prototype,
        [blockSize$5]: 128
      });
    },
    get C24() {
      return C[24] = dart.constList([99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], core.int);
    },
    get C25() {
      return C[25] = dart.constList([82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], core.int);
    },
    get C26() {
      return C[26] = dart.constList([1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145], core.int);
    },
    get C27() {
      return C[27] = dart.constList([2774754246, 2222750968, 2574743534, 2373680118, 234025727, 3177933782, 2976870366, 1422247313, 1345335392, 50397442, 2842126286, 2099981142, 436141799, 1658312629, 3870010189, 2591454956, 1170918031, 2642575903, 1086966153, 2273148410, 368769775, 3948501426, 3376891790, 200339707, 3970805057, 1742001331, 4255294047, 3937382213, 3214711843, 4154762323, 2524082916, 1539358875, 3266819957, 486407649, 2928907069, 1780885068, 1513502316, 1094664062, 49805301, 1338821763, 1546925160, 4104496465, 887481809, 150073849, 2473685474, 1943591083, 1395732834, 1058346282, 201589768, 1388824469, 1696801606, 1589887901, 672667696, 2711000631, 251987210, 3046808111, 151455502, 907153956, 2608889883, 1038279391, 652995533, 1764173646, 3451040383, 2675275242, 453576978, 2659418909, 1949051992, 773462580, 756751158, 2993581788, 3998898868, 4221608027, 4132590244, 1295727478, 1641469623, 3467883389, 2066295122, 1055122397, 1898917726, 2542044179, 4115878822, 1758581177, 0, 753790401, 1612718144, 536673507, 3367088505, 3982187446, 3194645204, 1187761037, 3653156455, 1262041458, 3729410708, 3561770136, 3898103984, 1255133061, 1808847035, 720367557, 3853167183, 385612781, 3309519750, 3612167578, 1429418854, 2491778321, 3477423498, 284817897, 100794884, 2172616702, 4031795360, 1144798328, 3131023141, 3819481163, 4082192802, 4272137053, 3225436288, 2324664069, 2912064063, 3164445985, 1211644016, 83228145, 3753688163, 3249976951, 1977277103, 1663115586, 806359072, 452984805, 250868733, 1842533055, 1288555905, 336333848, 890442534, 804056259, 3781124030, 2727843637, 3427026056, 957814574, 1472513171, 4071073621, 2189328124, 1195195770, 2892260552, 3881655738, 723065138, 2507371494, 2690670784, 2558624025, 3511635870, 2145180835, 1713513028, 2116692564, 2878378043, 2206763019, 3393603212, 703524551, 3552098411, 1007948840, 2044649127, 3797835452, 487262998, 1994120109, 1004593371, 1446130276, 1312438900, 503974420, 3679013266, 168166924, 1814307912, 3831258296, 1573044895, 1859376061, 4021070915, 2791465668, 2828112185, 2761266481, 937747667, 2339994098, 854058965, 1137232011, 1496790894, 3077402074, 2358086913, 1691735473, 3528347292, 3769215305, 3027004632, 4199962284, 133494003, 636152527, 2942657994, 2390391540, 3920539207, 403179536, 3585784431, 2289596656, 1864705354, 1915629148, 605822008, 4054230615, 3350508659, 1371981463, 602466507, 2094914977, 2624877800, 555687742, 3712699286, 3703422305, 2257292045, 2240449039, 2423288032, 1111375484, 3300242801, 2858837708, 3628615824, 84083462, 32962295, 302911004, 2741068226, 1597322602, 4183250862, 3501832553, 2441512471, 1489093017, 656219450, 3114180135, 954327513, 335083755, 3013122091, 856756514, 3144247762, 1893325225, 2307821063, 2811532339, 3063651117, 572399164, 2458355477, 552200649, 1238290055, 4283782570, 2015897680, 2061492133, 2408352771, 4171342169, 2156497161, 386731290, 3669999461, 837215959, 3326231172, 3093850320, 3275833730, 2962856233, 1999449434, 286199582, 3417354363, 4233385128, 3602627437, 974525996], core.int);
    },
    get C28() {
      return C[28] = dart.constList([1667483301, 2088564868, 2004348569, 2071721613, 4076011277, 1802229437, 1869602481, 3318059348, 808476752, 16843267, 1734856361, 724260477, 4278118169, 3621238114, 2880130534, 1987505306, 3402272581, 2189565853, 3385428288, 2105408135, 4210749205, 1499050731, 1195871945, 4042324747, 2913812972, 3570709351, 2728550397, 2947499498, 2627478463, 2762232823, 1920132246, 3233848155, 3082253762, 4261273884, 2475900334, 640044138, 909536346, 1061125697, 4160222466, 3435955023, 875849820, 2779075060, 3857043764, 4059166984, 1903288979, 3638078323, 825320019, 353708607, 67373068, 3351745874, 589514341, 3284376926, 404238376, 2526427041, 84216335, 2593796021, 117902857, 303178806, 2155879323, 3806519101, 3958099238, 656887401, 2998042573, 1970662047, 151589403, 2206408094, 741103732, 437924910, 454768173, 1852759218, 1515893998, 2694863867, 1381147894, 993752653, 3604395873, 3014884814, 690573947, 3823361342, 791633521, 2223248279, 1397991157, 3520182632, 0, 3991781676, 538984544, 4244431647, 2981198280, 1532737261, 1785386174, 3419114822, 3200149465, 960066123, 1246401758, 1280088276, 1482207464, 3486483786, 3503340395, 4025468202, 2863288293, 4227591446, 1128498885, 1296931543, 859006549, 2240090516, 1162185423, 4193904912, 33686534, 2139094657, 1347461360, 1010595908, 2678007226, 2829601763, 1364304627, 2745392638, 1077969088, 2408514954, 2459058093, 2644320700, 943222856, 4126535940, 3166462943, 3065411521, 3671764853, 555827811, 269492272, 4294960410, 4092853518, 3537026925, 3452797260, 202119188, 320022069, 3974939439, 1600110305, 2543269282, 1145342156, 387395129, 3301217111, 2812761586, 2122251394, 1027439175, 1684326572, 1566423783, 421081643, 1936975509, 1616953504, 2172721560, 1330618065, 3705447295, 572671078, 707417214, 2425371563, 2290617219, 1179028682, 4008625961, 3099093971, 336865340, 3739133817, 1583267042, 185275933, 3688607094, 3772832571, 842163286, 976909390, 168432670, 1229558491, 101059594, 606357612, 1549580516, 3267534685, 3553869166, 2896970735, 1650640038, 2442213800, 2509582756, 3840201527, 2038035083, 3890730290, 3368586051, 926379609, 1835915959, 2374828428, 3587551588, 1313774802, 2846444000, 1819072692, 1448520954, 4109693703, 3941256997, 1701169839, 2054878350, 2930657257, 134746136, 3132780501, 2021191816, 623200879, 774790258, 471611428, 2795919345, 3031724999, 3334903633, 3907570467, 3722289532, 1953818780, 522141217, 1263245021, 3183305180, 2341145990, 2324303749, 1886445712, 1044282434, 3048567236, 1718013098, 1212715224, 50529797, 4143380225, 235805714, 1633796771, 892693087, 1465364217, 3115936208, 2256934801, 3250690392, 488454695, 2661164985, 3789674808, 4177062675, 2560109491, 286335539, 1768542907, 3654920560, 2391672713, 2492740519, 2610638262, 505297954, 2273777042, 3924412704, 3469641545, 1431677695, 673730680, 3755976058, 2357986191, 2711706104, 2307459456, 218962455, 3216991706, 3873888049, 1111655622, 1751699640, 1094812355, 2576951728, 757946999, 252648977, 2964356043, 1414834428, 3149622742, 370551866], core.int);
    },
    get C29() {
      return C[29] = dart.constList([1673962851, 2096661628, 2012125559, 2079755643, 4076801522, 1809235307, 1876865391, 3314635973, 811618352, 16909057, 1741597031, 727088427, 4276558334, 3618988759, 2874009259, 1995217526, 3398387146, 2183110018, 3381215433, 2113570685, 4209972730, 1504897881, 1200539975, 4042984432, 2906778797, 3568527316, 2724199842, 2940594863, 2619588508, 2756966308, 1927583346, 3231407040, 3077948087, 4259388669, 2470293139, 642542118, 913070646, 1065238847, 4160029431, 3431157708, 879254580, 2773611685, 3855693029, 4059629809, 1910674289, 3635114968, 828527409, 355090197, 67636228, 3348452039, 591815971, 3281870531, 405809176, 2520228246, 84545285, 2586817946, 118360327, 304363026, 2149292928, 3806281186, 3956090603, 659450151, 2994720178, 1978310517, 152181513, 2199756419, 743994412, 439627290, 456535323, 1859957358, 1521806938, 2690382752, 1386542674, 997608763, 3602342358, 3011366579, 693271337, 3822927587, 794718511, 2215876484, 1403450707, 3518589137, 0, 3988860141, 541089824, 4242743292, 2977548465, 1538714971, 1792327274, 3415033547, 3194476990, 963791673, 1251270218, 1285084236, 1487988824, 3481619151, 3501943760, 4022676207, 2857362858, 4226619131, 1132905795, 1301993293, 862344499, 2232521861, 1166724933, 4192801017, 33818114, 2147385727, 1352724560, 1014514748, 2670049951, 2823545768, 1369633617, 2740846243, 1082179648, 2399505039, 2453646738, 2636233885, 946882616, 4126213365, 3160661948, 3061301686, 3668932058, 557998881, 270544912, 4293204735, 4093447923, 3535760850, 3447803085, 202904588, 321271059, 3972214764, 1606345055, 2536874647, 1149815876, 388905239, 3297990596, 2807427751, 2130477694, 1031423805, 1690872932, 1572530013, 422718233, 1944491379, 1623236704, 2165938305, 1335808335, 3701702620, 574907938, 710180394, 2419829648, 2282455944, 1183631942, 4006029806, 3094074296, 338181140, 3735517662, 1589437022, 185998603, 3685578459, 3772464096, 845436466, 980700730, 169090570, 1234361161, 101452294, 608726052, 1555620956, 3265224130, 3552407251, 2890133420, 1657054818, 2436475025, 2503058581, 3839047652, 2045938553, 3889509095, 3364570056, 929978679, 1843050349, 2365688973, 3585172693, 1318900302, 2840191145, 1826141292, 1454176854, 4109567988, 3939444202, 1707781989, 2062847610, 2923948462, 135272456, 3127891386, 2029029496, 625635109, 777810478, 473441308, 2790781350, 3027486644, 3331805638, 3905627112, 3718347997, 1961401460, 524165407, 1268178251, 3177307325, 2332919435, 2316273034, 1893765232, 1048330814, 3044132021, 1724688998, 1217452104, 50726147, 4143383030, 236720654, 1640145761, 896163637, 1471084887, 3110719673, 2249691526, 3248052417, 490350365, 2653403550, 3789109473, 4176155640, 2553000856, 287453969, 1775418217, 3651760345, 2382858638, 2486413204, 2603464347, 507257374, 2266337927, 3922272489, 3464972750, 1437269845, 676362280, 3752164063, 2349043596, 2707028129, 2299101321, 219813645, 3211123391, 3872862694, 1115997762, 1758509160, 1099088705, 2569646233, 760903469, 253628687, 2960903088, 1420360788, 3144537787, 371997206], core.int);
    },
    get C30() {
      return C[30] = dart.constList([3332727651, 4169432188, 4003034999, 4136467323, 4279104242, 3602738027, 3736170351, 2438251973, 1615867952, 33751297, 3467208551, 1451043627, 3877240574, 3043153879, 1306962859, 3969545846, 2403715786, 530416258, 2302724553, 4203183485, 4011195130, 3001768281, 2395555655, 4211863792, 1106029997, 3009926356, 1610457762, 1173008303, 599760028, 1408738468, 3835064946, 2606481600, 1975695287, 3776773629, 1034851219, 1282024998, 1817851446, 2118205247, 4110612471, 2203045068, 1750873140, 1374987685, 3509904869, 4178113009, 3801313649, 2876496088, 1649619249, 708777237, 135005188, 2505230279, 1181033251, 2640233411, 807933976, 933336726, 168756485, 800430746, 235472647, 607523346, 463175808, 3745374946, 3441880043, 1315514151, 2144187058, 3936318837, 303761673, 496927619, 1484008492, 875436570, 908925723, 3702681198, 3035519578, 1543217312, 2767606354, 1984772923, 3076642518, 2110698419, 1383803177, 3711886307, 1584475951, 328696964, 2801095507, 3110654417, 0, 3240947181, 1080041504, 3810524412, 2043195825, 3069008731, 3569248874, 2370227147, 1742323390, 1917532473, 2497595978, 2564049996, 2968016984, 2236272591, 3144405200, 3307925487, 1340451498, 3977706491, 2261074755, 2597801293, 1716859699, 294946181, 2328839493, 3910203897, 67502594, 4269899647, 2700103760, 2017737788, 632987551, 1273211048, 2733855057, 1576969123, 2160083008, 92966799, 1068339858, 566009245, 1883781176, 4043634165, 1675607228, 2009183926, 2943736538, 1113792801, 540020752, 3843751935, 4245615603, 3211645650, 2169294285, 403966988, 641012499, 3274697964, 3202441055, 899848087, 2295088196, 775493399, 2472002756, 1441965991, 4236410494, 2051489085, 3366741092, 3135724893, 841685273, 3868554099, 3231735904, 429425025, 2664517455, 2743065820, 1147544098, 1417554474, 1001099408, 193169544, 2362066502, 3341414126, 1809037496, 675025940, 2809781982, 3168951902, 371002123, 2910247899, 3678134496, 1683370546, 1951283770, 337512970, 2463844681, 201983494, 1215046692, 3101973596, 2673722050, 3178157011, 1139780780, 3299238498, 967348625, 832869781, 3543655652, 4069226873, 3576883175, 2336475336, 1851340599, 3669454189, 25988493, 2976175573, 2631028302, 1239460265, 3635702892, 2902087254, 4077384948, 3475368682, 3400492389, 4102978170, 1206496942, 270010376, 1876277946, 4035475576, 1248797989, 1550986798, 941890588, 1475454630, 1942467764, 2538718918, 3408128232, 2709315037, 3902567540, 1042358047, 2531085131, 1641856445, 226921355, 260409994, 3767562352, 2084716094, 1908716981, 3433719398, 2430093384, 100991747, 4144101110, 470945294, 3265487201, 1784624437, 2935576407, 1775286713, 395413126, 2572730817, 975641885, 666476190, 3644383713, 3943954680, 733190296, 573772049, 3535497577, 2842745305, 126455438, 866620564, 766942107, 1008868894, 361924487, 3374377449, 2269761230, 2868860245, 1350051880, 2776293343, 59739276, 1509466529, 159418761, 437718285, 1708834751, 3610371814, 2227585602, 3501746280, 2193834305, 699439513, 1517759789, 504434447, 2076946608, 2835108948, 1842789307, 742004246], core.int);
    },
    get C31() {
      return C[31] = dart.constList([1353184337, 1399144830, 3282310938, 2522752826, 3412831035, 4047871263, 2874735276, 2466505547, 1442459680, 4134368941, 2440481928, 625738485, 4242007375, 3620416197, 2151953702, 2409849525, 1230680542, 1729870373, 2551114309, 3787521629, 41234371, 317738113, 2744600205, 3338261355, 3881799427, 2510066197, 3950669247, 3663286933, 763608788, 3542185048, 694804553, 1154009486, 1787413109, 2021232372, 1799248025, 3715217703, 3058688446, 397248752, 1722556617, 3023752829, 407560035, 2184256229, 1613975959, 1165972322, 3765920945, 2226023355, 480281086, 2485848313, 1483229296, 436028815, 2272059028, 3086515026, 601060267, 3791801202, 1468997603, 715871590, 120122290, 63092015, 2591802758, 2768779219, 4068943920, 2997206819, 3127509762, 1552029421, 723308426, 2461301159, 4042393587, 2715969870, 3455375973, 3586000134, 526529745, 2331944644, 2639474228, 2689987490, 853641733, 1978398372, 971801355, 2867814464, 111112542, 1360031421, 4186579262, 1023860118, 2919579357, 1186850381, 3045938321, 90031217, 1876166148, 4279586912, 620468249, 2548678102, 3426959497, 2006899047, 3175278768, 2290845959, 945494503, 3689859193, 1191869601, 3910091388, 3374220536, 0, 2206629897, 1223502642, 2893025566, 1316117100, 4227796733, 1446544655, 517320253, 658058550, 1691946762, 564550760, 3511966619, 976107044, 2976320012, 266819475, 3533106868, 2660342555, 1338359936, 2720062561, 1766553434, 370807324, 179999714, 3844776128, 1138762300, 488053522, 185403662, 2915535858, 3114841645, 3366526484, 2233069911, 1275557295, 3151862254, 4250959779, 2670068215, 3170202204, 3309004356, 880737115, 1982415755, 3703972811, 1761406390, 1676797112, 3403428311, 277177154, 1076008723, 538035844, 2099530373, 4164795346, 288553390, 1839278535, 1261411869, 4080055004, 3964831245, 3504587127, 1813426987, 2579067049, 4199060497, 577038663, 3297574056, 440397984, 3626794326, 4019204898, 3343796615, 3251714265, 4272081548, 906744984, 3481400742, 685669029, 646887386, 2764025151, 3835509292, 227702864, 2613862250, 1648787028, 3256061430, 3904428176, 1593260334, 4121936770, 3196083615, 2090061929, 2838353263, 3004310991, 999926984, 2809993232, 1852021992, 2075868123, 158869197, 4095236462, 28809964, 2828685187, 1701746150, 2129067946, 147831841, 3873969647, 3650873274, 3459673930, 3557400554, 3598495785, 2947720241, 824393514, 815048134, 3227951669, 935087732, 2798289660, 2966458592, 366520115, 1251476721, 4158319681, 240176511, 804688151, 2379631990, 1303441219, 1414376140, 3741619940, 3820343710, 461924940, 3089050817, 2136040774, 82468509, 1563790337, 1937016826, 776014843, 1511876531, 1389550482, 861278441, 323475053, 2355222426, 2047648055, 2383738969, 2302415851, 3995576782, 902390199, 3991215329, 1018251130, 1507840668, 1064563285, 2043548696, 3208103795, 3939366739, 1537932639, 342834655, 2262516856, 2180231114, 1053059257, 741614648, 1598071746, 1925389590, 203809468, 2336832552, 1100287487, 1895934009, 3736275976, 2632234200, 2428589668, 1636092795, 1890988757, 1952214088, 1113045200], core.int);
    },
    get C32() {
      return C[32] = dart.constList([2817806672, 1698790995, 2752977603, 1579629206, 1806384075, 1167925233, 1492823211, 65227667, 4197458005, 1836494326, 1993115793, 1275262245, 3622129660, 3408578007, 1144333952, 2741155215, 1521606217, 465184103, 250234264, 3237895649, 1966064386, 4031545618, 2537983395, 4191382470, 1603208167, 2626819477, 2054012907, 1498584538, 2210321453, 561273043, 1776306473, 3368652356, 2311222634, 2039411832, 1045993835, 1907959773, 1340194486, 2911432727, 2887829862, 986611124, 1256153880, 823846274, 860985184, 2136171077, 2003087840, 2926295940, 2692873756, 722008468, 1749577816, 4249194265, 1826526343, 4168831671, 3547573027, 38499042, 2401231703, 2874500650, 686535175, 3266653955, 2076542618, 137876389, 2267558130, 2780767154, 1778582202, 2182540636, 483363371, 3027871634, 4060607472, 3798552225, 4107953613, 3188000469, 1647628575, 4272342154, 1395537053, 1442030240, 3783918898, 3958809717, 3968011065, 4016062634, 2675006982, 275692881, 2317434617, 115185213, 88006062, 3185986886, 2371129781, 1573155077, 3557164143, 357589247, 4221049124, 3921532567, 1128303052, 2665047927, 1122545853, 2341013384, 1528424248, 4006115803, 175939911, 256015593, 512030921, 0, 2256537987, 3979031112, 1880170156, 1918528590, 4279172603, 948244310, 3584965918, 959264295, 3641641572, 2791073825, 1415289809, 775300154, 1728711857, 3881276175, 2532226258, 2442861470, 3317727311, 551313826, 1266113129, 437394454, 3130253834, 715178213, 3760340035, 387650077, 218697227, 3347837613, 2830511545, 2837320904, 435246981, 125153100, 3717852859, 1618977789, 637663135, 4117912764, 996558021, 2130402100, 692292470, 3324234716, 4243437160, 4058298467, 3694254026, 2237874704, 580326208, 298222624, 608863613, 1035719416, 855223825, 2703869805, 798891339, 817028339, 1384517100, 3821107152, 380840812, 3111168409, 1217663482, 1693009698, 2365368516, 1072734234, 746411736, 2419270383, 1313441735, 3510163905, 2731183358, 198481974, 2180359887, 3732579624, 2394413606, 3215802276, 2637835492, 2457358349, 3428805275, 1182684258, 328070850, 3101200616, 4147719774, 2948825845, 2153619390, 2479909244, 768962473, 304467891, 2578237499, 2098729127, 1671227502, 3141262203, 2015808777, 408514292, 3080383489, 2588902312, 1855317605, 3875515006, 3485212936, 3893751782, 2615655129, 913263310, 161475284, 2091919830, 2997105071, 591342129, 2493892144, 1721906624, 3159258167, 3397581990, 3499155632, 3634836245, 2550460746, 3672916471, 1355644686, 4136703791, 3595400845, 2968470349, 1303039060, 76997855, 3050413795, 2288667675, 523026872, 1365591679, 3932069124, 898367837, 1955068531, 1091304238, 493335386, 3537605202, 1443948851, 1205234963, 1641519756, 211892090, 351820174, 1007938441, 665439982, 3378624309, 3843875309, 2974251580, 3755121753, 1945261375, 3457423481, 935818175, 3455538154, 2868731739, 1866325780, 3678697606, 4088384129, 3295197502, 874788908, 1084473951, 3273463410, 635616268, 1228679307, 2500722497, 27801969, 3003910366, 3837057180, 3243664528, 2227927905, 3056784752, 1550600308, 1471729730], core.int);
    },
    get C33() {
      return C[33] = dart.constList([4098969767, 1098797925, 387629988, 658151006, 2872822635, 2636116293, 4205620056, 3813380867, 807425530, 1991112301, 3431502198, 49620300, 3847224535, 717608907, 891715652, 1656065955, 2984135002, 3123013403, 3930429454, 4267565504, 801309301, 1283527408, 1183687575, 3547055865, 2399397727, 2450888092, 1841294202, 1385552473, 3201576323, 1951978273, 3762891113, 3381544136, 3262474889, 2398386297, 1486449470, 3106397553, 3787372111, 2297436077, 550069932, 3464344634, 3747813450, 451248689, 1368875059, 1398949247, 1689378935, 1807451310, 2180914336, 150574123, 1215322216, 1167006205, 3734275948, 2069018616, 1940595667, 1265820162, 534992783, 1432758955, 3954313000, 3039757250, 3313932923, 936617224, 674296455, 3206787749, 50510442, 384654466, 3481938716, 2041025204, 133427442, 1766760930, 3664104948, 84334014, 886120290, 2797898494, 775200083, 4087521365, 2315596513, 4137973227, 2198551020, 1614850799, 1901987487, 1857900816, 557775242, 3717610758, 1054715397, 3863824061, 1418835341, 3295741277, 100954068, 1348534037, 2551784699, 3184957417, 1082772547, 3647436702, 3903896898, 2298972299, 434583643, 3363429358, 2090944266, 1115482383, 2230896926, 0, 2148107142, 724715757, 287222896, 1517047410, 251526143, 2232374840, 2923241173, 758523705, 252339417, 1550328230, 1536938324, 908343854, 168604007, 1469255655, 4004827798, 2602278545, 3229634501, 3697386016, 2002413899, 303830554, 2481064634, 2696996138, 574374880, 454171927, 151915277, 2347937223, 3056449960, 504678569, 4049044761, 1974422535, 2582559709, 2141453664, 33005350, 1918680309, 1715782971, 4217058430, 1133213225, 600562886, 3988154620, 3837289457, 836225756, 1665273989, 2534621218, 3330547729, 1250262308, 3151165501, 4188934450, 700935585, 2652719919, 3000824624, 2249059410, 3245854947, 3005967382, 1890163129, 2484206152, 3913753188, 4238918796, 4037024319, 2102843436, 857927568, 1233635150, 953795025, 3398237858, 3566745099, 4121350017, 2057644254, 3084527246, 2906629311, 976020637, 2018512274, 1600822220, 2119459398, 2381758995, 3633375416, 959340279, 3280139695, 1570750080, 3496574099, 3580864813, 634368786, 2898803609, 403744637, 2632478307, 1004239803, 650971512, 1500443672, 2599158199, 1334028442, 2514904430, 4289363686, 3156281551, 368043752, 3887782299, 1867173430, 2682967049, 2955531900, 2754719666, 1059729699, 2781229204, 2721431654, 1316239292, 2197595850, 2430644432, 2805143000, 82922136, 3963746266, 3447656016, 2434215926, 1299615190, 4014165424, 2865517645, 2531581700, 3516851125, 1783372680, 750893087, 1699118929, 1587348714, 2348899637, 2281337716, 201010753, 1739807261, 3683799762, 283718486, 3597472583, 3617229921, 2704767500, 4166618644, 334203196, 2848910887, 1639396809, 484568549, 1199193265, 3533461983, 4065673075, 337148366, 3346251575, 4149471949, 4250885034, 1038029935, 1148749531, 2949284339, 1756970692, 607661108, 2747424576, 488010435, 3803974693, 1009290057, 234832277, 2822336769, 201907891, 3034094820, 1449431233, 3413860740, 852848822, 1816687708, 3100656215], core.int);
    },
    get C34() {
      return C[34] = dart.constList([1364240372, 2119394625, 449029143, 982933031, 1003187115, 535905693, 2896910586, 1267925987, 542505520, 2918608246, 2291234508, 4112862210, 1341970405, 3319253802, 645940277, 3046089570, 3729349297, 627514298, 1167593194, 1575076094, 3271718191, 2165502028, 2376308550, 1808202195, 65494927, 362126482, 3219880557, 2514114898, 3559752638, 1490231668, 1227450848, 2386872521, 1969916354, 4101536142, 2573942360, 668823993, 3199619041, 4028083592, 3378949152, 2108963534, 1662536415, 3850514714, 2539664209, 1648721747, 2984277860, 3146034795, 4263288961, 4187237128, 1884842056, 2400845125, 2491903198, 1387788411, 2871251827, 1927414347, 3814166303, 1714072405, 2986813675, 788775605, 2258271173, 3550808119, 821200680, 598910399, 45771267, 3982262806, 2318081231, 2811409529, 4092654087, 1319232105, 1707996378, 114671109, 3508494900, 3297443494, 882725678, 2728416755, 87220618, 2759191542, 188345475, 1084944224, 1577492337, 3176206446, 1056541217, 2520581853, 3719169342, 1296481766, 2444594516, 1896177092, 74437638, 1627329872, 421854104, 3600279997, 2311865152, 1735892697, 2965193448, 126389129, 3879230233, 2044456648, 2705787516, 2095648578, 4173930116, 0, 159614592, 843640107, 514617361, 1817080410, 4261150478, 257308805, 1025430958, 908540205, 174381327, 1747035740, 2614187099, 607792694, 212952842, 2467293015, 3033700078, 463376795, 2152711616, 1638015196, 1516850039, 471210514, 3792353939, 3236244128, 1011081250, 303896347, 235605257, 4071475083, 767142070, 348694814, 1468340721, 2940995445, 4005289369, 2751291519, 4154402305, 1555887474, 1153776486, 1530167035, 2339776835, 3420243491, 3060333805, 3093557732, 3620396081, 1108378979, 322970263, 2216694214, 2239571018, 3539484091, 2920362745, 3345850665, 491466654, 3706925234, 233591430, 2010178497, 728503987, 2845423984, 301615252, 1193436393, 2831453436, 2686074864, 1457007741, 586125363, 2277985865, 3653357880, 2365498058, 2553678804, 2798617077, 2770919034, 3659959991, 1067761581, 753179962, 1343066744, 1788595295, 1415726718, 4139914125, 2431170776, 777975609, 2197139395, 2680062045, 1769771984, 1873358293, 3484619301, 3359349164, 279411992, 3899548572, 3682319163, 3439949862, 1861490777, 3959535514, 2208864847, 3865407125, 2860443391, 554225596, 4024887317, 3134823399, 1255028335, 3939764639, 701922480, 833598116, 707863359, 3325072549, 901801634, 1949809742, 4238789250, 3769684112, 857069735, 4048197636, 1106762476, 2131644621, 389019281, 1989006925, 1129165039, 3428076970, 3839820950, 2665723345, 1276872810, 3250069292, 1182749029, 2634345054, 22885772, 4201870471, 4214112523, 3009027431, 2454901467, 3912455696, 1829980118, 2592891351, 930745505, 1502483704, 3951639571, 3471714217, 3073755489, 3790464284, 2050797895, 2623135698, 1430221810, 410635796, 1941911495, 1407897079, 1599843069, 3742658365, 2022103876, 3397514159, 3107898472, 942421028, 3261022371, 376619805, 3154912738, 680216892, 4282488077, 963707304, 148812556, 3634160820, 1687208278, 2069988555, 3580933682, 1215585388, 3494008760], core.int);
    },
    get C35() {
      return C[35] = dart.constList([], frame$.Frame);
    },
    get C36() {
      return C[36] = dart.const(new _js_helper.PrivateSymbol.new('_add', _add$));
    },
    get C37() {
      return C[37] = dart.const(new _js_helper.PrivateSymbol.new('_head', _head$0));
    },
    get C38() {
      return C[38] = dart.const(new _js_helper.PrivateSymbol.new('_writeToList', _writeToList));
    },
    get C39() {
      return C[39] = dart.const(new _js_helper.PrivateSymbol.new('_grow', _grow));
    },
    get C40() {
      return C[40] = dart.const(new _js_helper.PrivateSymbol.new('_preGrow', _preGrow));
    },
    get C41() {
      return C[41] = dart.const(new _js_helper.PrivateSymbol.new('_table', _table$));
    },
    get C42() {
      return C[42] = dart.const(new _js_helper.PrivateSymbol.new('_tail', _tail$));
    },
    get C43() {
      return C[43] = dart.const(new _js_helper.PrivateSymbol.new('_head=', _head_));
    },
    get C44() {
      return C[44] = dart.const(new _js_helper.PrivateSymbol.new('_table=', _table_));
    },
    get C45() {
      return C[45] = dart.const(new _js_helper.PrivateSymbol.new('_tail=', _tail_));
    },
    get C46() {
      return C[46] = dart.constList([144, 169], core.int);
    }
  }, false);
  var C = Array(47).fill(void 0);
  var I = [
    "file:///zapp/project/lib/main.dart",
    "package:hive_flutter/hive_flutter.dart",
    "file:///zapp/project/lib/models/person.dart",
    "package:hive/hive.dart",
    "file:///zapp/project/lib/screens/info_screen.dart",
    "package:hive_flutter/src/stub/path_provider.dart",
    "file:///zapp/project/lib/screens/update_screen.dart",
    "file:///zapp/project/lib/screens/add_screen.dart",
    "package:hive/src/crypto/aes_cbc_pkcs7.dart",
    "package:hive/src/crypto/crc32.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/hive_impl.dart",
    "package:hive/src/registry/type_registry_impl.dart",
    "package:hive/src/hive_impl.dart",
    "package:hive/src/object/hive_collection_mixin.dart",
    "package:hive/src/util/delegating_list_view_mixin.dart",
    "package:hive/src/object/hive_list_impl.dart",
    "package:hive/src/object/hive_object.dart",
    "package:hive/src/box_collection/box_collection_indexed_db.dart",
    "file:///zapp/project/lib/utils/update_person_form.dart",
    "file:///zapp/project/lib/utils/add_person_form.dart",
    "package:crypto/src/digest.dart",
    "package:crypto/src/hash.dart",
    "package:crypto/src/hmac.dart",
    "package:crypto/src/md5.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/md5.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/hash_sink.dart",
    "package:crypto/src/hash_sink.dart",
    "package:crypto/src/sha1.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/sha1.dart",
    "package:crypto/src/sha256.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/sha256.dart",
    "package:crypto/src/sha512.dart",
    "package:hive/src/crypto/aes_engine.dart",
    "package:hive/src/adapters/big_int_adapter.dart",
    "package:hive/src/adapters/date_time_adapter.dart",
    "package:hive/src/backend/storage_backend.dart",
    "package:hive/src/backend/storage_backend_memory.dart",
    "package:hive/src/box/box_base_impl.dart",
    "package:hive/src/box/box_impl.dart",
    "package:hive/src/box/lazy_box_impl.dart",
    "package:hive/src/box_collection/box_collection_stub.dart",
    "package:crypto/src/digest_sink.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/sha512_slowsinks.dart",
    "package:crypto/src/sha512_slowsinks.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/binary/frame.dart",
    "package:hive/src/binary/frame.dart",
    "package:hive/src/binary/frame_helper.dart",
    "package:hive/src/box/keystore.dart",
    "package:hive/src/box/change_notifier.dart",
    "package:hive/src/adapters/ignored_type_adapter.dart",
    "package:hive/src/backend/js/backend_manager.dart",
    "package:hive/src/binary/binary_reader_impl.dart",
    "package:hive/src/util/indexable_skip_list.dart",
    "package:hive/src/backend/js/native/backend_manager.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/typed_data-1.3.1/lib/src/typed_queue.dart",
    "package:typed_data/src/typed_queue.dart",
    "package:hive/src/backend/js/native/storage_backend_js.dart",
    "package:typed_data/src/typed_buffer.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/binary/binary_writer_impl.dart",
    "package:hive/src/binary/binary_writer_impl.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T$.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T$.ListOfStringTodynamic().as(C[0] || CT.C0)(T$.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T$.dynamicToNull()));
      }
    }, T$.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T$.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T$.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T$.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T$.VoidToNull())});
    });
  };
  main.MyApp = class MyApp extends framework.StatefulWidget {
    createState() {
      return new main._MyAppState.new();
    }
    static ['_#new#tearOff']() {
      return new main.MyApp.new();
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    createState: dart.fnType(main._MyAppState, [])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main._MyAppState = class _MyAppState extends framework.State$(main.MyApp) {
    dispose() {
      hive.Hive.close();
      super.dispose();
    }
    build(context) {
      return new app.MaterialApp.new({title: "Hive Demo", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.purple}), debugShowCheckedModeBanner: false, home: new info_screen.InfoScreen.new()});
    }
    static ['_#new#tearOff']() {
      return new main._MyAppState.new();
    }
  };
  (main._MyAppState.new = function() {
    main._MyAppState.__proto__.new.call(this);
    ;
  }).prototype = main._MyAppState.prototype;
  dart.addTypeTests(main._MyAppState);
  dart.addTypeCaches(main._MyAppState);
  dart.setMethodSignature(main._MyAppState, () => ({
    __proto__: dart.getMethods(main._MyAppState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyAppState, I[0]);
  main.main = function main$0() {
    return async.async(dart.dynamic, function* main$() {
      yield hive_flutter['HiveX|initFlutter'](hive.Hive);
      hive.Hive.registerAdapter(person.Person, new person.PersonAdapter.new());
      yield hive.Hive.openBox(dart.dynamic, "peopleBox");
      binding.runApp(new main.MyApp.new());
    });
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  var _listeners = dart.privateName(hive_flutter, "_listeners");
  var _subscription = dart.privateName(hive_flutter, "_subscription");
  const _is__BoxListenable_default = Symbol('_is__BoxListenable_default');
  hive_flutter._BoxListenable$ = dart.generic((T, B) => {
    class _BoxListenable extends change_notifier.ValueListenable$(B) {
      static ['_#new#tearOff'](T, B, box, keys) {
        return new (hive_flutter._BoxListenable$(T, B)).new(box, keys);
      }
      addListener(listener) {
        if (this[_listeners][$isEmpty]) {
          if (this.keys != null) {
            this[_subscription] = this.box.watch().listen(dart.fn(event => {
              if (dart.nullCheck(this.keys).contains(event.key)) {
                for (let listener of this[_listeners]) {
                  listener();
                }
              }
            }, T$.BoxEventTovoid()));
          } else {
            this[_subscription] = this.box.watch().listen(dart.fn(_ => {
              for (let listener of this[_listeners]) {
                listener();
              }
            }, T$.BoxEventTovoid()));
          }
        }
        this[_listeners][$add](listener);
      }
      removeListener(listener) {
        let t0;
        this[_listeners][$remove](listener);
        if (this[_listeners][$isEmpty]) {
          t0 = this[_subscription];
          t0 == null ? null : t0.cancel();
          this[_subscription] = null;
        }
      }
      get value() {
        return this.box;
      }
    }
    (_BoxListenable.new = function(box, keys) {
      this[_listeners] = T$.JSArrayOfVoidTovoid().of([]);
      this[_subscription] = null;
      this.box = box;
      this.keys = keys;
      _BoxListenable.__proto__.new.call(this);
      ;
    }).prototype = _BoxListenable.prototype;
    dart.addTypeTests(_BoxListenable);
    _BoxListenable.prototype[_is__BoxListenable_default] = true;
    dart.addTypeCaches(_BoxListenable);
    dart.setMethodSignature(_BoxListenable, () => ({
      __proto__: dart.getMethods(_BoxListenable.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
    }));
    dart.setGetterSignature(_BoxListenable, () => ({
      __proto__: dart.getGetters(_BoxListenable.__proto__),
      value: B
    }));
    dart.setLibraryUri(_BoxListenable, I[1]);
    dart.setFieldSignature(_BoxListenable, () => ({
      __proto__: dart.getFields(_BoxListenable.__proto__),
      box: dart.finalFieldType(B),
      keys: dart.finalFieldType(dart.nullable(core.Set)),
      [_listeners]: dart.finalFieldType(core.List$(dart.fnType(dart.void, []))),
      [_subscription]: dart.fieldType(dart.nullable(async.StreamSubscription))
    }));
    return _BoxListenable;
  });
  hive_flutter._BoxListenable = hive_flutter._BoxListenable$();
  dart.addTypeTests(hive_flutter._BoxListenable, _is__BoxListenable_default);
  var box$ = dart.privateName(hive_flutter, "WatchBoxBuilder.box");
  var builder$ = dart.privateName(hive_flutter, "WatchBoxBuilder.builder");
  var watchKeys$ = dart.privateName(hive_flutter, "WatchBoxBuilder.watchKeys");
  hive_flutter.WatchBoxBuilder = class WatchBoxBuilder extends framework.StatefulWidget {
    get box() {
      return this[box$];
    }
    set box(value) {
      super.box = value;
    }
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    get watchKeys() {
      return this[watchKeys$];
    }
    set watchKeys(value) {
      super.watchKeys = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let box = opts && 'box' in opts ? opts.box : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let watchKeys = opts && 'watchKeys' in opts ? opts.watchKeys : null;
      return new hive_flutter.WatchBoxBuilder.new({key: key, box: box, builder: builder, watchKeys: watchKeys});
    }
    createState() {
      return new hive_flutter._WatchBoxBuilderState.new();
    }
  };
  (hive_flutter.WatchBoxBuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let box = opts && 'box' in opts ? opts.box : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let watchKeys = opts && 'watchKeys' in opts ? opts.watchKeys : null;
    this[box$] = box;
    this[builder$] = builder;
    this[watchKeys$] = watchKeys;
    hive_flutter.WatchBoxBuilder.__proto__.new.call(this, {key: key});
    ;
  }).prototype = hive_flutter.WatchBoxBuilder.prototype;
  dart.addTypeTests(hive_flutter.WatchBoxBuilder);
  dart.addTypeCaches(hive_flutter.WatchBoxBuilder);
  dart.setMethodSignature(hive_flutter.WatchBoxBuilder, () => ({
    __proto__: dart.getMethods(hive_flutter.WatchBoxBuilder.__proto__),
    createState: dart.fnType(hive_flutter._WatchBoxBuilderState, [])
  }));
  dart.setLibraryUri(hive_flutter.WatchBoxBuilder, I[1]);
  dart.setFieldSignature(hive_flutter.WatchBoxBuilder, () => ({
    __proto__: dart.getFields(hive_flutter.WatchBoxBuilder.__proto__),
    box: dart.finalFieldType(hive.Box),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, hive.Box])),
    watchKeys: dart.finalFieldType(dart.nullable(core.List$(core.String)))
  }));
  var _subscribe = dart.privateName(hive_flutter, "_subscribe");
  var _unsubscribe = dart.privateName(hive_flutter, "_unsubscribe");
  hive_flutter._WatchBoxBuilderState = class _WatchBoxBuilderState extends framework.State$(hive_flutter.WatchBoxBuilder) {
    initState() {
      super.initState();
      this[_subscribe]();
    }
    didUpdateWidget(oldWidget) {
      hive_flutter.WatchBoxBuilder.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!this.widget.box[$_equals](oldWidget.box)) {
        this[_unsubscribe]();
        this[_subscribe]();
      }
    }
    [_subscribe]() {
      this.subscription = this.widget.box.watch().listen(dart.fn(event => {
        if (this.widget.watchKeys != null && !dart.nullCheck(this.widget.watchKeys)[$contains](event.key)) {
          return;
        }
        this.setState(dart.fn(() => {
        }, T$.VoidTovoid()));
      }, T$.BoxEventTovoid()));
    }
    [_unsubscribe]() {
      let t0;
      t0 = this.subscription;
      t0 == null ? null : t0.cancel();
    }
    build(context) {
      let t2, t1, t0;
      t0 = this.widget;
      t1 = context;
      t2 = this.widget.box;
      return t0.builder(t1, t2);
    }
    dispose() {
      this[_unsubscribe]();
      super.dispose();
    }
    static ['_#new#tearOff']() {
      return new hive_flutter._WatchBoxBuilderState.new();
    }
  };
  (hive_flutter._WatchBoxBuilderState.new = function() {
    this.subscription = null;
    hive_flutter._WatchBoxBuilderState.__proto__.new.call(this);
    ;
  }).prototype = hive_flutter._WatchBoxBuilderState.prototype;
  dart.addTypeTests(hive_flutter._WatchBoxBuilderState);
  dart.addTypeCaches(hive_flutter._WatchBoxBuilderState);
  dart.setMethodSignature(hive_flutter._WatchBoxBuilderState, () => ({
    __proto__: dart.getMethods(hive_flutter._WatchBoxBuilderState.__proto__),
    [_subscribe]: dart.fnType(dart.void, []),
    [_unsubscribe]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(hive_flutter._WatchBoxBuilderState, I[1]);
  dart.setFieldSignature(hive_flutter._WatchBoxBuilderState, () => ({
    __proto__: dart.getFields(hive_flutter._WatchBoxBuilderState.__proto__),
    subscription: dart.fieldType(dart.nullable(async.StreamSubscription))
  }));
  hive_flutter['BoxX|listenable'] = function BoxX$124listenable(T, $this, opts) {
    let t1;
    let keys = opts && 'keys' in opts ? opts.keys : null;
    return new (hive_flutter._BoxListenable$(dart.dynamic, hive.Box$(T))).new($this, (t1 = keys, t1 == null ? null : t1[$toSet]()));
  };
  hive_flutter['BoxX|get#listenable'] = function BoxX$124get$35listenable(T, $this) {
    return dart.fn(opts => {
      let keys = opts && 'keys' in opts ? opts.keys : null;
      return hive_flutter['BoxX|listenable'](T, $this, {keys: keys});
    }, dart.fnType(change_notifier.ValueListenable$(hive.Box$(T)), [], {keys: T$.ListN()}, {}));
  };
  hive_flutter['LazyBoxX|listenable'] = function LazyBoxX$124listenable(T, $this, opts) {
    let t3;
    let keys = opts && 'keys' in opts ? opts.keys : null;
    return new (hive_flutter._BoxListenable$(dart.dynamic, hive.LazyBox$(T))).new($this, (t3 = keys, t3 == null ? null : t3[$toSet]()));
  };
  hive_flutter['LazyBoxX|get#listenable'] = function LazyBoxX$124get$35listenable(T, $this) {
    return dart.fn(opts => {
      let keys = opts && 'keys' in opts ? opts.keys : null;
      return hive_flutter['LazyBoxX|listenable'](T, $this, {keys: keys});
    }, dart.fnType(change_notifier.ValueListenable$(hive.LazyBox$(T)), [], {keys: T$.ListN()}, {}));
  };
  hive_flutter['HiveX|initFlutter'] = function HiveX$124initFlutter($this, subDir = null) {
    return async.async(dart.void, function* HiveX$124initFlutter() {
      binding.WidgetsFlutterBinding.ensureInitialized();
      return;
      let appDir = (yield path_provider.getApplicationDocumentsDirectory());
      $this.init(path.join(appDir.path, subDir));
    });
  };
  hive_flutter['HiveX|get#initFlutter'] = function HiveX$124get$35initFlutter($this) {
    return dart.fn((subDir = null) => hive_flutter['HiveX|initFlutter']($this, subDir), T$.StringNToFutureOfvoid());
  };
  var name$ = dart.privateName(person, "Person.name");
  var country$ = dart.privateName(person, "Person.country");
  var phoneNumber$ = dart.privateName(person, "Person.phoneNumber");
  person.Person = class Person extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get country() {
      return this[country$];
    }
    set country(value) {
      super.country = value;
    }
    get phoneNumber() {
      return this[phoneNumber$];
    }
    set phoneNumber(value) {
      super.phoneNumber = value;
    }
    static ['_#new#tearOff'](opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let country = opts && 'country' in opts ? opts.country : null;
      let phoneNumber = opts && 'phoneNumber' in opts ? opts.phoneNumber : null;
      return new person.Person.new({name: name, country: country, phoneNumber: phoneNumber});
    }
  };
  (person.Person.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let country = opts && 'country' in opts ? opts.country : null;
    let phoneNumber = opts && 'phoneNumber' in opts ? opts.phoneNumber : null;
    this[name$] = name;
    this[country$] = country;
    this[phoneNumber$] = phoneNumber;
    ;
  }).prototype = person.Person.prototype;
  dart.addTypeTests(person.Person);
  dart.addTypeCaches(person.Person);
  dart.setLibraryUri(person.Person, I[2]);
  dart.setFieldSignature(person.Person, () => ({
    __proto__: dart.getFields(person.Person.__proto__),
    name: dart.finalFieldType(core.String),
    country: dart.finalFieldType(core.String),
    phoneNumber: dart.finalFieldType(core.String)
  }));
  var typeId = dart.privateName(person, "PersonAdapter.typeId");
  const _is_TypeAdapter_default = Symbol('_is_TypeAdapter_default');
  hive.TypeAdapter$ = dart.generic(T => {
    class TypeAdapter extends core.Object {}
    (TypeAdapter.new = function() {
      ;
    }).prototype = TypeAdapter.prototype;
    dart.addTypeTests(TypeAdapter);
    TypeAdapter.prototype[_is_TypeAdapter_default] = true;
    dart.addTypeCaches(TypeAdapter);
    dart.setLibraryUri(TypeAdapter, I[3]);
    return TypeAdapter;
  });
  hive.TypeAdapter = hive.TypeAdapter$();
  dart.addTypeTests(hive.TypeAdapter, _is_TypeAdapter_default);
  person.PersonAdapter = class PersonAdapter extends hive.TypeAdapter$(person.Person) {
    get typeId() {
      return this[typeId];
    }
    set typeId(value) {
      super.typeId = value;
    }
    read(reader) {
      let numOfFields = reader.readByte();
      let fields = (() => {
        let t6 = new (T$.IdentityMapOfint$dynamic()).new();
        for (let i = 0; i < numOfFields; i = i + 1)
          t6[$_set](reader.readByte(), reader.read());
        return t6;
      })();
      return new person.Person.new({name: core.String.as(fields[$_get](0)), country: core.String.as(fields[$_get](1)), phoneNumber: core.String.as(fields[$_get](2))});
    }
    write(writer, obj) {
      let t7;
      person.Person.as(obj);
      t7 = writer;
      (() => {
        t7.writeByte(3);
        t7.writeByte(0);
        t7.write(core.String, obj.name);
        t7.writeByte(1);
        t7.write(core.String, obj.country);
        t7.writeByte(1);
        t7.write(core.String, obj.phoneNumber);
        return t7;
      })();
    }
    get hashCode() {
      return this.typeId[$hashCode];
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || person.PersonAdapter.is(other) && this[$runtimeType]._equals(other[$runtimeType]) && this.typeId === other.typeId;
    }
    static ['_#new#tearOff']() {
      return new person.PersonAdapter.new();
    }
  };
  (person.PersonAdapter.new = function() {
    this[typeId] = 1;
    ;
  }).prototype = person.PersonAdapter.prototype;
  dart.addTypeTests(person.PersonAdapter);
  dart.addTypeCaches(person.PersonAdapter);
  dart.setMethodSignature(person.PersonAdapter, () => ({
    __proto__: dart.getMethods(person.PersonAdapter.__proto__),
    read: dart.fnType(person.Person, [hive.BinaryReader]),
    write: dart.fnType(dart.void, [hive.BinaryWriter, dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(person.PersonAdapter, I[2]);
  dart.setFieldSignature(person.PersonAdapter, () => ({
    __proto__: dart.getFields(person.PersonAdapter.__proto__),
    typeId: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(person.PersonAdapter, ['_equals']);
  dart.defineExtensionAccessors(person.PersonAdapter, ['hashCode']);
  info_screen.InfoScreen = class InfoScreen extends framework.StatefulWidget {
    createState() {
      return new info_screen._InfoScreenState.new();
    }
    static ['_#new#tearOff']() {
      return new info_screen.InfoScreen.new();
    }
  };
  (info_screen.InfoScreen.new = function() {
    info_screen.InfoScreen.__proto__.new.call(this);
    ;
  }).prototype = info_screen.InfoScreen.prototype;
  dart.addTypeTests(info_screen.InfoScreen);
  dart.addTypeCaches(info_screen.InfoScreen);
  dart.setMethodSignature(info_screen.InfoScreen, () => ({
    __proto__: dart.getMethods(info_screen.InfoScreen.__proto__),
    createState: dart.fnType(info_screen._InfoScreenState, [])
  }));
  dart.setLibraryUri(info_screen.InfoScreen, I[4]);
  var ___InfoScreenState_contactBox = dart.privateName(info_screen, "_#_InfoScreenState#contactBox");
  var _deleteInfo = dart.privateName(info_screen, "_deleteInfo");
  info_screen._InfoScreenState = class _InfoScreenState extends framework.State$(info_screen.InfoScreen) {
    get contactBox() {
      let t7;
      t7 = this[___InfoScreenState_contactBox];
      return t7 == null ? dart.throw(new _internal.LateError.fieldNI("contactBox")) : t7;
    }
    set contactBox(contactBox$35param) {
      if (this[___InfoScreenState_contactBox] == null)
        this[___InfoScreenState_contactBox] = contactBox$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("contactBox"));
    }
    [_deleteInfo](index) {
      this.contactBox.deleteAt(index);
      core.print("Item deleted from box at index: " + dart.str(index));
    }
    initState() {
      super.initState();
      this.contactBox = hive.Hive.box(dart.dynamic, "peopleBox");
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("People Info")}), floatingActionButton: new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => navigator.Navigator.of(context).push(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(context => new add_screen.AddScreen.new(), T$.BuildContextToAddScreen())})), T$.VoidTovoid()), child: new icon.Icon.new(icons.Icons.add)}), body: new (T$.ValueListenableBuilderOfBox()).new({valueListenable: hive_flutter['BoxX|listenable'](dart.dynamic, this.contactBox), builder: dart.fn((context, box, widget) => {
            if (box.isEmpty) {
              return new basic.Center.new({child: new text.Text.new("Empty")});
            } else {
              return new scroll_view.ListView.builder({itemCount: box.length, itemBuilder: dart.fn((context, index) => {
                  let currentBox = box;
                  let personData = dart.nullCheck(currentBox.getAt(index));
                  return new ink_well.InkWell.new({onTap: dart.fn(() => navigator.Navigator.of(context).push(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(context => new update_screen.UpdateScreen.new({index: index, person: person.Person.as(personData)}), T$.BuildContextToUpdateScreen())})), T$.VoidTovoid()), child: new list_tile.ListTile.new({title: new text.Text.new(core.String.as(dart.dload(personData, 'name'))), subtitle: new text.Text.new(core.String.as(dart.dload(personData, 'country'))), trailing: new icon_button.IconButton.new({onPressed: dart.fn(() => this[_deleteInfo](index), T$.VoidTovoid()), icon: new icon.Icon.new(icons.Icons.delete, {color: colors.Colors.red})})})});
                }, T$.BuildContextAndintToInkWell())});
            }
          }, T$.BuildContextAndBoxAndWidgetNToWidget())})});
    }
    static ['_#new#tearOff']() {
      return new info_screen._InfoScreenState.new();
    }
  };
  (info_screen._InfoScreenState.new = function() {
    this[___InfoScreenState_contactBox] = null;
    info_screen._InfoScreenState.__proto__.new.call(this);
    ;
  }).prototype = info_screen._InfoScreenState.prototype;
  dart.addTypeTests(info_screen._InfoScreenState);
  dart.addTypeCaches(info_screen._InfoScreenState);
  dart.setMethodSignature(info_screen._InfoScreenState, () => ({
    __proto__: dart.getMethods(info_screen._InfoScreenState.__proto__),
    [_deleteInfo]: dart.fnType(dart.dynamic, [core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(info_screen._InfoScreenState, () => ({
    __proto__: dart.getGetters(info_screen._InfoScreenState.__proto__),
    contactBox: hive.Box
  }));
  dart.setSetterSignature(info_screen._InfoScreenState, () => ({
    __proto__: dart.getSetters(info_screen._InfoScreenState.__proto__),
    contactBox: hive.Box
  }));
  dart.setLibraryUri(info_screen._InfoScreenState, I[4]);
  dart.setFieldSignature(info_screen._InfoScreenState, () => ({
    __proto__: dart.getFields(info_screen._InfoScreenState.__proto__),
    [___InfoScreenState_contactBox]: dart.fieldType(dart.nullable(hive.Box))
  }));
  var index$ = dart.privateName(hive, "HiveField.index");
  var defaultValue$ = dart.privateName(hive, "HiveField.defaultValue");
  hive.HiveField = class HiveField extends core.Object {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get defaultValue() {
      return this[defaultValue$];
    }
    set defaultValue(value) {
      super.defaultValue = value;
    }
    static ['_#new#tearOff'](index, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
      return new hive.HiveField.new(index, {defaultValue: defaultValue});
    }
  };
  (hive.HiveField.new = function(index, opts) {
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
    this[index$] = index;
    this[defaultValue$] = defaultValue;
    ;
  }).prototype = hive.HiveField.prototype;
  dart.addTypeTests(hive.HiveField);
  dart.addTypeCaches(hive.HiveField);
  dart.setLibraryUri(hive.HiveField, I[3]);
  dart.setFieldSignature(hive.HiveField, () => ({
    __proto__: dart.getFields(hive.HiveField.__proto__),
    index: dart.finalFieldType(core.int),
    defaultValue: dart.finalFieldType(dart.dynamic)
  }));
  var typeId$ = dart.privateName(hive, "HiveType.typeId");
  var adapterName$ = dart.privateName(hive, "HiveType.adapterName");
  hive.HiveType = class HiveType extends core.Object {
    get typeId() {
      return this[typeId$];
    }
    set typeId(value) {
      super.typeId = value;
    }
    get adapterName() {
      return this[adapterName$];
    }
    set adapterName(value) {
      super.adapterName = value;
    }
    static ['_#new#tearOff'](opts) {
      let typeId = opts && 'typeId' in opts ? opts.typeId : null;
      let adapterName = opts && 'adapterName' in opts ? opts.adapterName : null;
      return new hive.HiveType.new({typeId: typeId, adapterName: adapterName});
    }
  };
  (hive.HiveType.new = function(opts) {
    let typeId = opts && 'typeId' in opts ? opts.typeId : null;
    let adapterName = opts && 'adapterName' in opts ? opts.adapterName : null;
    this[typeId$] = typeId;
    this[adapterName$] = adapterName;
    ;
  }).prototype = hive.HiveType.prototype;
  dart.addTypeTests(hive.HiveType);
  dart.addTypeCaches(hive.HiveType);
  dart.setLibraryUri(hive.HiveType, I[3]);
  dart.setFieldSignature(hive.HiveType, () => ({
    __proto__: dart.getFields(hive.HiveType.__proto__),
    typeId: dart.finalFieldType(core.int),
    adapterName: dart.finalFieldType(dart.nullable(core.String))
  }));
  var Utf8Decoder__allowMalformed = dart.privateName(convert, "Utf8Decoder._allowMalformed");
  hive.BinaryReader = class BinaryReader extends core.Object {};
  (hive.BinaryReader.new = function() {
    ;
  }).prototype = hive.BinaryReader.prototype;
  dart.addTypeTests(hive.BinaryReader);
  dart.addTypeCaches(hive.BinaryReader);
  dart.setLibraryUri(hive.BinaryReader, I[3]);
  dart.setStaticFieldSignature(hive.BinaryReader, () => ['utf8Decoder']);
  dart.defineLazy(hive.BinaryReader, {
    /*hive.BinaryReader.utf8Decoder*/get utf8Decoder() {
      return C[1] || CT.C1;
    }
  }, false);
  hive.BinaryWriter = class BinaryWriter extends core.Object {};
  (hive.BinaryWriter.new = function() {
    ;
  }).prototype = hive.BinaryWriter.prototype;
  dart.addTypeTests(hive.BinaryWriter);
  dart.addTypeCaches(hive.BinaryWriter);
  dart.setLibraryUri(hive.BinaryWriter, I[3]);
  dart.setStaticFieldSignature(hive.BinaryWriter, () => ['utf8Encoder']);
  dart.defineLazy(hive.BinaryWriter, {
    /*hive.BinaryWriter.utf8Encoder*/get utf8Encoder() {
      return C[2] || CT.C2;
    }
  }, false);
  const _is_Box_default = Symbol('_is_Box_default');
  hive.Box$ = dart.generic(E => {
    class Box extends core.Object {}
    (Box.new = function() {
      ;
    }).prototype = Box.prototype;
    dart.addTypeTests(Box);
    Box.prototype[_is_Box_default] = true;
    dart.addTypeCaches(Box);
    Box[dart.implements] = () => [hive.BoxBase$(E)];
    dart.setLibraryUri(Box, I[3]);
    return Box;
  });
  hive.Box = hive.Box$();
  dart.addTypeTests(hive.Box, _is_Box_default);
  var key$ = dart.privateName(hive, "BoxEvent.key");
  var value$ = dart.privateName(hive, "BoxEvent.value");
  var deleted$ = dart.privateName(hive, "BoxEvent.deleted");
  hive.BoxEvent = class BoxEvent extends core.Object {
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get deleted() {
      return this[deleted$];
    }
    set deleted(value) {
      super.deleted = value;
    }
    static ['_#new#tearOff'](key, value, deleted) {
      return new hive.BoxEvent.new(key, value, deleted);
    }
    _equals(other) {
      if (other == null) return false;
      if (hive.BoxEvent.is(other)) {
        return dart.equals(other.key, this.key) && dart.equals(other.value, this.value);
      }
      return false;
    }
    get hashCode() {
      return (this[$runtimeType].hashCode ^ dart.hashCode(this.key) ^ dart.hashCode(this.value)) >>> 0;
    }
  };
  (hive.BoxEvent.new = function(key, value, deleted) {
    this[key$] = key;
    this[value$] = value;
    this[deleted$] = deleted;
    ;
  }).prototype = hive.BoxEvent.prototype;
  dart.addTypeTests(hive.BoxEvent);
  dart.addTypeCaches(hive.BoxEvent);
  dart.setMethodSignature(hive.BoxEvent, () => ({
    __proto__: dart.getMethods(hive.BoxEvent.__proto__),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setLibraryUri(hive.BoxEvent, I[3]);
  dart.setFieldSignature(hive.BoxEvent, () => ({
    __proto__: dart.getFields(hive.BoxEvent.__proto__),
    key: dart.finalFieldType(dart.dynamic),
    value: dart.finalFieldType(dart.dynamic),
    deleted: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(hive.BoxEvent, ['_equals']);
  dart.defineExtensionAccessors(hive.BoxEvent, ['hashCode']);
  const _is_BoxBase_default = Symbol('_is_BoxBase_default');
  hive.BoxBase$ = dart.generic(E => {
    class BoxBase extends core.Object {}
    (BoxBase.new = function() {
      ;
    }).prototype = BoxBase.prototype;
    dart.addTypeTests(BoxBase);
    BoxBase.prototype[_is_BoxBase_default] = true;
    dart.addTypeCaches(BoxBase);
    dart.setLibraryUri(BoxBase, I[3]);
    return BoxBase;
  });
  hive.BoxBase = hive.BoxBase$();
  dart.addTypeTests(hive.BoxBase, _is_BoxBase_default);
  const _is_LazyBox_default = Symbol('_is_LazyBox_default');
  hive.LazyBox$ = dart.generic(E => {
    class LazyBox extends hive.BoxBase$(E) {}
    (LazyBox.new = function() {
      ;
    }).prototype = LazyBox.prototype;
    dart.addTypeTests(LazyBox);
    LazyBox.prototype[_is_LazyBox_default] = true;
    dart.addTypeCaches(LazyBox);
    dart.setLibraryUri(LazyBox, I[3]);
    return LazyBox;
  });
  hive.LazyBox = hive.LazyBox$();
  dart.addTypeTests(hive.LazyBox, _is_LazyBox_default);
  var __HiveAesCipher__cipher = dart.privateName(hive, "_#HiveAesCipher#_cipher");
  var __HiveAesCipher__keyCrc = dart.privateName(hive, "_#HiveAesCipher#_keyCrc");
  var _cipher = dart.privateName(hive, "_cipher");
  var _keyCrc = dart.privateName(hive, "_keyCrc");
  hive.HiveAesCipher = class HiveAesCipher extends core.Object {
    get [_cipher]() {
      let t7;
      t7 = this[__HiveAesCipher__cipher];
      return t7 == null ? dart.throw(new _internal.LateError.fieldNI("_cipher")) : t7;
    }
    set [_cipher](library$32package$58hive$47src$47crypto$47hive_aes_cipher$46dart$58$58_cipher$35param) {
      if (this[__HiveAesCipher__cipher] == null)
        this[__HiveAesCipher__cipher] = library$32package$58hive$47src$47crypto$47hive_aes_cipher$46dart$58$58_cipher$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_cipher"));
    }
    get [_keyCrc]() {
      let t7;
      t7 = this[__HiveAesCipher__keyCrc];
      return t7 == null ? dart.throw(new _internal.LateError.fieldNI("_keyCrc")) : t7;
    }
    set [_keyCrc](library$32package$58hive$47src$47crypto$47hive_aes_cipher$46dart$58$58_keyCrc$35param) {
      if (this[__HiveAesCipher__keyCrc] == null)
        this[__HiveAesCipher__keyCrc] = library$32package$58hive$47src$47crypto$47hive_aes_cipher$46dart$58$58_keyCrc$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_keyCrc"));
    }
    static ['_#new#tearOff'](key) {
      return new hive.HiveAesCipher.new(key);
    }
    calculateKeyCrc() {
      return this[_keyCrc];
    }
    decrypt(inp, inpOff, inpLength, out, outOff) {
      let iv = extensions['Uint8ListX|view'](inp, inpOff, 16);
      return this[_cipher].decrypt(iv, inp, inpOff + 16, inpLength - 16, out, 0);
    }
    generateIv() {
      return extensions['RandomX|nextBytes'](hive.HiveAesCipher._ivRandom, 16);
    }
    encrypt(inp, inpOff, inpLength, out, outOff) {
      let iv = this.generateIv();
      out[$setAll](outOff, iv);
      let len = this[_cipher].encrypt(iv, inp, 0, inpLength, out, outOff + 16);
      return len + 16;
    }
    maxEncryptedSize(inp) {
      return inp[$length] + 32;
    }
  };
  (hive.HiveAesCipher.new = function(key) {
    this[__HiveAesCipher__cipher] = null;
    this[__HiveAesCipher__keyCrc] = null;
    if (key[$length] !== 32 || key[$any](dart.fn(it => it < 0 || it > 255, T$.intTobool()))) {
      dart.throw(new core.ArgumentError.new("The encryption key has to be a 32 byte (256 bit) array."));
    }
    let keyBytes = _native_typed_data.NativeUint8List.fromList(key);
    this[_cipher] = new aes_cbc_pkcs7.AesCbcPkcs7.new(keyBytes);
    this[_keyCrc] = crc32.Crc32.compute(typed_data.Uint8List.as(sha256.sha256.convert(keyBytes).bytes));
  }).prototype = hive.HiveAesCipher.prototype;
  dart.addTypeTests(hive.HiveAesCipher);
  dart.addTypeCaches(hive.HiveAesCipher);
  hive.HiveAesCipher[dart.implements] = () => [hive.HiveCipher];
  dart.setMethodSignature(hive.HiveAesCipher, () => ({
    __proto__: dart.getMethods(hive.HiveAesCipher.__proto__),
    calculateKeyCrc: dart.fnType(core.int, []),
    decrypt: dart.fnType(core.int, [typed_data.Uint8List, core.int, core.int, typed_data.Uint8List, core.int]),
    generateIv: dart.fnType(typed_data.Uint8List, []),
    encrypt: dart.fnType(core.int, [typed_data.Uint8List, core.int, core.int, typed_data.Uint8List, core.int]),
    maxEncryptedSize: dart.fnType(core.int, [typed_data.Uint8List])
  }));
  dart.setGetterSignature(hive.HiveAesCipher, () => ({
    __proto__: dart.getGetters(hive.HiveAesCipher.__proto__),
    [_cipher]: aes_cbc_pkcs7.AesCbcPkcs7,
    [_keyCrc]: core.int
  }));
  dart.setSetterSignature(hive.HiveAesCipher, () => ({
    __proto__: dart.getSetters(hive.HiveAesCipher.__proto__),
    [_cipher]: aes_cbc_pkcs7.AesCbcPkcs7,
    [_keyCrc]: core.int
  }));
  dart.setLibraryUri(hive.HiveAesCipher, I[3]);
  dart.setFieldSignature(hive.HiveAesCipher, () => ({
    __proto__: dart.getFields(hive.HiveAesCipher.__proto__),
    [__HiveAesCipher__cipher]: dart.fieldType(dart.nullable(aes_cbc_pkcs7.AesCbcPkcs7)),
    [__HiveAesCipher__keyCrc]: dart.fieldType(dart.nullable(core.int))
  }));
  dart.setStaticFieldSignature(hive.HiveAesCipher, () => ['_ivRandom']);
  dart.defineLazy(hive.HiveAesCipher, {
    /*hive.HiveAesCipher._ivRandom*/get _ivRandom() {
      return math.Random.secure();
    }
  }, false);
  hive.HiveCipher = class HiveCipher extends core.Object {};
  (hive.HiveCipher.new = function() {
    ;
  }).prototype = hive.HiveCipher.prototype;
  dart.addTypeTests(hive.HiveCipher);
  dart.addTypeCaches(hive.HiveCipher);
  dart.setLibraryUri(hive.HiveCipher, I[3]);
  hive.HiveInterface = class HiveInterface extends core.Object {};
  (hive.HiveInterface.new = function() {
    ;
  }).prototype = hive.HiveInterface.prototype;
  dart.addTypeTests(hive.HiveInterface);
  dart.addTypeCaches(hive.HiveInterface);
  hive.HiveInterface[dart.implements] = () => [hive.TypeRegistry];
  dart.setLibraryUri(hive.HiveInterface, I[3]);
  var message$ = dart.privateName(hive, "HiveError.message");
  hive.HiveError = class HiveError extends core.Error {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    static ['_#new#tearOff'](message) {
      return new hive.HiveError.new(message);
    }
    toString() {
      return "HiveError: " + this.message;
    }
  };
  (hive.HiveError.new = function(message) {
    this[message$] = message;
    hive.HiveError.__proto__.new.call(this);
    ;
  }).prototype = hive.HiveError.prototype;
  dart.addTypeTests(hive.HiveError);
  dart.addTypeCaches(hive.HiveError);
  dart.setLibraryUri(hive.HiveError, I[3]);
  dart.setFieldSignature(hive.HiveError, () => ({
    __proto__: dart.getFields(hive.HiveError.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(hive.HiveError, ['toString']);
  const _is_HiveCollection_default = Symbol('_is_HiveCollection_default');
  hive.HiveCollection$ = dart.generic(E => {
    class HiveCollection extends core.Object {
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
    }
    (HiveCollection.new = function() {
      ;
    }).prototype = HiveCollection.prototype;
    HiveCollection.prototype[dart.isList] = true;
    dart.addTypeTests(HiveCollection);
    HiveCollection.prototype[_is_HiveCollection_default] = true;
    dart.addTypeCaches(HiveCollection);
    HiveCollection[dart.implements] = () => [core.List$(E)];
    dart.setLibraryUri(HiveCollection, I[3]);
    return HiveCollection;
  });
  hive.HiveCollection = hive.HiveCollection$();
  dart.addTypeTests(hive.HiveCollection, _is_HiveCollection_default);
  const _is_HiveList_default = Symbol('_is_HiveList_default');
  hive.HiveList$ = dart.generic(E => {
    class HiveList extends hive.HiveCollection$(E) {
      static new(box, opts) {
        let objects = opts && 'objects' in opts ? opts.objects : null;
        return new (hive_list_impl.HiveListImpl$(E)).new(box, {objects: objects});
      }
      static ['_#new#tearOff'](E, box, opts) {
        let objects = opts && 'objects' in opts ? opts.objects : null;
        return hive.HiveList$(E).new(box, {objects: objects});
      }
    }
    HiveList.prototype[dart.isList] = true;
    dart.addTypeTests(HiveList);
    HiveList.prototype[_is_HiveList_default] = true;
    dart.addTypeCaches(HiveList);
    HiveList[dart.implements] = () => [core.List$(E)];
    dart.setStaticMethodSignature(HiveList, () => ['new']);
    dart.setLibraryUri(HiveList, I[3]);
    return HiveList;
  });
  hive.HiveList = hive.HiveList$();
  dart.addTypeTests(hive.HiveList, _is_HiveList_default);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  hive.HiveStorageBackendPreference = class HiveStorageBackendPreference extends core._Enum {
    toString() {
      return "HiveStorageBackendPreference." + this[_name];
    }
  };
  (hive.HiveStorageBackendPreference.new = function(index, name) {
    hive.HiveStorageBackendPreference.__proto__.new.call(this, index, name);
    ;
  }).prototype = hive.HiveStorageBackendPreference.prototype;
  dart.addTypeTests(hive.HiveStorageBackendPreference);
  dart.addTypeCaches(hive.HiveStorageBackendPreference);
  dart.setLibraryUri(hive.HiveStorageBackendPreference, I[3]);
  dart.setStaticFieldSignature(hive.HiveStorageBackendPreference, () => ['values', 'native', 'webWorker']);
  dart.defineExtensionMethods(hive.HiveStorageBackendPreference, ['toString']);
  dart.defineLazy(hive.HiveStorageBackendPreference, {
    /*hive.HiveStorageBackendPreference.values*/get values() {
      return C[3] || CT.C3;
    },
    /*hive.HiveStorageBackendPreference.native*/get native() {
      return C[4] || CT.C4;
    },
    /*hive.HiveStorageBackendPreference.webWorker*/get webWorker() {
      return C[5] || CT.C5;
    }
  }, false);
  hive.TypeRegistry = class TypeRegistry extends core.Object {};
  (hive.TypeRegistry.new = function() {
    ;
  }).prototype = hive.TypeRegistry.prototype;
  dart.addTypeTests(hive.TypeRegistry);
  dart.addTypeCaches(hive.TypeRegistry);
  dart.setLibraryUri(hive.TypeRegistry, I[3]);
  dart.defineLazy(hive, {
    /*hive.Hive*/get Hive() {
      return new hive_impl.HiveImpl.new();
    }
  }, false);
  path_provider.Directory = class Directory extends core.Object {};
  (path_provider.Directory.new = function() {
    ;
  }).prototype = path_provider.Directory.prototype;
  dart.addTypeTests(path_provider.Directory);
  dart.addTypeCaches(path_provider.Directory);
  dart.setLibraryUri(path_provider.Directory, I[5]);
  path_provider.getApplicationDocumentsDirectory = function getApplicationDocumentsDirectory() {
    dart.throw(new core.UnimplementedError.new("[Hive Error] Tried to use the `path_provider` package from Flutter Web."));
  };
  path.join = function join(part1, part2 = null, part3 = null, part4 = null, part5 = null, part6 = null, part7 = null, part8 = null) {
    dart.throw(new core.UnimplementedError.new("[Hive Error] Tried to use the `path` package from Flutter Web."));
  };
  var index$0 = dart.privateName(update_screen, "UpdateScreen.index");
  var person$ = dart.privateName(update_screen, "UpdateScreen.person");
  update_screen.UpdateScreen = class UpdateScreen extends framework.StatefulWidget {
    get index() {
      return this[index$0];
    }
    set index(value) {
      super.index = value;
    }
    get person() {
      return this[person$];
    }
    set person(value) {
      super.person = value;
    }
    static ['_#new#tearOff'](opts) {
      let index = opts && 'index' in opts ? opts.index : null;
      let person = opts && 'person' in opts ? opts.person : null;
      return new update_screen.UpdateScreen.new({index: index, person: person});
    }
    createState() {
      return new update_screen._UpdateScreenState.new();
    }
  };
  (update_screen.UpdateScreen.new = function(opts) {
    let index = opts && 'index' in opts ? opts.index : null;
    let person = opts && 'person' in opts ? opts.person : null;
    this[index$0] = index;
    this[person$] = person;
    update_screen.UpdateScreen.__proto__.new.call(this);
    ;
  }).prototype = update_screen.UpdateScreen.prototype;
  dart.addTypeTests(update_screen.UpdateScreen);
  dart.addTypeCaches(update_screen.UpdateScreen);
  dart.setMethodSignature(update_screen.UpdateScreen, () => ({
    __proto__: dart.getMethods(update_screen.UpdateScreen.__proto__),
    createState: dart.fnType(update_screen._UpdateScreenState, [])
  }));
  dart.setLibraryUri(update_screen.UpdateScreen, I[6]);
  dart.setFieldSignature(update_screen.UpdateScreen, () => ({
    __proto__: dart.getFields(update_screen.UpdateScreen.__proto__),
    index: dart.finalFieldType(core.int),
    person: dart.finalFieldType(person.Person)
  }));
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  update_screen._UpdateScreenState = class _UpdateScreenState extends framework.State$(update_screen.UpdateScreen) {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, appBar: new app_bar.AppBar.new({title: new text.Text.new("Update Info")}), body: new basic.Padding.new({padding: C[6] || CT.C6, child: new update_person_form.UpdatePersonForm.new({index: this.widget.index, person: this.widget.person})})});
    }
    static ['_#new#tearOff']() {
      return new update_screen._UpdateScreenState.new();
    }
  };
  (update_screen._UpdateScreenState.new = function() {
    update_screen._UpdateScreenState.__proto__.new.call(this);
    ;
  }).prototype = update_screen._UpdateScreenState.prototype;
  dart.addTypeTests(update_screen._UpdateScreenState);
  dart.addTypeCaches(update_screen._UpdateScreenState);
  dart.setMethodSignature(update_screen._UpdateScreenState, () => ({
    __proto__: dart.getMethods(update_screen._UpdateScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(update_screen._UpdateScreenState, I[6]);
  add_screen.AddScreen = class AddScreen extends framework.StatefulWidget {
    createState() {
      return new add_screen._AddScreenState.new();
    }
    static ['_#new#tearOff']() {
      return new add_screen.AddScreen.new();
    }
  };
  (add_screen.AddScreen.new = function() {
    add_screen.AddScreen.__proto__.new.call(this);
    ;
  }).prototype = add_screen.AddScreen.prototype;
  dart.addTypeTests(add_screen.AddScreen);
  dart.addTypeCaches(add_screen.AddScreen);
  dart.setMethodSignature(add_screen.AddScreen, () => ({
    __proto__: dart.getMethods(add_screen.AddScreen.__proto__),
    createState: dart.fnType(add_screen._AddScreenState, [])
  }));
  dart.setLibraryUri(add_screen.AddScreen, I[7]);
  add_screen._AddScreenState = class _AddScreenState extends framework.State$(add_screen.AddScreen) {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, appBar: new app_bar.AppBar.new({title: new text.Text.new("Add Info")}), body: new basic.Padding.new({padding: C[6] || CT.C6, child: new add_person_form.AddPersonForm.new()})});
    }
    static ['_#new#tearOff']() {
      return new add_screen._AddScreenState.new();
    }
  };
  (add_screen._AddScreenState.new = function() {
    add_screen._AddScreenState.__proto__.new.call(this);
    ;
  }).prototype = add_screen._AddScreenState.prototype;
  dart.addTypeTests(add_screen._AddScreenState);
  dart.addTypeCaches(add_screen._AddScreenState);
  dart.setMethodSignature(add_screen._AddScreenState, () => ({
    __proto__: dart.getMethods(add_screen._AddScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(add_screen._AddScreenState, I[7]);
  default_compaction_strategy.defaultCompactionStrategy = function defaultCompactionStrategy(entries, deletedEntries) {
    return deletedEntries > 60 && deletedEntries / entries > 0.15;
  };
  dart.defineLazy(default_compaction_strategy, {
    /*default_compaction_strategy._deletedRatio*/get _deletedRatio() {
      return 0.15;
    },
    /*default_compaction_strategy._deletedThreshold*/get _deletedThreshold() {
      return 60;
    }
  }, false);
  default_key_comparator.defaultKeyComparator = function defaultKeyComparator(k1, k2) {
    if (core.int.is(k1)) {
      if (core.int.is(k2)) {
        if (dart.notNull(k1) > dart.notNull(k2)) {
          return 1;
        } else if (dart.notNull(k1) < dart.notNull(k2)) {
          return -1;
        } else {
          return 0;
        }
      } else {
        return -1;
      }
    } else if (typeof k2 == 'string') {
      return core.String.as(k1)[$compareTo](k2);
    } else {
      return 1;
    }
  };
  var __AesCbcPkcs7__encryptionKey = dart.privateName(aes_cbc_pkcs7, "_#AesCbcPkcs7#_encryptionKey");
  var __AesCbcPkcs7__decryptionKey = dart.privateName(aes_cbc_pkcs7, "_#AesCbcPkcs7#_decryptionKey");
  var _keyBytes$ = dart.privateName(aes_cbc_pkcs7, "_keyBytes");
  var _encryptionKey = dart.privateName(aes_cbc_pkcs7, "_encryptionKey");
  var _decryptionKey = dart.privateName(aes_cbc_pkcs7, "_decryptionKey");
  aes_cbc_pkcs7.AesCbcPkcs7 = class AesCbcPkcs7 extends core.Object {
    get [_encryptionKey]() {
      let t10, t9;
      t9 = this[__AesCbcPkcs7__encryptionKey];
      return t9 == null ? (t10 = aes_engine.AesEngine.generateWorkingKey(this[_keyBytes$], true), this[__AesCbcPkcs7__encryptionKey] == null ? this[__AesCbcPkcs7__encryptionKey] = t10 : dart.throw(new _internal.LateError.fieldADI("_encryptionKey"))) : t9;
    }
    get [_decryptionKey]() {
      let t10, t9;
      t9 = this[__AesCbcPkcs7__decryptionKey];
      return t9 == null ? (t10 = aes_engine.AesEngine.generateWorkingKey(this[_keyBytes$], false), this[__AesCbcPkcs7__decryptionKey] == null ? this[__AesCbcPkcs7__decryptionKey] = t10 : dart.throw(new _internal.LateError.fieldADI("_decryptionKey"))) : t9;
    }
    static ['_#new#tearOff'](_keyBytes) {
      return new aes_cbc_pkcs7.AesCbcPkcs7.new(_keyBytes);
    }
    encrypt(iv, inp, inpOff, inpLength, out, outOff) {
      let t10, t9, t10$, t9$;
      let cbcV = _native_typed_data.NativeUint8List.fromList(iv);
      let inputBlocks = ((inpLength + 16) / 16)[$truncate]();
      let remaining = inpLength[$modulo](16);
      let offset = 0;
      for (let i = 0; i < inputBlocks - 1; i = i + 1) {
        for (let i = 0; i < 16; i = i + 1) {
          t9 = cbcV;
          t10 = i;
          t9[$_set](t10, (t9[$_get](t10) ^ inp[$_get](inpOff + offset + i)) >>> 0);
        }
        aes_engine.AesEngine.encryptBlock(this[_encryptionKey], cbcV, 0, out, outOff + offset);
        cbcV[$setRange](0, 16, out, outOff + offset);
        offset = offset + 16;
      }
      let lastInputBlock = aes_cbc_pkcs7.AesCbcPkcs7._lastInputBlockBuffer;
      lastInputBlock[$setRange](0, remaining, inp, inpOff + offset);
      lastInputBlock[$fillRange](remaining, 16, 16 - remaining);
      for (let i = 0; i < 16; i = i + 1) {
        t9$ = cbcV;
        t10$ = i;
        t9$[$_set](t10$, (t9$[$_get](t10$) ^ lastInputBlock[$_get](i)) >>> 0);
      }
      aes_engine.AesEngine.encryptBlock(this[_encryptionKey], cbcV, 0, out, outOff + offset);
      return offset + 16;
    }
    decrypt(iv, inp, inpOff, inpLength, out, outOff) {
      let t10, t9, t10$, t9$;
      let inputBlocks = ((inpLength + 16 - 1) / 16)[$truncate]();
      let offset = 0;
      aes_engine.AesEngine.decryptBlock(this[_decryptionKey], inp, inpOff, out, outOff);
      for (let i = 0; i < 16; i = i + 1) {
        t9 = out;
        t10 = outOff + i;
        t9[$_set](t10, (t9[$_get](t10) ^ iv[$_get](i)) >>> 0);
      }
      offset = offset + 16;
      for (let i = 0; i < inputBlocks - 1; i = i + 1) {
        aes_engine.AesEngine.decryptBlock(this[_decryptionKey], inp, inpOff + offset, out, outOff + offset);
        for (let i = 0; i < 16; i = i + 1) {
          t9$ = out;
          t10$ = outOff + offset + i;
          t9$[$_set](t10$, (t9$[$_get](t10$) ^ inp[$_get](inpOff - 16 + offset + i)) >>> 0);
        }
        offset = offset + 16;
      }
      let lastDecryptedByte = out[$_get](outOff + offset - 1);
      if (lastDecryptedByte > 16) {
        dart.throw(new core.ArgumentError.new("Invalid or corrupted pad block"));
      }
      for (let i = 0; i < lastDecryptedByte; i = i + 1) {
        if (out[$_get](outOff + offset - i - 1) !== lastDecryptedByte) {
          dart.throw(new core.ArgumentError.new("Invalid or corrupted pad block"));
        }
      }
      return offset - lastDecryptedByte;
    }
  };
  (aes_cbc_pkcs7.AesCbcPkcs7.new = function(_keyBytes) {
    this[__AesCbcPkcs7__encryptionKey] = null;
    this[__AesCbcPkcs7__decryptionKey] = null;
    this[_keyBytes$] = _keyBytes;
    ;
  }).prototype = aes_cbc_pkcs7.AesCbcPkcs7.prototype;
  dart.addTypeTests(aes_cbc_pkcs7.AesCbcPkcs7);
  dart.addTypeCaches(aes_cbc_pkcs7.AesCbcPkcs7);
  dart.setMethodSignature(aes_cbc_pkcs7.AesCbcPkcs7, () => ({
    __proto__: dart.getMethods(aes_cbc_pkcs7.AesCbcPkcs7.__proto__),
    encrypt: dart.fnType(core.int, [typed_data.Uint8List, typed_data.Uint8List, core.int, core.int, typed_data.Uint8List, core.int]),
    decrypt: dart.fnType(core.int, [typed_data.Uint8List, typed_data.Uint8List, core.int, core.int, typed_data.Uint8List, core.int])
  }));
  dart.setGetterSignature(aes_cbc_pkcs7.AesCbcPkcs7, () => ({
    __proto__: dart.getGetters(aes_cbc_pkcs7.AesCbcPkcs7.__proto__),
    [_encryptionKey]: core.List$(typed_data.Uint32List),
    [_decryptionKey]: core.List$(typed_data.Uint32List)
  }));
  dart.setLibraryUri(aes_cbc_pkcs7.AesCbcPkcs7, I[8]);
  dart.setFieldSignature(aes_cbc_pkcs7.AesCbcPkcs7, () => ({
    __proto__: dart.getFields(aes_cbc_pkcs7.AesCbcPkcs7.__proto__),
    [_keyBytes$]: dart.finalFieldType(typed_data.Uint8List),
    [__AesCbcPkcs7__encryptionKey]: dart.fieldType(dart.nullable(core.List$(typed_data.Uint32List))),
    [__AesCbcPkcs7__decryptionKey]: dart.fieldType(dart.nullable(core.List$(typed_data.Uint32List)))
  }));
  dart.setStaticFieldSignature(aes_cbc_pkcs7.AesCbcPkcs7, () => ['_lastInputBlockBuffer']);
  dart.defineLazy(aes_cbc_pkcs7.AesCbcPkcs7, {
    /*aes_cbc_pkcs7.AesCbcPkcs7._lastInputBlockBuffer*/get _lastInputBlockBuffer() {
      return _native_typed_data.NativeUint8List.new(16);
    }
  }, false);
  crc32.Crc32 = class Crc32 extends core.Object {
    static compute(bytes, opts) {
      let crc = opts && 'crc' in opts ? opts.crc : 0;
      let offset = opts && 'offset' in opts ? opts.offset : 0;
      let length = opts && 'length' in opts ? opts.length : null;
      crc = (crc ^ 4294967295) >>> 0;
      length == null ? length = bytes[$length] : null;
      for (let i = offset; i < offset + dart.notNull(length); i = i + 1) {
        crc = (crc32.Crc32._table[$_get]((crc ^ bytes[$_get](i)) & 255) ^ crc[$rightShift](8)) >>> 0;
      }
      return (crc ^ 4294967295) >>> 0;
    }
    static ['_#new#tearOff']() {
      return new crc32.Crc32.new();
    }
  };
  (crc32.Crc32.new = function() {
    ;
  }).prototype = crc32.Crc32.prototype;
  dart.addTypeTests(crc32.Crc32);
  dart.addTypeCaches(crc32.Crc32);
  dart.setStaticMethodSignature(crc32.Crc32, () => ['compute']);
  dart.setLibraryUri(crc32.Crc32, I[9]);
  dart.setStaticFieldSignature(crc32.Crc32, () => ['_table']);
  dart.defineLazy(crc32.Crc32, {
    /*crc32.Crc32._table*/get _table() {
      return C[7] || CT.C7;
    }
  }, false);
  var homePath = dart.privateName(hive_impl, "HiveImpl.homePath");
  var _boxes = dart.privateName(hive_impl, "_boxes");
  var _openingBoxes = dart.privateName(hive_impl, "_openingBoxes");
  var _managerOverride = dart.privateName(hive_impl, "_managerOverride");
  var _secureRandom = dart.privateName(hive_impl, "_secureRandom");
  var _registerDefaultAdapters = dart.privateName(hive_impl, "_registerDefaultAdapters");
  var _manager = dart.privateName(hive_impl, "_manager");
  var _openBox = dart.privateName(hive_impl, "_openBox");
  var _getBoxInternal = dart.privateName(hive_impl, "_getBoxInternal");
  var _typeAdapters = dart.privateName(type_registry_impl, "_typeAdapters");
  type_registry_impl.TypeRegistryImpl = class TypeRegistryImpl extends core.Object {
    findAdapterForValue(value) {
      let match = null;
      for (let adapter of this[_typeAdapters][$values]) {
        if (adapter.matchesRuntimeType(value)) {
          return adapter;
        }
        if (adapter.matchesType(value) && match == null) {
          match = adapter;
        }
      }
      return match;
    }
    findAdapterForTypeId(typeId) {
      return this[_typeAdapters][$_get](typeId);
    }
    registerAdapter(T, adapter, opts) {
      let internal = opts && 'internal' in opts ? opts.internal : false;
      let override = opts && 'override' in opts ? opts.override : false;
      if (dart.wrapType(T)._equals(dart.wrapType(dart.dynamic)) || dart.wrapType(T)._equals(dart.wrapType(core.Object))) {
        core.print("Registering type adapters for dynamic type is must be avoided, " + "otherwise all the write requests to Hive will be handled by given " + "adapter. Please explicitly provide adapter type on registerAdapter " + "method to avoid this kind of issues. For example if you want to " + "register MyTypeAdapter for MyType class you can call like this: " + "registerAdapter<MyType>(MyTypeAdapter())");
      }
      let typeId = adapter.typeId;
      if (!internal) {
        if (typeId < 0 || typeId > 223) {
          dart.throw(new hive.HiveError.new("TypeId " + dart.str(typeId) + " not allowed."));
        }
        typeId = typeId + 32;
        let oldAdapter = this.findAdapterForTypeId(typeId);
        if (oldAdapter != null) {
          if (override) {
            core.print("You are trying to override " + dart.runtimeType(oldAdapter).toString() + "with " + adapter[$runtimeType].toString() + " for typeId: " + dart.str(adapter.typeId) + ". Please note that overriding adapters might " + "cause weird errors. Try to avoid overriding adapters unless not " + "required.");
          } else {
            dart.throw(new hive.HiveError.new("There is already a TypeAdapter for " + "typeId " + dart.str(typeId - 32) + "."));
          }
        }
      }
      let resolved = new (type_registry_impl.ResolvedAdapter$(T)).new(adapter, typeId);
      this[_typeAdapters][$_set](typeId, resolved);
    }
    isAdapterRegistered(typeId, opts) {
      let internal = opts && 'internal' in opts ? opts.internal : false;
      if (!internal) {
        if (typeId < 0 || typeId > 223) {
          dart.throw(new hive.HiveError.new("TypeId " + dart.str(typeId) + " not allowed."));
        }
        typeId = typeId + 32;
      }
      return this.findAdapterForTypeId(typeId) != null;
    }
    resetAdapters() {
      this[_typeAdapters][$clear]();
    }
    ignoreTypeId(T, typeId) {
      this.registerAdapter(dart.nullable(T), new (ignored_type_adapter.IgnoredTypeAdapter$(T)).new(typeId));
    }
    static ['_#new#tearOff']() {
      return new type_registry_impl.TypeRegistryImpl.new();
    }
  };
  (type_registry_impl.TypeRegistryImpl.new = function() {
    this[_typeAdapters] = new (T$.IdentityMapOfint$ResolvedAdapter()).new();
    ;
  }).prototype = type_registry_impl.TypeRegistryImpl.prototype;
  dart.addTypeTests(type_registry_impl.TypeRegistryImpl);
  dart.addTypeCaches(type_registry_impl.TypeRegistryImpl);
  type_registry_impl.TypeRegistryImpl[dart.implements] = () => [hive.TypeRegistry];
  dart.setMethodSignature(type_registry_impl.TypeRegistryImpl, () => ({
    __proto__: dart.getMethods(type_registry_impl.TypeRegistryImpl.__proto__),
    findAdapterForValue: dart.fnType(dart.nullable(type_registry_impl.ResolvedAdapter), [dart.dynamic]),
    findAdapterForTypeId: dart.fnType(dart.nullable(type_registry_impl.ResolvedAdapter), [core.int]),
    registerAdapter: dart.gFnType(T => [dart.void, [hive.TypeAdapter$(T)], {internal: core.bool, override: core.bool}, {}], T => [dart.nullable(core.Object)]),
    isAdapterRegistered: dart.fnType(core.bool, [core.int], {internal: core.bool}, {}),
    resetAdapters: dart.fnType(dart.void, []),
    ignoreTypeId: dart.gFnType(T => [dart.void, [core.int]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(type_registry_impl.TypeRegistryImpl, I[11]);
  dart.setFieldSignature(type_registry_impl.TypeRegistryImpl, () => ({
    __proto__: dart.getFields(type_registry_impl.TypeRegistryImpl.__proto__),
    [_typeAdapters]: dart.finalFieldType(core.Map$(core.int, type_registry_impl.ResolvedAdapter))
  }));
  dart.setStaticFieldSignature(type_registry_impl.TypeRegistryImpl, () => ['nullImpl', 'reservedTypeIds']);
  dart.defineLazy(type_registry_impl.TypeRegistryImpl, {
    /*type_registry_impl.TypeRegistryImpl.nullImpl*/get nullImpl() {
      return C[10] || CT.C10;
    },
    /*type_registry_impl.TypeRegistryImpl.reservedTypeIds*/get reservedTypeIds() {
      return 32;
    }
  }, false);
  hive_impl.HiveImpl = class HiveImpl extends type_registry_impl.TypeRegistryImpl {
    get homePath() {
      return this[homePath];
    }
    set homePath(value) {
      this[homePath] = value;
    }
    static ['_#new#tearOff']() {
      return new hive_impl.HiveImpl.new();
    }
    get [_manager]() {
      let t9;
      t9 = this[_managerOverride];
      return t9 == null ? hive_impl.HiveImpl._defaultBackendManager : t9;
    }
    [_registerDefaultAdapters]() {
      this.registerAdapter(core.DateTime, new date_time_adapter.DateTimeWithTimezoneAdapter.new(), {internal: true});
      this.registerAdapter(date_time_adapter.DateTimeWithoutTZ, new (T$.DateTimeAdapterOfDateTimeWithoutTZ()).new(), {internal: true});
      this.registerAdapter(core.BigInt, new big_int_adapter.BigIntAdapter.new(), {internal: true});
    }
    init(path, opts) {
      let backendPreference = opts && 'backendPreference' in opts ? opts.backendPreference : C[4] || CT.C4;
      this.homePath = path;
      this[_managerOverride] = backend_manager.BackendManager.select(backendPreference);
    }
    [_openBox](E, name, lazy, cipher, comparator, compaction, recovery, path, bytes, collection) {
      return async.async(hive.BoxBase$(E), (function* _openBox() {
        let t9, t10;
        if (!(path == null || bytes == null)) dart.assertFailed(null, I[10], 72, 12, "path == null || bytes == null");
        if (!(name.length <= 255 && extensions['StringX|get#isAscii'](name))) dart.assertFailed("Box names need to be ASCII Strings with a max length of 255.", I[10], 73, 12, "name.length <= 255 && name.isAscii");
        name = name[$toLowerCase]();
        if (this.isBoxOpen(name)) {
          if (lazy) {
            return this.lazyBox(E, name);
          } else {
            return this.box(E, name);
          }
        } else {
          if (this[_openingBoxes][$containsKey](name)) {
            yield this[_openingBoxes][$_get](name);
            if (lazy) {
              return this.lazyBox(E, name);
            } else {
              return this.box(E, name);
            }
          }
          let completer = async.Completer.new();
          this[_openingBoxes][$_set](name, completer.future);
          let newBox = null;
          try {
            let backend = null;
            if (bytes != null) {
              backend = new storage_backend_memory.StorageBackendMemory.new(bytes, cipher);
            } else {
              backend = (yield this[_manager].open(name, (t9 = path, t9 == null ? this.homePath : t9), recovery, cipher, collection));
            }
            if (lazy) {
              newBox = new (lazy_box_impl.LazyBoxImpl$(E)).new(this, name, comparator, compaction, backend);
            } else {
              newBox = new (box_impl.BoxImpl$(E)).new(this, name, comparator, compaction, backend);
            }
            yield newBox.initialize();
            this[_boxes][$_set](name, newBox);
            completer.complete();
            return newBox;
          } catch (e) {
            let error = dart.getThrown(e);
            let stackTrace = dart.stackTrace(e);
            if (core.Object.is(error)) {
              t10 = newBox;
              t10 == null ? null : t10.close();
              completer.completeError(error, stackTrace);
              dart.rethrow(e);
            } else
              throw e;
          } finally {
            this[_openingBoxes][$remove](name);
          }
        }
      }).bind(this));
    }
    openBox(E, name, opts) {
      let encryptionCipher = opts && 'encryptionCipher' in opts ? opts.encryptionCipher : null;
      let keyComparator = opts && 'keyComparator' in opts ? opts.keyComparator : C[8] || CT.C8;
      let compactionStrategy = opts && 'compactionStrategy' in opts ? opts.compactionStrategy : C[9] || CT.C9;
      let crashRecovery = opts && 'crashRecovery' in opts ? opts.crashRecovery : true;
      let path = opts && 'path' in opts ? opts.path : null;
      let bytes = opts && 'bytes' in opts ? opts.bytes : null;
      let collection = opts && 'collection' in opts ? opts.collection : null;
      let encryptionKey = opts && 'encryptionKey' in opts ? opts.encryptionKey : null;
      return async.async(hive.Box$(E), (function* openBox() {
        if (encryptionKey != null) {
          encryptionCipher = new hive.HiveAesCipher.new(encryptionKey);
        }
        return hive.Box$(E).as(yield this[_openBox](E, name, false, encryptionCipher, keyComparator, compactionStrategy, crashRecovery, path, bytes, collection));
      }).bind(this));
    }
    openLazyBox(E, name, opts) {
      let encryptionCipher = opts && 'encryptionCipher' in opts ? opts.encryptionCipher : null;
      let keyComparator = opts && 'keyComparator' in opts ? opts.keyComparator : C[8] || CT.C8;
      let compactionStrategy = opts && 'compactionStrategy' in opts ? opts.compactionStrategy : C[9] || CT.C9;
      let crashRecovery = opts && 'crashRecovery' in opts ? opts.crashRecovery : true;
      let path = opts && 'path' in opts ? opts.path : null;
      let collection = opts && 'collection' in opts ? opts.collection : null;
      let encryptionKey = opts && 'encryptionKey' in opts ? opts.encryptionKey : null;
      return async.async(hive.LazyBox$(E), (function* openLazyBox() {
        if (encryptionKey != null) {
          encryptionCipher = new hive.HiveAesCipher.new(encryptionKey);
        }
        return hive.LazyBox$(E).as(yield this[_openBox](E, name, true, encryptionCipher, keyComparator, compactionStrategy, crashRecovery, path, null, collection));
      }).bind(this));
    }
    [_getBoxInternal](E, name, lazy = null) {
      let lowerCaseName = name[$toLowerCase]();
      let box = this[_boxes][$_get](lowerCaseName);
      if (box != null) {
        if ((lazy == null || box.lazy === lazy) && box.valueType._equals(dart.wrapType(E))) {
          return hive.BoxBase$(E).as(box);
        } else {
          let typeName = hive.LazyBox.is(box) ? "LazyBox<" + dart.str(box.valueType) + ">" : "Box<" + dart.str(box.valueType) + ">";
          dart.throw(new hive.HiveError.new("The box \"" + lowerCaseName + "\" is already open " + "and of type " + typeName + "."));
        }
      } else {
        dart.throw(new hive.HiveError.new("Box not found. Did you forget to call Hive.openBox()?"));
      }
    }
    getBoxWithoutCheckInternal(name) {
      let lowerCaseName = name[$toLowerCase]();
      return this[_boxes][$_get](lowerCaseName);
    }
    box(E, name) {
      return hive.Box$(E).as(this[_getBoxInternal](E, name, false));
    }
    lazyBox(E, name) {
      return hive.LazyBox$(E).as(this[_getBoxInternal](E, name, true));
    }
    isBoxOpen(name) {
      return this[_boxes][$containsKey](name[$toLowerCase]());
    }
    close() {
      let closeFutures = this[_boxes][$values][$map](T$.FutureOfvoid(), dart.fn(box => box.close(), T$.BoxBaseImplToFutureOfvoid()));
      return async.Future.wait(dart.void, closeFutures);
    }
    unregisterBox(name) {
      name = name[$toLowerCase]();
      this[_openingBoxes][$remove](name);
      this[_boxes][$remove](name);
    }
    deleteBoxFromDisk(name, opts) {
      let path = opts && 'path' in opts ? opts.path : null;
      let collection = opts && 'collection' in opts ? opts.collection : null;
      return async.async(dart.void, (function* deleteBoxFromDisk() {
        let t10;
        let lowerCaseName = name[$toLowerCase]();
        let box = this[_boxes][$_get](lowerCaseName);
        if (box != null) {
          yield box.deleteFromDisk();
        } else {
          yield this[_manager].deleteBox(lowerCaseName, (t10 = path, t10 == null ? this.homePath : t10), collection);
        }
      }).bind(this));
    }
    deleteFromDisk() {
      let deleteFutures = this[_boxes][$values][$toList]()[$map](T$.FutureOfvoid(), dart.fn(box => box.deleteFromDisk(), T$.BoxBaseImplToFutureOfvoid()));
      return async.Future.wait(dart.void, deleteFutures);
    }
    generateSecureKey() {
      return extensions['RandomX|nextBytes'](this[_secureRandom], 32);
    }
    boxExists(name, opts) {
      let path = opts && 'path' in opts ? opts.path : null;
      let collection = opts && 'collection' in opts ? opts.collection : null;
      return async.async(core.bool, (function* boxExists() {
        let t10;
        let lowerCaseName = name[$toLowerCase]();
        return yield this[_manager].boxExists(lowerCaseName, (t10 = path, t10 == null ? this.homePath : t10), collection);
      }).bind(this));
    }
  };
  (hive_impl.HiveImpl.new = function() {
    this[_boxes] = new (T$.IdentityMapOfString$BoxBaseImpl()).new();
    this[_openingBoxes] = new (T$.IdentityMapOfString$Future()).new();
    this[_managerOverride] = null;
    this[_secureRandom] = math.Random.secure();
    this[homePath] = null;
    hive_impl.HiveImpl.__proto__.new.call(this);
    this[_registerDefaultAdapters]();
  }).prototype = hive_impl.HiveImpl.prototype;
  dart.addTypeTests(hive_impl.HiveImpl);
  dart.addTypeCaches(hive_impl.HiveImpl);
  hive_impl.HiveImpl[dart.implements] = () => [hive.HiveInterface];
  dart.setMethodSignature(hive_impl.HiveImpl, () => ({
    __proto__: dart.getMethods(hive_impl.HiveImpl.__proto__),
    [_registerDefaultAdapters]: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [dart.nullable(core.String)], {backendPreference: hive.HiveStorageBackendPreference}, {}),
    [_openBox]: dart.gFnType(E => [async.Future$(hive.BoxBase$(E)), [core.String, core.bool, dart.nullable(hive.HiveCipher), dart.fnType(core.int, [dart.dynamic, dart.dynamic]), dart.fnType(core.bool, [core.int, core.int]), core.bool, dart.nullable(core.String), dart.nullable(typed_data.Uint8List), dart.nullable(core.String)]], E => [dart.nullable(core.Object)]),
    openBox: dart.gFnType(E => [async.Future$(hive.Box$(E)), [core.String], {bytes: dart.nullable(typed_data.Uint8List), collection: dart.nullable(core.String), compactionStrategy: dart.fnType(core.bool, [core.int, core.int]), crashRecovery: core.bool, encryptionCipher: dart.nullable(hive.HiveCipher), encryptionKey: dart.nullable(core.List$(core.int)), keyComparator: dart.fnType(core.int, [dart.dynamic, dart.dynamic]), path: dart.nullable(core.String)}, {}], E => [dart.nullable(core.Object)]),
    openLazyBox: dart.gFnType(E => [async.Future$(hive.LazyBox$(E)), [core.String], {collection: dart.nullable(core.String), compactionStrategy: dart.fnType(core.bool, [core.int, core.int]), crashRecovery: core.bool, encryptionCipher: dart.nullable(hive.HiveCipher), encryptionKey: dart.nullable(core.List$(core.int)), keyComparator: dart.fnType(core.int, [dart.dynamic, dart.dynamic]), path: dart.nullable(core.String)}, {}], E => [dart.nullable(core.Object)]),
    [_getBoxInternal]: dart.gFnType(E => [hive.BoxBase$(E), [core.String], [dart.nullable(core.bool)]], E => [dart.nullable(core.Object)]),
    getBoxWithoutCheckInternal: dart.fnType(dart.nullable(hive.BoxBase), [core.String]),
    box: dart.gFnType(E => [hive.Box$(E), [core.String]], E => [dart.nullable(core.Object)]),
    lazyBox: dart.gFnType(E => [hive.LazyBox$(E), [core.String]], E => [dart.nullable(core.Object)]),
    isBoxOpen: dart.fnType(core.bool, [core.String]),
    close: dart.fnType(async.Future$(dart.void), []),
    unregisterBox: dart.fnType(dart.void, [core.String]),
    deleteBoxFromDisk: dart.fnType(async.Future$(dart.void), [core.String], {collection: dart.nullable(core.String), path: dart.nullable(core.String)}, {}),
    deleteFromDisk: dart.fnType(async.Future$(dart.void), []),
    generateSecureKey: dart.fnType(core.List$(core.int), []),
    boxExists: dart.fnType(async.Future$(core.bool), [core.String], {collection: dart.nullable(core.String), path: dart.nullable(core.String)}, {})
  }));
  dart.setGetterSignature(hive_impl.HiveImpl, () => ({
    __proto__: dart.getGetters(hive_impl.HiveImpl.__proto__),
    [_manager]: storage_backend.BackendManagerInterface
  }));
  dart.setLibraryUri(hive_impl.HiveImpl, I[12]);
  dart.setFieldSignature(hive_impl.HiveImpl, () => ({
    __proto__: dart.getFields(hive_impl.HiveImpl.__proto__),
    [_boxes]: dart.finalFieldType(collection.HashMap$(core.String, box_base_impl.BoxBaseImpl)),
    [_openingBoxes]: dart.finalFieldType(collection.HashMap$(core.String, async.Future)),
    [_managerOverride]: dart.fieldType(dart.nullable(storage_backend.BackendManagerInterface)),
    [_secureRandom]: dart.finalFieldType(math.Random),
    homePath: dart.fieldType(dart.nullable(core.String))
  }));
  dart.setStaticFieldSignature(hive_impl.HiveImpl, () => ['_defaultBackendManager']);
  dart.defineLazy(hive_impl.HiveImpl, {
    /*hive_impl.HiveImpl._defaultBackendManager*/get _defaultBackendManager() {
      return backend_manager.BackendManager.select();
    }
  }, false);
  var boxName$ = dart.privateName(hive_list_impl, "HiveListImpl.boxName");
  var _hive = dart.privateName(hive_list_impl, "_hive");
  var _invalidated = dart.privateName(hive_list_impl, "_invalidated");
  var _disposed = dart.privateName(hive_list_impl, "_disposed");
  var _keys = dart.privateName(hive_list_impl, "_keys");
  var _delegate = dart.privateName(hive_list_impl, "_delegate");
  var _box = dart.privateName(hive_list_impl, "_box");
  var _checkElementIsValid = dart.privateName(hive_list_impl, "_checkElementIsValid");
  const _is_HiveCollectionMixin_default = Symbol('_is_HiveCollectionMixin_default');
  hive_collection_mixin.HiveCollectionMixin$ = dart.generic(E => {
    var __t$LinkedMapOfdynamic$E = () => (__t$LinkedMapOfdynamic$E = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, E)))();
    class HiveCollectionMixin extends core.Object {
      get keys() {
        return new _js_helper.SyncIterable.new((function* keys() {
          for (let value of this) {
            yield value.key;
          }
        }).bind(this));
      }
      deleteAllFromHive() {
        return this.box.deleteAll(this.keys);
      }
      deleteFirstFromHive() {
        return this[$first].delete();
      }
      deleteLastFromHive() {
        return this[$last].delete();
      }
      deleteFromHive(index) {
        return this[$_get](index).delete();
      }
      toMap() {
        let map = new (__t$LinkedMapOfdynamic$E()).new();
        for (let item of this) {
          map[$_set](item.key, item);
        }
        return map;
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
    }
    (HiveCollectionMixin.new = function() {
      ;
    }).prototype = HiveCollectionMixin.prototype;
    dart.addTypeTests(HiveCollectionMixin);
    HiveCollectionMixin.prototype[_is_HiveCollectionMixin_default] = true;
    dart.addTypeCaches(HiveCollectionMixin);
    HiveCollectionMixin[dart.implements] = () => [hive.HiveCollection$(E)];
    dart.setMethodSignature(HiveCollectionMixin, () => ({
      __proto__: dart.getMethods(HiveCollectionMixin.__proto__),
      deleteAllFromHive: dart.fnType(async.Future$(dart.void), []),
      deleteFirstFromHive: dart.fnType(async.Future$(dart.void), []),
      deleteLastFromHive: dart.fnType(async.Future$(dart.void), []),
      deleteFromHive: dart.fnType(async.Future$(dart.void), [core.int]),
      toMap: dart.fnType(core.Map$(dart.dynamic, E), [])
    }));
    dart.setGetterSignature(HiveCollectionMixin, () => ({
      __proto__: dart.getGetters(HiveCollectionMixin.__proto__),
      keys: core.Iterable
    }));
    dart.setLibraryUri(HiveCollectionMixin, I[13]);
    return HiveCollectionMixin;
  });
  hive_collection_mixin.HiveCollectionMixin = hive_collection_mixin.HiveCollectionMixin$();
  dart.addTypeTests(hive_collection_mixin.HiveCollectionMixin, _is_HiveCollectionMixin_default);
  const _is_DelegatingListViewMixin_default = Symbol('_is_DelegatingListViewMixin_default');
  delegating_list_view_mixin.DelegatingListViewMixin$ = dart.generic(E => {
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    var __t$VoidToE = () => (__t$VoidToE = dart.constFn(dart.fnType(E, [])))();
    var __t$VoidToNE = () => (__t$VoidToNE = dart.constFn(dart.nullable(__t$VoidToE())))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$EAndEToE = () => (__t$EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    class DelegatingListViewMixin extends core.Object {
      get first() {
        return this.delegate[$first];
      }
      get last() {
        return this.delegate[$last];
      }
      get length() {
        return this.delegate[$length];
      }
      ['+'](other) {
        __t$ListOfE().as(other);
        return this.delegate[$plus](other);
      }
      _get(index) {
        return this.delegate[$_get](index);
      }
      any(test) {
        return this.delegate[$any](test);
      }
      asMap() {
        return this.delegate[$asMap]();
      }
      cast(R) {
        return this.delegate[$cast](R);
      }
      contains(element) {
        return this.delegate[$contains](element);
      }
      elementAt(index) {
        return this.delegate[$elementAt](index);
      }
      every(test) {
        return this.delegate[$every](test);
      }
      expand(T, f) {
        return this.delegate[$expand](T, f);
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this.delegate[$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this.delegate[$fold](T, initialValue, combine);
      }
      followedBy(other) {
        __t$IterableOfE().as(other);
        return this.delegate[$followedBy](other);
      }
      forEach(f) {
        return this.delegate[$forEach](f);
      }
      getRange(start, end) {
        return this.delegate[$getRange](start, end);
      }
      indexOf(element, start = 0) {
        return this.delegate[$indexOf](E.as(element), start);
      }
      indexWhere(test, start = 0) {
        return this.delegate[$indexWhere](test, start);
      }
      get isEmpty() {
        return this.delegate[$isEmpty];
      }
      get isNotEmpty() {
        return this.delegate[$isNotEmpty];
      }
      get iterator() {
        return this.delegate[$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator = "") {
        return this.delegate[$join](separator);
      }
      lastIndexOf(element, start = null) {
        return this.delegate[$lastIndexOf](E.as(element), start);
      }
      lastIndexWhere(test, start = null) {
        return this.delegate[$lastIndexWhere](test, start);
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this.delegate[$lastWhere](test, {orElse: orElse});
      }
      map(T, f) {
        return this.delegate[$map](T, f);
      }
      reduce(combine) {
        __t$EAndEToE().as(combine);
        return this.delegate[$reduce](combine);
      }
      get reversed() {
        return this.delegate[$reversed];
      }
      get single() {
        return this.delegate[$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this.delegate[$singleWhere](test, {orElse: orElse});
      }
      skip(count) {
        return this.delegate[$skip](count);
      }
      skipWhile(test) {
        return this.delegate[$skipWhile](test);
      }
      sublist(start, end = null) {
        return this.delegate[$sublist](start, end);
      }
      take(count) {
        return this.delegate[$take](count);
      }
      takeWhile(test) {
        return this.delegate[$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this.delegate[$toList]({growable: growable});
      }
      toSet() {
        return this.delegate[$toSet]();
      }
      where(test) {
        return this.delegate[$where](test);
      }
      whereType(T) {
        return this.delegate[$whereType](T);
      }
    }
    (DelegatingListViewMixin.new = function() {
      ;
    }).prototype = DelegatingListViewMixin.prototype;
    DelegatingListViewMixin.prototype[dart.isList] = true;
    dart.addTypeTests(DelegatingListViewMixin);
    DelegatingListViewMixin.prototype[_is_DelegatingListViewMixin_default] = true;
    dart.addTypeCaches(DelegatingListViewMixin);
    DelegatingListViewMixin[dart.implements] = () => [core.List$(E)];
    dart.setMethodSignature(DelegatingListViewMixin, () => ({
      __proto__: dart.getMethods(DelegatingListViewMixin.__proto__),
      '+': dart.fnType(core.List$(E), [dart.nullable(core.Object)]),
      [$plus]: dart.fnType(core.List$(E), [dart.nullable(core.Object)]),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      asMap: dart.fnType(core.Map$(core.int, E), []),
      [$asMap]: dart.fnType(core.Map$(core.int, E), []),
      cast: dart.gFnType(R => [core.List$(R), []], R => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(R => [core.List$(R), []], R => [dart.nullable(core.Object)]),
      contains: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      [$contains]: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      followedBy: dart.fnType(core.Iterable$(E), [dart.nullable(core.Object)]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [dart.nullable(core.Object)]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      getRange: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      [$getRange]: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      indexOf: dart.fnType(core.int, [dart.nullable(core.Object)], [core.int]),
      [$indexOf]: dart.fnType(core.int, [dart.nullable(core.Object)], [core.int]),
      indexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      [$indexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      lastIndexOf: dart.fnType(core.int, [dart.nullable(core.Object)], [dart.nullable(core.int)]),
      [$lastIndexOf]: dart.fnType(core.int, [dart.nullable(core.Object)], [dart.nullable(core.int)]),
      lastIndexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [dart.nullable(core.int)]),
      [$lastIndexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [dart.nullable(core.int)]),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      reduce: dart.fnType(E, [dart.nullable(core.Object)]),
      [$reduce]: dart.fnType(E, [dart.nullable(core.Object)]),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: dart.nullable(core.Object)}, {}),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      sublist: dart.fnType(core.List$(E), [core.int], [dart.nullable(core.int)]),
      [$sublist]: dart.fnType(core.List$(E), [core.int], [dart.nullable(core.int)]),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}, {}),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      where: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$where]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(DelegatingListViewMixin, () => ({
      __proto__: dart.getGetters(DelegatingListViewMixin.__proto__),
      first: E,
      [$first]: E,
      last: E,
      [$last]: E,
      length: core.int,
      [$length]: core.int,
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      reversed: core.Iterable$(E),
      [$reversed]: core.Iterable$(E),
      single: E,
      [$single]: E
    }));
    dart.setLibraryUri(DelegatingListViewMixin, I[14]);
    dart.defineExtensionMethods(DelegatingListViewMixin, [
      '+',
      '_get',
      'any',
      'asMap',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'getRange',
      'indexOf',
      'indexWhere',
      'join',
      'lastIndexOf',
      'lastIndexWhere',
      'lastWhere',
      'map',
      'reduce',
      'singleWhere',
      'skip',
      'skipWhile',
      'sublist',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType'
    ]);
    dart.defineExtensionAccessors(DelegatingListViewMixin, [
      'first',
      'last',
      'length',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'reversed',
      'single'
    ]);
    return DelegatingListViewMixin;
  });
  delegating_list_view_mixin.DelegatingListViewMixin = delegating_list_view_mixin.DelegatingListViewMixin$();
  dart.addTypeTests(delegating_list_view_mixin.DelegatingListViewMixin, _is_DelegatingListViewMixin_default);
  const _is_HiveListImpl_default = Symbol('_is_HiveListImpl_default');
  hive_list_impl.HiveListImpl$ = dart.generic(E => {
    var __t$JSArrayOfE = () => (__t$JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    const Object_HiveCollectionMixin$36 = class Object_HiveCollectionMixin extends core.Object {};
    (Object_HiveCollectionMixin$36.new = function() {
    }).prototype = Object_HiveCollectionMixin$36.prototype;
    dart.applyMixin(Object_HiveCollectionMixin$36, hive_collection_mixin.HiveCollectionMixin$(E));
    const Object_ListMixin$36 = class Object_ListMixin extends Object_HiveCollectionMixin$36 {};
    (Object_ListMixin$36.new = function() {
    }).prototype = Object_ListMixin$36.prototype;
    dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(E));
    const Object_DelegatingListViewMixin$36 = class Object_DelegatingListViewMixin extends Object_ListMixin$36 {};
    (Object_DelegatingListViewMixin$36.new = function() {
    }).prototype = Object_DelegatingListViewMixin$36.prototype;
    dart.applyMixin(Object_DelegatingListViewMixin$36, delegating_list_view_mixin.DelegatingListViewMixin$(E));
    class HiveListImpl extends Object_DelegatingListViewMixin$36 {
      get boxName() {
        return this[boxName$];
      }
      set boxName(value) {
        super.boxName = value;
      }
      static ['_#new#tearOff'](E, box, opts) {
        let objects = opts && 'objects' in opts ? opts.objects : null;
        return new (hive_list_impl.HiveListImpl$(E)).new(box, {objects: objects});
      }
      static ['_#lazy#tearOff'](E, boxName, keys) {
        return new (hive_list_impl.HiveListImpl$(E)).lazy(boxName, keys);
      }
      get keys() {
        if (this[_delegate] == null) {
          return dart.nullCheck(this[_keys]);
        } else {
          return super.keys;
        }
      }
      get box() {
        if (this[_box] == null) {
          let box = hive_impl.HiveImpl.as(this[_hive]).getBoxWithoutCheckInternal(this.boxName);
          if (box == null) {
            dart.throw(new hive.HiveError.new("To use this list, you have to open the box \"" + this.boxName + "\" first."));
          } else if (!hive.Box.is(box)) {
            dart.throw(new hive.HiveError.new("The box \"" + this.boxName + "\" is a lazy box. " + "You can only use HiveLists with normal boxes."));
          } else {
            this[_box] = box;
          }
        }
        return dart.nullCheck(this[_box]);
      }
      get delegate() {
        if (this[_disposed]) {
          dart.throw(new hive.HiveError.new("HiveList has already been disposed."));
        }
        if (this[_invalidated]) {
          let retained = __t$JSArrayOfE().of([]);
          for (let obj of dart.nullCheck(this[_delegate])) {
            if (hive_object['HiveObjectInternal|isInHiveList'](obj, this)) {
              retained[$add](obj);
            }
          }
          this[_delegate] = retained;
          this[_invalidated] = false;
        } else if (this[_delegate] == null) {
          let list = __t$JSArrayOfE().of([]);
          for (let key of dart.nullCheck(this[_keys])) {
            if (this.box.containsKey(key)) {
              let obj = E.as(this.box.get(key));
              hive_object['HiveObjectInternal|linkHiveList'](obj, this);
              list[$add](obj);
            }
          }
          this[_delegate] = list;
        }
        return dart.nullCheck(this[_delegate]);
      }
      dispose() {
        if (this[_delegate] != null) {
          for (let element of dart.nullCheck(this[_delegate])) {
            hive_object['HiveObjectInternal|unlinkHiveList'](element, this);
          }
          this[_delegate] = null;
        }
        this[_disposed] = true;
      }
      invalidate() {
        if (this[_delegate] != null) {
          this[_invalidated] = true;
        }
      }
      [_checkElementIsValid](obj) {
        if (!dart.equals(obj.box, this.box)) {
          dart.throw(new hive.HiveError.new("HiveObjects needs to be in the box \"" + this.boxName + "\"."));
        }
      }
      set length(newLength) {
        if (newLength < this.delegate[$length]) {
          for (let i = newLength; i < this.delegate[$length]; i = i + 1) {
            hive_object['HiveObjectInternal|unlinkHiveList'](this.delegate[$_get](i), this);
          }
        }
        this.delegate[$length] = newLength;
      }
      get length() {
        return super.length;
      }
      _set(index, value$) {
        let value = value$;
        E.as(value);
        this[_checkElementIsValid](value);
        hive_object['HiveObjectInternal|linkHiveList'](value, this);
        let oldValue = this.delegate[$_get](index);
        this.delegate[$_set](index, value);
        hive_object['HiveObjectInternal|unlinkHiveList'](oldValue, this);
        return value$;
      }
      add(element) {
        E.as(element);
        this[_checkElementIsValid](element);
        hive_object['HiveObjectInternal|linkHiveList'](element, this);
        this.delegate[$add](element);
      }
      addAll(iterable) {
        __t$IterableOfE().as(iterable);
        for (let element of iterable) {
          this[_checkElementIsValid](element);
          hive_object['HiveObjectInternal|linkHiveList'](element, this);
        }
        this.delegate[$addAll](iterable);
      }
      castHiveList(T) {
        if (this[_delegate] != null) {
          return new (hive_list_impl.HiveListImpl$(T)).new(this.box, {objects: dart.nullCheck(this[_delegate])[$cast](T)});
        } else {
          return new (hive_list_impl.HiveListImpl$(T)).lazy(this.boxName, this[_keys]);
        }
      }
      set debugHive(hive) {
        return this[_hive] = hive;
      }
    }
    (HiveListImpl.new = function(box, opts) {
      let objects = opts && 'objects' in opts ? opts.objects : null;
      this[_hive] = hive.Hive;
      this[_invalidated] = false;
      this[_disposed] = false;
      this[boxName$] = box.name;
      this[_keys] = null;
      this[_delegate] = __t$JSArrayOfE().of([]);
      this[_box] = box;
      if (objects != null) {
        this.addAll(objects);
      }
    }).prototype = HiveListImpl.prototype;
    (HiveListImpl.lazy = function(boxName, keys) {
      this[_hive] = hive.Hive;
      this[_invalidated] = false;
      this[_disposed] = false;
      this[_box] = null;
      this[_delegate] = null;
      this[boxName$] = boxName;
      this[_keys] = keys;
      ;
    }).prototype = HiveListImpl.prototype;
    dart.addTypeTests(HiveListImpl);
    HiveListImpl.prototype[_is_HiveListImpl_default] = true;
    dart.addTypeCaches(HiveListImpl);
    HiveListImpl[dart.implements] = () => [hive.HiveList$(E)];
    dart.setMethodSignature(HiveListImpl, () => ({
      __proto__: dart.getMethods(HiveListImpl.__proto__),
      dispose: dart.fnType(dart.void, []),
      invalidate: dart.fnType(dart.void, []),
      [_checkElementIsValid]: dart.fnType(dart.void, [E]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      castHiveList: dart.gFnType(T => [hive.HiveList$(T), []], T => [hive_object.HiveObjectMixin])
    }));
    dart.setGetterSignature(HiveListImpl, () => ({
      __proto__: dart.getGetters(HiveListImpl.__proto__),
      box: hive.Box,
      delegate: core.List$(E)
    }));
    dart.setSetterSignature(HiveListImpl, () => ({
      __proto__: dart.getSetters(HiveListImpl.__proto__),
      length: core.int,
      [$length]: core.int,
      debugHive: hive.HiveInterface
    }));
    dart.setLibraryUri(HiveListImpl, I[15]);
    dart.setFieldSignature(HiveListImpl, () => ({
      __proto__: dart.getFields(HiveListImpl.__proto__),
      boxName: dart.finalFieldType(core.String),
      [_keys]: dart.finalFieldType(dart.nullable(core.List)),
      [_hive]: dart.fieldType(hive.HiveInterface),
      [_delegate]: dart.fieldType(dart.nullable(core.List$(E))),
      [_box]: dart.fieldType(dart.nullable(hive.Box)),
      [_invalidated]: dart.fieldType(core.bool),
      [_disposed]: dart.fieldType(core.bool)
    }));
    dart.defineExtensionMethods(HiveListImpl, ['_set', 'add', 'addAll']);
    dart.defineExtensionAccessors(HiveListImpl, ['length']);
    return HiveListImpl;
  });
  hive_list_impl.HiveListImpl = hive_list_impl.HiveListImpl$();
  dart.addTypeTests(hive_list_impl.HiveListImpl, _is_HiveListImpl_default);
  var _box$ = dart.privateName(hive_object, "HiveObjectMixin._box");
  var _key = dart.privateName(hive_object, "HiveObjectMixin._key");
  var _hiveLists = dart.privateName(hive_object, "HiveObjectMixin._hiveLists");
  var _box$0 = dart.privateName(hive_object, "_box");
  var _key$ = dart.privateName(hive_object, "_key");
  var _hiveLists$ = dart.privateName(hive_object, "_hiveLists");
  var _requireInitialized = dart.privateName(hive_object, "_requireInitialized");
  hive_object.HiveObjectMixin = class HiveObjectMixin extends core.Object {};
  hive_object.HiveObjectMixin[dart.mixinOn] = Object => class HiveObjectMixin extends Object {
    get [_box$0]() {
      return this[_box$];
    }
    set [_box$0](value) {
      this[_box$] = value;
    }
    get [_key$]() {
      return this[_key];
    }
    set [_key$](value) {
      this[_key] = value;
    }
    get [_hiveLists$]() {
      return this[_hiveLists];
    }
    set [_hiveLists$](value) {
      super[_hiveLists$] = value;
    }
    get box() {
      return this[_box$0];
    }
    get key() {
      return this[_key$];
    }
    [_requireInitialized]() {
      if (this[_box$0] == null) {
        dart.throw(new hive.HiveError.new("This object is currently not in a box."));
      }
    }
    save() {
      this[_requireInitialized]();
      return dart.nullCheck(this[_box$0]).put(this[_key$], this);
    }
    delete() {
      this[_requireInitialized]();
      return dart.nullCheck(this[_box$0]).delete(this[_key$]);
    }
    get isInBox() {
      if (this[_box$0] != null) {
        if (dart.nullCheck(this[_box$0]).lazy) {
          return dart.nullCheck(this[_box$0]).containsKey(this[_key$]);
        } else {
          return true;
        }
      }
      return false;
    }
  };
  (hive_object.HiveObjectMixin[dart.mixinNew] = function() {
    this[_box$] = null;
    this[_key] = null;
    this[_hiveLists] = new (T$.LinkedMapOfHiveListOfHiveObjectMixin$int()).new();
  }).prototype = hive_object.HiveObjectMixin.prototype;
  dart.addTypeTests(hive_object.HiveObjectMixin);
  dart.addTypeCaches(hive_object.HiveObjectMixin);
  hive_object.HiveObjectMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(hive_object.HiveObjectMixin, () => ({
    __proto__: dart.getMethods(hive_object.HiveObjectMixin.__proto__),
    [_requireInitialized]: dart.fnType(dart.void, []),
    save: dart.fnType(async.Future$(dart.void), []),
    delete: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(hive_object.HiveObjectMixin, () => ({
    __proto__: dart.getGetters(hive_object.HiveObjectMixin.__proto__),
    box: dart.nullable(hive.BoxBase),
    key: dart.dynamic,
    isInBox: core.bool
  }));
  dart.setLibraryUri(hive_object.HiveObjectMixin, I[16]);
  dart.setFieldSignature(hive_object.HiveObjectMixin, () => ({
    __proto__: dart.getFields(hive_object.HiveObjectMixin.__proto__),
    [_box$0]: dart.fieldType(dart.nullable(hive.BoxBase)),
    [_key$]: dart.fieldType(dart.dynamic),
    [_hiveLists$]: dart.finalFieldType(core.Map$(hive.HiveList$(hive_object.HiveObjectMixin), core.int))
  }));
  const Object_HiveObjectMixin$36 = class Object_HiveObjectMixin extends core.Object {};
  (Object_HiveObjectMixin$36.new = function() {
    hive_object.HiveObjectMixin[dart.mixinNew].call(this);
  }).prototype = Object_HiveObjectMixin$36.prototype;
  dart.applyMixin(Object_HiveObjectMixin$36, hive_object.HiveObjectMixin);
  hive_object.HiveObject = class HiveObject extends Object_HiveObjectMixin$36 {};
  (hive_object.HiveObject.new = function() {
    hive_object.HiveObject.__proto__.new.call(this);
    ;
  }).prototype = hive_object.HiveObject.prototype;
  dart.addTypeTests(hive_object.HiveObject);
  dart.addTypeCaches(hive_object.HiveObject);
  dart.setLibraryUri(hive_object.HiveObject, I[16]);
  hive_object['HiveObjectInternal|init'] = function HiveObjectInternal$124init($this, key, box) {
    if ($this[_box$0] != null) {
      if (!dart.equals($this[_box$0], box)) {
        dart.throw(new hive.HiveError.new("The same instance of an HiveObject cannot " + "be stored in two different boxes."));
      } else if (!dart.equals($this[_key$], key)) {
        dart.throw(new hive.HiveError.new("The same instance of an HiveObject cannot " + "be stored with two different keys (\"" + dart.str($this[_key$]) + "\" and \"" + dart.str(key) + "\")."));
      }
    }
    $this[_box$0] = box;
    $this[_key$] = key;
  };
  hive_object['HiveObjectInternal|get#init'] = function HiveObjectInternal$124get$35init($this) {
    return dart.fn((key, box) => hive_object['HiveObjectInternal|init']($this, key, box), T$.dynamicAndBoxBaseTovoid());
  };
  hive_object['HiveObjectInternal|dispose'] = function HiveObjectInternal$124dispose($this) {
    for (let list of $this[_hiveLists$][$keys]) {
      T$.HiveListImplOfHiveObjectMixin().as(list).invalidate();
    }
    $this[_hiveLists$][$clear]();
    $this[_box$0] = null;
    $this[_key$] = null;
  };
  hive_object['HiveObjectInternal|get#dispose'] = function HiveObjectInternal$124get$35dispose($this) {
    return dart.fn(() => hive_object['HiveObjectInternal|dispose']($this), T$.VoidTovoid());
  };
  hive_object['HiveObjectInternal|linkHiveList'] = function HiveObjectInternal$124linkHiveList($this, list) {
    let t15;
    $this[_requireInitialized]();
    $this[_hiveLists$][$_set](list, dart.notNull((t15 = $this[_hiveLists$][$_get](list), t15 == null ? 0 : t15)) + 1);
  };
  hive_object['HiveObjectInternal|get#linkHiveList'] = function HiveObjectInternal$124get$35linkHiveList($this) {
    return dart.fn(list => hive_object['HiveObjectInternal|linkHiveList']($this, list), T$.HiveListOfHiveObjectMixinTovoid());
  };
  hive_object['HiveObjectInternal|unlinkHiveList'] = function HiveObjectInternal$124unlinkHiveList($this, list) {
    let t19, t18, t17;
    let currentIndex = dart.nullCheck($this[_hiveLists$][$_get](list));
    let newIndex = (t17 = $this[_hiveLists$], t18 = list, t19 = currentIndex - 1, t17[$_set](t18, t19), t19);
    if (newIndex <= 0) {
      $this[_hiveLists$][$remove](list);
    }
  };
  hive_object['HiveObjectInternal|get#unlinkHiveList'] = function HiveObjectInternal$124get$35unlinkHiveList($this) {
    return dart.fn(list => hive_object['HiveObjectInternal|unlinkHiveList']($this, list), T$.HiveListOfHiveObjectMixinTovoid());
  };
  hive_object['HiveObjectInternal|isInHiveList'] = function HiveObjectInternal$124isInHiveList($this, list) {
    return $this[_hiveLists$][$containsKey](list);
  };
  hive_object['HiveObjectInternal|get#isInHiveList'] = function HiveObjectInternal$124get$35isInHiveList($this) {
    return dart.fn(list => hive_object['HiveObjectInternal|isInHiveList']($this, list), T$.HiveListOfHiveObjectMixinTobool());
  };
  hive_object['HiveObjectInternal|get#debugHiveLists'] = function HiveObjectInternal$124get$35debugHiveLists($this) {
    return $this[_hiveLists$];
  };
  extensions['StringX|get#isAscii'] = function StringX$124get$35isAscii($this) {
    for (let cu of $this[$codeUnits]) {
      if (cu > 127) return false;
    }
    return true;
  };
  extensions['ListIntX|readUint32'] = function ListIntX$124readUint32($this, offset) {
    return ($this[$_get](offset) | $this[$_get](offset + 1) << 8 >>> 0 | $this[$_get](offset + 2) << 16 >>> 0 | $this[$_get](offset + 3) << 24 >>> 0) >>> 0;
  };
  extensions['ListIntX|get#readUint32'] = function ListIntX$124get$35readUint32($this) {
    return dart.fn(offset => extensions['ListIntX|readUint32']($this, offset), T$.intToint());
  };
  extensions['ListIntX|writeUint32'] = function ListIntX$124writeUint32($this, offset, value) {
    $this[$_set](offset, value);
    $this[$_set](offset + 1, value[$rightShift](8));
    $this[$_set](offset + 2, value[$rightShift](16));
    $this[$_set](offset + 3, value[$rightShift](24));
  };
  extensions['ListIntX|get#writeUint32'] = function ListIntX$124get$35writeUint32($this) {
    return dart.fn((offset, value) => extensions['ListIntX|writeUint32']($this, offset, value), T$.intAndintTovoid());
  };
  extensions['Uint8ListX|view'] = function Uint8ListX$124view($this, offset, bytes) {
    return typed_data.Uint8List.view($this[$buffer], $this[$offsetInBytes] + offset, bytes);
  };
  extensions['Uint8ListX|get#view'] = function Uint8ListX$124get$35view($this) {
    return dart.fn((offset, bytes) => extensions['Uint8ListX|view']($this, offset, bytes), T$.intAndintToUint8List());
  };
  extensions['RandomX|nextBytes'] = function RandomX$124nextBytes($this, bytes) {
    let buffer = _native_typed_data.NativeUint8List.new(bytes);
    for (let i = 0; i < bytes; i = i + 1) {
      buffer[$_set](i, $this.nextInt(255 + 1));
    }
    return buffer;
  };
  extensions['RandomX|get#nextBytes'] = function RandomX$124get$35nextBytes($this) {
    return dart.fn(bytes => extensions['RandomX|nextBytes']($this, bytes), T$.intToUint8List());
  };
  var boxNames$ = dart.privateName(box_collection_indexed_db, "BoxCollection.boxNames");
  var _openBoxes = dart.privateName(box_collection_indexed_db, "_openBoxes");
  var _txnCache = dart.privateName(box_collection_indexed_db, "_txnCache");
  var _db$ = dart.privateName(box_collection_indexed_db, "_db");
  var _cache = dart.privateName(box_collection_indexed_db, "_cache");
  var _cachedKeys = dart.privateName(box_collection_indexed_db, "_cachedKeys");
  box_collection_indexed_db.BoxCollection = class BoxCollection extends core.Object {
    get boxNames() {
      return this[boxNames$];
    }
    set boxNames(value) {
      super.boxNames = value;
    }
    static ['_#new#tearOff'](_db, boxNames) {
      return new box_collection_indexed_db.BoxCollection.new(_db, boxNames);
    }
    static open(name, boxNames, opts) {
      let path = opts && 'path' in opts ? opts.path : null;
      let key = opts && 'key' in opts ? opts.key : null;
      return async.async(box_collection_indexed_db.BoxCollection, function* open() {
        let factory = html.window[$indexedDB];
        if (factory == null) {
          dart.throw(core.Exception.new("Unable to open FluffyBox collection - IndexedDB not supported in this browser!"));
        }
        let _db = (yield factory[$open](name, {version: 1, onUpgradeNeeded: dart.fn(event => {
            let _db = event[$target][$result];
            for (let name of boxNames) {
              dart.dsend(_db, 'createObjectStore', [name], {autoIncrement: true});
            }
          }, T$.VersionChangeEventTovoid())}));
        return new box_collection_indexed_db.BoxCollection.new(_db, boxNames);
      });
    }
    get name() {
      return dart.nullCheck(this[_db$].name);
    }
    openBox(V, name, opts) {
      let preload = opts && 'preload' in opts ? opts.preload : false;
      let boxCreator = opts && 'boxCreator' in opts ? opts.boxCreator : null;
      return async.async(box_collection_indexed_db.CollectionBox$(V), (function* openBox() {
        let t30, t30$;
        if (!this.boxNames.contains(name)) {
          dart.throw(core.Exception.new("Box with name " + name + " is not in the known box names of this collection."));
        }
        let i = this[_openBoxes][$indexWhere](dart.fn(box => box.name === name, T$.CollectionBoxTobool()));
        if (i !== -1) {
          return box_collection_indexed_db.CollectionBox$(V).as(this[_openBoxes][$_get](i));
        }
        let box = (t30$ = dart.nullable(box_collection_indexed_db.CollectionBox$(V)).as((t30 = boxCreator, t30 == null ? null : t30(name, this))), t30$ == null ? new (box_collection_indexed_db.CollectionBox$(V)).new(name, this) : t30$);
        if (preload) {
          box[_cache][$addAll](yield box.getAllValues());
        }
        this[_openBoxes][$add](box);
        return box;
      }).bind(this));
    }
    transaction(action, opts) {
      let boxNames = opts && 'boxNames' in opts ? opts.boxNames : null;
      let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
      return async.async(dart.void, (function* transaction() {
        let t30;
        boxNames == null ? boxNames = this.boxNames[$toList]() : null;
        if (this[_txnCache] != null) {
          yield action();
          return;
        }
        this[_txnCache] = T$.JSArrayOfTransactionToFutureOfvoid().of([]);
        yield action();
        let cache = T$.ListOfTransactionToFutureOfvoid().from((t30 = this[_txnCache], t30 == null ? [] : t30));
        this[_txnCache] = null;
        if (cache[$isEmpty]) return;
        let txn = this[_db$][$transaction](boxNames, readOnly ? "readonly" : "readwrite");
        for (let fun of cache) {
          fun(txn);
        }
        yield txn[$completed];
        return;
      }).bind(this));
    }
    close() {
      return this[_db$].close();
    }
    deleteFromDisk() {
      return async.async(dart.void, (function* deleteFromDisk() {
        let factory = html.window[$indexedDB];
        for (let box of this[_openBoxes]) {
          box[_cache][$clear]();
          box[_cachedKeys] = null;
        }
        this[_openBoxes][$clear]();
        this[_db$].close();
        if (factory == null || this[_db$].name == null) {
          dart.throw(core.Exception.new("Unable to delete fluffybox collection"));
        }
        factory[$deleteDatabase](dart.nullCheck(this[_db$].name));
      }).bind(this));
    }
  };
  (box_collection_indexed_db.BoxCollection.new = function(_db, boxNames) {
    this[_openBoxes] = T$.JSArrayOfCollectionBox().of([]);
    this[_txnCache] = null;
    this[_db$] = _db;
    this[boxNames$] = boxNames;
    ;
  }).prototype = box_collection_indexed_db.BoxCollection.prototype;
  dart.addTypeTests(box_collection_indexed_db.BoxCollection);
  dart.addTypeCaches(box_collection_indexed_db.BoxCollection);
  box_collection_indexed_db.BoxCollection[dart.implements] = () => [box_collection_stub.BoxCollection];
  dart.setMethodSignature(box_collection_indexed_db.BoxCollection, () => ({
    __proto__: dart.getMethods(box_collection_indexed_db.BoxCollection.__proto__),
    openBox: dart.gFnType(V => [async.Future$(box_collection_indexed_db.CollectionBox$(V)), [core.String], {boxCreator: dart.nullable(dart.fnType(box_collection_stub.CollectionBox$(V), [core.String, box_collection_indexed_db.BoxCollection])), preload: core.bool}, {}], V => [dart.nullable(core.Object)]),
    transaction: dart.fnType(async.Future$(dart.void), [dart.fnType(async.Future$(dart.void), [])], {boxNames: dart.nullable(core.List$(core.String)), readOnly: core.bool}, {}),
    close: dart.fnType(dart.void, []),
    deleteFromDisk: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setStaticMethodSignature(box_collection_indexed_db.BoxCollection, () => ['open']);
  dart.setGetterSignature(box_collection_indexed_db.BoxCollection, () => ({
    __proto__: dart.getGetters(box_collection_indexed_db.BoxCollection.__proto__),
    name: core.String
  }));
  dart.setLibraryUri(box_collection_indexed_db.BoxCollection, I[17]);
  dart.setFieldSignature(box_collection_indexed_db.BoxCollection, () => ({
    __proto__: dart.getFields(box_collection_indexed_db.BoxCollection.__proto__),
    [_db$]: dart.finalFieldType(indexed_db.Database),
    boxNames: dart.finalFieldType(core.Set$(core.String)),
    [_openBoxes]: dart.finalFieldType(core.List$(box_collection_indexed_db.CollectionBox)),
    [_txnCache]: dart.fieldType(dart.nullable(core.List$(dart.fnType(async.Future$(dart.void), [indexed_db.Transaction]))))
  }));
  var name$0 = dart.privateName(box_collection_indexed_db, "CollectionBox.name");
  var boxCollection$ = dart.privateName(box_collection_indexed_db, "CollectionBox.boxCollection");
  const _is_CollectionBox_default = Symbol('_is_CollectionBox_default');
  box_collection_indexed_db.CollectionBox$ = dart.generic(V => {
    var __t$VN = () => (__t$VN = dart.constFn(dart.nullable(V)))();
    var __t$IdentityMapOfString$VN = () => (__t$IdentityMapOfString$VN = dart.constFn(_js_helper.IdentityMap$(core.String, __t$VN())))();
    var __t$IdentityMapOfString$V = () => (__t$IdentityMapOfString$V = dart.constFn(_js_helper.IdentityMap$(core.String, V)))();
    var __t$MapOfString$V = () => (__t$MapOfString$V = dart.constFn(core.Map$(core.String, V)))();
    var __t$StringToVN = () => (__t$StringToVN = dart.constFn(dart.fnType(__t$VN(), [core.String])))();
    var __t$ListOfVN = () => (__t$ListOfVN = dart.constFn(core.List$(__t$VN())))();
    class CollectionBox extends core.Object {
      get name() {
        return this[name$0];
      }
      set name(value) {
        super.name = value;
      }
      get boxCollection() {
        return this[boxCollection$];
      }
      set boxCollection(value) {
        super.boxCollection = value;
      }
      static ['_#new#tearOff'](V, name, boxCollection) {
        return new (box_collection_indexed_db.CollectionBox$(V)).new(name, boxCollection);
      }
      getAllKeys(txn = null) {
        return async.async(T$.ListOfString(), (function* getAllKeys() {
          let cachedKey = this[_cachedKeys];
          if (cachedKey != null) return cachedKey[$toList]();
          txn == null ? txn = this.boxCollection[_db$][$transaction](this.name, "readonly") : null;
          let store = txn[$objectStore](this.name);
          let request = store[$getAllKeys](null);
          yield request[$onSuccess].first;
          let keys = T$.ListOfString().from(core.Iterable.as(dart.dgsend(request[$result], [core.String], 'cast', [])));
          this[_cachedKeys] = keys[$toSet]();
          return keys;
        }).bind(this));
      }
      getAllValues(txn = null) {
        return async.async(__t$MapOfString$V(), (function* getAllValues() {
          txn == null ? txn = this.boxCollection[_db$][$transaction](this.name, "readonly") : null;
          let store = txn[$objectStore](this.name);
          let map = new (__t$IdentityMapOfString$V()).new();
          let cursorStream = store[$openCursor]({autoAdvance: true});
          let iter = async.StreamIterator.new(cursorStream);
          try {
            while (yield iter.moveNext()) {
              let cursor = iter.current;
              {
                map[$_set](core.String.as(cursor.key), V.as(cursor[$value]));
              }
            }
          } finally {
            yield iter.cancel();
          }
          return map;
        }).bind(this));
      }
      get(key, txn = null) {
        return async.async(__t$VN(), (function* get() {
          if (this[_cache][$containsKey](key)) return this[_cache][$_get](key);
          txn == null ? txn = this.boxCollection[_db$][$transaction](this.name, "readonly") : null;
          let store = txn[$objectStore](this.name);
          this[_cache][$_set](key, __t$VN().as(yield store[$getObject](key)));
          return this[_cache][$_get](key);
        }).bind(this));
      }
      getAll(keys, txn = null) {
        return async.async(__t$ListOfVN(), (function* getAll() {
          if (!keys[$any](dart.fn(key => !this[_cache][$containsKey](key), T$.StringTobool()))) {
            return keys[$map](__t$VN(), dart.fn(key => this[_cache][$_get](key), __t$StringToVN()))[$toList]();
          }
          txn == null ? txn = this.boxCollection[_db$][$transaction](this.name, "readonly") : null;
          let store = txn[$objectStore](this.name);
          let list = (yield async.Future.wait(dart.dynamic, keys[$map](async.Future, dart.bind(store, $getObject))));
          for (let i = 0; i < keys[$length]; i = i + 1) {
            this[_cache][$_set](keys[$_get](i), __t$VN().as(list[$_get](i)));
          }
          return list[$cast](__t$VN());
        }).bind(this));
      }
      put(key, val, transaction = null) {
        V.as(val);
        return async.async(dart.void, (function* put() {
          let t30, t30$;
          let txn = null;
          if (indexed_db.Transaction.is(transaction)) {
            txn = transaction;
          }
          if (val == null) {
            return this.delete(key, txn);
          }
          let txnCache = this.boxCollection[_txnCache];
          if (txnCache != null) {
            txnCache[$add](dart.fn(txn => this.put(key, val, txn), T$.TransactionToFutureOfvoid()));
            this[_cache][$_set](key, val);
            t30 = this[_cachedKeys];
            t30 == null ? null : t30.add(key);
            return;
          }
          txn == null ? txn = this.boxCollection[_db$][$transaction](this.name, "readwrite") : null;
          let store = txn[$objectStore](this.name);
          yield store[$put](val, key);
          this[_cache][$_set](key, val);
          t30$ = this[_cachedKeys];
          t30$ == null ? null : t30$.add(key);
          return;
        }).bind(this));
      }
      delete(key, txn = null) {
        return async.async(dart.void, (function* $delete$() {
          let t30, t30$;
          let txnCache = this.boxCollection[_txnCache];
          if (txnCache != null) {
            txnCache[$add](dart.fn(txn => this.delete(key, txn), T$.TransactionToFutureOfvoid()));
            this[_cache][$_set](key, null);
            t30 = this[_cachedKeys];
            t30 == null ? null : t30.remove(key);
            return;
          }
          txn == null ? txn = this.boxCollection[_db$][$transaction](this.name, "readwrite") : null;
          let store = txn[$objectStore](this.name);
          yield store[$delete](key);
          this[_cache][$_set](key, null);
          t30$ = this[_cachedKeys];
          t30$ == null ? null : t30$.remove(key);
          return;
        }).bind(this));
      }
      deleteAll(keys, txn = null) {
        return async.async(dart.void, (function* deleteAll() {
          let t30, t30$;
          let txnCache = this.boxCollection[_txnCache];
          if (txnCache != null) {
            txnCache[$add](dart.fn(txn => this.deleteAll(keys, txn), T$.TransactionToFutureOfvoid()));
            for (let key of keys) {
              this[_cache][$_set](key, null);
            }
            t30 = this[_cachedKeys];
            t30 == null ? null : t30.removeAll(keys);
            return;
          }
          txn == null ? txn = this.boxCollection[_db$][$transaction](this.name, "readwrite") : null;
          let store = txn[$objectStore](this.name);
          for (let key of keys) {
            yield store[$delete](key);
            this[_cache][$_set](key, null);
            t30$ = this[_cachedKeys];
            t30$ == null ? null : t30$.removeAll(keys);
          }
          return;
        }).bind(this));
      }
      clear(txn = null) {
        return async.async(dart.void, (function* clear() {
          let txnCache = this.boxCollection[_txnCache];
          if (txnCache != null) {
            txnCache[$add](dart.bind(this, 'clear'));
            this[_cache][$clear]();
            this[_cachedKeys] = null;
            return;
          }
          txn == null ? txn = this.boxCollection[_db$][$transaction](this.name, "readwrite") : null;
          let store = txn[$objectStore](this.name);
          yield store[$clear]();
          this[_cache][$clear]();
          this[_cachedKeys] = null;
          return;
        }).bind(this));
      }
      flush() {
        return T$.FutureOfvoid().value();
      }
    }
    (CollectionBox.new = function(name, boxCollection) {
      this[_cache] = new (__t$IdentityMapOfString$VN()).new();
      this[_cachedKeys] = null;
      this[name$0] = name;
      this[boxCollection$] = boxCollection;
      if (!(typeof dart.wrapType(V) == 'string' || core.int.is(dart.wrapType(V)) || core.Object.is(dart.wrapType(V)) || T$.ListOfObjectN().is(dart.wrapType(V)) || T$.MapOfString$ObjectN().is(dart.wrapType(V)) || typeof dart.wrapType(V) == 'number')) {
        dart.throw(core.Exception.new("Value type " + dart.str(dart.wrapType(V)[$runtimeType]) + " is not one of the allowed value types {String, int, double, List<Object?>, Map<String, Object?>}."));
      }
    }).prototype = CollectionBox.prototype;
    dart.addTypeTests(CollectionBox);
    CollectionBox.prototype[_is_CollectionBox_default] = true;
    dart.addTypeCaches(CollectionBox);
    CollectionBox[dart.implements] = () => [box_collection_stub.CollectionBox$(V)];
    dart.setMethodSignature(CollectionBox, () => ({
      __proto__: dart.getMethods(CollectionBox.__proto__),
      getAllKeys: dart.fnType(async.Future$(core.List$(core.String)), [], [dart.nullable(indexed_db.Transaction)]),
      getAllValues: dart.fnType(async.Future$(core.Map$(core.String, V)), [], [dart.nullable(indexed_db.Transaction)]),
      get: dart.fnType(async.Future$(dart.nullable(V)), [core.String], [dart.nullable(indexed_db.Transaction)]),
      getAll: dart.fnType(async.Future$(core.List$(dart.nullable(V))), [core.List$(core.String)], [dart.nullable(indexed_db.Transaction)]),
      put: dart.fnType(async.Future$(dart.void), [core.String, dart.nullable(core.Object)], [dart.nullable(core.Object)]),
      delete: dart.fnType(async.Future$(dart.void), [core.String], [dart.nullable(indexed_db.Transaction)]),
      deleteAll: dart.fnType(async.Future$(dart.void), [core.List$(core.String)], [dart.nullable(indexed_db.Transaction)]),
      clear: dart.fnType(async.Future$(dart.void), [], [dart.nullable(indexed_db.Transaction)]),
      flush: dart.fnType(async.Future$(dart.void), [])
    }));
    dart.setLibraryUri(CollectionBox, I[17]);
    dart.setFieldSignature(CollectionBox, () => ({
      __proto__: dart.getFields(CollectionBox.__proto__),
      name: dart.finalFieldType(core.String),
      boxCollection: dart.finalFieldType(box_collection_indexed_db.BoxCollection),
      [_cache]: dart.finalFieldType(core.Map$(core.String, dart.nullable(V))),
      [_cachedKeys]: dart.fieldType(dart.nullable(core.Set$(core.String)))
    }));
    return CollectionBox;
  });
  box_collection_indexed_db.CollectionBox = box_collection_indexed_db.CollectionBox$();
  dart.addTypeTests(box_collection_indexed_db.CollectionBox, _is_CollectionBox_default);
  var index$1 = dart.privateName(update_person_form, "UpdatePersonForm.index");
  var person$0 = dart.privateName(update_person_form, "UpdatePersonForm.person");
  update_person_form.UpdatePersonForm = class UpdatePersonForm extends framework.StatefulWidget {
    get index() {
      return this[index$1];
    }
    set index(value) {
      super.index = value;
    }
    get person() {
      return this[person$0];
    }
    set person(value) {
      super.person = value;
    }
    static ['_#new#tearOff'](opts) {
      let index = opts && 'index' in opts ? opts.index : null;
      let person = opts && 'person' in opts ? opts.person : null;
      return new update_person_form.UpdatePersonForm.new({index: index, person: person});
    }
    createState() {
      return new update_person_form._UpdatePersonFormState.new();
    }
  };
  (update_person_form.UpdatePersonForm.new = function(opts) {
    let index = opts && 'index' in opts ? opts.index : null;
    let person = opts && 'person' in opts ? opts.person : null;
    this[index$1] = index;
    this[person$0] = person;
    update_person_form.UpdatePersonForm.__proto__.new.call(this);
    ;
  }).prototype = update_person_form.UpdatePersonForm.prototype;
  dart.addTypeTests(update_person_form.UpdatePersonForm);
  dart.addTypeCaches(update_person_form.UpdatePersonForm);
  dart.setMethodSignature(update_person_form.UpdatePersonForm, () => ({
    __proto__: dart.getMethods(update_person_form.UpdatePersonForm.__proto__),
    createState: dart.fnType(update_person_form._UpdatePersonFormState, [])
  }));
  dart.setLibraryUri(update_person_form.UpdatePersonForm, I[18]);
  dart.setFieldSignature(update_person_form.UpdatePersonForm, () => ({
    __proto__: dart.getFields(update_person_form.UpdatePersonForm.__proto__),
    index: dart.finalFieldType(core.int),
    person: dart.finalFieldType(person.Person)
  }));
  var _personFormKey = dart.privateName(update_person_form, "_personFormKey");
  var ___UpdatePersonFormState__nameController = dart.privateName(update_person_form, "_#_UpdatePersonFormState#_nameController");
  var ___UpdatePersonFormState__nameController_isSet = dart.privateName(update_person_form, "_#_UpdatePersonFormState#_nameController#isSet");
  var ___UpdatePersonFormState__countryController = dart.privateName(update_person_form, "_#_UpdatePersonFormState#_countryController");
  var ___UpdatePersonFormState__countryController_isSet = dart.privateName(update_person_form, "_#_UpdatePersonFormState#_countryController#isSet");
  var ___UpdatePersonFormState__phoneNumberController = dart.privateName(update_person_form, "_#_UpdatePersonFormState#_phoneNumberController");
  var ___UpdatePersonFormState__phoneNumberController_isSet = dart.privateName(update_person_form, "_#_UpdatePersonFormState#_phoneNumberController#isSet");
  var ___UpdatePersonFormState_box = dart.privateName(update_person_form, "_#_UpdatePersonFormState#box");
  var _nameController = dart.privateName(update_person_form, "_nameController");
  var _countryController = dart.privateName(update_person_form, "_countryController");
  var _phoneNumberController = dart.privateName(update_person_form, "_phoneNumberController");
  var _fieldValidator = dart.privateName(update_person_form, "_fieldValidator");
  var _updateInfo = dart.privateName(update_person_form, "_updateInfo");
  update_person_form._UpdatePersonFormState = class _UpdatePersonFormState extends framework.State$(update_person_form.UpdatePersonForm) {
    get [_nameController]() {
      return this[___UpdatePersonFormState__nameController_isSet] ? this[___UpdatePersonFormState__nameController] : dart.throw(new _internal.LateError.fieldNI("_nameController"));
    }
    set [_nameController](library$32file$58$47$47$47zapp$47project$47lib$47utils$47update_person_form$46dart$58$58_nameController$35param) {
      if (this[___UpdatePersonFormState__nameController_isSet])
        dart.throw(new _internal.LateError.fieldAI("_nameController"));
      else {
        this[___UpdatePersonFormState__nameController_isSet] = true;
        this[___UpdatePersonFormState__nameController] = library$32file$58$47$47$47zapp$47project$47lib$47utils$47update_person_form$46dart$58$58_nameController$35param;
      }
    }
    get [_countryController]() {
      return this[___UpdatePersonFormState__countryController_isSet] ? this[___UpdatePersonFormState__countryController] : dart.throw(new _internal.LateError.fieldNI("_countryController"));
    }
    set [_countryController](library$32file$58$47$47$47zapp$47project$47lib$47utils$47update_person_form$46dart$58$58_countryController$35param) {
      if (this[___UpdatePersonFormState__countryController_isSet])
        dart.throw(new _internal.LateError.fieldAI("_countryController"));
      else {
        this[___UpdatePersonFormState__countryController_isSet] = true;
        this[___UpdatePersonFormState__countryController] = library$32file$58$47$47$47zapp$47project$47lib$47utils$47update_person_form$46dart$58$58_countryController$35param;
      }
    }
    get [_phoneNumberController]() {
      return this[___UpdatePersonFormState__phoneNumberController_isSet] ? this[___UpdatePersonFormState__phoneNumberController] : dart.throw(new _internal.LateError.fieldNI("_phoneNumberController"));
    }
    set [_phoneNumberController](library$32file$58$47$47$47zapp$47project$47lib$47utils$47update_person_form$46dart$58$58_phoneNumberController$35param) {
      if (this[___UpdatePersonFormState__phoneNumberController_isSet])
        dart.throw(new _internal.LateError.fieldAI("_phoneNumberController"));
      else {
        this[___UpdatePersonFormState__phoneNumberController_isSet] = true;
        this[___UpdatePersonFormState__phoneNumberController] = library$32file$58$47$47$47zapp$47project$47lib$47utils$47update_person_form$46dart$58$58_phoneNumberController$35param;
      }
    }
    get box() {
      let t30;
      t30 = this[___UpdatePersonFormState_box];
      return t30 == null ? dart.throw(new _internal.LateError.fieldNI("box")) : t30;
    }
    set box(box$35param) {
      if (this[___UpdatePersonFormState_box] == null)
        this[___UpdatePersonFormState_box] = box$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("box"));
    }
    [_fieldValidator](value) {
      if (value == null || value[$isEmpty]) {
        return "Field can't be empty";
      }
      return null;
    }
    [_updateInfo]() {
      let newPerson = new person.Person.new({name: core.String.as(dart.dload(this[_nameController], 'text')), country: core.String.as(dart.dload(this[_countryController], 'text')), phoneNumber: core.String.as(dart.dload(this[_phoneNumberController], 'text'))});
      this.box.putAt(this.widget.index, newPerson);
      core.print("Info updated in box!");
    }
    initState() {
      super.initState();
      this.box = hive.Hive.box(dart.dynamic, "peopleBox");
      this[_nameController] = new editable_text.TextEditingController.new({text: this.widget.person.name});
      this[_countryController] = new editable_text.TextEditingController.new({text: this.widget.person.country});
      this[_phoneNumberController] = new editable_text.TextEditingController.new({text: this.widget.person.phoneNumber});
    }
    build(context) {
      return new form.Form.new({key: this[_personFormKey], child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T$.JSArrayOfWidget().of([new text.Text.new("Name"), new text_form_field.TextFormField.new({controller: T$.TextEditingControllerN().as(this[_nameController]), validator: dart.bind(this, _fieldValidator)}), new basic.SizedBox.new({height: 24}), new text.Text.new("Home Country"), new text_form_field.TextFormField.new({controller: T$.TextEditingControllerN().as(this[_countryController]), validator: dart.bind(this, _fieldValidator)}), new basic.SizedBox.new({height: 24}), new text.Text.new("Phone Number"), new text_form_field.TextFormField.new({controller: T$.TextEditingControllerN().as(this[_phoneNumberController]), validator: dart.bind(this, _fieldValidator)}), new spacer.Spacer.new(), new basic.Padding.new({padding: C[11] || CT.C11, child: new container.Container.new({width: 1.7976931348623157e+308, height: 50, child: new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
                    if (dart.nullCheck(this[_personFormKey].currentState).validate()) {
                      this[_updateInfo]();
                      navigator.Navigator.of(context).pop(T$.ObjectN());
                    }
                  }, T$.VoidTovoid()), child: new text.Text.new("Update")})})})])})});
    }
    static ['_#new#tearOff']() {
      return new update_person_form._UpdatePersonFormState.new();
    }
  };
  (update_person_form._UpdatePersonFormState.new = function() {
    this[_personFormKey] = T$.GlobalKeyOfFormState().new();
    this[___UpdatePersonFormState__nameController] = null;
    this[___UpdatePersonFormState__nameController_isSet] = false;
    this[___UpdatePersonFormState__countryController] = null;
    this[___UpdatePersonFormState__countryController_isSet] = false;
    this[___UpdatePersonFormState__phoneNumberController] = null;
    this[___UpdatePersonFormState__phoneNumberController_isSet] = false;
    this[___UpdatePersonFormState_box] = null;
    update_person_form._UpdatePersonFormState.__proto__.new.call(this);
    ;
  }).prototype = update_person_form._UpdatePersonFormState.prototype;
  dart.addTypeTests(update_person_form._UpdatePersonFormState);
  dart.addTypeCaches(update_person_form._UpdatePersonFormState);
  dart.setMethodSignature(update_person_form._UpdatePersonFormState, () => ({
    __proto__: dart.getMethods(update_person_form._UpdatePersonFormState.__proto__),
    [_fieldValidator]: dart.fnType(dart.nullable(core.String), [dart.nullable(core.String)]),
    [_updateInfo]: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(update_person_form._UpdatePersonFormState, () => ({
    __proto__: dart.getGetters(update_person_form._UpdatePersonFormState.__proto__),
    [_nameController]: dart.dynamic,
    [_countryController]: dart.dynamic,
    [_phoneNumberController]: dart.dynamic,
    box: hive.Box
  }));
  dart.setSetterSignature(update_person_form._UpdatePersonFormState, () => ({
    __proto__: dart.getSetters(update_person_form._UpdatePersonFormState.__proto__),
    [_nameController]: dart.dynamic,
    [_countryController]: dart.dynamic,
    [_phoneNumberController]: dart.dynamic,
    box: hive.Box
  }));
  dart.setLibraryUri(update_person_form._UpdatePersonFormState, I[18]);
  dart.setFieldSignature(update_person_form._UpdatePersonFormState, () => ({
    __proto__: dart.getFields(update_person_form._UpdatePersonFormState.__proto__),
    [_personFormKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [___UpdatePersonFormState__nameController]: dart.fieldType(dart.dynamic),
    [___UpdatePersonFormState__nameController_isSet]: dart.fieldType(core.bool),
    [___UpdatePersonFormState__countryController]: dart.fieldType(dart.dynamic),
    [___UpdatePersonFormState__countryController_isSet]: dart.fieldType(core.bool),
    [___UpdatePersonFormState__phoneNumberController]: dart.fieldType(dart.dynamic),
    [___UpdatePersonFormState__phoneNumberController_isSet]: dart.fieldType(core.bool),
    [___UpdatePersonFormState_box]: dart.fieldType(dart.nullable(hive.Box))
  }));
  add_person_form.AddPersonForm = class AddPersonForm extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new add_person_form.AddPersonForm.new({key: key});
    }
    createState() {
      return new add_person_form._AddPersonFormState.new();
    }
  };
  (add_person_form.AddPersonForm.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    add_person_form.AddPersonForm.__proto__.new.call(this, {key: key});
    ;
  }).prototype = add_person_form.AddPersonForm.prototype;
  dart.addTypeTests(add_person_form.AddPersonForm);
  dart.addTypeCaches(add_person_form.AddPersonForm);
  dart.setMethodSignature(add_person_form.AddPersonForm, () => ({
    __proto__: dart.getMethods(add_person_form.AddPersonForm.__proto__),
    createState: dart.fnType(add_person_form._AddPersonFormState, [])
  }));
  dart.setLibraryUri(add_person_form.AddPersonForm, I[19]);
  var _nameController$ = dart.privateName(add_person_form, "_nameController");
  var _countryController$ = dart.privateName(add_person_form, "_countryController");
  var _phoneNumberController$ = dart.privateName(add_person_form, "_phoneNumberController");
  var _personFormKey$ = dart.privateName(add_person_form, "_personFormKey");
  var ___AddPersonFormState_box = dart.privateName(add_person_form, "_#_AddPersonFormState#box");
  var _fieldValidator$ = dart.privateName(add_person_form, "_fieldValidator");
  var _addInfo = dart.privateName(add_person_form, "_addInfo");
  add_person_form._AddPersonFormState = class _AddPersonFormState extends framework.State$(add_person_form.AddPersonForm) {
    get box() {
      let t30;
      t30 = this[___AddPersonFormState_box];
      return t30 == null ? dart.throw(new _internal.LateError.fieldNI("box")) : t30;
    }
    set box(box$35param) {
      if (this[___AddPersonFormState_box] == null)
        this[___AddPersonFormState_box] = box$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("box"));
    }
    [_fieldValidator$](value) {
      if (value == null || value[$isEmpty]) {
        return "Field can't be empty";
      }
      return null;
    }
    [_addInfo]() {
      return async.async(dart.dynamic, (function* _addInfo() {
        let newPerson = new person.Person.new({name: this[_nameController$].text, country: this[_countryController$].text, phoneNumber: this[_phoneNumberController$].text});
        this.box.add(newPerson);
        core.print("Info added to box!");
      }).bind(this));
    }
    initState() {
      super.initState();
      this.box = hive.Hive.box(dart.dynamic, "peopleBox");
    }
    build(context) {
      return new form.Form.new({key: this[_personFormKey$], child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T$.JSArrayOfWidget().of([new text.Text.new("Name"), new text_form_field.TextFormField.new({controller: this[_nameController$], validator: dart.bind(this, _fieldValidator$)}), new basic.SizedBox.new({height: 24}), new text.Text.new("Home Country"), new text_form_field.TextFormField.new({controller: this[_countryController$], validator: dart.bind(this, _fieldValidator$)}), new basic.SizedBox.new({height: 24}), new text.Text.new("Phone Number"), new text_form_field.TextFormField.new({controller: this[_phoneNumberController$], validator: dart.bind(this, _fieldValidator$)}), new spacer.Spacer.new(), new basic.Padding.new({padding: C[11] || CT.C11, child: new container.Container.new({width: 1.7976931348623157e+308, height: 50, child: new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
                    if (dart.nullCheck(this[_personFormKey$].currentState).validate()) {
                      this[_addInfo]();
                      navigator.Navigator.of(context).pop(T$.ObjectN());
                    }
                  }, T$.VoidTovoid()), child: new text.Text.new("Add")})})})])})});
    }
    static ['_#new#tearOff']() {
      return new add_person_form._AddPersonFormState.new();
    }
  };
  (add_person_form._AddPersonFormState.new = function() {
    this[_nameController$] = new editable_text.TextEditingController.new();
    this[_countryController$] = new editable_text.TextEditingController.new();
    this[_phoneNumberController$] = new editable_text.TextEditingController.new();
    this[_personFormKey$] = T$.GlobalKeyOfFormState().new();
    this[___AddPersonFormState_box] = null;
    add_person_form._AddPersonFormState.__proto__.new.call(this);
    ;
  }).prototype = add_person_form._AddPersonFormState.prototype;
  dart.addTypeTests(add_person_form._AddPersonFormState);
  dart.addTypeCaches(add_person_form._AddPersonFormState);
  dart.setMethodSignature(add_person_form._AddPersonFormState, () => ({
    __proto__: dart.getMethods(add_person_form._AddPersonFormState.__proto__),
    [_fieldValidator$]: dart.fnType(dart.nullable(core.String), [dart.nullable(core.String)]),
    [_addInfo]: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(add_person_form._AddPersonFormState, () => ({
    __proto__: dart.getGetters(add_person_form._AddPersonFormState.__proto__),
    box: hive.Box
  }));
  dart.setSetterSignature(add_person_form._AddPersonFormState, () => ({
    __proto__: dart.getSetters(add_person_form._AddPersonFormState.__proto__),
    box: hive.Box
  }));
  dart.setLibraryUri(add_person_form._AddPersonFormState, I[19]);
  dart.setFieldSignature(add_person_form._AddPersonFormState, () => ({
    __proto__: dart.getFields(add_person_form._AddPersonFormState.__proto__),
    [_nameController$]: dart.finalFieldType(editable_text.TextEditingController),
    [_countryController$]: dart.finalFieldType(editable_text.TextEditingController),
    [_phoneNumberController$]: dart.finalFieldType(editable_text.TextEditingController),
    [_personFormKey$]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [___AddPersonFormState_box]: dart.fieldType(dart.nullable(hive.Box))
  }));
  var bytes$ = dart.privateName(digest, "Digest.bytes");
  digest.Digest = class Digest extends core.Object {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    static ['_#new#tearOff'](bytes) {
      return new digest.Digest.new(bytes);
    }
    _equals(other) {
      if (other == null) return false;
      if (digest.Digest.is(other)) {
        let a = this.bytes;
        let b = other.bytes;
        let n = a[$length];
        if (n !== b[$length]) {
          return false;
        }
        let mismatch = 0;
        for (let i = 0; i < n; i = i + 1) {
          mismatch = (mismatch | (a[$_get](i) ^ b[$_get](i)) >>> 0) >>> 0;
        }
        return mismatch === 0;
      }
      return false;
    }
    get hashCode() {
      return core.Object.hashAll(this.bytes);
    }
    toString() {
      return digest._hexEncode(this.bytes);
    }
  };
  (digest.Digest.new = function(bytes) {
    this[bytes$] = bytes;
    ;
  }).prototype = digest.Digest.prototype;
  dart.addTypeTests(digest.Digest);
  dart.addTypeCaches(digest.Digest);
  dart.setLibraryUri(digest.Digest, I[20]);
  dart.setFieldSignature(digest.Digest, () => ({
    __proto__: dart.getFields(digest.Digest.__proto__),
    bytes: dart.finalFieldType(core.List$(core.int))
  }));
  dart.defineExtensionMethods(digest.Digest, ['_equals', 'toString']);
  dart.defineExtensionAccessors(digest.Digest, ['hashCode']);
  digest._hexEncode = function _hexEncode(bytes) {
    let t30, t30$;
    let charCodes = _native_typed_data.NativeUint8List.new(bytes[$length] * 2);
    for (let i = 0, j = 0; i < bytes[$length]; i = i + 1) {
      let byte = bytes[$_get](i);
      charCodes[$_set]((t30 = j, j = t30 + 1, t30), "0123456789abcdef"[$codeUnitAt](byte >> 4 & 15));
      charCodes[$_set]((t30$ = j, j = t30$ + 1, t30$), "0123456789abcdef"[$codeUnitAt](byte & 15));
    }
    return core.String.fromCharCodes(charCodes);
  };
  hash.Hash = class Hash extends convert.Converter$(core.List$(core.int), digest.Digest) {
    convert(input) {
      T$.ListOfint().as(input);
      let innerSink = new digest_sink.DigestSink.new();
      let outerSink = this.startChunkedConversion(innerSink);
      outerSink.add(input);
      outerSink.close();
      return innerSink.value;
    }
  };
  (hash.Hash.new = function() {
    hash.Hash.__proto__.new.call(this);
    ;
  }).prototype = hash.Hash.prototype;
  dart.addTypeTests(hash.Hash);
  dart.addTypeCaches(hash.Hash);
  dart.setMethodSignature(hash.Hash, () => ({
    __proto__: dart.getMethods(hash.Hash.__proto__),
    convert: dart.fnType(digest.Digest, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(hash.Hash, I[21]);
  var _hash = dart.privateName(hmac, "_hash");
  var _key$0 = dart.privateName(hmac, "_key");
  hmac.Hmac = class Hmac extends convert.Converter$(core.List$(core.int), digest.Digest) {
    static ['_#new#tearOff'](hash, key) {
      return new hmac.Hmac.new(hash, key);
    }
    convert(input) {
      T$.ListOfint().as(input);
      let innerSink = new digest_sink.DigestSink.new();
      let outerSink = this.startChunkedConversion(innerSink);
      outerSink.add(input);
      outerSink.close();
      return innerSink.value;
    }
    startChunkedConversion(sink) {
      T$.SinkOfDigest().as(sink);
      return new hmac._HmacSink.new(sink, this[_hash], this[_key$0]);
    }
  };
  (hmac.Hmac.new = function(hash, key) {
    this[_hash] = hash;
    this[_key$0] = _native_typed_data.NativeUint8List.new(hash.blockSize);
    hmac.Hmac.__proto__.new.call(this);
    if (key[$length] > this[_hash].blockSize) key = this[_hash].convert(key).bytes;
    this[_key$0][$setRange](0, key[$length], key);
  }).prototype = hmac.Hmac.prototype;
  dart.addTypeTests(hmac.Hmac);
  dart.addTypeCaches(hmac.Hmac);
  dart.setMethodSignature(hmac.Hmac, () => ({
    __proto__: dart.getMethods(hmac.Hmac.__proto__),
    convert: dart.fnType(digest.Digest, [dart.nullable(core.Object)]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(hmac.Hmac, I[22]);
  dart.setFieldSignature(hmac.Hmac, () => ({
    __proto__: dart.getFields(hmac.Hmac.__proto__),
    [_hash]: dart.finalFieldType(hash.Hash),
    [_key$0]: dart.finalFieldType(typed_data.Uint8List)
  }));
  var _innerResultSink = dart.privateName(hmac, "_innerResultSink");
  var ___HmacSink__innerSink = dart.privateName(hmac, "_#_HmacSink#_innerSink");
  var _isClosed = dart.privateName(hmac, "_isClosed");
  var _outerSink = dart.privateName(hmac, "_outerSink");
  var _innerSink = dart.privateName(hmac, "_innerSink");
  hmac._HmacSink = class _HmacSink extends convert.ByteConversionSink {
    get [_innerSink]() {
      let t30;
      t30 = this[___HmacSink__innerSink];
      return t30 == null ? dart.throw(new _internal.LateError.fieldNI("_innerSink")) : t30;
    }
    set [_innerSink](library$32package$58crypto$47src$47hmac$46dart$58$58_innerSink$35param) {
      if (this[___HmacSink__innerSink] == null)
        this[___HmacSink__innerSink] = library$32package$58crypto$47src$47hmac$46dart$58$58_innerSink$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_innerSink"));
    }
    static ['_#new#tearOff'](sink, hash, key) {
      return new hmac._HmacSink.new(sink, hash, key);
    }
    add(data) {
      T$.ListOfint().as(data);
      if (this[_isClosed]) dart.throw(new core.StateError.new("HMAC is closed"));
      this[_innerSink].add(data);
    }
    addSlice(data, start, end, isLast) {
      if (this[_isClosed]) dart.throw(new core.StateError.new("HMAC is closed"));
      this[_innerSink].addSlice(data, start, end, isLast);
    }
    close() {
      if (this[_isClosed]) return;
      this[_isClosed] = true;
      this[_innerSink].close();
      this[_outerSink].add(this[_innerResultSink].value.bytes);
      this[_outerSink].close();
    }
  };
  (hmac._HmacSink.new = function(sink, hash, key) {
    this[_innerResultSink] = new digest_sink.DigestSink.new();
    this[___HmacSink__innerSink] = null;
    this[_isClosed] = false;
    this[_outerSink] = hash.startChunkedConversion(sink);
    hmac._HmacSink.__proto__.new.call(this);
    this[_innerSink] = hash.startChunkedConversion(this[_innerResultSink]);
    let padding = _native_typed_data.NativeUint8List.new(key[$length]);
    for (let i = 0; i < padding[$length]; i = i + 1) {
      padding[$_set](i, (92 ^ key[$_get](i)) >>> 0);
    }
    this[_outerSink].add(padding);
    for (let i = 0; i < padding[$length]; i = i + 1) {
      padding[$_set](i, (54 ^ key[$_get](i)) >>> 0);
    }
    this[_innerSink].add(padding);
  }).prototype = hmac._HmacSink.prototype;
  dart.addTypeTests(hmac._HmacSink);
  dart.addTypeCaches(hmac._HmacSink);
  dart.setMethodSignature(hmac._HmacSink, () => ({
    __proto__: dart.getMethods(hmac._HmacSink.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    addSlice: dart.fnType(dart.void, [core.List$(core.int), core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(hmac._HmacSink, () => ({
    __proto__: dart.getGetters(hmac._HmacSink.__proto__),
    [_innerSink]: convert.ByteConversionSink
  }));
  dart.setSetterSignature(hmac._HmacSink, () => ({
    __proto__: dart.getSetters(hmac._HmacSink.__proto__),
    [_innerSink]: convert.ByteConversionSink
  }));
  dart.setLibraryUri(hmac._HmacSink, I[22]);
  dart.setFieldSignature(hmac._HmacSink, () => ({
    __proto__: dart.getFields(hmac._HmacSink.__proto__),
    [_outerSink]: dart.finalFieldType(convert.ByteConversionSink),
    [_innerResultSink]: dart.finalFieldType(digest_sink.DigestSink),
    [___HmacSink__innerSink]: dart.fieldType(dart.nullable(convert.ByteConversionSink)),
    [_isClosed]: dart.fieldType(core.bool)
  }));
  var blockSize = dart.privateName(md5, "_MD5.blockSize");
  md5._MD5 = class _MD5 extends hash.Hash {
    get blockSize() {
      return this[blockSize];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#_#tearOff']() {
      return new md5._MD5.__();
    }
    startChunkedConversion(sink) {
      T$.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new md5._MD5Sink.new(sink));
    }
  };
  (md5._MD5.__ = function() {
    this[blockSize] = 16 * 4;
    md5._MD5.__proto__.new.call(this);
    ;
  }).prototype = md5._MD5.prototype;
  dart.addTypeTests(md5._MD5);
  dart.addTypeCaches(md5._MD5);
  dart.setMethodSignature(md5._MD5, () => ({
    __proto__: dart.getMethods(md5._MD5.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(md5._MD5, I[23]);
  dart.setFieldSignature(md5._MD5, () => ({
    __proto__: dart.getFields(md5._MD5.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var digest$ = dart.privateName(md5, "_MD5Sink.digest");
  var Endian__littleEndian = dart.privateName(typed_data, "Endian._littleEndian");
  var _lengthInBytes = dart.privateName(hash_sink, "_lengthInBytes");
  var _pendingData = dart.privateName(hash_sink, "_pendingData");
  var _isClosed$ = dart.privateName(hash_sink, "_isClosed");
  var _sink$ = dart.privateName(hash_sink, "_sink");
  var _endian = dart.privateName(hash_sink, "_endian");
  var _signatureBytes = dart.privateName(hash_sink, "_signatureBytes");
  var _currentChunk = dart.privateName(hash_sink, "_currentChunk");
  var _iterate = dart.privateName(hash_sink, "_iterate");
  var _finalizeData = dart.privateName(hash_sink, "_finalizeData");
  var _byteDigest = dart.privateName(hash_sink, "_byteDigest");
  var _roundUp = dart.privateName(hash_sink, "_roundUp");
  hash_sink.HashSink = class HashSink extends core.Object {
    add(data) {
      T$.ListOfint().as(data);
      if (this[_isClosed$]) dart.throw(new core.StateError.new("Hash.add() called after close()."));
      this[_lengthInBytes] = this[_lengthInBytes] + data[$length];
      this[_pendingData].addAll(data);
      this[_iterate]();
    }
    close() {
      if (this[_isClosed$]) return;
      this[_isClosed$] = true;
      this[_finalizeData]();
      this[_iterate]();
      if (!this[_pendingData][$isEmpty]) dart.assertFailed(null, I[25], 90, 12, "_pendingData.isEmpty");
      this[_sink$].add(new digest.Digest.new(this[_byteDigest]()));
      this[_sink$].close();
    }
    [_byteDigest]() {
      if (this[_endian][$_equals](typed_data.Endian.host)) return this.digest[$buffer][$asUint8List]();
      let cachedDigest = this.digest;
      let byteDigest = _native_typed_data.NativeUint8List.new(cachedDigest[$lengthInBytes]);
      let byteData = byteDigest[$buffer][$asByteData]();
      for (let i = 0; i < cachedDigest[$length]; i = i + 1) {
        byteData[$setUint32](i * 4, cachedDigest[$_get](i));
      }
      return byteDigest;
    }
    [_iterate]() {
      let pendingDataBytes = this[_pendingData].buffer[$asByteData]();
      let pendingDataChunks = (this[_pendingData].length / this[_currentChunk][$lengthInBytes])[$truncate]();
      for (let i = 0; i < pendingDataChunks; i = i + 1) {
        for (let j = 0; j < this[_currentChunk][$length]; j = j + 1) {
          this[_currentChunk][$_set](j, pendingDataBytes[$getUint32](i * this[_currentChunk][$lengthInBytes] + j * 4, this[_endian]));
        }
        this.updateHash(this[_currentChunk]);
      }
      this[_pendingData][$removeRange](0, pendingDataChunks * this[_currentChunk][$lengthInBytes]);
    }
    [_finalizeData]() {
      this[_pendingData].add(128);
      let contentsLength = this[_lengthInBytes] + 1 + this[_signatureBytes];
      let finalizedLength = this[_roundUp](contentsLength, this[_currentChunk][$lengthInBytes]);
      for (let i = 0; i < finalizedLength - contentsLength; i = i + 1) {
        this[_pendingData].add(0);
      }
      if (this[_lengthInBytes] > 1125899906842623) {
        dart.throw(new core.UnsupportedError.new("Hashing is unsupported for messages with more than 2^53 bits."));
      }
      let lengthInBits = this[_lengthInBytes] * 8;
      let offset = this[_pendingData].length + (this[_signatureBytes] - 8);
      this[_pendingData].addAll(_native_typed_data.NativeUint8List.new(this[_signatureBytes]));
      let byteData = this[_pendingData].buffer[$asByteData]();
      let highBits = (lengthInBits / 4294967296)[$truncate]();
      let lowBits = (lengthInBits & 4294967295) >>> 0;
      if (this[_endian][$_equals](typed_data.Endian.big)) {
        byteData[$setUint32](offset, highBits, this[_endian]);
        byteData[$setUint32](offset + 4, lowBits, this[_endian]);
      } else {
        byteData[$setUint32](offset, lowBits, this[_endian]);
        byteData[$setUint32](offset + 4, highBits, this[_endian]);
      }
    }
    [_roundUp](val, n) {
      return (val + n - 1 & -n) >>> 0;
    }
  };
  (hash_sink.HashSink.new = function(_sink, chunkSizeInWords, opts) {
    let endian = opts && 'endian' in opts ? opts.endian : C[12] || CT.C12;
    let signatureBytes = opts && 'signatureBytes' in opts ? opts.signatureBytes : 8;
    this[_lengthInBytes] = 0;
    this[_pendingData] = new typed_buffer.Uint8Buffer.new();
    this[_isClosed$] = false;
    this[_sink$] = _sink;
    this[_endian] = endian;
    if (!(signatureBytes >= 8)) dart.assertFailed(null, I[25], 64, 16, "signatureBytes >= 8");
    this[_signatureBytes] = signatureBytes;
    this[_currentChunk] = _native_typed_data.NativeUint32List.new(chunkSizeInWords);
    ;
  }).prototype = hash_sink.HashSink.prototype;
  dart.addTypeTests(hash_sink.HashSink);
  dart.addTypeCaches(hash_sink.HashSink);
  hash_sink.HashSink[dart.implements] = () => [core.Sink$(core.List$(core.int))];
  dart.setMethodSignature(hash_sink.HashSink, () => ({
    __proto__: dart.getMethods(hash_sink.HashSink.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    close: dart.fnType(dart.void, []),
    [_byteDigest]: dart.fnType(typed_data.Uint8List, []),
    [_iterate]: dart.fnType(dart.void, []),
    [_finalizeData]: dart.fnType(dart.void, []),
    [_roundUp]: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.setLibraryUri(hash_sink.HashSink, I[26]);
  dart.setFieldSignature(hash_sink.HashSink, () => ({
    __proto__: dart.getFields(hash_sink.HashSink.__proto__),
    [_sink$]: dart.finalFieldType(core.Sink$(digest.Digest)),
    [_endian]: dart.finalFieldType(typed_data.Endian),
    [_currentChunk]: dart.finalFieldType(typed_data.Uint32List),
    [_lengthInBytes]: dart.fieldType(core.int),
    [_pendingData]: dart.finalFieldType(typed_buffer.Uint8Buffer),
    [_isClosed$]: dart.fieldType(core.bool),
    [_signatureBytes]: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(hash_sink.HashSink, () => ['_maxMessageLengthInBytes']);
  dart.defineLazy(hash_sink.HashSink, {
    /*hash_sink.HashSink._maxMessageLengthInBytes*/get _maxMessageLengthInBytes() {
      return 1125899906842623;
    }
  }, false);
  md5._MD5Sink = class _MD5Sink extends hash_sink.HashSink {
    get digest() {
      return this[digest$];
    }
    set digest(value) {
      super.digest = value;
    }
    static ['_#new#tearOff'](sink) {
      return new md5._MD5Sink.new(sink);
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed(null, I[24], 81, 12, "chunk.length == 16");
      let a = this.digest[$_get](0);
      let b = this.digest[$_get](1);
      let c = this.digest[$_get](2);
      let d = this.digest[$_get](3);
      let e = null;
      let f = null;
      for (let i = 0; i < 64; i = i + 1) {
        if (i < 16) {
          e = (b & c | (~b & 4294967295 & d) >>> 0) >>> 0;
          f = i;
        } else if (i < 32) {
          e = (d & b | (~d & 4294967295 & c) >>> 0) >>> 0;
          f = (5 * i + 1)[$modulo](16);
        } else if (i < 48) {
          e = (b ^ c ^ d) >>> 0;
          f = (3 * i + 5)[$modulo](16);
        } else {
          e = (c ^ (b | (~d & 4294967295) >>> 0) >>> 0) >>> 0;
          f = (7 * i)[$modulo](16);
        }
        let temp = d;
        d = c;
        c = b;
        b = utils.add32(b, utils.rotl32(utils.add32(utils.add32(a, e), utils.add32(md5._noise[$_get](i), chunk[$_get](f))), md5._shiftAmounts[$_get](i)));
        a = temp;
      }
      this.digest[$_set](0, utils.add32(a, this.digest[$_get](0)));
      this.digest[$_set](1, utils.add32(b, this.digest[$_get](1)));
      this.digest[$_set](2, utils.add32(c, this.digest[$_get](2)));
      this.digest[$_set](3, utils.add32(d, this.digest[$_get](3)));
    }
  };
  (md5._MD5Sink.new = function(sink) {
    this[digest$] = _native_typed_data.NativeUint32List.new(4);
    md5._MD5Sink.__proto__.new.call(this, sink, 16, {endian: typed_data.Endian.little});
    this.digest[$_set](0, 1732584193);
    this.digest[$_set](1, 4023233417);
    this.digest[$_set](2, 2562383102);
    this.digest[$_set](3, 271733878);
  }).prototype = md5._MD5Sink.prototype;
  dart.addTypeTests(md5._MD5Sink);
  dart.addTypeCaches(md5._MD5Sink);
  dart.setMethodSignature(md5._MD5Sink, () => ({
    __proto__: dart.getMethods(md5._MD5Sink.__proto__),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setLibraryUri(md5._MD5Sink, I[23]);
  dart.setFieldSignature(md5._MD5Sink, () => ({
    __proto__: dart.getFields(md5._MD5Sink.__proto__),
    digest: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.defineLazy(md5, {
    /*md5.md5*/get md5() {
      return C[13] || CT.C13;
    },
    /*md5._noise*/get _noise() {
      return C[14] || CT.C14;
    },
    /*md5._shiftAmounts*/get _shiftAmounts() {
      return C[15] || CT.C15;
    }
  }, false);
  var blockSize$ = dart.privateName(sha1, "_Sha1.blockSize");
  sha1._Sha1 = class _Sha1 extends hash.Hash {
    get blockSize() {
      return this[blockSize$];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#_#tearOff']() {
      return new sha1._Sha1.__();
    }
    startChunkedConversion(sink) {
      T$.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha1._Sha1Sink.new(sink));
    }
  };
  (sha1._Sha1.__ = function() {
    this[blockSize$] = 16 * 4;
    sha1._Sha1.__proto__.new.call(this);
    ;
  }).prototype = sha1._Sha1.prototype;
  dart.addTypeTests(sha1._Sha1);
  dart.addTypeCaches(sha1._Sha1);
  dart.setMethodSignature(sha1._Sha1, () => ({
    __proto__: dart.getMethods(sha1._Sha1.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha1._Sha1, I[27]);
  dart.setFieldSignature(sha1._Sha1, () => ({
    __proto__: dart.getFields(sha1._Sha1.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var digest$0 = dart.privateName(sha1, "_Sha1Sink.digest");
  var _extended = dart.privateName(sha1, "_extended");
  sha1._Sha1Sink = class _Sha1Sink extends hash_sink.HashSink {
    get digest() {
      return this[digest$0];
    }
    set digest(value) {
      super.digest = value;
    }
    static ['_#new#tearOff'](sink) {
      return new sha1._Sha1Sink.new(sink);
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed(null, I[28], 58, 12, "chunk.length == 16");
      let a = this.digest[$_get](0);
      let b = this.digest[$_get](1);
      let c = this.digest[$_get](2);
      let d = this.digest[$_get](3);
      let e = this.digest[$_get](4);
      for (let i = 0; i < 80; i = i + 1) {
        if (i < 16) {
          this[_extended][$_set](i, chunk[$_get](i));
        } else {
          this[_extended][$_set](i, utils.rotl32((this[_extended][$_get](i - 3) ^ this[_extended][$_get](i - 8) ^ this[_extended][$_get](i - 14) ^ this[_extended][$_get](i - 16)) >>> 0, 1));
        }
        let newA = utils.add32(utils.add32(utils.rotl32(a, 5), e), this[_extended][$_get](i));
        if (i < 20) {
          newA = utils.add32(utils.add32(newA, (b & c | (~b & d) >>> 0) >>> 0), 1518500249);
        } else if (i < 40) {
          newA = utils.add32(utils.add32(newA, (b ^ c ^ d) >>> 0), 1859775393);
        } else if (i < 60) {
          newA = utils.add32(utils.add32(newA, (b & c | (b & d) >>> 0 | (c & d) >>> 0) >>> 0), 2400959708);
        } else {
          newA = utils.add32(utils.add32(newA, (b ^ c ^ d) >>> 0), 3395469782);
        }
        e = d;
        d = c;
        c = utils.rotl32(b, 30);
        b = a;
        a = (newA & 4294967295) >>> 0;
      }
      this.digest[$_set](0, utils.add32(a, this.digest[$_get](0)));
      this.digest[$_set](1, utils.add32(b, this.digest[$_get](1)));
      this.digest[$_set](2, utils.add32(c, this.digest[$_get](2)));
      this.digest[$_set](3, utils.add32(d, this.digest[$_get](3)));
      this.digest[$_set](4, utils.add32(e, this.digest[$_get](4)));
    }
  };
  (sha1._Sha1Sink.new = function(sink) {
    this[digest$0] = _native_typed_data.NativeUint32List.new(5);
    this[_extended] = _native_typed_data.NativeUint32List.new(80);
    sha1._Sha1Sink.__proto__.new.call(this, sink, 16);
    this.digest[$_set](0, 1732584193);
    this.digest[$_set](1, 4023233417);
    this.digest[$_set](2, 2562383102);
    this.digest[$_set](3, 271733878);
    this.digest[$_set](4, 3285377520);
  }).prototype = sha1._Sha1Sink.prototype;
  dart.addTypeTests(sha1._Sha1Sink);
  dart.addTypeCaches(sha1._Sha1Sink);
  dart.setMethodSignature(sha1._Sha1Sink, () => ({
    __proto__: dart.getMethods(sha1._Sha1Sink.__proto__),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setLibraryUri(sha1._Sha1Sink, I[27]);
  dart.setFieldSignature(sha1._Sha1Sink, () => ({
    __proto__: dart.getFields(sha1._Sha1Sink.__proto__),
    digest: dart.finalFieldType(typed_data.Uint32List),
    [_extended]: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.defineLazy(sha1, {
    /*sha1.sha1*/get sha1() {
      return C[16] || CT.C16;
    }
  }, false);
  var blockSize$0 = dart.privateName(sha256, "_Sha256.blockSize");
  sha256._Sha256 = class _Sha256 extends hash.Hash {
    get blockSize() {
      return this[blockSize$0];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#_#tearOff']() {
      return new sha256._Sha256.__();
    }
    startChunkedConversion(sink) {
      T$.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha256._Sha256Sink.new(sink));
    }
  };
  (sha256._Sha256.__ = function() {
    this[blockSize$0] = 16 * 4;
    sha256._Sha256.__proto__.new.call(this);
    ;
  }).prototype = sha256._Sha256.prototype;
  dart.addTypeTests(sha256._Sha256);
  dart.addTypeCaches(sha256._Sha256);
  dart.setMethodSignature(sha256._Sha256, () => ({
    __proto__: dart.getMethods(sha256._Sha256.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha256._Sha256, I[29]);
  dart.setFieldSignature(sha256._Sha256, () => ({
    __proto__: dart.getFields(sha256._Sha256.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var blockSize$1 = dart.privateName(sha256, "_Sha224.blockSize");
  sha256._Sha224 = class _Sha224 extends hash.Hash {
    get blockSize() {
      return this[blockSize$1];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#_#tearOff']() {
      return new sha256._Sha224.__();
    }
    startChunkedConversion(sink) {
      T$.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha256._Sha224Sink.new(sink));
    }
  };
  (sha256._Sha224.__ = function() {
    this[blockSize$1] = 16 * 4;
    sha256._Sha224.__proto__.new.call(this);
    ;
  }).prototype = sha256._Sha224.prototype;
  dart.addTypeTests(sha256._Sha224);
  dart.addTypeCaches(sha256._Sha224);
  dart.setMethodSignature(sha256._Sha224, () => ({
    __proto__: dart.getMethods(sha256._Sha224.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha256._Sha224, I[29]);
  dart.setFieldSignature(sha256._Sha224, () => ({
    __proto__: dart.getFields(sha256._Sha224.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var _extended$ = dart.privateName(sha256, "_extended");
  var _digest$ = dart.privateName(sha256, "_digest");
  var _rotr32 = dart.privateName(sha256, "_rotr32");
  var _ch = dart.privateName(sha256, "_ch");
  var _maj = dart.privateName(sha256, "_maj");
  var _bsig0 = dart.privateName(sha256, "_bsig0");
  var _bsig1 = dart.privateName(sha256, "_bsig1");
  var _ssig0 = dart.privateName(sha256, "_ssig0");
  var _ssig1 = dart.privateName(sha256, "_ssig1");
  sha256._Sha32BitSink = class _Sha32BitSink extends hash_sink.HashSink {
    [_rotr32](n, x) {
      return (x[$rightShift](n) | (x[$leftShift](32 - n) & 4294967295) >>> 0) >>> 0;
    }
    [_ch](x, y, z) {
      return (x & y ^ (~x & 4294967295 & z) >>> 0) >>> 0;
    }
    [_maj](x, y, z) {
      return (x & y ^ (x & z) >>> 0 ^ (y & z) >>> 0) >>> 0;
    }
    [_bsig0](x) {
      return (this[_rotr32](2, x) ^ this[_rotr32](13, x) ^ this[_rotr32](22, x)) >>> 0;
    }
    [_bsig1](x) {
      return (this[_rotr32](6, x) ^ this[_rotr32](11, x) ^ this[_rotr32](25, x)) >>> 0;
    }
    [_ssig0](x) {
      return (this[_rotr32](7, x) ^ this[_rotr32](18, x) ^ x[$rightShift](3)) >>> 0;
    }
    [_ssig1](x) {
      return (this[_rotr32](17, x) ^ this[_rotr32](19, x) ^ x[$rightShift](10)) >>> 0;
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed(null, I[30], 95, 12, "chunk.length == 16");
      for (let i = 0; i < 16; i = i + 1) {
        this[_extended$][$_set](i, chunk[$_get](i));
      }
      for (let i = 16; i < 64; i = i + 1) {
        this[_extended$][$_set](i, utils.add32(utils.add32(this[_ssig1](this[_extended$][$_get](i - 2)), this[_extended$][$_get](i - 7)), utils.add32(this[_ssig0](this[_extended$][$_get](i - 15)), this[_extended$][$_get](i - 16))));
      }
      let a = this[_digest$][$_get](0);
      let b = this[_digest$][$_get](1);
      let c = this[_digest$][$_get](2);
      let d = this[_digest$][$_get](3);
      let e = this[_digest$][$_get](4);
      let f = this[_digest$][$_get](5);
      let g = this[_digest$][$_get](6);
      let h = this[_digest$][$_get](7);
      for (let i = 0; i < 64; i = i + 1) {
        let temp1 = utils.add32(utils.add32(h, this[_bsig1](e)), utils.add32(this[_ch](e, f, g), utils.add32(sha256._noise[$_get](i), this[_extended$][$_get](i))));
        let temp2 = utils.add32(this[_bsig0](a), this[_maj](a, b, c));
        h = g;
        g = f;
        f = e;
        e = utils.add32(d, temp1);
        d = c;
        c = b;
        b = a;
        a = utils.add32(temp1, temp2);
      }
      this[_digest$][$_set](0, utils.add32(a, this[_digest$][$_get](0)));
      this[_digest$][$_set](1, utils.add32(b, this[_digest$][$_get](1)));
      this[_digest$][$_set](2, utils.add32(c, this[_digest$][$_get](2)));
      this[_digest$][$_set](3, utils.add32(d, this[_digest$][$_get](3)));
      this[_digest$][$_set](4, utils.add32(e, this[_digest$][$_get](4)));
      this[_digest$][$_set](5, utils.add32(f, this[_digest$][$_get](5)));
      this[_digest$][$_set](6, utils.add32(g, this[_digest$][$_get](6)));
      this[_digest$][$_set](7, utils.add32(h, this[_digest$][$_get](7)));
    }
  };
  (sha256._Sha32BitSink.new = function(sink, _digest) {
    this[_extended$] = _native_typed_data.NativeUint32List.new(64);
    this[_digest$] = _digest;
    sha256._Sha32BitSink.__proto__.new.call(this, sink, 16);
    ;
  }).prototype = sha256._Sha32BitSink.prototype;
  dart.addTypeTests(sha256._Sha32BitSink);
  dart.addTypeCaches(sha256._Sha32BitSink);
  dart.setMethodSignature(sha256._Sha32BitSink, () => ({
    __proto__: dart.getMethods(sha256._Sha32BitSink.__proto__),
    [_rotr32]: dart.fnType(core.int, [core.int, core.int]),
    [_ch]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_maj]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_bsig0]: dart.fnType(core.int, [core.int]),
    [_bsig1]: dart.fnType(core.int, [core.int]),
    [_ssig0]: dart.fnType(core.int, [core.int]),
    [_ssig1]: dart.fnType(core.int, [core.int]),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setLibraryUri(sha256._Sha32BitSink, I[29]);
  dart.setFieldSignature(sha256._Sha32BitSink, () => ({
    __proto__: dart.getFields(sha256._Sha32BitSink.__proto__),
    [_digest$]: dart.finalFieldType(typed_data.Uint32List),
    [_extended$]: dart.finalFieldType(typed_data.Uint32List)
  }));
  sha256._Sha256Sink = class _Sha256Sink extends sha256._Sha32BitSink {
    get digest() {
      return this[_digest$];
    }
    static ['_#new#tearOff'](sink) {
      return new sha256._Sha256Sink.new(sink);
    }
  };
  (sha256._Sha256Sink.new = function(sink) {
    sha256._Sha256Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(T$.JSArrayOfint().of([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])));
    ;
  }).prototype = sha256._Sha256Sink.prototype;
  dart.addTypeTests(sha256._Sha256Sink);
  dart.addTypeCaches(sha256._Sha256Sink);
  dart.setGetterSignature(sha256._Sha256Sink, () => ({
    __proto__: dart.getGetters(sha256._Sha256Sink.__proto__),
    digest: typed_data.Uint32List
  }));
  dart.setLibraryUri(sha256._Sha256Sink, I[29]);
  sha256._Sha224Sink = class _Sha224Sink extends sha256._Sha32BitSink {
    get digest() {
      return this[_digest$][$buffer][$asUint32List](0, 7);
    }
    static ['_#new#tearOff'](sink) {
      return new sha256._Sha224Sink.new(sink);
    }
  };
  (sha256._Sha224Sink.new = function(sink) {
    sha256._Sha224Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(T$.JSArrayOfint().of([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])));
    ;
  }).prototype = sha256._Sha224Sink.prototype;
  dart.addTypeTests(sha256._Sha224Sink);
  dart.addTypeCaches(sha256._Sha224Sink);
  dart.setGetterSignature(sha256._Sha224Sink, () => ({
    __proto__: dart.getGetters(sha256._Sha224Sink.__proto__),
    digest: typed_data.Uint32List
  }));
  dart.setLibraryUri(sha256._Sha224Sink, I[29]);
  dart.defineLazy(sha256, {
    /*sha256.sha256*/get sha256() {
      return C[17] || CT.C17;
    },
    /*sha256.sha224*/get sha224() {
      return C[18] || CT.C18;
    },
    /*sha256._noise*/get _noise() {
      return C[19] || CT.C19;
    }
  }, false);
  var blockSize$2 = dart.privateName(sha512, "_Sha384.blockSize");
  sha512._Sha384 = class _Sha384 extends hash.Hash {
    get blockSize() {
      return this[blockSize$2];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#_#tearOff']() {
      return new sha512._Sha384.__();
    }
    startChunkedConversion(sink) {
      T$.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha512_slowsinks.Sha384Sink.new(sink));
    }
  };
  (sha512._Sha384.__ = function() {
    this[blockSize$2] = 32 * 4;
    sha512._Sha384.__proto__.new.call(this);
    ;
  }).prototype = sha512._Sha384.prototype;
  dart.addTypeTests(sha512._Sha384);
  dart.addTypeCaches(sha512._Sha384);
  dart.setMethodSignature(sha512._Sha384, () => ({
    __proto__: dart.getMethods(sha512._Sha384.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha512._Sha384, I[31]);
  dart.setFieldSignature(sha512._Sha384, () => ({
    __proto__: dart.getFields(sha512._Sha384.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var blockSize$3 = dart.privateName(sha512, "_Sha512.blockSize");
  sha512._Sha512 = class _Sha512 extends hash.Hash {
    get blockSize() {
      return this[blockSize$3];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#_#tearOff']() {
      return new sha512._Sha512.__();
    }
    startChunkedConversion(sink) {
      T$.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha512_slowsinks.Sha512Sink.new(sink));
    }
  };
  (sha512._Sha512.__ = function() {
    this[blockSize$3] = 32 * 4;
    sha512._Sha512.__proto__.new.call(this);
    ;
  }).prototype = sha512._Sha512.prototype;
  dart.addTypeTests(sha512._Sha512);
  dart.addTypeCaches(sha512._Sha512);
  dart.setMethodSignature(sha512._Sha512, () => ({
    __proto__: dart.getMethods(sha512._Sha512.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha512._Sha512, I[31]);
  dart.setFieldSignature(sha512._Sha512, () => ({
    __proto__: dart.getFields(sha512._Sha512.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var blockSize$4 = dart.privateName(sha512, "_Sha512224.blockSize");
  sha512._Sha512224 = class _Sha512224 extends hash.Hash {
    get blockSize() {
      return this[blockSize$4];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#new#tearOff']() {
      return new sha512._Sha512224.new();
    }
    startChunkedConversion(sink) {
      T$.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha512_slowsinks.Sha512224Sink.new(sink));
    }
  };
  (sha512._Sha512224.new = function() {
    this[blockSize$4] = 32 * 4;
    sha512._Sha512224.__proto__.new.call(this);
    ;
  }).prototype = sha512._Sha512224.prototype;
  dart.addTypeTests(sha512._Sha512224);
  dart.addTypeCaches(sha512._Sha512224);
  dart.setMethodSignature(sha512._Sha512224, () => ({
    __proto__: dart.getMethods(sha512._Sha512224.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha512._Sha512224, I[31]);
  dart.setFieldSignature(sha512._Sha512224, () => ({
    __proto__: dart.getFields(sha512._Sha512224.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var blockSize$5 = dart.privateName(sha512, "_Sha512256.blockSize");
  sha512._Sha512256 = class _Sha512256 extends hash.Hash {
    get blockSize() {
      return this[blockSize$5];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#new#tearOff']() {
      return new sha512._Sha512256.new();
    }
    startChunkedConversion(sink) {
      T$.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha512_slowsinks.Sha512256Sink.new(sink));
    }
  };
  (sha512._Sha512256.new = function() {
    this[blockSize$5] = 32 * 4;
    sha512._Sha512256.__proto__.new.call(this);
    ;
  }).prototype = sha512._Sha512256.prototype;
  dart.addTypeTests(sha512._Sha512256);
  dart.addTypeCaches(sha512._Sha512256);
  dart.setMethodSignature(sha512._Sha512256, () => ({
    __proto__: dart.getMethods(sha512._Sha512256.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha512._Sha512256, I[31]);
  dart.setFieldSignature(sha512._Sha512256, () => ({
    __proto__: dart.getFields(sha512._Sha512256.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(sha512, {
    /*sha512.sha384*/get sha384() {
      return C[20] || CT.C20;
    },
    /*sha512.sha512*/get sha512() {
      return C[21] || CT.C21;
    },
    /*sha512.sha512224*/get sha512224() {
      return C[22] || CT.C22;
    },
    /*sha512.sha512256*/get sha512256() {
      return C[23] || CT.C23;
    }
  }, false);
  aes_engine.AesEngine = class AesEngine extends core.Object {
    static generateWorkingKey(key, forEncryption) {
      let w = T$.ListOfUint32List().generate(14 + 1, dart.fn(_ => _native_typed_data.NativeUint32List.new(4), T$.intToUint32List()));
      let t0 = extensions['ListIntX|readUint32'](key, 0);
      let t1 = extensions['ListIntX|readUint32'](key, 4);
      let t2 = extensions['ListIntX|readUint32'](key, 8);
      let t3 = extensions['ListIntX|readUint32'](key, 12);
      let t4 = extensions['ListIntX|readUint32'](key, 16);
      let t5 = extensions['ListIntX|readUint32'](key, 20);
      let t6 = extensions['ListIntX|readUint32'](key, 24);
      let t7 = extensions['ListIntX|readUint32'](key, 28);
      w[$_get](0)[$_set](0, t0);
      w[$_get](0)[$_set](1, t1);
      w[$_get](0)[$_set](2, t2);
      w[$_get](0)[$_set](3, t3);
      w[$_get](1)[$_set](0, t4);
      w[$_get](1)[$_set](1, t5);
      w[$_get](1)[$_set](2, t6);
      w[$_get](1)[$_set](3, t7);
      let u = null;
      let rcon = 1;
      for (let i = 2; i < 14; i = i + 2) {
        u = (aes_engine._subWord((t7[$rightShift](8) | ((t7 & 255) >>> 0 << 24 & 4294967295) >>> 0) >>> 0) ^ rcon) >>> 0;
        rcon = rcon << 1 >>> 0;
        t0 = (t0 ^ u) >>> 0;
        w[$_get](i)[$_set](0, t0);
        t1 = (t1 ^ t0) >>> 0;
        w[$_get](i)[$_set](1, t1);
        t2 = (t2 ^ t1) >>> 0;
        w[$_get](i)[$_set](2, t2);
        t3 = (t3 ^ t2) >>> 0;
        w[$_get](i)[$_set](3, t3);
        u = aes_engine._subWord(t3);
        t4 = (t4 ^ u) >>> 0;
        w[$_get](i + 1)[$_set](0, t4);
        t5 = (t5 ^ t4) >>> 0;
        w[$_get](i + 1)[$_set](1, t5);
        t6 = (t6 ^ t5) >>> 0;
        w[$_get](i + 1)[$_set](2, t6);
        t7 = (t7 ^ t6) >>> 0;
        w[$_get](i + 1)[$_set](3, t7);
      }
      u = (aes_engine._subWord((t7[$rightShift](8) | ((t7 & 255) >>> 0 << 24 & 4294967295) >>> 0) >>> 0) ^ rcon) >>> 0;
      t0 = (t0 ^ u) >>> 0;
      w[$_get](14)[$_set](0, t0);
      t1 = (t1 ^ t0) >>> 0;
      w[$_get](14)[$_set](1, t1);
      t2 = (t2 ^ t1) >>> 0;
      w[$_get](14)[$_set](2, t2);
      t3 = (t3 ^ t2) >>> 0;
      w[$_get](14)[$_set](3, t3);
      if (!forEncryption) {
        for (let j = 1; j < 14; j = j + 1) {
          for (let i = 0; i < 4; i = i + 1) {
            w[$_get](j)[$_set](i, aes_engine._invMcol(w[$_get](j)[$_get](i)));
          }
        }
      }
      return w;
    }
    static encryptBlock(workingKey, inp, inpOff, out, outOff) {
      let c0 = (extensions['ListIntX|readUint32'](inp, inpOff) ^ workingKey[$_get](0)[$_get](0)) >>> 0;
      let c1 = (extensions['ListIntX|readUint32'](inp, inpOff + 4) ^ workingKey[$_get](0)[$_get](1)) >>> 0;
      let c2 = (extensions['ListIntX|readUint32'](inp, inpOff + 8) ^ workingKey[$_get](0)[$_get](2)) >>> 0;
      let c3 = (extensions['ListIntX|readUint32'](inp, inpOff + 12) ^ workingKey[$_get](0)[$_get](3)) >>> 0;
      let r0 = null;
      let r1 = null;
      let r2 = null;
      let r3 = null;
      let r = 1;
      while (r < 14 - 1) {
        r0 = (aes_tables.table0[$_get](c0 & 255) ^ aes_tables.table1[$_get](c1 >> 8 & 255) ^ aes_tables.table2[$_get](c2 >> 16 & 255) ^ aes_tables.table3[$_get](c3[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](0)) >>> 0;
        r1 = (aes_tables.table0[$_get](c1 & 255) ^ aes_tables.table1[$_get](c2 >> 8 & 255) ^ aes_tables.table2[$_get](c3 >> 16 & 255) ^ aes_tables.table3[$_get](c0[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](1)) >>> 0;
        r2 = (aes_tables.table0[$_get](c2 & 255) ^ aes_tables.table1[$_get](c3 >> 8 & 255) ^ aes_tables.table2[$_get](c0 >> 16 & 255) ^ aes_tables.table3[$_get](c1[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](2)) >>> 0;
        r3 = (aes_tables.table0[$_get](c3 & 255) ^ aes_tables.table1[$_get](c0 >> 8 & 255) ^ aes_tables.table2[$_get](c1 >> 16 & 255) ^ aes_tables.table3[$_get](c2[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](3)) >>> 0;
        r = r + 1;
        c0 = (aes_tables.table0[$_get](r0 & 255) ^ aes_tables.table1[$_get](r1 >> 8 & 255) ^ aes_tables.table2[$_get](r2 >> 16 & 255) ^ aes_tables.table3[$_get](r3[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](0)) >>> 0;
        c1 = (aes_tables.table0[$_get](r1 & 255) ^ aes_tables.table1[$_get](r2 >> 8 & 255) ^ aes_tables.table2[$_get](r3 >> 16 & 255) ^ aes_tables.table3[$_get](r0[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](1)) >>> 0;
        c2 = (aes_tables.table0[$_get](r2 & 255) ^ aes_tables.table1[$_get](r3 >> 8 & 255) ^ aes_tables.table2[$_get](r0 >> 16 & 255) ^ aes_tables.table3[$_get](r1[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](2)) >>> 0;
        c3 = (aes_tables.table0[$_get](r3 & 255) ^ aes_tables.table1[$_get](r0 >> 8 & 255) ^ aes_tables.table2[$_get](r1 >> 16 & 255) ^ aes_tables.table3[$_get](r2[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](3)) >>> 0;
        r = r + 1;
      }
      r0 = (aes_tables.table0[$_get](c0 & 255) ^ aes_tables.table1[$_get](c1 >> 8 & 255) ^ aes_tables.table2[$_get](c2 >> 16 & 255) ^ aes_tables.table3[$_get](c3[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](0)) >>> 0;
      r1 = (aes_tables.table0[$_get](c1 & 255) ^ aes_tables.table1[$_get](c2 >> 8 & 255) ^ aes_tables.table2[$_get](c3 >> 16 & 255) ^ aes_tables.table3[$_get](c0[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](1)) >>> 0;
      r2 = (aes_tables.table0[$_get](c2 & 255) ^ aes_tables.table1[$_get](c3 >> 8 & 255) ^ aes_tables.table2[$_get](c0 >> 16 & 255) ^ aes_tables.table3[$_get](c1[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](2)) >>> 0;
      r3 = (aes_tables.table0[$_get](c3 & 255) ^ aes_tables.table1[$_get](c0 >> 8 & 255) ^ aes_tables.table2[$_get](c1 >> 16 & 255) ^ aes_tables.table3[$_get](c2[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](3)) >>> 0;
      r = r + 1;
      c0 = (aes_tables.sBox[$_get](r0 & 255) & 255 ^ aes_tables.sBox[$_get](r1 >> 8 & 255) << 8 >>> 0 ^ aes_tables.sBox[$_get](r2 >> 16 & 255) << 16 >>> 0 ^ aes_tables.sBox[$_get](r3[$rightShift](24) & 255) << 24 >>> 0 ^ workingKey[$_get](r)[$_get](0)) >>> 0;
      c1 = (aes_tables.sBox[$_get](r1 & 255) & 255 ^ aes_tables.sBox[$_get](r2 >> 8 & 255) << 8 >>> 0 ^ aes_tables.sBox[$_get](r3 >> 16 & 255) << 16 >>> 0 ^ aes_tables.sBox[$_get](r0[$rightShift](24) & 255) << 24 >>> 0 ^ workingKey[$_get](r)[$_get](1)) >>> 0;
      c2 = (aes_tables.sBox[$_get](r2 & 255) & 255 ^ aes_tables.sBox[$_get](r3 >> 8 & 255) << 8 >>> 0 ^ aes_tables.sBox[$_get](r0 >> 16 & 255) << 16 >>> 0 ^ aes_tables.sBox[$_get](r1[$rightShift](24) & 255) << 24 >>> 0 ^ workingKey[$_get](r)[$_get](2)) >>> 0;
      c3 = (aes_tables.sBox[$_get](r3 & 255) & 255 ^ aes_tables.sBox[$_get](r0 >> 8 & 255) << 8 >>> 0 ^ aes_tables.sBox[$_get](r1 >> 16 & 255) << 16 >>> 0 ^ aes_tables.sBox[$_get](r2[$rightShift](24) & 255) << 24 >>> 0 ^ workingKey[$_get](r)[$_get](3)) >>> 0;
      extensions['ListIntX|writeUint32'](out, outOff, c0);
      extensions['ListIntX|writeUint32'](out, outOff + 4, c1);
      extensions['ListIntX|writeUint32'](out, outOff + 8, c2);
      extensions['ListIntX|writeUint32'](out, outOff + 12, c3);
    }
    static decryptBlock(workingKey, inp, inpOff, out, outOff) {
      let c0 = (extensions['ListIntX|readUint32'](inp, inpOff) ^ workingKey[$_get](14)[$_get](0)) >>> 0;
      let c1 = (extensions['ListIntX|readUint32'](inp, inpOff + 4) ^ workingKey[$_get](14)[$_get](1)) >>> 0;
      let c2 = (extensions['ListIntX|readUint32'](inp, inpOff + 8) ^ workingKey[$_get](14)[$_get](2)) >>> 0;
      let c3 = (extensions['ListIntX|readUint32'](inp, inpOff + 12) ^ workingKey[$_get](14)[$_get](3)) >>> 0;
      let r0 = null;
      let r1 = null;
      let r2 = null;
      let r3 = null;
      let r = 14 - 1;
      while (r > 1) {
        r0 = (aes_tables.table0Inv[$_get](c0 & 255) ^ aes_tables.table1Inv[$_get](c3 >> 8 & 255) ^ aes_tables.table2Inv[$_get](c2 >> 16 & 255) ^ aes_tables.table3Inv[$_get](c1[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](0)) >>> 0;
        r1 = (aes_tables.table0Inv[$_get](c1 & 255) ^ aes_tables.table1Inv[$_get](c0 >> 8 & 255) ^ aes_tables.table2Inv[$_get](c3 >> 16 & 255) ^ aes_tables.table3Inv[$_get](c2[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](1)) >>> 0;
        r2 = (aes_tables.table0Inv[$_get](c2 & 255) ^ aes_tables.table1Inv[$_get](c1 >> 8 & 255) ^ aes_tables.table2Inv[$_get](c0 >> 16 & 255) ^ aes_tables.table3Inv[$_get](c3[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](2)) >>> 0;
        r3 = (aes_tables.table0Inv[$_get](c3 & 255) ^ aes_tables.table1Inv[$_get](c2 >> 8 & 255) ^ aes_tables.table2Inv[$_get](c1 >> 16 & 255) ^ aes_tables.table3Inv[$_get](c0[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](3)) >>> 0;
        r = r - 1;
        c0 = (aes_tables.table0Inv[$_get](r0 & 255) ^ aes_tables.table1Inv[$_get](r3 >> 8 & 255) ^ aes_tables.table2Inv[$_get](r2 >> 16 & 255) ^ aes_tables.table3Inv[$_get](r1[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](0)) >>> 0;
        c1 = (aes_tables.table0Inv[$_get](r1 & 255) ^ aes_tables.table1Inv[$_get](r0 >> 8 & 255) ^ aes_tables.table2Inv[$_get](r3 >> 16 & 255) ^ aes_tables.table3Inv[$_get](r2[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](1)) >>> 0;
        c2 = (aes_tables.table0Inv[$_get](r2 & 255) ^ aes_tables.table1Inv[$_get](r1 >> 8 & 255) ^ aes_tables.table2Inv[$_get](r0 >> 16 & 255) ^ aes_tables.table3Inv[$_get](r3[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](2)) >>> 0;
        c3 = (aes_tables.table0Inv[$_get](r3 & 255) ^ aes_tables.table1Inv[$_get](r2 >> 8 & 255) ^ aes_tables.table2Inv[$_get](r1 >> 16 & 255) ^ aes_tables.table3Inv[$_get](r0[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](3)) >>> 0;
        r = r - 1;
      }
      r0 = (aes_tables.table0Inv[$_get](c0 & 255) ^ aes_tables.table1Inv[$_get](c3 >> 8 & 255) ^ aes_tables.table2Inv[$_get](c2 >> 16 & 255) ^ aes_tables.table3Inv[$_get](c1[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](0)) >>> 0;
      r1 = (aes_tables.table0Inv[$_get](c1 & 255) ^ aes_tables.table1Inv[$_get](c0 >> 8 & 255) ^ aes_tables.table2Inv[$_get](c3 >> 16 & 255) ^ aes_tables.table3Inv[$_get](c2[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](1)) >>> 0;
      r2 = (aes_tables.table0Inv[$_get](c2 & 255) ^ aes_tables.table1Inv[$_get](c1 >> 8 & 255) ^ aes_tables.table2Inv[$_get](c0 >> 16 & 255) ^ aes_tables.table3Inv[$_get](c3[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](2)) >>> 0;
      r3 = (aes_tables.table0Inv[$_get](c3 & 255) ^ aes_tables.table1Inv[$_get](c2 >> 8 & 255) ^ aes_tables.table2Inv[$_get](c1 >> 16 & 255) ^ aes_tables.table3Inv[$_get](c0[$rightShift](24) & 255) ^ workingKey[$_get](r)[$_get](3)) >>> 0;
      c0 = (aes_tables.sBoxInv[$_get](r0 & 255) ^ aes_tables.sBoxInv[$_get](r3 >> 8 & 255) << 8 >>> 0 ^ aes_tables.sBoxInv[$_get](r2 >> 16 & 255) << 16 >>> 0 ^ aes_tables.sBoxInv[$_get](r1[$rightShift](24) & 255) << 24 >>> 0 ^ workingKey[$_get](0)[$_get](0)) >>> 0;
      c1 = (aes_tables.sBoxInv[$_get](r1 & 255) & 255 ^ aes_tables.sBoxInv[$_get](r0 >> 8 & 255) << 8 >>> 0 ^ aes_tables.sBoxInv[$_get](r3 >> 16 & 255) << 16 >>> 0 ^ aes_tables.sBoxInv[$_get](r2[$rightShift](24) & 255) << 24 >>> 0 ^ workingKey[$_get](0)[$_get](1)) >>> 0;
      c2 = (aes_tables.sBoxInv[$_get](r2 & 255) & 255 ^ aes_tables.sBoxInv[$_get](r1 >> 8 & 255) << 8 >>> 0 ^ aes_tables.sBoxInv[$_get](r0 >> 16 & 255) << 16 >>> 0 ^ aes_tables.sBoxInv[$_get](r3[$rightShift](24) & 255) << 24 >>> 0 ^ workingKey[$_get](0)[$_get](2)) >>> 0;
      c3 = (aes_tables.sBoxInv[$_get](r3 & 255) & 255 ^ aes_tables.sBoxInv[$_get](r2 >> 8 & 255) << 8 >>> 0 ^ aes_tables.sBoxInv[$_get](r1 >> 16 & 255) << 16 >>> 0 ^ aes_tables.sBoxInv[$_get](r0[$rightShift](24) & 255) << 24 >>> 0 ^ workingKey[$_get](0)[$_get](3)) >>> 0;
      extensions['ListIntX|writeUint32'](out, outOff, c0);
      extensions['ListIntX|writeUint32'](out, outOff + 4, c1);
      extensions['ListIntX|writeUint32'](out, outOff + 8, c2);
      extensions['ListIntX|writeUint32'](out, outOff + 12, c3);
    }
    static ['_#new#tearOff']() {
      return new aes_engine.AesEngine.new();
    }
  };
  (aes_engine.AesEngine.new = function() {
    ;
  }).prototype = aes_engine.AesEngine.prototype;
  dart.addTypeTests(aes_engine.AesEngine);
  dart.addTypeCaches(aes_engine.AesEngine);
  dart.setStaticMethodSignature(aes_engine.AesEngine, () => ['generateWorkingKey', 'encryptBlock', 'decryptBlock']);
  dart.setLibraryUri(aes_engine.AesEngine, I[32]);
  aes_engine._subWord = function _subWord(x) {
    return (aes_tables.sBox[$_get](x & 255) | aes_tables.sBox[$_get](x >> 8 & 255) << 8 >>> 0 | aes_tables.sBox[$_get](x >> 16 & 255) << 16 >>> 0 | aes_tables.sBox[$_get](x[$rightShift](24) & 255) << 24 >>> 0) >>> 0;
  };
  aes_engine._invMcol = function _invMcol(x) {
    let f2 = ((x & 2139062143) >>> 0 << 1 ^ ((x & 2155905152) >>> 7) * 27) >>> 0;
    let f4 = ((f2 & 2139062143) >>> 0 << 1 ^ ((f2 & 2155905152) >>> 7) * 27) >>> 0;
    let f8 = ((f4 & 2139062143) >>> 0 << 1 ^ ((f4 & 2155905152) >>> 7) * 27) >>> 0;
    let f9 = (x ^ f8) >>> 0;
    let s1 = ((f2 ^ f9) >>> 8 | (((f2 ^ f9) & 255) >>> 0 << 24 & 4294967295) >>> 0) >>> 0;
    let s2 = ((f4 ^ f9) >>> 16 | (((f4 ^ f9) & 65535) >>> 0 << 16 & 4294967295) >>> 0) >>> 0;
    let s3 = (f9[$rightShift](24) | ((f9 & 4294967295) >>> 0 << 8 & 4294967295) >>> 0) >>> 0;
    return (f2 ^ f4 ^ f8 ^ s1 ^ s2 ^ s3) >>> 0;
  };
  dart.defineLazy(aes_engine, {
    /*aes_engine.aesBlockSize*/get aesBlockSize() {
      return 16;
    },
    /*aes_engine.rounds*/get rounds() {
      return 14;
    },
    /*aes_engine._m1*/get _m1() {
      return 2155905152;
    },
    /*aes_engine._m2*/get _m2() {
      return 2139062143;
    },
    /*aes_engine._m3*/get _m3() {
      return 27;
    },
    /*aes_engine._mask8*/get _mask8() {
      return 255;
    },
    /*aes_engine._mask16*/get _mask16() {
      return 65535;
    },
    /*aes_engine._mask32*/get _mask32() {
      return 4294967295;
    }
  }, false);
  var typeId$0 = dart.privateName(big_int_adapter, "BigIntAdapter.typeId");
  big_int_adapter.BigIntAdapter = class BigIntAdapter extends hive.TypeAdapter$(core.BigInt) {
    get typeId() {
      return this[typeId$0];
    }
    set typeId(value) {
      super.typeId = value;
    }
    read(reader) {
      let len = reader.readByte();
      let intStr = reader.readString(len);
      return core.BigInt.parse(intStr);
    }
    write(writer, obj) {
      core.BigInt.as(obj);
      let intStr = obj.toString();
      writer.writeByte(intStr.length);
      writer.writeString(intStr, {writeByteCount: false});
    }
    static ['_#new#tearOff']() {
      return new big_int_adapter.BigIntAdapter.new();
    }
  };
  (big_int_adapter.BigIntAdapter.new = function() {
    this[typeId$0] = 17;
    ;
  }).prototype = big_int_adapter.BigIntAdapter.prototype;
  dart.addTypeTests(big_int_adapter.BigIntAdapter);
  dart.addTypeCaches(big_int_adapter.BigIntAdapter);
  dart.setMethodSignature(big_int_adapter.BigIntAdapter, () => ({
    __proto__: dart.getMethods(big_int_adapter.BigIntAdapter.__proto__),
    read: dart.fnType(core.BigInt, [hive.BinaryReader]),
    write: dart.fnType(dart.void, [hive.BinaryWriter, dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(big_int_adapter.BigIntAdapter, I[33]);
  dart.setFieldSignature(big_int_adapter.BigIntAdapter, () => ({
    __proto__: dart.getFields(big_int_adapter.BigIntAdapter.__proto__),
    typeId: dart.finalFieldType(core.int)
  }));
  var typeId$1 = dart.privateName(date_time_adapter, "DateTimeAdapter.typeId");
  const _is_DateTimeAdapter_default = Symbol('_is_DateTimeAdapter_default');
  date_time_adapter.DateTimeAdapter$ = dart.generic(T => {
    class DateTimeAdapter extends hive.TypeAdapter$(T) {
      get typeId() {
        return this[typeId$1];
      }
      set typeId(value) {
        super.typeId = value;
      }
      read(reader) {
        let millis = reader.readInt();
        return T.as(new date_time_adapter.DateTimeWithoutTZ.fromMillisecondsSinceEpoch(millis));
      }
      write(writer, obj) {
        core.DateTime.as(obj);
        writer.writeInt(obj.millisecondsSinceEpoch);
      }
      static ['_#new#tearOff'](T) {
        return new (date_time_adapter.DateTimeAdapter$(T)).new();
      }
    }
    (DateTimeAdapter.new = function() {
      this[typeId$1] = 16;
      ;
    }).prototype = DateTimeAdapter.prototype;
    dart.addTypeTests(DateTimeAdapter);
    DateTimeAdapter.prototype[_is_DateTimeAdapter_default] = true;
    dart.addTypeCaches(DateTimeAdapter);
    dart.setMethodSignature(DateTimeAdapter, () => ({
      __proto__: dart.getMethods(DateTimeAdapter.__proto__),
      read: dart.fnType(T, [hive.BinaryReader]),
      write: dart.fnType(dart.void, [hive.BinaryWriter, dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(DateTimeAdapter, I[34]);
    dart.setFieldSignature(DateTimeAdapter, () => ({
      __proto__: dart.getFields(DateTimeAdapter.__proto__),
      typeId: dart.finalFieldType(core.int)
    }));
    return DateTimeAdapter;
  });
  date_time_adapter.DateTimeAdapter = date_time_adapter.DateTimeAdapter$();
  dart.addTypeTests(date_time_adapter.DateTimeAdapter, _is_DateTimeAdapter_default);
  date_time_adapter.DateTimeWithoutTZ = class DateTimeWithoutTZ extends core.DateTime {
    static ['_#fromMillisecondsSinceEpoch#tearOff'](millisecondsSinceEpoch) {
      return new date_time_adapter.DateTimeWithoutTZ.fromMillisecondsSinceEpoch(millisecondsSinceEpoch);
    }
  };
  (date_time_adapter.DateTimeWithoutTZ.fromMillisecondsSinceEpoch = function(millisecondsSinceEpoch) {
    date_time_adapter.DateTimeWithoutTZ.__proto__.fromMillisecondsSinceEpoch.call(this, millisecondsSinceEpoch);
    ;
  }).prototype = date_time_adapter.DateTimeWithoutTZ.prototype;
  dart.addTypeTests(date_time_adapter.DateTimeWithoutTZ);
  dart.addTypeCaches(date_time_adapter.DateTimeWithoutTZ);
  dart.setLibraryUri(date_time_adapter.DateTimeWithoutTZ, I[34]);
  var typeId$2 = dart.privateName(date_time_adapter, "DateTimeWithTimezoneAdapter.typeId");
  date_time_adapter.DateTimeWithTimezoneAdapter = class DateTimeWithTimezoneAdapter extends hive.TypeAdapter$(core.DateTime) {
    get typeId() {
      return this[typeId$2];
    }
    set typeId(value) {
      super.typeId = value;
    }
    read(reader) {
      let millis = reader.readInt();
      let isUtc = reader.readBool();
      return new core.DateTime.fromMillisecondsSinceEpoch(millis, {isUtc: isUtc});
    }
    write(writer, obj) {
      core.DateTime.as(obj);
      writer.writeInt(obj.millisecondsSinceEpoch);
      writer.writeBool(obj.isUtc);
    }
    static ['_#new#tearOff']() {
      return new date_time_adapter.DateTimeWithTimezoneAdapter.new();
    }
  };
  (date_time_adapter.DateTimeWithTimezoneAdapter.new = function() {
    this[typeId$2] = 18;
    ;
  }).prototype = date_time_adapter.DateTimeWithTimezoneAdapter.prototype;
  dart.addTypeTests(date_time_adapter.DateTimeWithTimezoneAdapter);
  dart.addTypeCaches(date_time_adapter.DateTimeWithTimezoneAdapter);
  dart.setMethodSignature(date_time_adapter.DateTimeWithTimezoneAdapter, () => ({
    __proto__: dart.getMethods(date_time_adapter.DateTimeWithTimezoneAdapter.__proto__),
    read: dart.fnType(core.DateTime, [hive.BinaryReader]),
    write: dart.fnType(dart.void, [hive.BinaryWriter, dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(date_time_adapter.DateTimeWithTimezoneAdapter, I[34]);
  dart.setFieldSignature(date_time_adapter.DateTimeWithTimezoneAdapter, () => ({
    __proto__: dart.getFields(date_time_adapter.DateTimeWithTimezoneAdapter.__proto__),
    typeId: dart.finalFieldType(core.int)
  }));
  var supportsCompaction = dart.privateName(storage_backend_memory, "StorageBackendMemory.supportsCompaction");
  var _cipher$ = dart.privateName(storage_backend_memory, "_cipher");
  var _bytes = dart.privateName(storage_backend_memory, "_bytes");
  var _frameHelper = dart.privateName(storage_backend_memory, "_frameHelper");
  storage_backend.StorageBackend = class StorageBackend extends core.Object {};
  (storage_backend.StorageBackend.new = function() {
    ;
  }).prototype = storage_backend.StorageBackend.prototype;
  dart.addTypeTests(storage_backend.StorageBackend);
  dart.addTypeCaches(storage_backend.StorageBackend);
  dart.setLibraryUri(storage_backend.StorageBackend, I[35]);
  storage_backend_memory.StorageBackendMemory = class StorageBackendMemory extends storage_backend.StorageBackend {
    get supportsCompaction() {
      return this[supportsCompaction];
    }
    set supportsCompaction(value) {
      this[supportsCompaction] = value;
    }
    static ['_#new#tearOff'](bytes, _cipher) {
      return new storage_backend_memory.StorageBackendMemory.new(bytes, _cipher);
    }
    get path() {
      return null;
    }
    initialize(registry, keystore, lazy) {
      let recoveryOffset = this[_frameHelper].framesFromBytes(dart.nullCheck(this[_bytes]), keystore, registry, this[_cipher$]);
      if (recoveryOffset !== -1) {
        dart.throw(new hive.HiveError.new("Wrong checksum in bytes. Box may be corrupted."));
      }
      this[_bytes] = null;
      return T$.FutureOfvoid().value();
    }
    readValue(frame) {
      dart.throw(new core.UnsupportedError.new("This operation is unsupported for memory boxes."));
    }
    writeFrames(frames) {
      return T$.FutureOfvoid().value();
    }
    compact(frames) {
      dart.throw(new core.UnsupportedError.new("This operation is unsupported for memory boxes."));
    }
    clear() {
      return T$.FutureOfvoid().value();
    }
    close() {
      return T$.FutureOfvoid().value();
    }
    deleteFromDisk() {
      dart.throw(new core.UnsupportedError.new("This operation is unsupported for memory boxes."));
    }
    flush() {
      return T$.FutureOfvoid().value();
    }
  };
  (storage_backend_memory.StorageBackendMemory.new = function(bytes, _cipher) {
    this[supportsCompaction] = false;
    this[_cipher$] = _cipher;
    this[_bytes] = bytes;
    this[_frameHelper] = new frame_helper.FrameHelper.new();
    ;
  }).prototype = storage_backend_memory.StorageBackendMemory.prototype;
  dart.addTypeTests(storage_backend_memory.StorageBackendMemory);
  dart.addTypeCaches(storage_backend_memory.StorageBackendMemory);
  dart.setMethodSignature(storage_backend_memory.StorageBackendMemory, () => ({
    __proto__: dart.getMethods(storage_backend_memory.StorageBackendMemory.__proto__),
    initialize: dart.fnType(async.Future$(dart.void), [hive.TypeRegistry, dart.nullable(keystore$.Keystore), core.bool]),
    readValue: dart.fnType(async.Future, [frame$.Frame]),
    writeFrames: dart.fnType(async.Future$(dart.void), [core.List$(frame$.Frame)]),
    compact: dart.fnType(async.Future$(core.List$(frame$.Frame)), [core.Iterable$(frame$.Frame)]),
    clear: dart.fnType(async.Future$(dart.void), []),
    close: dart.fnType(async.Future$(dart.void), []),
    deleteFromDisk: dart.fnType(async.Future$(dart.void), []),
    flush: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(storage_backend_memory.StorageBackendMemory, () => ({
    __proto__: dart.getGetters(storage_backend_memory.StorageBackendMemory.__proto__),
    path: dart.nullable(core.String)
  }));
  dart.setLibraryUri(storage_backend_memory.StorageBackendMemory, I[36]);
  dart.setFieldSignature(storage_backend_memory.StorageBackendMemory, () => ({
    __proto__: dart.getFields(storage_backend_memory.StorageBackendMemory.__proto__),
    [_cipher$]: dart.finalFieldType(dart.nullable(hive.HiveCipher)),
    [_frameHelper]: dart.finalFieldType(frame_helper.FrameHelper),
    [_bytes]: dart.fieldType(dart.nullable(typed_data.Uint8List)),
    supportsCompaction: dart.fieldType(core.bool)
  }));
  var name$1 = dart.privateName(box_base_impl, "BoxBaseImpl.name");
  var hive$ = dart.privateName(box_base_impl, "BoxBaseImpl.hive");
  var backend$ = dart.privateName(box_base_impl, "BoxBaseImpl.backend");
  var __BoxBaseImpl_keystore = dart.privateName(box_base_impl, "_#BoxBaseImpl#keystore");
  var _open = dart.privateName(box_base_impl, "_open");
  var _compactionStrategy$ = dart.privateName(box_base_impl, "_compactionStrategy");
  const _is_BoxBaseImpl_default = Symbol('_is_BoxBaseImpl_default');
  box_base_impl.BoxBaseImpl$ = dart.generic(E => {
    var __t$KeystoreOfE = () => (__t$KeystoreOfE = dart.constFn(keystore$.Keystore$(E)))();
    var __t$LinkedMapOfdynamic$E = () => (__t$LinkedMapOfdynamic$E = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, E)))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$IdentityMapOfint$E = () => (__t$IdentityMapOfint$E = dart.constFn(_js_helper.IdentityMap$(core.int, E)))();
    class BoxBaseImpl extends core.Object {
      get name() {
        return this[name$1];
      }
      set name(value) {
        super.name = value;
      }
      get hive() {
        return this[hive$];
      }
      set hive(value) {
        super.hive = value;
      }
      get backend() {
        return this[backend$];
      }
      set backend(value) {
        super.backend = value;
      }
      static nullImpl(E) {
        return new (box_base_impl._NullBoxBase$(E)).new();
      }
      get keystore() {
        let t30;
        t30 = this[__BoxBaseImpl_keystore];
        return t30 == null ? dart.throw(new _internal.LateError.fieldNI("keystore")) : t30;
      }
      set keystore(keystore$35param) {
        __t$KeystoreOfE().as(keystore$35param);
        this[__BoxBaseImpl_keystore] = keystore$35param;
      }
      get valueType() {
        return dart.wrapType(E);
      }
      get isOpen() {
        return this[_open];
      }
      get path() {
        return this.backend.path;
      }
      get keys() {
        this.checkOpen();
        return this.keystore.getKeys();
      }
      get length() {
        this.checkOpen();
        return this.keystore.length;
      }
      get isEmpty() {
        return this.length === 0;
      }
      get isNotEmpty() {
        return this.length > 0;
      }
      checkOpen() {
        if (!this[_open]) {
          dart.throw(new hive.HiveError.new("Box has already been closed."));
        }
      }
      watch(opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        this.checkOpen();
        return this.keystore.watch({key: key});
      }
      keyAt(index) {
        this.checkOpen();
        return dart.nullCheck(this.keystore.getAt(index)).key;
      }
      initialize() {
        return this.backend.initialize(this.hive, this.keystore, this.lazy);
      }
      containsKey(key) {
        this.checkOpen();
        return this.keystore.containsKey(key);
      }
      put(key, value) {
        E.as(value);
        return this.putAll(new (__t$LinkedMapOfdynamic$E()).from([key, value]));
      }
      delete(key) {
        return this.deleteAll([key]);
      }
      add(value) {
        E.as(value);
        return async.async(core.int, (function* add() {
          let key = this.keystore.autoIncrement();
          yield this.put(key, value);
          return key;
        }).bind(this));
      }
      addAll(values) {
        __t$IterableOfE().as(values);
        return async.async(T$.IterableOfint(), (function* addAll() {
          let entries = new (__t$IdentityMapOfint$E()).new();
          for (let value of values) {
            entries[$_set](this.keystore.autoIncrement(), value);
          }
          yield this.putAll(entries);
          return entries[$keys];
        }).bind(this));
      }
      putAt(index, value) {
        E.as(value);
        return this.putAll(new (__t$LinkedMapOfdynamic$E()).from([dart.nullCheck(this.keystore.getAt(index)).key, value]));
      }
      deleteAt(index) {
        return this.delete(dart.nullCheck(this.keystore.getAt(index)).key);
      }
      clear() {
        return async.async(core.int, (function* clear() {
          this.checkOpen();
          yield this.backend.clear();
          return this.keystore.clear();
        }).bind(this));
      }
      compact() {
        return async.async(dart.void, (function* compact() {
          this.checkOpen();
          if (!this.backend.supportsCompaction) return;
          if (this.keystore.deletedEntries === 0) return;
          yield this.backend.compact(this.keystore.frames);
          this.keystore.resetDeletedEntries();
        }).bind(this));
      }
      performCompactionIfNeeded() {
        let t31, t30;
        if (t30 = this.keystore.length, t31 = this.keystore.deletedEntries, this[_compactionStrategy$](t30, t31)) {
          return this.compact();
        }
        return T$.FutureOfvoid().value();
      }
      close() {
        return async.async(dart.void, (function* close() {
          if (!this[_open]) return;
          this[_open] = false;
          yield this.keystore.close();
          this.hive.unregisterBox(this.name);
          yield this.backend.close();
        }).bind(this));
      }
      deleteFromDisk() {
        return async.async(dart.void, (function* deleteFromDisk() {
          if (this[_open]) {
            this[_open] = false;
            yield this.keystore.close();
            this.hive.unregisterBox(this.name);
          }
          yield this.backend.deleteFromDisk();
        }).bind(this));
      }
    }
    (BoxBaseImpl.new = function(hive, name, keyComparator, _compactionStrategy, backend) {
      this[__BoxBaseImpl_keystore] = null;
      this[_open] = true;
      this[hive$] = hive;
      this[name$1] = name;
      this[_compactionStrategy$] = _compactionStrategy;
      this[backend$] = backend;
      this.keystore = new (__t$KeystoreOfE()).new(this, new change_notifier$.ChangeNotifier.new(), keyComparator);
    }).prototype = BoxBaseImpl.prototype;
    dart.addTypeTests(BoxBaseImpl);
    BoxBaseImpl.prototype[_is_BoxBaseImpl_default] = true;
    dart.addTypeCaches(BoxBaseImpl);
    BoxBaseImpl[dart.implements] = () => [hive.BoxBase$(E)];
    dart.setMethodSignature(BoxBaseImpl, () => ({
      __proto__: dart.getMethods(BoxBaseImpl.__proto__),
      checkOpen: dart.fnType(dart.void, []),
      watch: dart.fnType(async.Stream$(hive.BoxEvent), [], {key: dart.dynamic}, {}),
      keyAt: dart.fnType(dart.dynamic, [core.int]),
      initialize: dart.fnType(async.Future$(dart.void), []),
      containsKey: dart.fnType(core.bool, [dart.dynamic]),
      put: dart.fnType(async.Future$(dart.void), [dart.dynamic, dart.nullable(core.Object)]),
      delete: dart.fnType(async.Future$(dart.void), [dart.dynamic]),
      add: dart.fnType(async.Future$(core.int), [dart.nullable(core.Object)]),
      addAll: dart.fnType(async.Future$(core.Iterable$(core.int)), [dart.nullable(core.Object)]),
      putAt: dart.fnType(async.Future$(dart.void), [core.int, dart.nullable(core.Object)]),
      deleteAt: dart.fnType(async.Future$(dart.void), [core.int]),
      clear: dart.fnType(async.Future$(core.int), []),
      compact: dart.fnType(async.Future$(dart.void), []),
      performCompactionIfNeeded: dart.fnType(async.Future$(dart.void), []),
      close: dart.fnType(async.Future$(dart.void), []),
      deleteFromDisk: dart.fnType(async.Future$(dart.void), [])
    }));
    dart.setStaticMethodSignature(BoxBaseImpl, () => ['nullImpl']);
    dart.setGetterSignature(BoxBaseImpl, () => ({
      __proto__: dart.getGetters(BoxBaseImpl.__proto__),
      keystore: keystore$.Keystore$(E),
      valueType: core.Type,
      isOpen: core.bool,
      path: dart.nullable(core.String),
      keys: core.Iterable,
      length: core.int,
      isEmpty: core.bool,
      isNotEmpty: core.bool
    }));
    dart.setSetterSignature(BoxBaseImpl, () => ({
      __proto__: dart.getSetters(BoxBaseImpl.__proto__),
      keystore: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(BoxBaseImpl, I[37]);
    dart.setFieldSignature(BoxBaseImpl, () => ({
      __proto__: dart.getFields(BoxBaseImpl.__proto__),
      name: dart.finalFieldType(core.String),
      hive: dart.finalFieldType(hive_impl.HiveImpl),
      [_compactionStrategy$]: dart.finalFieldType(dart.fnType(core.bool, [core.int, core.int])),
      backend: dart.finalFieldType(storage_backend.StorageBackend),
      [__BoxBaseImpl_keystore]: dart.fieldType(dart.nullable(keystore$.Keystore$(E))),
      [_open]: dart.fieldType(core.bool)
    }));
    return BoxBaseImpl;
  });
  box_base_impl.BoxBaseImpl = box_base_impl.BoxBaseImpl$();
  dart.addTypeTests(box_base_impl.BoxBaseImpl, _is_BoxBaseImpl_default);
  const _is__NullBoxBase_default = Symbol('_is__NullBoxBase_default');
  box_base_impl._NullBoxBase$ = dart.generic(E => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$MapOfdynamic$E = () => (__t$MapOfdynamic$E = dart.constFn(core.Map$(dart.dynamic, E)))();
    class _NullBoxBase extends core.Object {
      add(value) {
        E.as(value);
        return dart.throw(new core.UnimplementedError.new());
      }
      addAll(values) {
        __t$IterableOfE().as(values);
        return dart.throw(new core.UnimplementedError.new());
      }
      clear() {
        return dart.throw(new core.UnimplementedError.new());
      }
      close() {
        return dart.throw(new core.UnimplementedError.new());
      }
      compact() {
        return dart.throw(new core.UnimplementedError.new());
      }
      containsKey(key) {
        return dart.throw(new core.UnimplementedError.new());
      }
      delete(key) {
        return dart.throw(new core.UnimplementedError.new());
      }
      deleteAll(keys) {
        return dart.throw(new core.UnimplementedError.new());
      }
      deleteAt(index) {
        return dart.throw(new core.UnimplementedError.new());
      }
      deleteFromDisk() {
        return dart.throw(new core.UnimplementedError.new());
      }
      get isEmpty() {
        return dart.throw(new core.UnimplementedError.new());
      }
      get isNotEmpty() {
        return dart.throw(new core.UnimplementedError.new());
      }
      get isOpen() {
        return dart.throw(new core.UnimplementedError.new());
      }
      keyAt(index) {
        return dart.throw(new core.UnimplementedError.new());
      }
      get keys() {
        return dart.throw(new core.UnimplementedError.new());
      }
      get lazy() {
        return dart.throw(new core.UnimplementedError.new());
      }
      get length() {
        return dart.throw(new core.UnimplementedError.new());
      }
      get name() {
        return dart.throw(new core.UnimplementedError.new());
      }
      get path() {
        return dart.throw(new core.UnimplementedError.new());
      }
      put(key, value) {
        E.as(value);
        return dart.throw(new core.UnimplementedError.new());
      }
      putAll(entries) {
        __t$MapOfdynamic$E().as(entries);
        return dart.throw(new core.UnimplementedError.new());
      }
      putAt(index, value) {
        E.as(value);
        return dart.throw(new core.UnimplementedError.new());
      }
      watch(opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        return dart.throw(new core.UnimplementedError.new());
      }
      flush() {
        return dart.throw(new core.UnimplementedError.new());
      }
      static ['_#new#tearOff'](E) {
        return new (box_base_impl._NullBoxBase$(E)).new();
      }
    }
    (_NullBoxBase.new = function() {
      ;
    }).prototype = _NullBoxBase.prototype;
    dart.addTypeTests(_NullBoxBase);
    _NullBoxBase.prototype[_is__NullBoxBase_default] = true;
    dart.addTypeCaches(_NullBoxBase);
    _NullBoxBase[dart.implements] = () => [hive.BoxBase$(E)];
    dart.setMethodSignature(_NullBoxBase, () => ({
      __proto__: dart.getMethods(_NullBoxBase.__proto__),
      add: dart.fnType(dart.Never, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.Never, [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.Never, []),
      close: dart.fnType(dart.Never, []),
      compact: dart.fnType(dart.Never, []),
      containsKey: dart.fnType(dart.Never, [dart.dynamic]),
      delete: dart.fnType(dart.Never, [dart.dynamic]),
      deleteAll: dart.fnType(dart.Never, [core.Iterable]),
      deleteAt: dart.fnType(dart.Never, [core.int]),
      deleteFromDisk: dart.fnType(dart.Never, []),
      keyAt: dart.fnType(dart.Never, [core.int]),
      put: dart.fnType(dart.Never, [dart.dynamic, dart.nullable(core.Object)]),
      putAll: dart.fnType(dart.Never, [dart.nullable(core.Object)]),
      putAt: dart.fnType(dart.Never, [core.int, dart.nullable(core.Object)]),
      watch: dart.fnType(dart.Never, [], {key: dart.dynamic}, {}),
      flush: dart.fnType(dart.Never, [])
    }));
    dart.setGetterSignature(_NullBoxBase, () => ({
      __proto__: dart.getGetters(_NullBoxBase.__proto__),
      isEmpty: dart.Never,
      isNotEmpty: dart.Never,
      isOpen: dart.Never,
      keys: dart.Never,
      lazy: dart.Never,
      length: dart.Never,
      name: dart.Never,
      path: dart.Never
    }));
    dart.setLibraryUri(_NullBoxBase, I[37]);
    return _NullBoxBase;
  });
  box_base_impl._NullBoxBase = box_base_impl._NullBoxBase$();
  dart.addTypeTests(box_base_impl._NullBoxBase, _is__NullBoxBase_default);
  var lazy = dart.privateName(box_impl, "BoxImpl.lazy");
  var _writeFrames = dart.privateName(box_impl, "_writeFrames");
  const _is_BoxImpl_default = Symbol('_is_BoxImpl_default');
  box_impl.BoxImpl$ = dart.generic(E => {
    var __t$EN = () => (__t$EN = dart.constFn(dart.nullable(E)))();
    var __t$MapOfdynamic$E = () => (__t$MapOfdynamic$E = dart.constFn(core.Map$(dart.dynamic, E)))();
    var __t$LinkedMapOfdynamic$E = () => (__t$LinkedMapOfdynamic$E = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, E)))();
    class BoxImpl extends box_base_impl.BoxBaseImpl$(E) {
      get lazy() {
        return this[lazy];
      }
      set lazy(value) {
        super.lazy = value;
      }
      static ['_#new#tearOff'](E, hive, name, keyComparator, compactionStrategy, backend) {
        return new (box_impl.BoxImpl$(E)).new(hive, name, keyComparator, compactionStrategy, backend);
      }
      get values() {
        this.checkOpen();
        return this.keystore.getValues();
      }
      valuesBetween(opts) {
        let startKey = opts && 'startKey' in opts ? opts.startKey : null;
        let endKey = opts && 'endKey' in opts ? opts.endKey : null;
        this.checkOpen();
        return this.keystore.getValuesBetween(startKey, endKey);
      }
      get(key, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        __t$EN().as(defaultValue);
        this.checkOpen();
        let frame = this.keystore.get(key);
        if (frame != null) {
          return __t$EN().as(frame.value);
        } else {
          if (defaultValue != null && hive_object.HiveObjectMixin.is(defaultValue)) {
            hive_object['HiveObjectInternal|init'](defaultValue, key, this);
          }
          return defaultValue;
        }
      }
      getAt(index) {
        let t30;
        this.checkOpen();
        return __t$EN().as((t30 = this.keystore.getAt(index), t30 == null ? null : t30.value));
      }
      putAll(kvPairs) {
        __t$MapOfdynamic$E().as(kvPairs);
        let frames = T$.JSArrayOfFrame().of([]);
        for (let key of kvPairs[$keys]) {
          frames[$add](new frame$.Frame.new(key, kvPairs[$_get](key)));
        }
        return this[_writeFrames](frames);
      }
      deleteAll(keys) {
        let frames = T$.JSArrayOfFrame().of([]);
        for (let key of keys) {
          if (this.keystore.containsKey(key)) {
            frames[$add](new frame$.Frame.deleted(key));
          }
        }
        return this[_writeFrames](frames);
      }
      [_writeFrames](frames) {
        return async.async(dart.void, (function* _writeFrames() {
          this.checkOpen();
          if (!this.keystore.beginTransaction(frames)) return;
          try {
            yield this.backend.writeFrames(frames);
            this.keystore.commitTransaction();
          } catch (e$) {
            let e = dart.getThrown(e$);
            if (core.Object.is(e)) {
              this.keystore.cancelTransaction();
              dart.rethrow(e$);
            } else
              throw e$;
          }
          yield this.performCompactionIfNeeded();
        }).bind(this));
      }
      toMap() {
        let map = new (__t$LinkedMapOfdynamic$E()).new();
        for (let frame of this.keystore.frames) {
          map[$_set](frame.key, E.as(frame.value));
        }
        return map;
      }
      flush() {
        return async.async(dart.void, (function* flush() {
          yield this.backend.flush();
        }).bind(this));
      }
    }
    (BoxImpl.new = function(hive, name, keyComparator, compactionStrategy, backend) {
      this[lazy] = false;
      BoxImpl.__proto__.new.call(this, hive, name, keyComparator, compactionStrategy, backend);
      ;
    }).prototype = BoxImpl.prototype;
    dart.addTypeTests(BoxImpl);
    BoxImpl.prototype[_is_BoxImpl_default] = true;
    dart.addTypeCaches(BoxImpl);
    BoxImpl[dart.implements] = () => [hive.Box$(E)];
    dart.setMethodSignature(BoxImpl, () => ({
      __proto__: dart.getMethods(BoxImpl.__proto__),
      valuesBetween: dart.fnType(core.Iterable$(E), [], {endKey: dart.dynamic, startKey: dart.dynamic}, {}),
      get: dart.fnType(dart.nullable(E), [dart.dynamic], {defaultValue: dart.nullable(core.Object)}, {}),
      getAt: dart.fnType(dart.nullable(E), [core.int]),
      putAll: dart.fnType(async.Future$(dart.void), [dart.nullable(core.Object)]),
      deleteAll: dart.fnType(async.Future$(dart.void), [core.Iterable]),
      [_writeFrames]: dart.fnType(async.Future$(dart.void), [core.List$(frame$.Frame)]),
      toMap: dart.fnType(core.Map$(dart.dynamic, E), []),
      flush: dart.fnType(async.Future$(dart.void), [])
    }));
    dart.setGetterSignature(BoxImpl, () => ({
      __proto__: dart.getGetters(BoxImpl.__proto__),
      values: core.Iterable$(E)
    }));
    dart.setLibraryUri(BoxImpl, I[38]);
    dart.setFieldSignature(BoxImpl, () => ({
      __proto__: dart.getFields(BoxImpl.__proto__),
      lazy: dart.finalFieldType(core.bool)
    }));
    return BoxImpl;
  });
  box_impl.BoxImpl = box_impl.BoxImpl$();
  dart.addTypeTests(box_impl.BoxImpl, _is_BoxImpl_default);
  var lazy$ = dart.privateName(lazy_box_impl, "LazyBoxImpl.lazy");
  const _is_LazyBoxImpl_default = Symbol('_is_LazyBoxImpl_default');
  lazy_box_impl.LazyBoxImpl$ = dart.generic(E => {
    var __t$EN = () => (__t$EN = dart.constFn(dart.nullable(E)))();
    class LazyBoxImpl extends box_base_impl.BoxBaseImpl$(E) {
      get lazy() {
        return this[lazy$];
      }
      set lazy(value) {
        super.lazy = value;
      }
      static ['_#new#tearOff'](E, hive, name, keyComparator, compactionStrategy, backend) {
        return new (lazy_box_impl.LazyBoxImpl$(E)).new(hive, name, keyComparator, compactionStrategy, backend);
      }
      get(key, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        __t$EN().as(defaultValue);
        return async.async(__t$EN(), (function* get() {
          this.checkOpen();
          let frame = this.keystore.get(key);
          if (frame != null) {
            let value = (yield this.backend.readValue(frame));
            if (hive_object.HiveObjectMixin.is(value)) {
              hive_object['HiveObjectInternal|init'](value, key, this);
            }
            return __t$EN().as(value);
          } else {
            if (defaultValue != null && hive_object.HiveObjectMixin.is(defaultValue)) {
              hive_object['HiveObjectInternal|init'](defaultValue, key, this);
            }
            return defaultValue;
          }
        }).bind(this));
      }
      getAt(index) {
        return this.get(this.keystore.keyAt(index));
      }
      putAll(kvPairs) {
        core.Map.as(kvPairs);
        return async.async(dart.void, (function* putAll() {
          this.checkOpen();
          let frames = T$.JSArrayOfFrame().of([]);
          for (let key of kvPairs[$keys]) {
            frames[$add](new frame$.Frame.new(key, kvPairs[$_get](key)));
            if (core.int.is(key)) {
              this.keystore.updateAutoIncrement(key);
            }
          }
          if (frames[$isEmpty]) return;
          yield this.backend.writeFrames(frames);
          for (let frame of frames) {
            if (hive_object.HiveObjectMixin.is(frame.value)) {
              hive_object['HiveObjectInternal|init'](hive_object.HiveObjectMixin.as(frame.value), frame.key, this);
            }
            this.keystore.insert(frame, {lazy: true});
          }
          yield this.performCompactionIfNeeded();
        }).bind(this));
      }
      deleteAll(keys) {
        return async.async(dart.void, (function* deleteAll() {
          this.checkOpen();
          let frames = T$.JSArrayOfFrame().of([]);
          for (let key of keys) {
            if (this.keystore.containsKey(key)) {
              frames[$add](new frame$.Frame.deleted(key));
            }
          }
          if (frames[$isEmpty]) return;
          yield this.backend.writeFrames(frames);
          for (let frame of frames) {
            this.keystore.insert(frame);
          }
          yield this.performCompactionIfNeeded();
        }).bind(this));
      }
      flush() {
        return async.async(dart.void, (function* flush() {
          yield this.backend.flush();
        }).bind(this));
      }
    }
    (LazyBoxImpl.new = function(hive, name, keyComparator, compactionStrategy, backend) {
      this[lazy$] = true;
      LazyBoxImpl.__proto__.new.call(this, hive, name, keyComparator, compactionStrategy, backend);
      ;
    }).prototype = LazyBoxImpl.prototype;
    dart.addTypeTests(LazyBoxImpl);
    LazyBoxImpl.prototype[_is_LazyBoxImpl_default] = true;
    dart.addTypeCaches(LazyBoxImpl);
    LazyBoxImpl[dart.implements] = () => [hive.LazyBox$(E)];
    dart.setMethodSignature(LazyBoxImpl, () => ({
      __proto__: dart.getMethods(LazyBoxImpl.__proto__),
      get: dart.fnType(async.Future$(dart.nullable(E)), [dart.dynamic], {defaultValue: dart.nullable(core.Object)}, {}),
      getAt: dart.fnType(async.Future$(dart.nullable(E)), [core.int]),
      putAll: dart.fnType(async.Future$(dart.void), [dart.nullable(core.Object)]),
      deleteAll: dart.fnType(async.Future$(dart.void), [core.Iterable]),
      flush: dart.fnType(async.Future$(dart.void), [])
    }));
    dart.setLibraryUri(LazyBoxImpl, I[39]);
    dart.setFieldSignature(LazyBoxImpl, () => ({
      __proto__: dart.getFields(LazyBoxImpl.__proto__),
      lazy: dart.finalFieldType(core.bool)
    }));
    return LazyBoxImpl;
  });
  lazy_box_impl.LazyBoxImpl = lazy_box_impl.LazyBoxImpl$();
  dart.addTypeTests(lazy_box_impl.LazyBoxImpl, _is_LazyBoxImpl_default);
  var adapter$ = dart.privateName(type_registry_impl, "ResolvedAdapter.adapter");
  var typeId$3 = dart.privateName(type_registry_impl, "ResolvedAdapter.typeId");
  const _is_ResolvedAdapter_default = Symbol('_is_ResolvedAdapter_default');
  type_registry_impl.ResolvedAdapter$ = dart.generic(T => {
    class ResolvedAdapter extends core.Object {
      get adapter() {
        return this[adapter$];
      }
      set adapter(value) {
        super.adapter = value;
      }
      get typeId() {
        return this[typeId$3];
      }
      set typeId(value) {
        super.typeId = value;
      }
      static ['_#new#tearOff'](T, adapter, typeId) {
        return new (type_registry_impl.ResolvedAdapter$(T)).new(adapter, typeId);
      }
      matchesRuntimeType(value) {
        return dart.runtimeType(value)._equals(dart.wrapType(T));
      }
      matchesType(value) {
        return T.is(value);
      }
    }
    (ResolvedAdapter.new = function(adapter, typeId) {
      this[adapter$] = adapter;
      this[typeId$3] = typeId;
      ;
    }).prototype = ResolvedAdapter.prototype;
    dart.addTypeTests(ResolvedAdapter);
    ResolvedAdapter.prototype[_is_ResolvedAdapter_default] = true;
    dart.addTypeCaches(ResolvedAdapter);
    dart.setMethodSignature(ResolvedAdapter, () => ({
      __proto__: dart.getMethods(ResolvedAdapter.__proto__),
      matchesRuntimeType: dart.fnType(core.bool, [dart.dynamic]),
      matchesType: dart.fnType(core.bool, [dart.dynamic])
    }));
    dart.setLibraryUri(ResolvedAdapter, I[11]);
    dart.setFieldSignature(ResolvedAdapter, () => ({
      __proto__: dart.getFields(ResolvedAdapter.__proto__),
      adapter: dart.finalFieldType(hive.TypeAdapter),
      typeId: dart.finalFieldType(core.int)
    }));
    return ResolvedAdapter;
  });
  type_registry_impl.ResolvedAdapter = type_registry_impl.ResolvedAdapter$();
  dart.addTypeTests(type_registry_impl.ResolvedAdapter, _is_ResolvedAdapter_default);
  type_registry_impl._NullTypeRegistry = class _NullTypeRegistry extends core.Object {
    static ['_#new#tearOff']() {
      return new type_registry_impl._NullTypeRegistry.new();
    }
    get [_typeAdapters]() {
      return dart.throw(new core.UnimplementedError.new());
    }
    findAdapterForTypeId(typeId) {
      return dart.throw(new core.UnimplementedError.new());
    }
    findAdapterForValue(value) {
      return dart.throw(new core.UnimplementedError.new());
    }
    ignoreTypeId(T, typeId) {
      return dart.throw(new core.UnimplementedError.new());
    }
    isAdapterRegistered(typeId, opts) {
      let internal = opts && 'internal' in opts ? opts.internal : false;
      return dart.throw(new core.UnimplementedError.new());
    }
    registerAdapter(T, adapter, opts) {
      let internal = opts && 'internal' in opts ? opts.internal : false;
      let override = opts && 'override' in opts ? opts.override : false;
      return dart.throw(new core.UnimplementedError.new());
    }
    resetAdapters() {
      return dart.throw(new core.UnimplementedError.new());
    }
  };
  (type_registry_impl._NullTypeRegistry.new = function() {
    ;
  }).prototype = type_registry_impl._NullTypeRegistry.prototype;
  dart.addTypeTests(type_registry_impl._NullTypeRegistry);
  dart.addTypeCaches(type_registry_impl._NullTypeRegistry);
  type_registry_impl._NullTypeRegistry[dart.implements] = () => [type_registry_impl.TypeRegistryImpl];
  dart.setMethodSignature(type_registry_impl._NullTypeRegistry, () => ({
    __proto__: dart.getMethods(type_registry_impl._NullTypeRegistry.__proto__),
    findAdapterForTypeId: dart.fnType(dart.Never, [core.int]),
    findAdapterForValue: dart.fnType(dart.Never, [dart.dynamic]),
    ignoreTypeId: dart.gFnType(T => [dart.Never, [core.int]], T => [dart.nullable(core.Object)]),
    isAdapterRegistered: dart.fnType(dart.Never, [core.int], {internal: core.bool}, {}),
    registerAdapter: dart.gFnType(T => [dart.Never, [hive.TypeAdapter$(T)], {internal: core.bool, override: core.bool}, {}], T => [dart.nullable(core.Object)]),
    resetAdapters: dart.fnType(dart.Never, [])
  }));
  dart.setGetterSignature(type_registry_impl._NullTypeRegistry, () => ({
    __proto__: dart.getGetters(type_registry_impl._NullTypeRegistry.__proto__),
    [_typeAdapters]: dart.Never
  }));
  dart.setLibraryUri(type_registry_impl._NullTypeRegistry, I[11]);
  storage_backend.BackendManagerInterface = class BackendManagerInterface extends core.Object {};
  (storage_backend.BackendManagerInterface.new = function() {
    ;
  }).prototype = storage_backend.BackendManagerInterface.prototype;
  dart.addTypeTests(storage_backend.BackendManagerInterface);
  dart.addTypeCaches(storage_backend.BackendManagerInterface);
  dart.setLibraryUri(storage_backend.BackendManagerInterface, I[35]);
  box_collection_stub.BoxCollection = class BoxCollection extends core.Object {
    static open(name, boxNames, opts) {
      let path = opts && 'path' in opts ? opts.path : null;
      let key = opts && 'key' in opts ? opts.key : null;
      dart.throw(new core.UnimplementedError.new());
    }
  };
  (box_collection_stub.BoxCollection.new = function() {
    ;
  }).prototype = box_collection_stub.BoxCollection.prototype;
  dart.addTypeTests(box_collection_stub.BoxCollection);
  dart.addTypeCaches(box_collection_stub.BoxCollection);
  dart.setStaticMethodSignature(box_collection_stub.BoxCollection, () => ['open']);
  dart.setLibraryUri(box_collection_stub.BoxCollection, I[40]);
  const _is_CollectionBox_default$ = Symbol('_is_CollectionBox_default');
  box_collection_stub.CollectionBox$ = dart.generic(V => {
    class CollectionBox extends core.Object {}
    (CollectionBox.new = function() {
      ;
    }).prototype = CollectionBox.prototype;
    dart.addTypeTests(CollectionBox);
    CollectionBox.prototype[_is_CollectionBox_default$] = true;
    dart.addTypeCaches(CollectionBox);
    dart.setLibraryUri(CollectionBox, I[40]);
    return CollectionBox;
  });
  box_collection_stub.CollectionBox = box_collection_stub.CollectionBox$();
  dart.addTypeTests(box_collection_stub.CollectionBox, _is_CollectionBox_default$);
  var _value = dart.privateName(digest_sink, "_value");
  digest_sink.DigestSink = class DigestSink extends core.Sink$(digest.Digest) {
    get value() {
      return dart.nullCheck(this[_value]);
    }
    add(value) {
      digest.Digest.as(value);
      if (this[_value] != null) dart.throw(new core.StateError.new("add may only be called once."));
      this[_value] = value;
    }
    close() {
      if (this[_value] == null) dart.throw(new core.StateError.new("add must be called once."));
    }
    static ['_#new#tearOff']() {
      return new digest_sink.DigestSink.new();
    }
  };
  (digest_sink.DigestSink.new = function() {
    this[_value] = null;
    ;
  }).prototype = digest_sink.DigestSink.prototype;
  dart.addTypeTests(digest_sink.DigestSink);
  dart.addTypeCaches(digest_sink.DigestSink);
  dart.setMethodSignature(digest_sink.DigestSink, () => ({
    __proto__: dart.getMethods(digest_sink.DigestSink.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(digest_sink.DigestSink, () => ({
    __proto__: dart.getGetters(digest_sink.DigestSink.__proto__),
    value: digest.Digest
  }));
  dart.setLibraryUri(digest_sink.DigestSink, I[41]);
  dart.setFieldSignature(digest_sink.DigestSink, () => ({
    __proto__: dart.getFields(digest_sink.DigestSink.__proto__),
    [_value]: dart.fieldType(dart.nullable(digest.Digest))
  }));
  utils.add32 = function add32(x, y) {
    return (x + y & 4294967295) >>> 0;
  };
  utils.rotl32 = function rotl32(val, shift) {
    let modShift = shift & 31;
    return (val[$leftShift](modShift) & 4294967295 | ((val & 4294967295) >>> 0)[$rightShift](32 - modShift)) >>> 0;
  };
  dart.defineLazy(utils, {
    /*utils.mask32*/get mask32() {
      return 4294967295;
    },
    /*utils.bitsPerByte*/get bitsPerByte() {
      return 8;
    },
    /*utils.bytesPerWord*/get bytesPerWord() {
      return 4;
    }
  }, false);
  var _extended$0 = dart.privateName(sha512_slowsinks, "_extended");
  var _nums = dart.privateName(sha512_slowsinks, "_nums");
  var _digest$0 = dart.privateName(sha512_slowsinks, "_digest");
  var _shr = dart.privateName(sha512_slowsinks, "_shr");
  var _shl = dart.privateName(sha512_slowsinks, "_shl");
  var _or = dart.privateName(sha512_slowsinks, "_or");
  var _xor = dart.privateName(sha512_slowsinks, "_xor");
  var _add = dart.privateName(sha512_slowsinks, "_add");
  var _addTo2 = dart.privateName(sha512_slowsinks, "_addTo2");
  var _rotr = dart.privateName(sha512_slowsinks, "_rotr");
  var _bsig0$ = dart.privateName(sha512_slowsinks, "_bsig0");
  var _bsig1$ = dart.privateName(sha512_slowsinks, "_bsig1");
  var _ssig0$ = dart.privateName(sha512_slowsinks, "_ssig0");
  var _ssig1$ = dart.privateName(sha512_slowsinks, "_ssig1");
  var _ch$ = dart.privateName(sha512_slowsinks, "_ch");
  var _maj$ = dart.privateName(sha512_slowsinks, "_maj");
  sha512_slowsinks._Sha64BitSink = class _Sha64BitSink extends hash_sink.HashSink {
    get digest() {
      return typed_data.Uint32List.view(this[_digest$0][$buffer], 0, this.digestBytes);
    }
    [_shr](bits, word, offset, ret, offsetR) {
      ret[$_set](0 + offsetR, bits < 32 && bits >= 0 ? word[$_get](0 + offset)[$rightShift](bits) : 0);
      ret[$_set](1 + offsetR, bits > 32 ? word[$_get](0 + offset)[$rightShift](bits - 32) : bits === 32 ? word[$_get](0 + offset) : bits >= 0 ? (word[$_get](0 + offset)[$leftShift](32 - bits) | word[$_get](1 + offset)[$rightShift](bits)) >>> 0 : 0);
    }
    [_shl](bits, word, offset, ret, offsetR) {
      ret[$_set](0 + offsetR, bits > 32 ? word[$_get](1 + offset)[$leftShift](bits - 32) : bits === 32 ? word[$_get](1 + offset) : bits >= 0 ? (word[$_get](0 + offset)[$leftShift](bits) | word[$_get](1 + offset)[$rightShift](32 - bits)) >>> 0 : 0);
      ret[$_set](1 + offsetR, bits < 32 && bits >= 0 ? word[$_get](1 + offset)[$leftShift](bits) : 0);
    }
    [_or](word1, offset1, word2, offset2, ret, offsetR) {
      ret[$_set](0 + offsetR, (word1[$_get](0 + offset1) | word2[$_get](0 + offset2)) >>> 0);
      ret[$_set](1 + offsetR, (word1[$_get](1 + offset1) | word2[$_get](1 + offset2)) >>> 0);
    }
    [_xor](word1, offset1, word2, offset2, ret, offsetR) {
      ret[$_set](0 + offsetR, (word1[$_get](0 + offset1) ^ word2[$_get](0 + offset2)) >>> 0);
      ret[$_set](1 + offsetR, (word1[$_get](1 + offset1) ^ word2[$_get](1 + offset2)) >>> 0);
    }
    [_add](word1, offset1, word2, offset2, ret, offsetR) {
      ret[$_set](1 + offsetR, word1[$_get](1 + offset1) + word2[$_get](1 + offset2));
      ret[$_set](0 + offsetR, word1[$_get](0 + offset1) + word2[$_get](0 + offset2) + (ret[$_get](1 + offsetR) < word1[$_get](1 + offset1) ? 1 : 0));
    }
    [_addTo2](word1, offset1, word2, offset2) {
      let t32, t31, t32$, t31$;
      let _addTemp = null;
      _addTemp = word1[$_get](1 + offset1);
      t31 = word1;
      t32 = 1 + offset1;
      t31[$_set](t32, t31[$_get](t32) + word2[$_get](1 + offset2));
      t31$ = word1;
      t32$ = 0 + offset1;
      t31$[$_set](t32$, t31$[$_get](t32$) + (word2[$_get](0 + offset2) + (word1[$_get](1 + offset1) < _addTemp ? 1 : 0)));
    }
    [_rotr](bits, word, offset, ret, offsetR) {
      this[_shr](bits, word, offset, this[_nums], 0);
      this[_shl](64 - bits, word, offset, this[_nums], 2);
      this[_or](this[_nums], 0, this[_nums], 2, ret, offsetR);
    }
    [_bsig0$](word, offset, ret, offsetR) {
      this[_rotr](28, word, offset, this[_nums], 4);
      this[_rotr](34, word, offset, this[_nums], 6);
      this[_rotr](39, word, offset, this[_nums], 8);
      this[_xor](this[_nums], 6, this[_nums], 8, this[_nums], 10);
      this[_xor](this[_nums], 4, this[_nums], 10, ret, offsetR);
    }
    [_bsig1$](word, offset, ret, offsetR) {
      this[_rotr](14, word, offset, this[_nums], 4);
      this[_rotr](18, word, offset, this[_nums], 6);
      this[_rotr](41, word, offset, this[_nums], 8);
      this[_xor](this[_nums], 6, this[_nums], 8, this[_nums], 10);
      this[_xor](this[_nums], 4, this[_nums], 10, ret, offsetR);
    }
    [_ssig0$](word, offset, ret, offsetR) {
      this[_rotr](1, word, offset, this[_nums], 4);
      this[_rotr](8, word, offset, this[_nums], 6);
      this[_shr](7, word, offset, this[_nums], 8);
      this[_xor](this[_nums], 6, this[_nums], 8, this[_nums], 10);
      this[_xor](this[_nums], 4, this[_nums], 10, ret, offsetR);
    }
    [_ssig1$](word, offset, ret, offsetR) {
      this[_rotr](19, word, offset, this[_nums], 4);
      this[_rotr](61, word, offset, this[_nums], 6);
      this[_shr](6, word, offset, this[_nums], 8);
      this[_xor](this[_nums], 6, this[_nums], 8, this[_nums], 10);
      this[_xor](this[_nums], 4, this[_nums], 10, ret, offsetR);
    }
    [_ch$](x, offsetX, y, offsetY, z, offsetZ, ret, offsetR) {
      ret[$_set](0 + offsetR, (x[$_get](0 + offsetX) & (y[$_get](0 + offsetY) ^ z[$_get](0 + offsetZ)) >>> 0 ^ z[$_get](0 + offsetZ)) >>> 0);
      ret[$_set](1 + offsetR, (x[$_get](1 + offsetX) & (y[$_get](1 + offsetY) ^ z[$_get](1 + offsetZ)) >>> 0 ^ z[$_get](1 + offsetZ)) >>> 0);
    }
    [_maj$](x, offsetX, y, offsetY, z, offsetZ, ret, offsetR) {
      ret[$_set](0 + offsetR, (x[$_get](0 + offsetX) & (y[$_get](0 + offsetY) | z[$_get](0 + offsetZ)) >>> 0 | (y[$_get](0 + offsetY) & z[$_get](0 + offsetZ)) >>> 0) >>> 0);
      ret[$_set](1 + offsetR, (x[$_get](1 + offsetX) & (y[$_get](1 + offsetY) | z[$_get](1 + offsetZ)) >>> 0 | (y[$_get](1 + offsetY) & z[$_get](1 + offsetZ)) >>> 0) >>> 0);
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 32)) dart.assertFailed(null, I[42], 214, 12, "chunk.length == 32");
      for (let i = 0; i < 32; i = i + 1) {
        this[_extended$0][$_set](i, chunk[$_get](i));
      }
      for (let i = 32; i < 160; i = i + 2) {
        this[_ssig1$](this[_extended$0], i - 2 * 2, this[_nums], 28);
        this[_add](this[_nums], 28, this[_extended$0], i - 7 * 2, this[_nums], 30);
        this[_ssig0$](this[_extended$0], i - 15 * 2, this[_nums], 28);
        this[_add](this[_nums], 28, this[_extended$0], i - 16 * 2, this[_nums], 32);
        this[_add](this[_nums], 30, this[_nums], 32, this[_extended$0], i);
      }
      this[_nums][$setRange](12, 26 + 2, this[_digest$0]);
      for (let i = 0; i < 160; i = i + 2) {
        this[_bsig1$](this[_nums], 20, this[_nums], 28);
        this[_add](this[_nums], 26, this[_nums], 28, this[_nums], 30);
        this[_ch$](this[_nums], 20, this[_nums], 22, this[_nums], 24, this[_nums], 32);
        this[_add](this[_nums], 30, this[_nums], 32, this[_nums], 34);
        this[_add](sha512_slowsinks._noise32, i, this[_extended$0], i, this[_nums], 36);
        this[_add](this[_nums], 34, this[_nums], 36, this[_nums], 28);
        this[_bsig0$](this[_nums], 12, this[_nums], 32);
        this[_maj$](this[_nums], 12, this[_nums], 14, this[_nums], 16, this[_nums], 34);
        this[_add](this[_nums], 32, this[_nums], 34, this[_nums], 30);
        this[_nums][$_set](26, this[_nums][$_get](24));
        this[_nums][$_set](26 + 1, this[_nums][$_get](24 + 1));
        this[_nums][$_set](24, this[_nums][$_get](22));
        this[_nums][$_set](24 + 1, this[_nums][$_get](22 + 1));
        this[_nums][$_set](22, this[_nums][$_get](20));
        this[_nums][$_set](22 + 1, this[_nums][$_get](20 + 1));
        this[_add](this[_nums], 18, this[_nums], 28, this[_nums], 20);
        this[_nums][$_set](18, this[_nums][$_get](16));
        this[_nums][$_set](18 + 1, this[_nums][$_get](16 + 1));
        this[_nums][$_set](16, this[_nums][$_get](14));
        this[_nums][$_set](16 + 1, this[_nums][$_get](14 + 1));
        this[_nums][$_set](14, this[_nums][$_get](12));
        this[_nums][$_set](14 + 1, this[_nums][$_get](12 + 1));
        this[_add](this[_nums], 28, this[_nums], 30, this[_nums], 12);
      }
      this[_addTo2](this[_digest$0], 0, this[_nums], 12);
      this[_addTo2](this[_digest$0], 2, this[_nums], 14);
      this[_addTo2](this[_digest$0], 4, this[_nums], 16);
      this[_addTo2](this[_digest$0], 6, this[_nums], 18);
      this[_addTo2](this[_digest$0], 8, this[_nums], 20);
      this[_addTo2](this[_digest$0], 10, this[_nums], 22);
      this[_addTo2](this[_digest$0], 12, this[_nums], 24);
      this[_addTo2](this[_digest$0], 14, this[_nums], 26);
    }
  };
  (sha512_slowsinks._Sha64BitSink.new = function(sink, _digest) {
    this[_extended$0] = _native_typed_data.NativeUint32List.new(160);
    this[_nums] = _native_typed_data.NativeUint32List.new(12 + 16 + 10);
    this[_digest$0] = _digest;
    sha512_slowsinks._Sha64BitSink.__proto__.new.call(this, sink, 32, {signatureBytes: 16});
    ;
  }).prototype = sha512_slowsinks._Sha64BitSink.prototype;
  dart.addTypeTests(sha512_slowsinks._Sha64BitSink);
  dart.addTypeCaches(sha512_slowsinks._Sha64BitSink);
  dart.setMethodSignature(sha512_slowsinks._Sha64BitSink, () => ({
    __proto__: dart.getMethods(sha512_slowsinks._Sha64BitSink.__proto__),
    [_shr]: dart.fnType(dart.void, [core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_shl]: dart.fnType(dart.void, [core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_or]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_xor]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_add]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_addTo2]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_rotr]: dart.fnType(dart.void, [core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_bsig0$]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_bsig1$]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_ssig0$]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_ssig1$]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_ch$]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_maj$]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setGetterSignature(sha512_slowsinks._Sha64BitSink, () => ({
    __proto__: dart.getGetters(sha512_slowsinks._Sha64BitSink.__proto__),
    digest: typed_data.Uint32List
  }));
  dart.setLibraryUri(sha512_slowsinks._Sha64BitSink, I[43]);
  dart.setFieldSignature(sha512_slowsinks._Sha64BitSink, () => ({
    __proto__: dart.getFields(sha512_slowsinks._Sha64BitSink.__proto__),
    [_digest$0]: dart.finalFieldType(typed_data.Uint32List),
    [_extended$0]: dart.finalFieldType(typed_data.Uint32List),
    [_nums]: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.setStaticFieldSignature(sha512_slowsinks._Sha64BitSink, () => ['_rotrIndex1', '_rotrIndex2', '_sigIndex1', '_sigIndex2', '_sigIndex3', '_sigIndex4', '_aIndex', '_bIndex', '_cIndex', '_dIndex', '_eIndex', '_fIndex', '_gIndex', '_hIndex', '_tmp1', '_tmp2', '_tmp3', '_tmp4', '_tmp5']);
  dart.defineLazy(sha512_slowsinks._Sha64BitSink, {
    /*sha512_slowsinks._Sha64BitSink._rotrIndex1*/get _rotrIndex1() {
      return 0;
    },
    /*sha512_slowsinks._Sha64BitSink._rotrIndex2*/get _rotrIndex2() {
      return 2;
    },
    /*sha512_slowsinks._Sha64BitSink._sigIndex1*/get _sigIndex1() {
      return 4;
    },
    /*sha512_slowsinks._Sha64BitSink._sigIndex2*/get _sigIndex2() {
      return 6;
    },
    /*sha512_slowsinks._Sha64BitSink._sigIndex3*/get _sigIndex3() {
      return 8;
    },
    /*sha512_slowsinks._Sha64BitSink._sigIndex4*/get _sigIndex4() {
      return 10;
    },
    /*sha512_slowsinks._Sha64BitSink._aIndex*/get _aIndex() {
      return 12;
    },
    /*sha512_slowsinks._Sha64BitSink._bIndex*/get _bIndex() {
      return 14;
    },
    /*sha512_slowsinks._Sha64BitSink._cIndex*/get _cIndex() {
      return 16;
    },
    /*sha512_slowsinks._Sha64BitSink._dIndex*/get _dIndex() {
      return 18;
    },
    /*sha512_slowsinks._Sha64BitSink._eIndex*/get _eIndex() {
      return 20;
    },
    /*sha512_slowsinks._Sha64BitSink._fIndex*/get _fIndex() {
      return 22;
    },
    /*sha512_slowsinks._Sha64BitSink._gIndex*/get _gIndex() {
      return 24;
    },
    /*sha512_slowsinks._Sha64BitSink._hIndex*/get _hIndex() {
      return 26;
    },
    /*sha512_slowsinks._Sha64BitSink._tmp1*/get _tmp1() {
      return 28;
    },
    /*sha512_slowsinks._Sha64BitSink._tmp2*/get _tmp2() {
      return 30;
    },
    /*sha512_slowsinks._Sha64BitSink._tmp3*/get _tmp3() {
      return 32;
    },
    /*sha512_slowsinks._Sha64BitSink._tmp4*/get _tmp4() {
      return 34;
    },
    /*sha512_slowsinks._Sha64BitSink._tmp5*/get _tmp5() {
      return 36;
    }
  }, false);
  var digestBytes = dart.privateName(sha512_slowsinks, "Sha384Sink.digestBytes");
  sha512_slowsinks.Sha384Sink = class Sha384Sink extends sha512_slowsinks._Sha64BitSink {
    get digestBytes() {
      return this[digestBytes];
    }
    set digestBytes(value) {
      super.digestBytes = value;
    }
    static ['_#new#tearOff'](sink) {
      return new sha512_slowsinks.Sha384Sink.new(sink);
    }
  };
  (sha512_slowsinks.Sha384Sink.new = function(sink) {
    this[digestBytes] = 12;
    sha512_slowsinks.Sha384Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(T$.JSArrayOfint().of([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428])));
    ;
  }).prototype = sha512_slowsinks.Sha384Sink.prototype;
  dart.addTypeTests(sha512_slowsinks.Sha384Sink);
  dart.addTypeCaches(sha512_slowsinks.Sha384Sink);
  dart.setLibraryUri(sha512_slowsinks.Sha384Sink, I[43]);
  dart.setFieldSignature(sha512_slowsinks.Sha384Sink, () => ({
    __proto__: dart.getFields(sha512_slowsinks.Sha384Sink.__proto__),
    digestBytes: dart.finalFieldType(core.int)
  }));
  var digestBytes$ = dart.privateName(sha512_slowsinks, "Sha512Sink.digestBytes");
  sha512_slowsinks.Sha512Sink = class Sha512Sink extends sha512_slowsinks._Sha64BitSink {
    get digestBytes() {
      return this[digestBytes$];
    }
    set digestBytes(value) {
      super.digestBytes = value;
    }
    static ['_#new#tearOff'](sink) {
      return new sha512_slowsinks.Sha512Sink.new(sink);
    }
  };
  (sha512_slowsinks.Sha512Sink.new = function(sink) {
    this[digestBytes$] = 16;
    sha512_slowsinks.Sha512Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(T$.JSArrayOfint().of([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209])));
    ;
  }).prototype = sha512_slowsinks.Sha512Sink.prototype;
  dart.addTypeTests(sha512_slowsinks.Sha512Sink);
  dart.addTypeCaches(sha512_slowsinks.Sha512Sink);
  dart.setLibraryUri(sha512_slowsinks.Sha512Sink, I[43]);
  dart.setFieldSignature(sha512_slowsinks.Sha512Sink, () => ({
    __proto__: dart.getFields(sha512_slowsinks.Sha512Sink.__proto__),
    digestBytes: dart.finalFieldType(core.int)
  }));
  var digestBytes$0 = dart.privateName(sha512_slowsinks, "Sha512224Sink.digestBytes");
  sha512_slowsinks.Sha512224Sink = class Sha512224Sink extends sha512_slowsinks._Sha64BitSink {
    get digestBytes() {
      return this[digestBytes$0];
    }
    set digestBytes(value) {
      super.digestBytes = value;
    }
    static ['_#new#tearOff'](sink) {
      return new sha512_slowsinks.Sha512224Sink.new(sink);
    }
  };
  (sha512_slowsinks.Sha512224Sink.new = function(sink) {
    this[digestBytes$0] = 7;
    sha512_slowsinks.Sha512224Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(T$.JSArrayOfint().of([2352822216, 424955298, 1944164710, 2312950998, 502970286, 855612546, 1738396948, 1479516111, 258812777, 2077511080, 2011393907, 79989058, 1067287976, 1780299464, 286451373, 2446758561])));
    ;
  }).prototype = sha512_slowsinks.Sha512224Sink.prototype;
  dart.addTypeTests(sha512_slowsinks.Sha512224Sink);
  dart.addTypeCaches(sha512_slowsinks.Sha512224Sink);
  dart.setLibraryUri(sha512_slowsinks.Sha512224Sink, I[43]);
  dart.setFieldSignature(sha512_slowsinks.Sha512224Sink, () => ({
    __proto__: dart.getFields(sha512_slowsinks.Sha512224Sink.__proto__),
    digestBytes: dart.finalFieldType(core.int)
  }));
  var digestBytes$1 = dart.privateName(sha512_slowsinks, "Sha512256Sink.digestBytes");
  sha512_slowsinks.Sha512256Sink = class Sha512256Sink extends sha512_slowsinks._Sha64BitSink {
    get digestBytes() {
      return this[digestBytes$1];
    }
    set digestBytes(value) {
      super.digestBytes = value;
    }
    static ['_#new#tearOff'](sink) {
      return new sha512_slowsinks.Sha512256Sink.new(sink);
    }
  };
  (sha512_slowsinks.Sha512256Sink.new = function(sink) {
    this[digestBytes$1] = 8;
    sha512_slowsinks.Sha512256Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(T$.JSArrayOfint().of([573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857, 2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490, 721525244, 746961066, 246885852, 2177182882])));
    ;
  }).prototype = sha512_slowsinks.Sha512256Sink.prototype;
  dart.addTypeTests(sha512_slowsinks.Sha512256Sink);
  dart.addTypeCaches(sha512_slowsinks.Sha512256Sink);
  dart.setLibraryUri(sha512_slowsinks.Sha512256Sink, I[43]);
  dart.setFieldSignature(sha512_slowsinks.Sha512256Sink, () => ({
    __proto__: dart.getFields(sha512_slowsinks.Sha512256Sink.__proto__),
    digestBytes: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(sha512_slowsinks, {
    /*sha512_slowsinks._noise32*/get _noise32() {
      return _native_typed_data.NativeUint32List.fromList(T$.JSArrayOfint().of([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]));
    }
  }, false);
  dart.defineLazy(aes_tables, {
    /*aes_tables.sBox*/get sBox() {
      return C[24] || CT.C24;
    },
    /*aes_tables.sBoxInv*/get sBoxInv() {
      return C[25] || CT.C25;
    },
    /*aes_tables.rcon*/get rcon() {
      return C[26] || CT.C26;
    },
    /*aes_tables.table0*/get table0() {
      return C[27] || CT.C27;
    },
    /*aes_tables.table1*/get table1() {
      return C[28] || CT.C28;
    },
    /*aes_tables.table2*/get table2() {
      return C[29] || CT.C29;
    },
    /*aes_tables.table3*/get table3() {
      return C[30] || CT.C30;
    },
    /*aes_tables.table0Inv*/get table0Inv() {
      return C[31] || CT.C31;
    },
    /*aes_tables.table1Inv*/get table1Inv() {
      return C[32] || CT.C32;
    },
    /*aes_tables.table2Inv*/get table2Inv() {
      return C[33] || CT.C33;
    },
    /*aes_tables.table3Inv*/get table3Inv() {
      return C[34] || CT.C34;
    }
  }, false);
  var key$0 = dart.privateName(frame$, "Frame.key");
  var value$0 = dart.privateName(frame$, "Frame.value");
  var deleted = dart.privateName(frame$, "Frame.deleted");
  var lazy$0 = dart.privateName(frame$, "Frame.lazy");
  var length$ = dart.privateName(frame$, "Frame.length");
  var offset$ = dart.privateName(frame$, "Frame.offset");
  frame$.Frame = class Frame extends core.Object {
    get key() {
      return this[key$0];
    }
    set key(value) {
      super.key = value;
    }
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    get deleted() {
      return this[deleted];
    }
    set deleted(value) {
      super.deleted = value;
    }
    get lazy() {
      return this[lazy$0];
    }
    set lazy(value) {
      super.lazy = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      this[length$] = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      this[offset$] = value;
    }
    static ['_#new#tearOff'](key, value, opts) {
      let length = opts && 'length' in opts ? opts.length : null;
      let offset = opts && 'offset' in opts ? opts.offset : -1;
      return new frame$.Frame.new(key, value, {length: length, offset: offset});
    }
    static ['_#deleted#tearOff'](key, opts) {
      let length = opts && 'length' in opts ? opts.length : null;
      return new frame$.Frame.deleted(key, {length: length});
    }
    static ['_#lazy#tearOff'](key, opts) {
      let length = opts && 'length' in opts ? opts.length : null;
      let offset = opts && 'offset' in opts ? opts.offset : -1;
      return new frame$.Frame.lazy(key, {length: length, offset: offset});
    }
    static assertKey(key) {
      if (core.int.is(key)) {
        if (dart.notNull(key) < 0 || dart.notNull(key) > 4294967295) {
          dart.throw(new hive.HiveError.new("Integer keys need to be in the range 0 - 0xFFFFFFFF"));
        }
      } else if (typeof key == 'string') {
        if (key.length > 255) {
          dart.throw(new hive.HiveError.new("String keys need to be a max length of 255"));
        }
      } else {
        dart.throw(new hive.HiveError.new("Keys need to be Strings or integers"));
      }
      return true;
    }
    toLazy() {
      if (this.deleted) return this;
      return new frame$.Frame.lazy(this.key, {length: this.length, offset: this.offset});
    }
    _equals(other) {
      if (other == null) return false;
      if (frame$.Frame.is(other)) {
        return dart.equals(this.key, other.key) && dart.equals(this.value, other.value) && this.length == other.length && this.deleted === other.deleted;
      } else {
        return false;
      }
    }
    toString() {
      if (this.deleted) {
        return "Frame.deleted(key: " + dart.str(this.key) + ", length: " + dart.str(this.length) + ")";
      } else if (this.lazy) {
        return "Frame.lazy(key: " + dart.str(this.key) + ", length: " + dart.str(this.length) + ", offset: " + dart.str(this.offset) + ")";
      } else {
        return "Frame(key: " + dart.str(this.key) + ", value: " + dart.str(this.value) + ", " + "length: " + dart.str(this.length) + ", offset: " + dart.str(this.offset) + ")";
      }
    }
    get hashCode() {
      return (this[$runtimeType].hashCode ^ dart.hashCode(this.key) ^ dart.hashCode(this.value) ^ dart.hashCode(this.length) ^ this.deleted[$hashCode]) >>> 0;
    }
  };
  (frame$.Frame.new = function(key, value, opts) {
    let length = opts && 'length' in opts ? opts.length : null;
    let offset = opts && 'offset' in opts ? opts.offset : -1;
    this[offset$] = -1;
    this[key$0] = key;
    this[value$0] = value;
    this[length$] = length;
    this[offset$] = offset;
    this[lazy$0] = false;
    this[deleted] = false;
    if (!frame$.Frame.assertKey(this.key)) dart.assertFailed(null, I[44], 27, 12, "assertKey(key)");
  }).prototype = frame$.Frame.prototype;
  (frame$.Frame.deleted = function(key, opts) {
    let length = opts && 'length' in opts ? opts.length : null;
    this[offset$] = -1;
    this[key$0] = key;
    this[length$] = length;
    this[value$0] = null;
    this[lazy$0] = false;
    this[deleted] = true;
    this[offset$] = -1;
    if (!frame$.Frame.assertKey(this.key)) dart.assertFailed(null, I[44], 36, 12, "assertKey(key)");
  }).prototype = frame$.Frame.prototype;
  (frame$.Frame.lazy = function(key, opts) {
    let length = opts && 'length' in opts ? opts.length : null;
    let offset = opts && 'offset' in opts ? opts.offset : -1;
    this[offset$] = -1;
    this[key$0] = key;
    this[length$] = length;
    this[offset$] = offset;
    this[value$0] = null;
    this[lazy$0] = true;
    this[deleted] = false;
    if (!frame$.Frame.assertKey(this.key)) dart.assertFailed(null, I[44], 44, 12, "assertKey(key)");
  }).prototype = frame$.Frame.prototype;
  dart.addTypeTests(frame$.Frame);
  dart.addTypeCaches(frame$.Frame);
  dart.setMethodSignature(frame$.Frame, () => ({
    __proto__: dart.getMethods(frame$.Frame.__proto__),
    toLazy: dart.fnType(frame$.Frame, []),
    _equals: dart.fnType(core.bool, [dart.dynamic]),
    [$_equals]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setStaticMethodSignature(frame$.Frame, () => ['assertKey']);
  dart.setLibraryUri(frame$.Frame, I[45]);
  dart.setFieldSignature(frame$.Frame, () => ({
    __proto__: dart.getFields(frame$.Frame.__proto__),
    key: dart.finalFieldType(dart.dynamic),
    value: dart.finalFieldType(dart.dynamic),
    deleted: dart.finalFieldType(core.bool),
    lazy: dart.finalFieldType(core.bool),
    length: dart.fieldType(dart.nullable(core.int)),
    offset: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(frame$.Frame, ['_equals', 'toString']);
  dart.defineExtensionAccessors(frame$.Frame, ['hashCode']);
  frame$.FrameKeyType = class FrameKeyType extends core.Object {
    static ['_#new#tearOff']() {
      return new frame$.FrameKeyType.new();
    }
  };
  (frame$.FrameKeyType.new = function() {
    ;
  }).prototype = frame$.FrameKeyType.prototype;
  dart.addTypeTests(frame$.FrameKeyType);
  dart.addTypeCaches(frame$.FrameKeyType);
  dart.setLibraryUri(frame$.FrameKeyType, I[45]);
  dart.setStaticFieldSignature(frame$.FrameKeyType, () => ['uintT', 'utf8StringT']);
  dart.defineLazy(frame$.FrameKeyType, {
    /*frame$.FrameKeyType.uintT*/get uintT() {
      return 0;
    },
    /*frame$.FrameKeyType.utf8StringT*/get utf8StringT() {
      return 1;
    }
  }, false);
  frame$.FrameValueType = class FrameValueType extends core.Object {
    static ['_#new#tearOff']() {
      return new frame$.FrameValueType.new();
    }
  };
  (frame$.FrameValueType.new = function() {
    ;
  }).prototype = frame$.FrameValueType.prototype;
  dart.addTypeTests(frame$.FrameValueType);
  dart.addTypeCaches(frame$.FrameValueType);
  dart.setLibraryUri(frame$.FrameValueType, I[45]);
  dart.setStaticFieldSignature(frame$.FrameValueType, () => ['nullT', 'intT', 'doubleT', 'boolT', 'stringT', 'byteListT', 'intListT', 'doubleListT', 'boolListT', 'stringListT', 'listT', 'mapT', 'hiveListT']);
  dart.defineLazy(frame$.FrameValueType, {
    /*frame$.FrameValueType.nullT*/get nullT() {
      return 0;
    },
    /*frame$.FrameValueType.intT*/get intT() {
      return 1;
    },
    /*frame$.FrameValueType.doubleT*/get doubleT() {
      return 2;
    },
    /*frame$.FrameValueType.boolT*/get boolT() {
      return 3;
    },
    /*frame$.FrameValueType.stringT*/get stringT() {
      return 4;
    },
    /*frame$.FrameValueType.byteListT*/get byteListT() {
      return 5;
    },
    /*frame$.FrameValueType.intListT*/get intListT() {
      return 6;
    },
    /*frame$.FrameValueType.doubleListT*/get doubleListT() {
      return 7;
    },
    /*frame$.FrameValueType.boolListT*/get boolListT() {
      return 8;
    },
    /*frame$.FrameValueType.stringListT*/get stringListT() {
      return 9;
    },
    /*frame$.FrameValueType.listT*/get listT() {
      return 10;
    },
    /*frame$.FrameValueType.mapT*/get mapT() {
      return 11;
    },
    /*frame$.FrameValueType.hiveListT*/get hiveListT() {
      return 12;
    }
  }, false);
  frame_helper.FrameHelper = class FrameHelper extends core.Object {
    framesFromBytes(bytes, keystore, registry, cipher) {
      let reader = new binary_reader_impl.BinaryReaderImpl.new(bytes, registry);
      while (reader.availableBytes !== 0) {
        let frameOffset = reader.usedBytes;
        let frame = reader.readFrame({cipher: cipher, lazy: false, frameOffset: frameOffset});
        if (frame == null) return frameOffset;
        dart.nullCheck(keystore).insert(frame, {notify: false});
      }
      return -1;
    }
    static ['_#new#tearOff']() {
      return new frame_helper.FrameHelper.new();
    }
  };
  (frame_helper.FrameHelper.new = function() {
    ;
  }).prototype = frame_helper.FrameHelper.prototype;
  dart.addTypeTests(frame_helper.FrameHelper);
  dart.addTypeCaches(frame_helper.FrameHelper);
  dart.setMethodSignature(frame_helper.FrameHelper, () => ({
    __proto__: dart.getMethods(frame_helper.FrameHelper.__proto__),
    framesFromBytes: dart.fnType(core.int, [typed_data.Uint8List, dart.nullable(keystore$.Keystore), hive.TypeRegistry, dart.nullable(hive.HiveCipher)])
  }));
  dart.setLibraryUri(frame_helper.FrameHelper, I[46]);
  var added = dart.privateName(keystore$, "KeyTransaction.added");
  var deleted$0 = dart.privateName(keystore$, "KeyTransaction.deleted");
  const _is_KeyTransaction_default = Symbol('_is_KeyTransaction_default');
  keystore$.KeyTransaction$ = dart.generic(E => {
    class KeyTransaction extends core.Object {
      get added() {
        return this[added];
      }
      set added(value) {
        super.added = value;
      }
      get deleted() {
        return this[deleted$0];
      }
      set deleted(value) {
        super.deleted = value;
      }
      static ['_#new#tearOff'](E) {
        return new (keystore$.KeyTransaction$(E)).new();
      }
    }
    (KeyTransaction.new = function() {
      this[added] = [];
      this[deleted$0] = new (T$.LinkedMapOfdynamic$Frame()).new();
      ;
    }).prototype = KeyTransaction.prototype;
    dart.addTypeTests(KeyTransaction);
    KeyTransaction.prototype[_is_KeyTransaction_default] = true;
    dart.addTypeCaches(KeyTransaction);
    dart.setLibraryUri(KeyTransaction, I[47]);
    dart.setFieldSignature(KeyTransaction, () => ({
      __proto__: dart.getFields(KeyTransaction.__proto__),
      added: dart.finalFieldType(core.List),
      deleted: dart.finalFieldType(core.Map$(dart.dynamic, frame$.Frame))
    }));
    return KeyTransaction;
  });
  keystore$.KeyTransaction = keystore$.KeyTransaction$();
  dart.addTypeTests(keystore$.KeyTransaction, _is_KeyTransaction_default);
  var transactions = dart.privateName(keystore$, "Keystore.transactions");
  var _deletedEntries = dart.privateName(keystore$, "_deletedEntries");
  var _autoIncrement = dart.privateName(keystore$, "_autoIncrement");
  var _box$1 = dart.privateName(keystore$, "_box");
  var _notifier$ = dart.privateName(keystore$, "_notifier");
  var _store = dart.privateName(keystore$, "_store");
  const _is_Keystore_default = Symbol('_is_Keystore_default');
  keystore$.Keystore$ = dart.generic(E => {
    var __t$KeyTransactionOfE = () => (__t$KeyTransactionOfE = dart.constFn(keystore$.KeyTransaction$(E)))();
    var __t$ListQueueOfKeyTransactionOfE = () => (__t$ListQueueOfKeyTransactionOfE = dart.constFn(collection.ListQueue$(__t$KeyTransactionOfE())))();
    var __t$FrameToE = () => (__t$FrameToE = dart.constFn(dart.fnType(E, [frame$.Frame])))();
    var __t$SyncIterableOfE = () => (__t$SyncIterableOfE = dart.constFn(_js_helper.SyncIterable$(E)))();
    class Keystore extends core.Object {
      get transactions() {
        return this[transactions];
      }
      set transactions(value) {
        super.transactions = value;
      }
      static ['_#new#tearOff'](E, _box, _notifier, keyComparator) {
        return new (keystore$.Keystore$(E)).new(_box, _notifier, keyComparator);
      }
      static debug(opts) {
        let t31, t31$;
        let frames = opts && 'frames' in opts ? opts.frames : C[35] || CT.C35;
        let box = opts && 'box' in opts ? opts.box : null;
        let notifier = opts && 'notifier' in opts ? opts.notifier : null;
        let keyComparator = opts && 'keyComparator' in opts ? opts.keyComparator : C[8] || CT.C8;
        let keystore = new (keystore$.Keystore$(E)).new((t31 = box, t31 == null ? box_base_impl.BoxBaseImpl.nullImpl(E) : t31), (t31$ = notifier, t31$ == null ? new change_notifier$.ChangeNotifier.new() : t31$), keyComparator);
        for (let frame of frames) {
          keystore.insert(frame);
        }
        return keystore;
      }
      static ['_#debug#tearOff'](E, opts) {
        let frames = opts && 'frames' in opts ? opts.frames : C[35] || CT.C35;
        let box = opts && 'box' in opts ? opts.box : null;
        let notifier = opts && 'notifier' in opts ? opts.notifier : null;
        let keyComparator = opts && 'keyComparator' in opts ? opts.keyComparator : C[8] || CT.C8;
        return keystore$.Keystore$(E).debug({frames: frames, box: box, notifier: notifier, keyComparator: keyComparator});
      }
      get deletedEntries() {
        return this[_deletedEntries];
      }
      get length() {
        return this[_store].length;
      }
      get frames() {
        return this[_store].values;
      }
      resetDeletedEntries() {
        this[_deletedEntries] = 0;
      }
      autoIncrement() {
        return this[_autoIncrement] = this[_autoIncrement] + 1;
      }
      updateAutoIncrement(key) {
        if (key > this[_autoIncrement]) {
          this[_autoIncrement] = key;
        }
      }
      containsKey(key) {
        return this[_store].get(key) != null;
      }
      keyAt(index) {
        return this[_store].getKeyAt(index);
      }
      get(key) {
        return this[_store].get(key);
      }
      getAt(index) {
        return this[_store].getAt(index);
      }
      getKeys() {
        return this[_store].keys;
      }
      getValues() {
        return this[_store].values[$map](E, dart.fn(e => E.as(e.value), __t$FrameToE()));
      }
      getValuesBetween(startKey = null, endKey = null) {
        return new (__t$SyncIterableOfE()).new((function* getValuesBetween() {
          let iterable = null;
          if (startKey != null) {
            iterable = this[_store].valuesFromKey(startKey);
          } else {
            iterable = this[_store].values;
          }
          for (let frame of iterable) {
            yield E.as(frame.value);
            if (dart.equals(frame.key, endKey)) break;
          }
        }).bind(this));
      }
      watch(opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        return this[_notifier$].watch({key: key});
      }
      insert(frame, opts) {
        let notify = opts && 'notify' in opts ? opts.notify : true;
        let lazy = opts && 'lazy' in opts ? opts.lazy : false;
        let value = frame.value;
        let deletedFrame = null;
        if (!frame.deleted) {
          let key = frame.key;
          if (core.int.is(key) && dart.notNull(key) > this[_autoIncrement]) {
            this[_autoIncrement] = key;
          }
          if (hive_object.HiveObjectMixin.is(value)) {
            hive_object['HiveObjectInternal|init'](value, key, this[_box$1]);
          }
          deletedFrame = this[_store].insert(key, lazy ? frame.toLazy() : frame);
        } else {
          deletedFrame = this[_store].delete(frame.key);
        }
        if (deletedFrame != null) {
          this[_deletedEntries] = this[_deletedEntries] + 1;
          if (hive_object.HiveObjectMixin.is(deletedFrame.value) && !core.identical(deletedFrame.value, value)) {
            hive_object['HiveObjectInternal|dispose'](hive_object.HiveObjectMixin.as(deletedFrame.value));
          }
        }
        if (notify && (!frame.deleted || deletedFrame != null)) {
          this[_notifier$].notify(frame);
        }
        return deletedFrame;
      }
      beginTransaction(newFrames) {
        let transaction = new (__t$KeyTransactionOfE()).new();
        for (let frame of newFrames) {
          if (!frame.deleted) {
            transaction.added[$add](frame.key);
          }
          let deletedFrame = this.insert(frame);
          if (deletedFrame != null) {
            transaction.deleted[$_set](frame.key, deletedFrame);
          }
        }
        if (transaction.added[$isNotEmpty] || transaction.deleted[$isNotEmpty]) {
          this.transactions.add(transaction);
          return true;
        } else {
          return false;
        }
      }
      commitTransaction() {
        this.transactions.removeFirst();
      }
      cancelTransaction() {
        let canceled = this.transactions.removeFirst();
        L0:
          for (let key of canceled.deleted[$keys]) {
            let deletedFrame = canceled.deleted[$_get](key);
            for (let t of this.transactions) {
              if (t.deleted[$containsKey](key)) {
                t.deleted[$_set](key, dart.nullCheck(deletedFrame));
                continue L0;
              }
              if (t.added[$contains](key)) {
                t.deleted[$_set](key, dart.nullCheck(deletedFrame));
                continue L0;
              }
            }
            this[_store].insert(key, deletedFrame);
            this[_notifier$].notify(dart.nullCheck(deletedFrame));
          }
        L1:
          for (let key of canceled.added) {
            let isOverride = canceled.deleted[$containsKey](key);
            for (let t of this.transactions) {
              if (t.deleted[$containsKey](key)) {
                if (!isOverride) {
                  t.deleted[$remove](key);
                }
                continue L1;
              }
              if (t.added[$contains](key)) {
                continue L1;
              }
            }
            if (!isOverride) {
              this[_store].delete(key);
              this[_notifier$].notify(new frame$.Frame.deleted(key));
            }
          }
      }
      clear() {
        let frameList = this.frames[$toList]();
        this[_store].clear();
        for (let frame of frameList) {
          if (hive_object.HiveObjectMixin.is(frame.value)) {
            hive_object['HiveObjectInternal|dispose'](hive_object.HiveObjectMixin.as(frame.value));
          }
          this[_notifier$].notify(new frame$.Frame.deleted(frame.key));
        }
        this[_deletedEntries] = 0;
        this[_autoIncrement] = -1;
        return frameList[$length];
      }
      close() {
        return this[_notifier$].close();
      }
    }
    (Keystore.new = function(_box, _notifier, keyComparator) {
      let t31;
      this[transactions] = new (__t$ListQueueOfKeyTransactionOfE()).new();
      this[_deletedEntries] = 0;
      this[_autoIncrement] = -1;
      this[_box$1] = _box;
      this[_notifier$] = _notifier;
      this[_store] = new (T$.IndexableSkipListOfdynamic$Frame()).new((t31 = keyComparator, t31 == null ? C[8] || CT.C8 : t31));
      ;
    }).prototype = Keystore.prototype;
    dart.addTypeTests(Keystore);
    Keystore.prototype[_is_Keystore_default] = true;
    dart.addTypeCaches(Keystore);
    dart.setMethodSignature(Keystore, () => ({
      __proto__: dart.getMethods(Keystore.__proto__),
      resetDeletedEntries: dart.fnType(dart.void, []),
      autoIncrement: dart.fnType(core.int, []),
      updateAutoIncrement: dart.fnType(dart.void, [core.int]),
      containsKey: dart.fnType(core.bool, [dart.dynamic]),
      keyAt: dart.fnType(dart.dynamic, [core.int]),
      get: dart.fnType(dart.nullable(frame$.Frame), [dart.dynamic]),
      getAt: dart.fnType(dart.nullable(frame$.Frame), [core.int]),
      getKeys: dart.fnType(core.Iterable, []),
      getValues: dart.fnType(core.Iterable$(E), []),
      getValuesBetween: dart.fnType(core.Iterable$(E), [], [dart.dynamic, dart.dynamic]),
      watch: dart.fnType(async.Stream$(hive.BoxEvent), [], {key: dart.dynamic}, {}),
      insert: dart.fnType(dart.nullable(frame$.Frame), [frame$.Frame], {lazy: core.bool, notify: core.bool}, {}),
      beginTransaction: dart.fnType(core.bool, [core.List$(frame$.Frame)]),
      commitTransaction: dart.fnType(dart.void, []),
      cancelTransaction: dart.fnType(dart.void, []),
      clear: dart.fnType(core.int, []),
      close: dart.fnType(async.Future, [])
    }));
    dart.setStaticMethodSignature(Keystore, () => ['debug']);
    dart.setGetterSignature(Keystore, () => ({
      __proto__: dart.getGetters(Keystore.__proto__),
      deletedEntries: core.int,
      length: core.int,
      frames: core.Iterable$(frame$.Frame)
    }));
    dart.setLibraryUri(Keystore, I[47]);
    dart.setFieldSignature(Keystore, () => ({
      __proto__: dart.getFields(Keystore.__proto__),
      [_box$1]: dart.finalFieldType(hive.BoxBase$(E)),
      [_notifier$]: dart.finalFieldType(change_notifier$.ChangeNotifier),
      [_store]: dart.finalFieldType(indexable_skip_list.IndexableSkipList$(dart.dynamic, frame$.Frame)),
      transactions: dart.finalFieldType(collection.ListQueue$(keystore$.KeyTransaction$(E))),
      [_deletedEntries]: dart.fieldType(core.int),
      [_autoIncrement]: dart.fieldType(core.int)
    }));
    return Keystore;
  });
  keystore$.Keystore = keystore$.Keystore$();
  dart.addTypeTests(keystore$.Keystore, _is_Keystore_default);
  var _streamController$ = dart.privateName(change_notifier$, "_streamController");
  change_notifier$.ChangeNotifier = class ChangeNotifier extends core.Object {
    static ['_#new#tearOff']() {
      return new change_notifier$.ChangeNotifier.new();
    }
    static ['_#debug#tearOff'](_streamController) {
      return new change_notifier$.ChangeNotifier.debug(_streamController);
    }
    notify(frame) {
      this[_streamController$].add(new hive.BoxEvent.new(frame.key, frame.value, frame.deleted));
    }
    watch(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      if (key != null) {
        return this[_streamController$].stream.where(dart.fn(it => dart.equals(it.key, key), T$.BoxEventTobool()));
      } else {
        return this[_streamController$].stream;
      }
    }
    close() {
      return this[_streamController$].close();
    }
  };
  (change_notifier$.ChangeNotifier.new = function() {
    this[_streamController$] = T$.StreamControllerOfBoxEvent().broadcast();
    ;
  }).prototype = change_notifier$.ChangeNotifier.prototype;
  (change_notifier$.ChangeNotifier.debug = function(_streamController) {
    this[_streamController$] = _streamController;
    ;
  }).prototype = change_notifier$.ChangeNotifier.prototype;
  dart.addTypeTests(change_notifier$.ChangeNotifier);
  dart.addTypeCaches(change_notifier$.ChangeNotifier);
  dart.setMethodSignature(change_notifier$.ChangeNotifier, () => ({
    __proto__: dart.getMethods(change_notifier$.ChangeNotifier.__proto__),
    notify: dart.fnType(dart.void, [frame$.Frame]),
    watch: dart.fnType(async.Stream$(hive.BoxEvent), [], {key: dart.dynamic}, {}),
    close: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setLibraryUri(change_notifier$.ChangeNotifier, I[48]);
  dart.setFieldSignature(change_notifier$.ChangeNotifier, () => ({
    __proto__: dart.getFields(change_notifier$.ChangeNotifier.__proto__),
    [_streamController$]: dart.finalFieldType(async.StreamController$(hive.BoxEvent))
  }));
  var typeId$4 = dart.privateName(ignored_type_adapter, "IgnoredTypeAdapter.typeId");
  const _is_IgnoredTypeAdapter_default = Symbol('_is_IgnoredTypeAdapter_default');
  ignored_type_adapter.IgnoredTypeAdapter$ = dart.generic(T => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    class IgnoredTypeAdapter extends core.Object {
      get typeId() {
        return this[typeId$4];
      }
      set typeId(value) {
        super.typeId = value;
      }
      static ['_#new#tearOff'](T, typeId = 0) {
        return new (ignored_type_adapter.IgnoredTypeAdapter$(T)).new(typeId);
      }
      read(reader) {
        return null;
      }
      write(writer, obj) {
        __t$TN().as(obj);
      }
    }
    (IgnoredTypeAdapter.new = function(typeId = 0) {
      this[typeId$4] = typeId;
      ;
    }).prototype = IgnoredTypeAdapter.prototype;
    dart.addTypeTests(IgnoredTypeAdapter);
    IgnoredTypeAdapter.prototype[_is_IgnoredTypeAdapter_default] = true;
    dart.addTypeCaches(IgnoredTypeAdapter);
    IgnoredTypeAdapter[dart.implements] = () => [hive.TypeAdapter$(dart.nullable(T))];
    dart.setMethodSignature(IgnoredTypeAdapter, () => ({
      __proto__: dart.getMethods(IgnoredTypeAdapter.__proto__),
      read: dart.fnType(dart.nullable(T), [hive.BinaryReader]),
      write: dart.fnType(dart.void, [hive.BinaryWriter, dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(IgnoredTypeAdapter, I[49]);
    dart.setFieldSignature(IgnoredTypeAdapter, () => ({
      __proto__: dart.getFields(IgnoredTypeAdapter.__proto__),
      typeId: dart.finalFieldType(core.int)
    }));
    return IgnoredTypeAdapter;
  });
  ignored_type_adapter.IgnoredTypeAdapter = ignored_type_adapter.IgnoredTypeAdapter$();
  dart.addTypeTests(ignored_type_adapter.IgnoredTypeAdapter, _is_IgnoredTypeAdapter_default);
  backend_manager.BackendManager = class BackendManager extends core.Object {
    static select(backendPreference = null) {
      switch (backendPreference) {
        default:
          {
            return new backend_manager$.BackendManager.new();
          }
      }
    }
  };
  (backend_manager.BackendManager.__ = function() {
    ;
  }).prototype = backend_manager.BackendManager.prototype;
  dart.addTypeTests(backend_manager.BackendManager);
  dart.addTypeCaches(backend_manager.BackendManager);
  dart.setStaticMethodSignature(backend_manager.BackendManager, () => ['select']);
  dart.setLibraryUri(backend_manager.BackendManager, I[50]);
  var _offset = dart.privateName(binary_reader_impl, "_offset");
  var _buffer$ = dart.privateName(binary_reader_impl, "_buffer");
  var _byteData = dart.privateName(binary_reader_impl, "_byteData");
  var _bufferLength = dart.privateName(binary_reader_impl, "_bufferLength");
  var _bufferLimit = dart.privateName(binary_reader_impl, "_bufferLimit");
  var _typeRegistry = dart.privateName(binary_reader_impl, "_typeRegistry");
  var _requireBytes = dart.privateName(binary_reader_impl, "_requireBytes");
  var _limitAvailableBytes = dart.privateName(binary_reader_impl, "_limitAvailableBytes");
  var _resetLimit = dart.privateName(binary_reader_impl, "_resetLimit");
  binary_reader_impl.BinaryReaderImpl = class BinaryReaderImpl extends hive.BinaryReader {
    static ['_#new#tearOff'](_buffer, typeRegistry, bufferLength = null) {
      return new binary_reader_impl.BinaryReaderImpl.new(_buffer, typeRegistry, bufferLength);
    }
    get availableBytes() {
      return this[_bufferLimit] - this[_offset];
    }
    get usedBytes() {
      return this[_offset];
    }
    [_limitAvailableBytes](bytes) {
      this[_requireBytes](bytes);
      this[_bufferLimit] = this[_offset] + bytes;
    }
    [_resetLimit]() {
      this[_bufferLimit] = this[_bufferLength];
    }
    [_requireBytes](bytes) {
      if (this[_offset] + bytes > this[_bufferLimit]) {
        dart.throw(new core.RangeError.new("Not enough bytes available."));
      }
    }
    skip(bytes) {
      this[_requireBytes](bytes);
      this[_offset] = this[_offset] + bytes;
    }
    readByte() {
      let t31;
      this[_requireBytes](1);
      return this[_buffer$][$_get]((t31 = this[_offset], this[_offset] = t31 + 1, t31));
    }
    viewBytes(bytes) {
      this[_requireBytes](bytes);
      this[_offset] = this[_offset] + bytes;
      return extensions['Uint8ListX|view'](this[_buffer$], this[_offset] - bytes, bytes);
    }
    peekBytes(bytes) {
      this[_requireBytes](bytes);
      return extensions['Uint8ListX|view'](this[_buffer$], this[_offset], bytes);
    }
    readWord() {
      let t31, t31$;
      this[_requireBytes](2);
      return (this[_buffer$][$_get]((t31 = this[_offset], this[_offset] = t31 + 1, t31)) | this[_buffer$][$_get]((t31$ = this[_offset], this[_offset] = t31$ + 1, t31$)) << 8 >>> 0) >>> 0;
    }
    readInt32() {
      this[_requireBytes](4);
      this[_offset] = this[_offset] + 4;
      return this[_byteData][$getInt32](this[_offset] - 4, typed_data.Endian.little);
    }
    readUint32() {
      this[_requireBytes](4);
      this[_offset] = this[_offset] + 4;
      return extensions['ListIntX|readUint32'](this[_buffer$], this[_offset] - 4);
    }
    peekUint32() {
      this[_requireBytes](4);
      return extensions['ListIntX|readUint32'](this[_buffer$], this[_offset]);
    }
    readInt() {
      return this.readDouble()[$toInt]();
    }
    readDouble() {
      this[_requireBytes](8);
      let value = this[_byteData][$getFloat64](this[_offset], typed_data.Endian.little);
      this[_offset] = this[_offset] + 8;
      return value;
    }
    readBool() {
      return this.readByte() > 0;
    }
    readString(byteCount = null, decoder = C[1] || CT.C1) {
      byteCount == null ? byteCount = this.readUint32() : null;
      let view = this.viewBytes(byteCount);
      return decoder.convert(view);
    }
    readByteList(length = null) {
      length == null ? length = this.readUint32() : null;
      this[_requireBytes](length);
      let byteList = this[_buffer$][$sublist](this[_offset], this[_offset] + dart.notNull(length));
      this[_offset] = this[_offset] + dart.notNull(length);
      return byteList;
    }
    readIntList(length = null) {
      length == null ? length = this.readUint32() : null;
      this[_requireBytes](dart.notNull(length) * 8);
      let byteData = this[_byteData];
      let list = T$.ListOfint().filled(length, 0, {growable: true});
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        list[$_set](i, byteData[$getFloat64](this[_offset], typed_data.Endian.little)[$toInt]());
        this[_offset] = this[_offset] + 8;
      }
      return list;
    }
    readDoubleList(length = null) {
      length == null ? length = this.readUint32() : null;
      this[_requireBytes](dart.notNull(length) * 8);
      let byteData = this[_byteData];
      let list = T$.ListOfdouble().filled(length, 0, {growable: true});
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        list[$_set](i, byteData[$getFloat64](this[_offset], typed_data.Endian.little));
        this[_offset] = this[_offset] + 8;
      }
      return list;
    }
    readBoolList(length = null) {
      let t31;
      length == null ? length = this.readUint32() : null;
      this[_requireBytes](length);
      let list = T$.ListOfbool().filled(length, false, {growable: true});
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        list[$_set](i, this[_buffer$][$_get]((t31 = this[_offset], this[_offset] = t31 + 1, t31)) > 0);
      }
      return list;
    }
    readStringList(length = null, decoder = C[1] || CT.C1) {
      length == null ? length = this.readUint32() : null;
      let list = T$.ListOfString().filled(length, "", {growable: true});
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        list[$_set](i, this.readString(null, decoder));
      }
      return list;
    }
    readList(length = null) {
      length == null ? length = this.readUint32() : null;
      let list = core.List.filled(length, null, {growable: true});
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        list[$_set](i, this.read());
      }
      return list;
    }
    readMap(length = null) {
      length == null ? length = this.readUint32() : null;
      let map = new _js_helper.LinkedMap.new();
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        map[$_set](this.read(), this.read());
      }
      return map;
    }
    readKey() {
      let keyType = this.readByte();
      if (keyType === 0) {
        return this.readUint32();
      } else if (keyType === 1) {
        let byteCount = this.readByte();
        return hive.BinaryReader.utf8Decoder.convert(this.viewBytes(byteCount));
      } else {
        dart.throw(new hive.HiveError.new("Unsupported key type. Frame might be corrupted."));
      }
    }
    readHiveList(length = null) {
      length == null ? length = this.readUint32() : null;
      let boxNameLength = this.readByte();
      let boxName = core.String.fromCharCodes(this.viewBytes(boxNameLength));
      let keys = core.List.filled(length, null, {growable: true});
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        keys[$_set](i, this.readKey());
      }
      return new (T$.HiveListImplOfHiveObjectMixin()).lazy(boxName, keys);
    }
    readFrame(opts) {
      let t31, t31$, t31$0;
      let cipher = opts && 'cipher' in opts ? opts.cipher : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : false;
      let frameOffset = opts && 'frameOffset' in opts ? opts.frameOffset : 0;
      if (this.availableBytes < 4) return null;
      let frameLength = this.readUint32();
      if (frameLength < 8) return null;
      if (this.availableBytes < frameLength - 4) return null;
      let crc = extensions['ListIntX|readUint32'](this[_buffer$], this[_offset] + frameLength - 8);
      let computedCrc = crc32.Crc32.compute(this[_buffer$], {offset: this[_offset] - 4, length: frameLength - 4, crc: (t31$ = (t31 = cipher, t31 == null ? null : t31.calculateKeyCrc()), t31$ == null ? 0 : t31$)});
      if (computedCrc !== crc) return null;
      this[_limitAvailableBytes](frameLength - 8);
      let frame = null;
      let key = this.readKey();
      if (this.availableBytes === 0) {
        frame = new frame$.Frame.deleted(key);
      } else if (lazy) {
        frame = new frame$.Frame.lazy(key);
      } else if (cipher == null) {
        frame = new frame$.Frame.new(key, this.read());
      } else {
        frame = new frame$.Frame.new(key, this.readEncrypted(cipher));
      }
      t31$0 = frame;
      (() => {
        t31$0.length = frameLength;
        t31$0.offset = frameOffset;
        return t31$0;
      })();
      this.skip(this.availableBytes);
      this[_resetLimit]();
      this.skip(4);
      return frame;
    }
    read(typeId = null) {
      typeId == null ? typeId = this.readByte() : null;
      switch (typeId) {
        case 0:
          {
            return null;
          }
        case 1:
          {
            return this.readInt();
          }
        case 2:
          {
            return this.readDouble();
          }
        case 3:
          {
            return this.readBool();
          }
        case 4:
          {
            return this.readString();
          }
        case 5:
          {
            return this.readByteList();
          }
        case 6:
          {
            return this.readIntList();
          }
        case 7:
          {
            return this.readDoubleList();
          }
        case 8:
          {
            return this.readBoolList();
          }
        case 9:
          {
            return this.readStringList();
          }
        case 10:
          {
            return this.readList();
          }
        case 11:
          {
            return this.readMap();
          }
        case 12:
          {
            return this.readHiveList();
          }
        default:
          {
            let resolved = this[_typeRegistry].findAdapterForTypeId(typeId);
            if (resolved == null) {
              dart.throw(new hive.HiveError.new("Cannot read, unknown typeId: " + dart.str(typeId) + ". " + "Did you forget to register an adapter?"));
            }
            return resolved.adapter.read(this);
          }
      }
    }
    readEncrypted(cipher) {
      let inpLength = this.availableBytes;
      let out = _native_typed_data.NativeUint8List.new(inpLength);
      let outLength = cipher.decrypt(this[_buffer$], this[_offset], inpLength, out, 0);
      this[_offset] = this[_offset] + inpLength;
      let valueReader = new binary_reader_impl.BinaryReaderImpl.new(out, this[_typeRegistry], outLength);
      return valueReader.read();
    }
  };
  (binary_reader_impl.BinaryReaderImpl.new = function(_buffer, typeRegistry, bufferLength = null) {
    let t31, t31$;
    this[_offset] = 0;
    this[_buffer$] = _buffer;
    this[_byteData] = typed_data.ByteData.view(_buffer[$buffer], _buffer[$offsetInBytes]);
    this[_bufferLength] = (t31 = bufferLength, t31 == null ? _buffer[$length] : t31);
    this[_bufferLimit] = (t31$ = bufferLength, t31$ == null ? _buffer[$length] : t31$);
    this[_typeRegistry] = type_registry_impl.TypeRegistryImpl.as(typeRegistry);
    ;
  }).prototype = binary_reader_impl.BinaryReaderImpl.prototype;
  dart.addTypeTests(binary_reader_impl.BinaryReaderImpl);
  dart.addTypeCaches(binary_reader_impl.BinaryReaderImpl);
  dart.setMethodSignature(binary_reader_impl.BinaryReaderImpl, () => ({
    __proto__: dart.getMethods(binary_reader_impl.BinaryReaderImpl.__proto__),
    [_limitAvailableBytes]: dart.fnType(dart.void, [core.int]),
    [_resetLimit]: dart.fnType(dart.void, []),
    [_requireBytes]: dart.fnType(dart.void, [core.int]),
    skip: dart.fnType(dart.void, [core.int]),
    readByte: dart.fnType(core.int, []),
    viewBytes: dart.fnType(typed_data.Uint8List, [core.int]),
    peekBytes: dart.fnType(typed_data.Uint8List, [core.int]),
    readWord: dart.fnType(core.int, []),
    readInt32: dart.fnType(core.int, []),
    readUint32: dart.fnType(core.int, []),
    peekUint32: dart.fnType(core.int, []),
    readInt: dart.fnType(core.int, []),
    readDouble: dart.fnType(core.double, []),
    readBool: dart.fnType(core.bool, []),
    readString: dart.fnType(core.String, [], [dart.nullable(core.int), convert.Converter$(core.List$(core.int), core.String)]),
    readByteList: dart.fnType(typed_data.Uint8List, [], [dart.nullable(core.int)]),
    readIntList: dart.fnType(core.List$(core.int), [], [dart.nullable(core.int)]),
    readDoubleList: dart.fnType(core.List$(core.double), [], [dart.nullable(core.int)]),
    readBoolList: dart.fnType(core.List$(core.bool), [], [dart.nullable(core.int)]),
    readStringList: dart.fnType(core.List$(core.String), [], [dart.nullable(core.int), convert.Converter$(core.List$(core.int), core.String)]),
    readList: dart.fnType(core.List, [], [dart.nullable(core.int)]),
    readMap: dart.fnType(core.Map, [], [dart.nullable(core.int)]),
    readKey: dart.fnType(dart.dynamic, []),
    readHiveList: dart.fnType(hive.HiveList$(hive_object.HiveObjectMixin), [], [dart.nullable(core.int)]),
    readFrame: dart.fnType(dart.nullable(frame$.Frame), [], {cipher: dart.nullable(hive.HiveCipher), frameOffset: core.int, lazy: core.bool}, {}),
    read: dart.fnType(dart.dynamic, [], [dart.nullable(core.int)]),
    readEncrypted: dart.fnType(dart.dynamic, [hive.HiveCipher])
  }));
  dart.setGetterSignature(binary_reader_impl.BinaryReaderImpl, () => ({
    __proto__: dart.getGetters(binary_reader_impl.BinaryReaderImpl.__proto__),
    availableBytes: core.int,
    usedBytes: core.int
  }));
  dart.setLibraryUri(binary_reader_impl.BinaryReaderImpl, I[51]);
  dart.setFieldSignature(binary_reader_impl.BinaryReaderImpl, () => ({
    __proto__: dart.getFields(binary_reader_impl.BinaryReaderImpl.__proto__),
    [_buffer$]: dart.finalFieldType(typed_data.Uint8List),
    [_byteData]: dart.finalFieldType(typed_data.ByteData),
    [_bufferLength]: dart.finalFieldType(core.int),
    [_typeRegistry]: dart.finalFieldType(type_registry_impl.TypeRegistryImpl),
    [_bufferLimit]: dart.fieldType(core.int),
    [_offset]: dart.fieldType(core.int)
  }));
  var _head = dart.privateName(indexable_skip_list, "_head");
  var _height = dart.privateName(indexable_skip_list, "_height");
  var _length = dart.privateName(indexable_skip_list, "_length");
  var _comparator$ = dart.privateName(indexable_skip_list, "_comparator");
  var _random = dart.privateName(indexable_skip_list, "_random");
  var _getNode = dart.privateName(indexable_skip_list, "_getNode");
  var _getNodeAt = dart.privateName(indexable_skip_list, "_getNodeAt");
  const _is_IndexableSkipList_default = Symbol('_is_IndexableSkipList_default');
  indexable_skip_list.IndexableSkipList$ = dart.generic((K, V) => {
    var __t$_NodeOfK$V = () => (__t$_NodeOfK$V = dart.constFn(indexable_skip_list._Node$(K, V)))();
    var __t$_NodeNOfK$V = () => (__t$_NodeNOfK$V = dart.constFn(dart.nullable(__t$_NodeOfK$V())))();
    var __t$ListOf_NodeNOfK$V = () => (__t$ListOf_NodeNOfK$V = dart.constFn(core.List$(__t$_NodeNOfK$V())))();
    var __t$_KeyIterableOfK$V = () => (__t$_KeyIterableOfK$V = dart.constFn(indexable_skip_list._KeyIterable$(K, V)))();
    var __t$_ValueIterableOfK$V = () => (__t$_ValueIterableOfK$V = dart.constFn(indexable_skip_list._ValueIterable$(K, V)))();
    var __t$KN = () => (__t$KN = dart.constFn(dart.nullable(K)))();
    var __t$_NodeOfKN$VN = () => (__t$_NodeOfKN$VN = dart.constFn(indexable_skip_list._Node$(__t$KN(), __t$VN())))();
    var __t$JSArrayOf_NodeNOfK$V = () => (__t$JSArrayOf_NodeNOfK$V = dart.constFn(_interceptors.JSArray$(__t$_NodeNOfK$V())))();
    var __t$VN = () => (__t$VN = dart.constFn(dart.nullable(V)))();
    class IndexableSkipList extends core.Object {
      static ['_#new#tearOff'](K, V, _comparator, random = null) {
        return new (indexable_skip_list.IndexableSkipList$(K, V)).new(_comparator, random);
      }
      get length() {
        return this[_length];
      }
      get keys() {
        return new (__t$_KeyIterableOfK$V()).new(this[_head]);
      }
      get values() {
        return new (__t$_ValueIterableOfK$V()).new(this[_head]);
      }
      insert(key, value) {
        let t31, t32, t31$, t32$, t31$0, t32$0, t31$1, t32$1, t31$2, t32$2, t31$3, t32$3, t31$4;
        K.as(key);
        __t$VN().as(value);
        let existingNode = this[_getNode](key);
        if (existingNode != null) {
          let oldValue = existingNode.value;
          existingNode.value = value;
          return oldValue;
        }
        let newLevel = 0;
        while (this[_random].nextBool() && dart.notNull(newLevel) < 12 - 1) {
          newLevel = dart.notNull(newLevel) + 1;
        }
        if (dart.notNull(newLevel) >= this[_height]) {
          newLevel = (t31 = this[_height], this[_height] = t31 + 1, t31);
        }
        let newNode = new (__t$_NodeOfK$V()).new(key, value, __t$ListOf_NodeNOfK$V().filled(dart.notNull(newLevel) + 1, null), T$.ListOfint().filled(dart.notNull(newLevel) + 1, 0));
        let current = this[_head];
        for (let level = this[_height] - 1; level >= 0; level = level - 1) {
          while (true) {
            let next = current.next[$_get](level);
            if (next == null || (t31$ = key, t32 = dart.nullCheck(next.key), this[_comparator$](t31$, t32)) < 0) break;
            current = next;
          }
          if (level > dart.notNull(newLevel)) {
            let next = current.next[$_get](level);
            if (next != null) {
              t31$0 = next.width;
              t32$ = level;
              t31$0[$_set](t32$, t31$0[$_get](t32$) + 1);
            }
            continue;
          }
          if (level === 0) {
            newNode.width[$_set](0, 1);
          } else {
            let width = 0;
            let node = current.next[$_get](level - 1);
            while (node != null && (t31$1 = key, t32$0 = dart.nullCheck(node.key), this[_comparator$](t31$1, t32$0)) >= 0) {
              width = width + node.width[$_get](level - 1);
              node = node.next[$_get](level - 1);
            }
            for (let j = level; j <= dart.notNull(newLevel); j = j + 1) {
              t31$2 = newNode.width;
              t32$1 = j;
              t31$2[$_set](t32$1, t31$2[$_get](t32$1) + width);
            }
            t31$3 = newNode.width;
            t32$2 = level;
            t31$3[$_set](t32$2, t31$3[$_get](t32$2) + 1);
          }
          newNode.next[$_set](level, current.next[$_get](level));
          current.next[$_set](level, newNode);
        }
        for (let i = 1; i <= dart.notNull(newLevel); i = i + 1) {
          let next = newNode.next[$_get](i);
          if (next != null) {
            t31$4 = next.width;
            t32$3 = i;
            t31$4[$_set](t32$3, t31$4[$_get](t32$3) - (newNode.width[$_get](i) - 1));
          }
        }
        this[_length] = this[_length] + 1;
        return null;
      }
      delete(key) {
        let t32, t31, t32$, t31$, t32$0, t31$0;
        K.as(key);
        let node = this[_getNode](key);
        if (node == null) return null;
        let current = this[_head];
        for (let level = this[_height] - 1; level >= 0; level = level - 1) {
          while (true) {
            let next = current.next[$_get](level);
            if (next == null || (t31 = key, t32 = dart.nullCheck(next.key), this[_comparator$](t31, t32)) <= 0) break;
            current = next;
          }
          if (level > node.level) {
            let next = current.next[$_get](level);
            if (next != null) {
              t31$ = next.width;
              t32$ = level;
              t31$[$_set](t32$, t31$[$_get](t32$) - 1);
            }
          } else {
            let next = node.next[$_get](level);
            current.next[$_set](level, next);
            if (next != null) {
              t31$0 = next.width;
              t32$0 = level;
              t31$0[$_set](t32$0, t31$0[$_get](t32$0) + (node.width[$_get](level) - 1));
            }
          }
        }
        if (node.level === this[_height] - 1 && this[_height] > 1 && this[_head].next[$_get](node.level) == null) {
          this[_height] = this[_height] - 1;
        }
        this[_length] = this[_length] - 1;
        return node.value;
      }
      get(key) {
        let t31;
        K.as(key);
        t31 = this[_getNode](key);
        return t31 == null ? null : t31.value;
      }
      valuesFromKey(key) {
        K.as(key);
        let node = this[_getNode](key);
        let virtualHead = new (__t$_NodeOfKN$VN()).new(null, null, __t$JSArrayOf_NodeNOfK$V().of([node]), T$.JSArrayOfint().of([0]));
        return new (__t$_ValueIterableOfK$V()).new(virtualHead);
      }
      [_getNode](key) {
        let t32, t31, t32$, t31$;
        let prev = this[_head];
        let node = null;
        for (let i = this[_height] - 1; i >= 0; i = i - 1) {
          node = prev.next[$_get](i);
          while (node != null && (t31 = key, t32 = dart.nullCheck(node.key), this[_comparator$](t31, t32)) > 0) {
            prev = node;
            node = node.next[$_get](i);
          }
        }
        if (node != null && (t31$ = key, t32$ = dart.nullCheck(node.key), this[_comparator$](t31$, t32$)) === 0) {
          return node;
        }
        return null;
      }
      getAt(index) {
        return this[_getNodeAt](index).value;
      }
      getKeyAt(index) {
        return this[_getNodeAt](index).key;
      }
      [_getNodeAt](index) {
        core.RangeError.checkValidIndex(index, this);
        let prev = this[_head];
        let node = null;
        for (let level = this[_height] - 1; level >= 0; level = level - 1) {
          node = prev.next[$_get](level);
          while (node != null && index >= node.width[$_get](level)) {
            index = index - node.width[$_get](level);
            prev = node;
            node = node.next[$_get](level);
          }
        }
        return dart.nullCheck(node);
      }
      clear() {
        this[_height] = 1;
        for (let i = 0; i < 12; i = i + 1) {
          this[_head].next[$_set](i, null);
        }
        this[_height] = 1;
        this[_length] = 0;
      }
    }
    (IndexableSkipList.new = function(_comparator, random = null) {
      let t31;
      this[_head] = new (__t$_NodeOfK$V()).new(null, null, __t$ListOf_NodeNOfK$V().filled(12, null), T$.ListOfint().filled(12, 0));
      this[_height] = 1;
      this[_length] = 0;
      this[_comparator$] = _comparator;
      this[_random] = (t31 = random, t31 == null ? math.Random.new() : t31);
      ;
    }).prototype = IndexableSkipList.prototype;
    dart.addTypeTests(IndexableSkipList);
    IndexableSkipList.prototype[_is_IndexableSkipList_default] = true;
    dart.addTypeCaches(IndexableSkipList);
    dart.setMethodSignature(IndexableSkipList, () => ({
      __proto__: dart.getMethods(IndexableSkipList.__proto__),
      insert: dart.fnType(dart.nullable(V), [dart.nullable(core.Object), dart.nullable(core.Object)]),
      delete: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      get: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      valuesFromKey: dart.fnType(core.Iterable$(V), [dart.nullable(core.Object)]),
      [_getNode]: dart.fnType(dart.nullable(indexable_skip_list._Node$(K, V)), [K]),
      getAt: dart.fnType(dart.nullable(V), [core.int]),
      getKeyAt: dart.fnType(dart.nullable(K), [core.int]),
      [_getNodeAt]: dart.fnType(indexable_skip_list._Node$(K, V), [core.int]),
      clear: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(IndexableSkipList, () => ({
      __proto__: dart.getGetters(IndexableSkipList.__proto__),
      length: core.int,
      keys: core.Iterable$(K),
      values: core.Iterable$(V)
    }));
    dart.setLibraryUri(IndexableSkipList, I[52]);
    dart.setFieldSignature(IndexableSkipList, () => ({
      __proto__: dart.getFields(IndexableSkipList.__proto__),
      [_head]: dart.finalFieldType(indexable_skip_list._Node$(K, V)),
      [_random]: dart.finalFieldType(math.Random),
      [_comparator$]: dart.finalFieldType(dart.fnType(core.int, [K, K])),
      [_height]: dart.fieldType(core.int),
      [_length]: dart.fieldType(core.int)
    }));
    dart.setStaticFieldSignature(IndexableSkipList, () => ['_maxHeight']);
    return IndexableSkipList;
  });
  indexable_skip_list.IndexableSkipList = indexable_skip_list.IndexableSkipList$();
  dart.defineLazy(indexable_skip_list.IndexableSkipList, {
    /*indexable_skip_list.IndexableSkipList._maxHeight*/get _maxHeight() {
      return 12;
    }
  }, false);
  dart.addTypeTests(indexable_skip_list.IndexableSkipList, _is_IndexableSkipList_default);
  var value$1 = dart.privateName(indexable_skip_list, "_Node.value");
  const _is__Node_default = Symbol('_is__Node_default');
  indexable_skip_list._Node$ = dart.generic((K, V) => {
    var __t$VN = () => (__t$VN = dart.constFn(dart.nullable(V)))();
    class _Node extends core.Object {
      get value() {
        return this[value$1];
      }
      set value(value) {
        this[value$1] = __t$VN().as(value);
      }
      get level() {
        return this.next[$length] - 1;
      }
      static ['_#new#tearOff'](K, V, key, value, next, width) {
        return new (indexable_skip_list._Node$(K, V)).new(key, value, next, width);
      }
    }
    (_Node.new = function(key, value, next, width) {
      this.key = key;
      this[value$1] = value;
      this.next = next;
      this.width = width;
      ;
    }).prototype = _Node.prototype;
    dart.addTypeTests(_Node);
    _Node.prototype[_is__Node_default] = true;
    dart.addTypeCaches(_Node);
    dart.setGetterSignature(_Node, () => ({
      __proto__: dart.getGetters(_Node.__proto__),
      level: core.int
    }));
    dart.setLibraryUri(_Node, I[52]);
    dart.setFieldSignature(_Node, () => ({
      __proto__: dart.getFields(_Node.__proto__),
      key: dart.finalFieldType(dart.nullable(K)),
      value: dart.fieldType(dart.nullable(V)),
      next: dart.finalFieldType(core.List$(dart.nullable(indexable_skip_list._Node$(K, V)))),
      width: dart.finalFieldType(core.List$(core.int))
    }));
    return _Node;
  });
  indexable_skip_list._Node = indexable_skip_list._Node$();
  dart.addTypeTests(indexable_skip_list._Node, _is__Node_default);
  var node$ = dart.privateName(indexable_skip_list, "_Iterator.node");
  const _is__Iterator_default = Symbol('_is__Iterator_default');
  indexable_skip_list._Iterator$ = dart.generic((K, V, E) => {
    var __t$KN = () => (__t$KN = dart.constFn(dart.nullable(K)))();
    var __t$_NodeOfKN$VN = () => (__t$_NodeOfKN$VN = dart.constFn(indexable_skip_list._Node$(__t$KN(), __t$VN())))();
    var __t$_NodeNOfKN$VN = () => (__t$_NodeNOfKN$VN = dart.constFn(dart.nullable(__t$_NodeOfKN$VN())))();
    var __t$VN = () => (__t$VN = dart.constFn(dart.nullable(V)))();
    class _Iterator extends core.Object {
      get node() {
        return this[node$];
      }
      set node(value) {
        this[node$] = __t$_NodeNOfKN$VN().as(value);
      }
      moveNext() {
        return (this.node = dart.nullCheck(this.node).next[$_get](0)) != null;
      }
    }
    (_Iterator.new = function(node) {
      this[node$] = node;
      ;
    }).prototype = _Iterator.prototype;
    dart.addTypeTests(_Iterator);
    _Iterator.prototype[_is__Iterator_default] = true;
    dart.addTypeCaches(_Iterator);
    _Iterator[dart.implements] = () => [core.Iterator$(E)];
    dart.setMethodSignature(_Iterator, () => ({
      __proto__: dart.getMethods(_Iterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setLibraryUri(_Iterator, I[52]);
    dart.setFieldSignature(_Iterator, () => ({
      __proto__: dart.getFields(_Iterator.__proto__),
      node: dart.fieldType(dart.nullable(indexable_skip_list._Node$(dart.nullable(K), dart.nullable(V))))
    }));
    return _Iterator;
  });
  indexable_skip_list._Iterator = indexable_skip_list._Iterator$();
  dart.addTypeTests(indexable_skip_list._Iterator, _is__Iterator_default);
  const _is__KeyIterator_default = Symbol('_is__KeyIterator_default');
  indexable_skip_list._KeyIterator$ = dart.generic((K, V) => {
    class _KeyIterator extends indexable_skip_list._Iterator$(K, V, K) {
      static ['_#new#tearOff'](K, V, node) {
        return new (indexable_skip_list._KeyIterator$(K, V)).new(node);
      }
      get current() {
        return dart.nullCheck(dart.nullCheck(this.node).key);
      }
    }
    (_KeyIterator.new = function(node) {
      _KeyIterator.__proto__.new.call(this, node);
      ;
    }).prototype = _KeyIterator.prototype;
    dart.addTypeTests(_KeyIterator);
    _KeyIterator.prototype[_is__KeyIterator_default] = true;
    dart.addTypeCaches(_KeyIterator);
    dart.setGetterSignature(_KeyIterator, () => ({
      __proto__: dart.getGetters(_KeyIterator.__proto__),
      current: K
    }));
    dart.setLibraryUri(_KeyIterator, I[52]);
    return _KeyIterator;
  });
  indexable_skip_list._KeyIterator = indexable_skip_list._KeyIterator$();
  dart.addTypeTests(indexable_skip_list._KeyIterator, _is__KeyIterator_default);
  const _is__KeyIterable_default = Symbol('_is__KeyIterable_default');
  indexable_skip_list._KeyIterable$ = dart.generic((K, V) => {
    var __t$_KeyIteratorOfK$V = () => (__t$_KeyIteratorOfK$V = dart.constFn(indexable_skip_list._KeyIterator$(K, V)))();
    class _KeyIterable extends collection.IterableBase$(K) {
      static ['_#new#tearOff'](K, V, head) {
        return new (indexable_skip_list._KeyIterable$(K, V)).new(head);
      }
      get iterator() {
        return new (__t$_KeyIteratorOfK$V()).new(this.head);
      }
    }
    (_KeyIterable.new = function(head) {
      this.head = head;
      _KeyIterable.__proto__.new.call(this);
      ;
    }).prototype = _KeyIterable.prototype;
    dart.addTypeTests(_KeyIterable);
    _KeyIterable.prototype[_is__KeyIterable_default] = true;
    dart.addTypeCaches(_KeyIterable);
    dart.setGetterSignature(_KeyIterable, () => ({
      __proto__: dart.getGetters(_KeyIterable.__proto__),
      iterator: core.Iterator$(K),
      [$iterator]: core.Iterator$(K)
    }));
    dart.setLibraryUri(_KeyIterable, I[52]);
    dart.setFieldSignature(_KeyIterable, () => ({
      __proto__: dart.getFields(_KeyIterable.__proto__),
      head: dart.finalFieldType(indexable_skip_list._Node$(dart.nullable(K), dart.nullable(V)))
    }));
    dart.defineExtensionAccessors(_KeyIterable, ['iterator']);
    return _KeyIterable;
  });
  indexable_skip_list._KeyIterable = indexable_skip_list._KeyIterable$();
  dart.addTypeTests(indexable_skip_list._KeyIterable, _is__KeyIterable_default);
  const _is__ValueIterator_default = Symbol('_is__ValueIterator_default');
  indexable_skip_list._ValueIterator$ = dart.generic((K, V) => {
    class _ValueIterator extends indexable_skip_list._Iterator$(K, V, V) {
      static ['_#new#tearOff'](K, V, node) {
        return new (indexable_skip_list._ValueIterator$(K, V)).new(node);
      }
      get current() {
        return dart.nullCheck(dart.nullCheck(this.node).value);
      }
    }
    (_ValueIterator.new = function(node) {
      _ValueIterator.__proto__.new.call(this, node);
      ;
    }).prototype = _ValueIterator.prototype;
    dart.addTypeTests(_ValueIterator);
    _ValueIterator.prototype[_is__ValueIterator_default] = true;
    dart.addTypeCaches(_ValueIterator);
    dart.setGetterSignature(_ValueIterator, () => ({
      __proto__: dart.getGetters(_ValueIterator.__proto__),
      current: V
    }));
    dart.setLibraryUri(_ValueIterator, I[52]);
    return _ValueIterator;
  });
  indexable_skip_list._ValueIterator = indexable_skip_list._ValueIterator$();
  dart.addTypeTests(indexable_skip_list._ValueIterator, _is__ValueIterator_default);
  const _is__ValueIterable_default = Symbol('_is__ValueIterable_default');
  indexable_skip_list._ValueIterable$ = dart.generic((K, V) => {
    var __t$_ValueIteratorOfK$V = () => (__t$_ValueIteratorOfK$V = dart.constFn(indexable_skip_list._ValueIterator$(K, V)))();
    class _ValueIterable extends collection.IterableBase$(V) {
      static ['_#new#tearOff'](K, V, head) {
        return new (indexable_skip_list._ValueIterable$(K, V)).new(head);
      }
      get iterator() {
        return new (__t$_ValueIteratorOfK$V()).new(this.head);
      }
    }
    (_ValueIterable.new = function(head) {
      this.head = head;
      _ValueIterable.__proto__.new.call(this);
      ;
    }).prototype = _ValueIterable.prototype;
    dart.addTypeTests(_ValueIterable);
    _ValueIterable.prototype[_is__ValueIterable_default] = true;
    dart.addTypeCaches(_ValueIterable);
    dart.setGetterSignature(_ValueIterable, () => ({
      __proto__: dart.getGetters(_ValueIterable.__proto__),
      iterator: core.Iterator$(V),
      [$iterator]: core.Iterator$(V)
    }));
    dart.setLibraryUri(_ValueIterable, I[52]);
    dart.setFieldSignature(_ValueIterable, () => ({
      __proto__: dart.getFields(_ValueIterable.__proto__),
      head: dart.finalFieldType(indexable_skip_list._Node$(dart.nullable(K), dart.nullable(V)))
    }));
    dart.defineExtensionAccessors(_ValueIterable, ['iterator']);
    return _ValueIterable;
  });
  indexable_skip_list._ValueIterable = indexable_skip_list._ValueIterable$();
  dart.addTypeTests(indexable_skip_list._ValueIterable, _is__ValueIterable_default);
  backend_manager$.BackendManager = class BackendManager extends core.Object {
    get indexedDB() {
      return js.context.hasProperty("window") ? html.window[$indexedDB] : html.WorkerGlobalScope.instance.indexedDB;
    }
    open(name, path, crashRecovery, cipher, collection) {
      return async.async(storage_backend.StorageBackend, (function* open() {
        let t31, t31$, t31$0;
        let databaseName = (t31 = collection, t31 == null ? name : t31);
        let objectStoreName = collection == null ? "box" : name;
        let db = (yield dart.nullCheck(this.indexedDB)[$open](databaseName, {version: 1, onUpgradeNeeded: dart.fn(e => {
            let t31;
            let db = indexed_db.Database.as(e[$target][$result]);
            if (!(t31 = db.objectStoreNames, t31 == null ? T$.JSArrayOfString().of([]) : t31)[$contains](objectStoreName)) {
              db[$createObjectStore](objectStoreName);
            }
          }, T$.VersionChangeEventTovoid())}));
        if (!(t31$ = db.objectStoreNames, t31$ == null ? T$.JSArrayOfString().of([]) : t31$)[$contains](objectStoreName)) {
          core.print("Creating objectStore " + objectStoreName + " in database " + databaseName + "...");
          db = (yield dart.nullCheck(this.indexedDB)[$open](databaseName, {version: dart.notNull((t31$0 = db.version, t31$0 == null ? 1 : t31$0)) + 1, onUpgradeNeeded: dart.fn(e => {
              let t31;
              let db = indexed_db.Database.as(e[$target][$result]);
              if (!(t31 = db.objectStoreNames, t31 == null ? T$.JSArrayOfString().of([]) : t31)[$contains](objectStoreName)) {
                db[$createObjectStore](objectStoreName);
              }
            }, T$.VersionChangeEventTovoid())}));
        }
        core.print("Got object store " + objectStoreName + " in database " + databaseName + ".");
        return new storage_backend_js.StorageBackendJs.new(db, cipher, objectStoreName);
      }).bind(this));
    }
    deleteBox(name, path, collection) {
      return async.async(dart.void, (function* deleteBox() {
        let t31, t31$;
        core.print("Delete " + name + " // " + dart.str(collection) + " from disk");
        let databaseName = (t31 = collection, t31 == null ? name : t31);
        let objectStoreName = collection == null ? "box" : name;
        if (collection == null) {
          yield dart.nullCheck(this.indexedDB)[$deleteDatabase](databaseName);
        } else {
          let db = (yield dart.nullCheck(this.indexedDB)[$open](databaseName, {version: 1, onUpgradeNeeded: dart.fn(e => {
              let t31;
              let db = indexed_db.Database.as(e[$target][$result]);
              if ((t31 = db.objectStoreNames, t31 == null ? T$.JSArrayOfString().of([]) : t31)[$contains](objectStoreName)) {
                db.deleteObjectStore(objectStoreName);
              }
            }, T$.VersionChangeEventTovoid())}));
          if ((t31$ = db.objectStoreNames, t31$ == null ? T$.JSArrayOfString().of([]) : t31$)[$isEmpty]) {
            dart.nullCheck(this.indexedDB)[$deleteDatabase](databaseName);
          }
        }
      }).bind(this));
    }
    boxExists(name, path, collection) {
      return async.async(core.bool, (function* boxExists() {
        let t31, t31$;
        let databaseName = (t31 = collection, t31 == null ? name : t31);
        let objectStoreName = collection == null ? "box" : name;
        try {
          let _exists = true;
          if (collection == null) {
            yield dart.nullCheck(this.indexedDB)[$open](databaseName, {version: 1, onUpgradeNeeded: dart.fn(e => {
                dart.nullCheck(e[$target].transaction).abort();
                _exists = false;
              }, T$.VersionChangeEventTovoid())});
          } else {
            let db = (yield dart.nullCheck(this.indexedDB)[$open](collection, {version: 1, onUpgradeNeeded: dart.fn(e => {
                let t31;
                let db = indexed_db.Database.as(e[$target][$result]);
                _exists = (t31 = db.objectStoreNames, t31 == null ? T$.JSArrayOfString().of([]) : t31)[$contains](objectStoreName);
              }, T$.VersionChangeEventTovoid())}));
            _exists = (t31$ = db.objectStoreNames, t31$ == null ? T$.JSArrayOfString().of([]) : t31$)[$contains](objectStoreName);
          }
          return _exists;
        } catch (e) {
          let error = dart.getThrown(e);
          if (core.Object.is(error)) {
            return false;
          } else
            throw e;
        }
      }).bind(this));
    }
    static ['_#new#tearOff']() {
      return new backend_manager$.BackendManager.new();
    }
  };
  (backend_manager$.BackendManager.new = function() {
    ;
  }).prototype = backend_manager$.BackendManager.prototype;
  dart.addTypeTests(backend_manager$.BackendManager);
  dart.addTypeCaches(backend_manager$.BackendManager);
  backend_manager$.BackendManager[dart.implements] = () => [storage_backend.BackendManagerInterface];
  dart.setMethodSignature(backend_manager$.BackendManager, () => ({
    __proto__: dart.getMethods(backend_manager$.BackendManager.__proto__),
    open: dart.fnType(async.Future$(storage_backend.StorageBackend), [core.String, dart.nullable(core.String), core.bool, dart.nullable(hive.HiveCipher), dart.nullable(core.String)]),
    deleteBox: dart.fnType(async.Future$(dart.void), [core.String, dart.nullable(core.String), dart.nullable(core.String)]),
    boxExists: dart.fnType(async.Future$(core.bool), [core.String, dart.nullable(core.String), dart.nullable(core.String)])
  }));
  dart.setGetterSignature(backend_manager$.BackendManager, () => ({
    __proto__: dart.getGetters(backend_manager$.BackendManager.__proto__),
    indexedDB: dart.nullable(indexed_db.IdbFactory)
  }));
  dart.setLibraryUri(backend_manager$.BackendManager, I[53]);
  var _table = dart.privateName(typed_queue, "_TypedQueue._table");
  var _head$ = dart.privateName(typed_queue, "_TypedQueue._head");
  var _tail = dart.privateName(typed_queue, "_TypedQueue._tail");
  var _table$ = dart.privateName(typed_queue, "_table");
  var _head$0 = dart.privateName(typed_queue, "_head");
  var _tail$ = dart.privateName(typed_queue, "_tail");
  var _createBuffer = dart.privateName(typed_queue, "_createBuffer");
  var _createList = dart.privateName(typed_queue, "_createList");
  var _writeToList = dart.privateName(typed_queue, "_writeToList");
  var _growAtCapacity = dart.privateName(typed_queue, "_growAtCapacity");
  var _growTo = dart.privateName(typed_queue, "_growTo");
  var _defaultValue = dart.privateName(typed_queue, "_defaultValue");
  const _is__TypedQueue_default = Symbol('_is__TypedQueue_default');
  typed_queue._TypedQueue$ = dart.generic((E, L) => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    var __t$EN = () => (__t$EN = dart.constFn(dart.nullable(E)))();
    const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$36.new = function() {
    }).prototype = Object_ListMixin$36.prototype;
    dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(E));
    class _TypedQueue extends Object_ListMixin$36 {
      get [_table$]() {
        return this[_table];
      }
      set [_table$](value) {
        this[_table] = value;
      }
      get [_head$0]() {
        return this[_head$];
      }
      set [_head$0](value) {
        this[_head$] = value;
      }
      get [_tail$]() {
        return this[_tail];
      }
      set [_tail$](value) {
        this[_tail] = value;
      }
      get length() {
        return (this[_tail$] - this[_head$0] & this[_table$][$length] - 1) >>> 0;
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        let list = growable ? this[_createBuffer](this.length) : this[_createList](this.length);
        this[_writeToList](list);
        return list;
      }
      cast(T) {
        if (queue_list.QueueList$(T).is(this)) return queue_list.QueueList$(T).as(this);
        dart.throw(new core.UnsupportedError.new(dart.str(this) + " cannot be cast to the desired type."));
      }
      retype(T) {
        return this.cast(T);
      }
      addLast(value) {
        E.as(value);
        this[_table$][$_set](this[_tail$], value);
        this[_tail$] = (this[_tail$] + 1 & this[_table$][$length] - 1) >>> 0;
        if (this[_head$0] === this[_tail$]) this[_growAtCapacity]();
      }
      addFirst(value) {
        E.as(value);
        this[_head$0] = (this[_head$0] - 1 & this[_table$][$length] - 1) >>> 0;
        this[_table$][$_set](this[_head$0], value);
        if (this[_head$0] === this[_tail$]) this[_growAtCapacity]();
      }
      removeFirst() {
        if (this[_head$0] === this[_tail$]) dart.throw(new core.StateError.new("No element"));
        let result = this[_table$][$_get](this[_head$0]);
        this[_head$0] = (this[_head$0] + 1 & this[_table$][$length] - 1) >>> 0;
        return result;
      }
      removeLast() {
        if (this[_head$0] === this[_tail$]) dart.throw(new core.StateError.new("No element"));
        this[_tail$] = (this[_tail$] - 1 & this[_table$][$length] - 1) >>> 0;
        return this[_table$][$_get](this[_tail$]);
      }
      add(value) {
        E.as(value);
        return this.addLast(value);
      }
      set length(value) {
        core.RangeError.checkNotNegative(value, "length");
        let delta = value - this.length;
        if (delta >= 0) {
          let needsToGrow = this[_table$][$length] <= value;
          if (needsToGrow) this[_growTo](value);
          this[_tail$] = (this[_tail$] + delta & this[_table$][$length] - 1) >>> 0;
          if (!needsToGrow) this.fillRange(value - delta, value, this[_defaultValue]);
        } else {
          this.removeRange(value, this.length);
        }
      }
      _get(index) {
        core.RangeError.checkValidIndex(index, this, null, this.length);
        return this[_table$][$_get]((this[_head$0] + index & this[_table$][$length] - 1) >>> 0);
      }
      _set(index, value$) {
        let value = value$;
        E.as(value);
        core.RangeError.checkValidIndex(index, this);
        this[_table$][$_set]((this[_head$0] + index & this[_table$][$length] - 1) >>> 0, value);
        return value$;
      }
      removeRange(start, end) {
        let length = this.length;
        core.RangeError.checkValidRange(start, end, length);
        if (start === 0) {
          this[_head$0] = (this[_head$0] + end & this[_table$][$length] - 1) >>> 0;
          return;
        }
        let elementsAfter = length - end;
        if (elementsAfter === 0) {
          this[_tail$] = (this[_head$0] + start & this[_table$][$length] - 1) >>> 0;
          return;
        }
        let removedElements = end - start;
        if (start < elementsAfter) {
          this.setRange(removedElements, end, this);
          this[_head$0] = (this[_head$0] + removedElements & this[_table$][$length] - 1) >>> 0;
        } else {
          this.setRange(start, length - removedElements, this, end);
          this[_tail$] = (this[_tail$] - removedElements & this[_table$][$length] - 1) >>> 0;
        }
      }
      setRange(start, end, iterable, skipCount = 0) {
        __t$IterableOfE().as(iterable);
        core.RangeError.checkValidRange(start, end, this.length);
        if (start === end) return;
        let targetStart = (this[_head$0] + start & this[_table$][$length] - 1) >>> 0;
        let targetEnd = (this[_head$0] + end & this[_table$][$length] - 1) >>> 0;
        let targetIsContiguous = targetStart < targetEnd;
        if (iterable === this) {
          let sourceStart = (this[_head$0] + skipCount & this[_table$][$length] - 1) >>> 0;
          let sourceEnd = (sourceStart + (end - start) & this[_table$][$length] - 1) >>> 0;
          if (sourceStart === targetStart) return;
          let sourceIsContiguous = sourceStart < sourceEnd;
          if (targetIsContiguous && sourceIsContiguous) {
            this[_table$][$setRange](targetStart, targetEnd, this[_table$], sourceStart);
          } else if (!targetIsContiguous && !sourceIsContiguous) {
            if (sourceStart > targetStart) {
              let startGap = sourceStart - targetStart;
              let firstEnd = this[_table$][$length] - startGap;
              this[_table$][$setRange](targetStart, firstEnd, this[_table$], sourceStart);
              this[_table$][$setRange](firstEnd, this[_table$][$length], this[_table$]);
              this[_table$][$setRange](0, targetEnd, this[_table$], startGap);
            } else if (sourceEnd < targetEnd) {
              let firstStart = targetEnd - sourceEnd;
              this[_table$][$setRange](firstStart, targetEnd, this[_table$]);
              this[_table$][$setRange](0, firstStart, this[_table$], this[_table$][$length] - firstStart);
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
            }
          } else if (sourceStart < targetEnd) {
            if (sourceIsContiguous) {
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
              this[_table$][$setRange](0, targetEnd, this[_table$], sourceStart + (this[_table$][$length] - targetStart));
            } else {
              let firstEnd = this[_table$][$length] - sourceStart;
              this[_table$][$setRange](targetStart, firstEnd, this[_table$], sourceStart);
              this[_table$][$setRange](firstEnd, targetEnd, this[_table$]);
            }
          } else {
            if (sourceIsContiguous) {
              this[_table$][$setRange](0, targetEnd, this[_table$], sourceStart + (this[_table$][$length] - targetStart));
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
            } else {
              let firstStart = targetEnd - sourceEnd;
              this[_table$][$setRange](firstStart, targetEnd, this[_table$]);
              this[_table$][$setRange](targetStart, firstStart, this[_table$], sourceStart);
            }
          }
        } else if (targetIsContiguous) {
          this[_table$][$setRange](targetStart, targetEnd, iterable, skipCount);
        } else if (__t$ListOfE().is(iterable)) {
          this[_table$][$setRange](targetStart, this[_table$][$length], iterable, skipCount);
          this[_table$][$setRange](0, targetEnd, iterable, skipCount + (this[_table$][$length] - targetStart));
        } else {
          super.setRange(start, end, iterable, skipCount);
        }
      }
      fillRange(start, end, value = null) {
        __t$EN().as(value);
        let startInTable = (this[_head$0] + start & this[_table$][$length] - 1) >>> 0;
        let endInTable = (this[_head$0] + end & this[_table$][$length] - 1) >>> 0;
        if (startInTable <= endInTable) {
          this[_table$][$fillRange](startInTable, endInTable, value);
        } else {
          this[_table$][$fillRange](startInTable, this[_table$][$length], value);
          this[_table$][$fillRange](0, endInTable, value);
        }
      }
      sublist(start, end = null) {
        let length = this.length;
        let nonNullEnd = core.RangeError.checkValidRange(start, end, length);
        let list = this[_createList](nonNullEnd - start);
        this[_writeToList](list, start, nonNullEnd);
        return list;
      }
      [_writeToList](target, start = null, end = null) {
        start == null ? start = 0 : null;
        end == null ? end = this.length : null;
        if (!(target[$length] >= dart.notNull(end) - dart.notNull(start))) dart.assertFailed(null, I[54], 278, 12, "target.length >= end - start");
        if (!(dart.notNull(start) <= dart.notNull(end))) dart.assertFailed(null, I[54], 279, 12, "start <= end");
        let elementsToWrite = dart.notNull(end) - dart.notNull(start);
        let startInTable = (this[_head$0] + dart.notNull(start) & this[_table$][$length] - 1) >>> 0;
        let endInTable = (this[_head$0] + dart.notNull(end) & this[_table$][$length] - 1) >>> 0;
        if (startInTable <= endInTable) {
          target[$setRange](0, elementsToWrite, this[_table$], startInTable);
        } else {
          let firstPartSize = this[_table$][$length] - startInTable;
          target[$setRange](0, firstPartSize, this[_table$], startInTable);
          target[$setRange](firstPartSize, firstPartSize + endInTable, this[_table$], 0);
        }
        return elementsToWrite;
      }
      [_growAtCapacity]() {
        if (!(this[_head$0] === this[_tail$])) dart.assertFailed(null, I[54], 297, 12, "_head == _tail");
        let newTable = this[_createList](this[_table$][$length] * 2);
        let partitionPoint = this[_table$][$length] - this[_head$0];
        newTable[$setRange](0, partitionPoint, this[_table$], this[_head$0]);
        if (partitionPoint !== this[_table$][$length]) {
          newTable[$setRange](partitionPoint, this[_table$][$length], this[_table$]);
        }
        this[_head$0] = 0;
        this[_tail$] = this[_table$][$length];
        this[_table$] = newTable;
      }
      [_growTo](newElementCount) {
        if (!(newElementCount >= this.length)) dart.assertFailed(null, I[54], 316, 12, "newElementCount >= length");
        newElementCount = newElementCount + newElementCount[$rightShift](1);
        let newTable = this[_createList](typed_queue._nextPowerOf2(newElementCount));
        this[_tail$] = this[_writeToList](newTable);
        this[_table$] = newTable;
        this[_head$0] = 0;
      }
    }
    (_TypedQueue.new = function(table) {
      this[_table] = L.as(table);
      this[_head$] = 0;
      this[_tail] = 0;
      ;
    }).prototype = _TypedQueue.prototype;
    dart.addTypeTests(_TypedQueue);
    _TypedQueue.prototype[_is__TypedQueue_default] = true;
    dart.addTypeCaches(_TypedQueue);
    dart.setMethodSignature(_TypedQueue, () => ({
      __proto__: dart.getMethods(_TypedQueue.__proto__),
      cast: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      retype: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      addLast: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addFirst: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      removeFirst: dart.fnType(E, []),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      sublist: dart.fnType(L, [core.int], [dart.nullable(core.int)]),
      [$sublist]: dart.fnType(L, [core.int], [dart.nullable(core.int)]),
      [_writeToList]: dart.fnType(core.int, [core.List$(E)], [dart.nullable(core.int), dart.nullable(core.int)]),
      [_growAtCapacity]: dart.fnType(dart.void, []),
      [_growTo]: dart.fnType(dart.void, [core.int])
    }));
    dart.setGetterSignature(_TypedQueue, () => ({
      __proto__: dart.getGetters(_TypedQueue.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(_TypedQueue, () => ({
      __proto__: dart.getSetters(_TypedQueue.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(_TypedQueue, I[55]);
    dart.setFieldSignature(_TypedQueue, () => ({
      __proto__: dart.getFields(_TypedQueue.__proto__),
      [_table$]: dart.fieldType(L),
      [_head$0]: dart.fieldType(core.int),
      [_tail$]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(_TypedQueue, [
      'toList',
      'cast',
      'removeLast',
      'add',
      '_get',
      '_set',
      'removeRange',
      'setRange',
      'fillRange',
      'sublist'
    ]);
    dart.defineExtensionAccessors(_TypedQueue, ['length']);
    return _TypedQueue;
  });
  typed_queue._TypedQueue = typed_queue._TypedQueue$();
  dart.addTypeTests(typed_queue._TypedQueue, _is__TypedQueue_default);
  const _is__IntQueue_default = Symbol('_is__IntQueue_default');
  typed_queue._IntQueue$ = dart.generic(L => {
    class _IntQueue extends typed_queue._TypedQueue$(core.int, L) {
      get [_defaultValue]() {
        return 0;
      }
    }
    (_IntQueue.new = function(queue) {
      _IntQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = _IntQueue.prototype;
    dart.addTypeTests(_IntQueue);
    _IntQueue.prototype[_is__IntQueue_default] = true;
    dart.addTypeCaches(_IntQueue);
    dart.setGetterSignature(_IntQueue, () => ({
      __proto__: dart.getGetters(_IntQueue.__proto__),
      [_defaultValue]: core.int
    }));
    dart.setLibraryUri(_IntQueue, I[55]);
    return _IntQueue;
  });
  typed_queue._IntQueue = typed_queue._IntQueue$();
  dart.addTypeTests(typed_queue._IntQueue, _is__IntQueue_default);
  const _is__FloatQueue_default = Symbol('_is__FloatQueue_default');
  typed_queue._FloatQueue$ = dart.generic(L => {
    class _FloatQueue extends typed_queue._TypedQueue$(core.double, L) {
      get [_defaultValue]() {
        return 0;
      }
    }
    (_FloatQueue.new = function(queue) {
      _FloatQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = _FloatQueue.prototype;
    dart.addTypeTests(_FloatQueue);
    _FloatQueue.prototype[_is__FloatQueue_default] = true;
    dart.addTypeCaches(_FloatQueue);
    dart.setGetterSignature(_FloatQueue, () => ({
      __proto__: dart.getGetters(_FloatQueue.__proto__),
      [_defaultValue]: core.double
    }));
    dart.setLibraryUri(_FloatQueue, I[55]);
    return _FloatQueue;
  });
  typed_queue._FloatQueue = typed_queue._FloatQueue$();
  dart.addTypeTests(typed_queue._FloatQueue, _is__FloatQueue_default);
  var _add$ = dart.privateName(typed_queue, "_add");
  var _add$0 = dart.privateName(queue_list, "_add");
  var _head$1 = dart.privateName(queue_list, "_head");
  var _writeToList$ = dart.privateName(queue_list, "_writeToList");
  var _grow = dart.privateName(typed_queue, "_grow");
  var _grow$ = dart.privateName(queue_list, "_grow");
  var _preGrow = dart.privateName(typed_queue, "_preGrow");
  var _preGrow$ = dart.privateName(queue_list, "_preGrow");
  var _table$0 = dart.privateName(queue_list, "_table");
  var _tail$0 = dart.privateName(queue_list, "_tail");
  var _head_ = dart.privateName(typed_queue, "_head=");
  var _table_ = dart.privateName(typed_queue, "_table=");
  var _tail_ = dart.privateName(typed_queue, "_tail=");
  typed_queue.Uint8Queue = class Uint8Queue extends typed_queue._IntQueue$(typed_data.Uint8List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint8Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t32;
      t32 = new typed_queue.Uint8Queue.new(elements[$length]);
      return (() => {
        t32.addAll(elements);
        return t32;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint8Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeUint8List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint8Buffer.new(size);
    }
    [_add$0](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[36] || CT.C36, null, [element]));
    }
    get [_head$1]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[37] || CT.C37)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[38] || CT.C38, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[39] || CT.C39, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[42] || CT.C42)));
    }
    set [_head$1](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[43] || CT.C43, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[44] || CT.C44, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[45] || CT.C45, value));
    }
  };
  (typed_queue.Uint8Queue.new = function(initialCapacity = null) {
    typed_queue.Uint8Queue.__proto__.new.call(this, _native_typed_data.NativeUint8List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint8Queue.prototype;
  dart.addTypeTests(typed_queue.Uint8Queue);
  dart.addTypeCaches(typed_queue.Uint8Queue);
  typed_queue.Uint8Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint8Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint8List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint8Buffer, [core.int]),
    [_add$0]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint8Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint8Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint8Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint8Queue, I[55]);
  typed_queue.Int8Queue = class Int8Queue extends typed_queue._IntQueue$(typed_data.Int8List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int8Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t32;
      t32 = new typed_queue.Int8Queue.new(elements[$length]);
      return (() => {
        t32.addAll(elements);
        return t32;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int8Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeInt8List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int8Buffer.new(size);
    }
    [_add$0](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[36] || CT.C36, null, [element]));
    }
    get [_head$1]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[37] || CT.C37)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[38] || CT.C38, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[39] || CT.C39, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[42] || CT.C42)));
    }
    set [_head$1](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[43] || CT.C43, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[44] || CT.C44, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[45] || CT.C45, value));
    }
  };
  (typed_queue.Int8Queue.new = function(initialCapacity = null) {
    typed_queue.Int8Queue.__proto__.new.call(this, _native_typed_data.NativeInt8List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int8Queue.prototype;
  dart.addTypeTests(typed_queue.Int8Queue);
  dart.addTypeCaches(typed_queue.Int8Queue);
  typed_queue.Int8Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int8Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int8List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int8Buffer, [core.int]),
    [_add$0]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int8Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int8Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int8Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int8Queue, I[55]);
  typed_queue.Uint8ClampedQueue = class Uint8ClampedQueue extends typed_queue._IntQueue$(typed_data.Uint8ClampedList) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint8ClampedQueue.new(initialCapacity);
    }
    static fromList(elements) {
      let t32;
      t32 = new typed_queue.Uint8ClampedQueue.new(elements[$length]);
      return (() => {
        t32.addAll(elements);
        return t32;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint8ClampedQueue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeUint8ClampedList.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint8ClampedBuffer.new(size);
    }
    [_add$0](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[36] || CT.C36, null, [element]));
    }
    get [_head$1]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[37] || CT.C37)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[38] || CT.C38, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[39] || CT.C39, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[42] || CT.C42)));
    }
    set [_head$1](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[43] || CT.C43, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[44] || CT.C44, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[45] || CT.C45, value));
    }
  };
  (typed_queue.Uint8ClampedQueue.new = function(initialCapacity = null) {
    typed_queue.Uint8ClampedQueue.__proto__.new.call(this, _native_typed_data.NativeUint8ClampedList.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint8ClampedQueue.prototype;
  dart.addTypeTests(typed_queue.Uint8ClampedQueue);
  dart.addTypeCaches(typed_queue.Uint8ClampedQueue);
  typed_queue.Uint8ClampedQueue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint8ClampedQueue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint8ClampedList, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint8ClampedBuffer, [core.int]),
    [_add$0]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint8ClampedQueue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint8ClampedQueue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint8ClampedQueue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint8ClampedQueue, I[55]);
  typed_queue.Uint16Queue = class Uint16Queue extends typed_queue._IntQueue$(typed_data.Uint16List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint16Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t32;
      t32 = new typed_queue.Uint16Queue.new(elements[$length]);
      return (() => {
        t32.addAll(elements);
        return t32;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint16Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeUint16List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint16Buffer.new(size);
    }
    [_add$0](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[36] || CT.C36, null, [element]));
    }
    get [_head$1]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[37] || CT.C37)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[38] || CT.C38, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[39] || CT.C39, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[42] || CT.C42)));
    }
    set [_head$1](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[43] || CT.C43, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[44] || CT.C44, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[45] || CT.C45, value));
    }
  };
  (typed_queue.Uint16Queue.new = function(initialCapacity = null) {
    typed_queue.Uint16Queue.__proto__.new.call(this, _native_typed_data.NativeUint16List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint16Queue.prototype;
  dart.addTypeTests(typed_queue.Uint16Queue);
  dart.addTypeCaches(typed_queue.Uint16Queue);
  typed_queue.Uint16Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint16Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint16List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint16Buffer, [core.int]),
    [_add$0]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint16Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint16Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint16Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint16Queue, I[55]);
  typed_queue.Int16Queue = class Int16Queue extends typed_queue._IntQueue$(typed_data.Int16List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int16Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t32;
      t32 = new typed_queue.Int16Queue.new(elements[$length]);
      return (() => {
        t32.addAll(elements);
        return t32;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int16Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeInt16List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int16Buffer.new(size);
    }
    [_add$0](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[36] || CT.C36, null, [element]));
    }
    get [_head$1]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[37] || CT.C37)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[38] || CT.C38, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[39] || CT.C39, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[42] || CT.C42)));
    }
    set [_head$1](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[43] || CT.C43, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[44] || CT.C44, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[45] || CT.C45, value));
    }
  };
  (typed_queue.Int16Queue.new = function(initialCapacity = null) {
    typed_queue.Int16Queue.__proto__.new.call(this, _native_typed_data.NativeInt16List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int16Queue.prototype;
  dart.addTypeTests(typed_queue.Int16Queue);
  dart.addTypeCaches(typed_queue.Int16Queue);
  typed_queue.Int16Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int16Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int16List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int16Buffer, [core.int]),
    [_add$0]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int16Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int16Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int16Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int16Queue, I[55]);
  typed_queue.Uint32Queue = class Uint32Queue extends typed_queue._IntQueue$(typed_data.Uint32List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint32Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t32;
      t32 = new typed_queue.Uint32Queue.new(elements[$length]);
      return (() => {
        t32.addAll(elements);
        return t32;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint32Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeUint32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint32Buffer.new(size);
    }
    [_add$0](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[36] || CT.C36, null, [element]));
    }
    get [_head$1]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[37] || CT.C37)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[38] || CT.C38, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[39] || CT.C39, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[42] || CT.C42)));
    }
    set [_head$1](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[43] || CT.C43, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[44] || CT.C44, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[45] || CT.C45, value));
    }
  };
  (typed_queue.Uint32Queue.new = function(initialCapacity = null) {
    typed_queue.Uint32Queue.__proto__.new.call(this, _native_typed_data.NativeUint32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint32Queue.prototype;
  dart.addTypeTests(typed_queue.Uint32Queue);
  dart.addTypeCaches(typed_queue.Uint32Queue);
  typed_queue.Uint32Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint32Buffer, [core.int]),
    [_add$0]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint32Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint32Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint32Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint32Queue, I[55]);
  typed_queue.Int32Queue = class Int32Queue extends typed_queue._IntQueue$(typed_data.Int32List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int32Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t32;
      t32 = new typed_queue.Int32Queue.new(elements[$length]);
      return (() => {
        t32.addAll(elements);
        return t32;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int32Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeInt32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int32Buffer.new(size);
    }
    [_add$0](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[36] || CT.C36, null, [element]));
    }
    get [_head$1]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[37] || CT.C37)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[38] || CT.C38, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[39] || CT.C39, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[42] || CT.C42)));
    }
    set [_head$1](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[43] || CT.C43, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[44] || CT.C44, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[45] || CT.C45, value));
    }
  };
  (typed_queue.Int32Queue.new = function(initialCapacity = null) {
    typed_queue.Int32Queue.__proto__.new.call(this, _native_typed_data.NativeInt32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int32Queue.prototype;
  dart.addTypeTests(typed_queue.Int32Queue);
  dart.addTypeCaches(typed_queue.Int32Queue);
  typed_queue.Int32Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int32Buffer, [core.int]),
    [_add$0]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int32Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int32Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int32Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int32Queue, I[55]);
  typed_queue.Uint64Queue = class Uint64Queue extends typed_queue._IntQueue$(typed_data.Uint64List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint64Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t32;
      t32 = new typed_queue.Uint64Queue.new(elements[$length]);
      return (() => {
        t32.addAll(elements);
        return t32;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint64Queue.fromList(elements);
    }
    [_createList](size) {
      return typed_data.Uint64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint64Buffer.new(size);
    }
    [_add$0](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[36] || CT.C36, null, [element]));
    }
    get [_head$1]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[37] || CT.C37)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[38] || CT.C38, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[39] || CT.C39, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[42] || CT.C42)));
    }
    set [_head$1](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[43] || CT.C43, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[44] || CT.C44, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[45] || CT.C45, value));
    }
  };
  (typed_queue.Uint64Queue.new = function(initialCapacity = null) {
    typed_queue.Uint64Queue.__proto__.new.call(this, typed_data.Uint64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint64Queue.prototype;
  dart.addTypeTests(typed_queue.Uint64Queue);
  dart.addTypeCaches(typed_queue.Uint64Queue);
  typed_queue.Uint64Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint64Buffer, [core.int]),
    [_add$0]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint64Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint64Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint64Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint64Queue, I[55]);
  typed_queue.Int64Queue = class Int64Queue extends typed_queue._IntQueue$(typed_data.Int64List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int64Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t32;
      t32 = new typed_queue.Int64Queue.new(elements[$length]);
      return (() => {
        t32.addAll(elements);
        return t32;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int64Queue.fromList(elements);
    }
    [_createList](size) {
      return typed_data.Int64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int64Buffer.new(size);
    }
    [_add$0](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[36] || CT.C36, null, [element]));
    }
    get [_head$1]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[37] || CT.C37)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[38] || CT.C38, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[39] || CT.C39, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[42] || CT.C42)));
    }
    set [_head$1](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[43] || CT.C43, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[44] || CT.C44, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[45] || CT.C45, value));
    }
  };
  (typed_queue.Int64Queue.new = function(initialCapacity = null) {
    typed_queue.Int64Queue.__proto__.new.call(this, typed_data.Int64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int64Queue.prototype;
  dart.addTypeTests(typed_queue.Int64Queue);
  dart.addTypeCaches(typed_queue.Int64Queue);
  typed_queue.Int64Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int64Buffer, [core.int]),
    [_add$0]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int64Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int64Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int64Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int64Queue, I[55]);
  typed_queue.Float32Queue = class Float32Queue extends typed_queue._FloatQueue$(typed_data.Float32List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Float32Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t32;
      t32 = new typed_queue.Float32Queue.new(elements[$length]);
      return (() => {
        t32.addAll(elements);
        return t32;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Float32Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeFloat32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float32Buffer.new(size);
    }
    [_add$0](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[36] || CT.C36, null, [element]));
    }
    get [_head$1]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[37] || CT.C37)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[38] || CT.C38, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[39] || CT.C39, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfdoubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[42] || CT.C42)));
    }
    set [_head$1](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[43] || CT.C43, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[44] || CT.C44, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[45] || CT.C45, value));
    }
  };
  (typed_queue.Float32Queue.new = function(initialCapacity = null) {
    typed_queue.Float32Queue.__proto__.new.call(this, _native_typed_data.NativeFloat32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float32Queue.prototype;
  dart.addTypeTests(typed_queue.Float32Queue);
  dart.addTypeCaches(typed_queue.Float32Queue);
  typed_queue.Float32Queue[dart.implements] = () => [queue_list.QueueList$(core.double)];
  dart.setMethodSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float32Buffer, [core.int]),
    [_add$0]: dart.fnType(dart.void, [core.double]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.double))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Float32Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float32Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float32Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float32Queue, I[55]);
  typed_queue.Float64Queue = class Float64Queue extends typed_queue._FloatQueue$(typed_data.Float64List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Float64Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t32;
      t32 = new typed_queue.Float64Queue.new(elements[$length]);
      return (() => {
        t32.addAll(elements);
        return t32;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Float64Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeFloat64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float64Buffer.new(size);
    }
    [_add$0](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[36] || CT.C36, null, [element]));
    }
    get [_head$1]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[37] || CT.C37)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[38] || CT.C38, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[39] || CT.C39, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfdoubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[42] || CT.C42)));
    }
    set [_head$1](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[43] || CT.C43, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[44] || CT.C44, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[45] || CT.C45, value));
    }
  };
  (typed_queue.Float64Queue.new = function(initialCapacity = null) {
    typed_queue.Float64Queue.__proto__.new.call(this, _native_typed_data.NativeFloat64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float64Queue.prototype;
  dart.addTypeTests(typed_queue.Float64Queue);
  dart.addTypeCaches(typed_queue.Float64Queue);
  typed_queue.Float64Queue[dart.implements] = () => [queue_list.QueueList$(core.double)];
  dart.setMethodSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float64Buffer, [core.int]),
    [_add$0]: dart.fnType(dart.void, [core.double]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.double))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Float64Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float64Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float64Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float64Queue, I[55]);
  typed_queue.Int32x4Queue = class Int32x4Queue extends typed_queue._TypedQueue$(typed_data.Int32x4, typed_data.Int32x4List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int32x4Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t32;
      t32 = new typed_queue.Int32x4Queue.new(elements[$length]);
      return (() => {
        t32.addAll(elements);
        return t32;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int32x4Queue.fromList(elements);
    }
    [_createList](size) {
      return new _native_typed_data.NativeInt32x4List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int32x4Buffer.new(size);
    }
    get [_defaultValue]() {
      return typed_queue.Int32x4Queue._zero;
    }
    [_add$0](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[36] || CT.C36, null, [element]));
    }
    get [_head$1]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[37] || CT.C37)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[38] || CT.C38, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[39] || CT.C39, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfInt32x4N().as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[42] || CT.C42)));
    }
    set [_head$1](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[43] || CT.C43, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[44] || CT.C44, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[45] || CT.C45, value));
    }
  };
  (typed_queue.Int32x4Queue.new = function(initialCapacity = null) {
    typed_queue.Int32x4Queue.__proto__.new.call(this, new _native_typed_data.NativeInt32x4List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int32x4Queue.prototype;
  dart.addTypeTests(typed_queue.Int32x4Queue);
  dart.addTypeCaches(typed_queue.Int32x4Queue);
  typed_queue.Int32x4Queue[dart.implements] = () => [queue_list.QueueList$(typed_data.Int32x4)];
  dart.setMethodSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int32x4Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int32x4List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int32x4Buffer, [core.int]),
    [_add$0]: dart.fnType(dart.void, [typed_data.Int32x4]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(typed_data.Int32x4))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int32x4Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int32x4Queue.__proto__),
    [_defaultValue]: typed_data.Int32x4,
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Int32x4)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int32x4Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Int32x4)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int32x4Queue, I[55]);
  dart.setStaticFieldSignature(typed_queue.Int32x4Queue, () => ['_zero']);
  dart.defineLazy(typed_queue.Int32x4Queue, {
    /*typed_queue.Int32x4Queue._zero*/get _zero() {
      return new _native_typed_data.NativeInt32x4.new(0, 0, 0, 0);
    }
  }, false);
  typed_queue.Float32x4Queue = class Float32x4Queue extends typed_queue._TypedQueue$(typed_data.Float32x4, typed_data.Float32x4List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Float32x4Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t32;
      t32 = new typed_queue.Float32x4Queue.new(elements[$length]);
      return (() => {
        t32.addAll(elements);
        return t32;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Float32x4Queue.fromList(elements);
    }
    [_createList](size) {
      return new _native_typed_data.NativeFloat32x4List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float32x4Buffer.new(size);
    }
    get [_defaultValue]() {
      return new _native_typed_data.NativeFloat32x4.zero();
    }
    [_add$0](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[36] || CT.C36, null, [element]));
    }
    get [_head$1]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[37] || CT.C37)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[38] || CT.C38, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[39] || CT.C39, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[40] || CT.C40, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfFloat32x4N().as(this[$noSuchMethod](new core._Invocation.getter(C[41] || CT.C41)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[42] || CT.C42)));
    }
    set [_head$1](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[43] || CT.C43, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[44] || CT.C44, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[45] || CT.C45, value));
    }
  };
  (typed_queue.Float32x4Queue.new = function(initialCapacity = null) {
    typed_queue.Float32x4Queue.__proto__.new.call(this, new _native_typed_data.NativeFloat32x4List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float32x4Queue.prototype;
  dart.addTypeTests(typed_queue.Float32x4Queue);
  dart.addTypeCaches(typed_queue.Float32x4Queue);
  typed_queue.Float32x4Queue[dart.implements] = () => [queue_list.QueueList$(typed_data.Float32x4)];
  dart.setMethodSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float32x4Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float32x4List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float32x4Buffer, [core.int]),
    [_add$0]: dart.fnType(dart.void, [typed_data.Float32x4]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(typed_data.Float32x4))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Float32x4Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float32x4Queue.__proto__),
    [_defaultValue]: typed_data.Float32x4,
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Float32x4)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float32x4Queue.__proto__),
    [_head$1]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Float32x4)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float32x4Queue, I[55]);
  typed_queue._chooseRealInitialCapacity = function _chooseRealInitialCapacity(initialCapacity) {
    if (initialCapacity == null || dart.notNull(initialCapacity) < 16) {
      return 16;
    } else if (!typed_queue._isPowerOf2(initialCapacity)) {
      return typed_queue._nextPowerOf2(initialCapacity);
    } else {
      return initialCapacity;
    }
  };
  typed_queue._isPowerOf2 = function _isPowerOf2(number) {
    return (number & number - 1) === 0;
  };
  typed_queue._nextPowerOf2 = function _nextPowerOf2(number) {
    if (!(number > 0)) dart.assertFailed(null, I[54], 690, 10, "number > 0");
    number = (number << 1 >>> 0) - 1;
    for (;;) {
      let nextNumber = (number & number - 1) >>> 0;
      if (nextNumber === 0) return number;
      number = nextNumber;
    }
  };
  dart.defineLazy(typed_queue, {
    /*typed_queue._defaultInitialCapacity*/get _defaultInitialCapacity() {
      return 16;
    }
  }, false);
  var objectStoreName$ = dart.privateName(storage_backend_js, "StorageBackendJs.objectStoreName");
  var supportsCompaction$ = dart.privateName(storage_backend_js, "StorageBackendJs.supportsCompaction");
  var _db$0 = dart.privateName(storage_backend_js, "_db");
  var _cipher$0 = dart.privateName(storage_backend_js, "_cipher");
  var _registry$ = dart.privateName(storage_backend_js, "_registry");
  var _isEncoded = dart.privateName(storage_backend_js, "_isEncoded");
  storage_backend_js.StorageBackendJs = class StorageBackendJs extends storage_backend.StorageBackend {
    get objectStoreName() {
      return this[objectStoreName$];
    }
    set objectStoreName(value) {
      super.objectStoreName = value;
    }
    get supportsCompaction() {
      return this[supportsCompaction$];
    }
    set supportsCompaction(value) {
      this[supportsCompaction$] = value;
    }
    static ['_#new#tearOff'](_db, _cipher, objectStoreName, _registry = C[10] || CT.C10) {
      return new storage_backend_js.StorageBackendJs.new(_db, _cipher, objectStoreName, _registry);
    }
    get path() {
      return null;
    }
    [_isEncoded](bytes) {
      return bytes[$length] >= storage_backend_js.StorageBackendJs._bytePrefix[$length] && bytes[$_get](0) === storage_backend_js.StorageBackendJs._bytePrefix[$_get](0) && bytes[$_get](1) === storage_backend_js.StorageBackendJs._bytePrefix[$_get](1);
    }
    encodeValue(frame) {
      let value = frame.value;
      if (this[_cipher$0] == null) {
        if (value == null) {
          return value;
        } else if (typed_data.Uint8List.is(value)) {
          if (!this[_isEncoded](value)) {
            return value[$buffer];
          }
        } else if (typeof value == 'number' || typeof value == 'boolean' || typeof value == 'string' || T$.ListOfnum().is(value) || T$.ListOfbool().is(value) || T$.ListOfString().is(value)) {
          return value;
        }
      }
      let frameWriter = new binary_writer_impl.BinaryWriterImpl.new(this[_registry$]);
      frameWriter.writeByteList(storage_backend_js.StorageBackendJs._bytePrefix, {writeLength: false});
      if (this[_cipher$0] == null) {
        frameWriter.write(dart.dynamic, value);
      } else {
        frameWriter.writeEncrypted(value, dart.nullCheck(this[_cipher$0]));
      }
      let bytes = frameWriter.toBytes();
      let sublist = bytes[$sublist](0, bytes[$length]);
      return sublist[$buffer];
    }
    decodeValue(value) {
      if (typed_data.ByteBuffer.is(value)) {
        let bytes = typed_data.Uint8List.view(value);
        if (this[_isEncoded](bytes)) {
          let reader = new binary_reader_impl.BinaryReaderImpl.new(bytes, this[_registry$]);
          reader.skip(2);
          if (this[_cipher$0] == null) {
            return reader.read();
          } else {
            return reader.readEncrypted(dart.nullCheck(this[_cipher$0]));
          }
        } else {
          return bytes;
        }
      } else {
        return value;
      }
    }
    getStore(write) {
      return this[_db$0][$transaction](this.objectStoreName, write ? "readwrite" : "readonly")[$objectStore](this.objectStoreName);
    }
    getKeys(opts) {
      let cursor = opts && 'cursor' in opts ? opts.cursor : false;
      let store = this.getStore(false);
      if (js_util.hasProperty(store, "getAllKeys") && !cursor) {
        let completer = T$.CompleterOfList().new();
        let request = this.getStore(false)[$getAllKeys](null);
        request[$onSuccess].listen(dart.fn(_ => {
          completer.complete(T$.ListN().as(request[$result]));
        }, T$.EventTovoid()));
        request[$onError].listen(dart.fn(_ => {
          completer.completeError(dart.nullCheck(request.error));
        }, T$.EventTovoid()));
        return completer.future;
      } else {
        return store[$openCursor]({autoAdvance: true}).map(T$.ObjectN(), dart.fn(e => e.key, T$.CursorWithValueToObjectN())).toList();
      }
    }
    getValues(opts) {
      let cursor = opts && 'cursor' in opts ? opts.cursor : false;
      let store = this.getStore(false);
      if (js_util.hasProperty(store, "getAll") && !cursor) {
        let completer = T$.CompleterOfIterable().new();
        let request = store[$getAll](null);
        request[$onSuccess].listen(dart.fn(_ => {
          let values = core.List.as(request[$result])[$map](dart.dynamic, dart.bind(this, 'decodeValue'));
          completer.complete(values);
        }, T$.EventTovoid()));
        request[$onError].listen(dart.fn(_ => {
          completer.completeError(dart.nullCheck(request.error));
        }, T$.EventTovoid()));
        return completer.future;
      } else {
        return store[$openCursor]({autoAdvance: true}).map(dart.dynamic, dart.fn(e => e[$value], T$.CursorWithValueTodynamic())).toList();
      }
    }
    initialize(registry, keystore, lazy) {
      return async.async(core.int, (function* initialize() {
        let t32;
        this[_registry$] = registry;
        let keys = (yield this.getKeys());
        if (!lazy) {
          let i = 0;
          let values = (yield this.getValues());
          for (let value of values) {
            let key = keys[$_get]((t32 = i, i = t32 + 1, t32));
            keystore.insert(new frame$.Frame.new(key, value), {notify: false});
          }
        } else {
          for (let key of keys) {
            keystore.insert(new frame$.Frame.lazy(key), {notify: false});
          }
        }
        return 0;
      }).bind(this));
    }
    readValue(frame) {
      return async.async(dart.dynamic, (function* readValue() {
        let value = (yield this.getStore(false)[$getObject](frame.key));
        return this.decodeValue(value);
      }).bind(this));
    }
    writeFrames(frames) {
      return async.async(dart.void, (function* writeFrames() {
        let store = this.getStore(true);
        for (let frame of frames) {
          if (frame.deleted) {
            yield store[$delete](frame.key);
          } else {
            yield store[$put](this.encodeValue(frame), frame.key);
          }
        }
      }).bind(this));
    }
    compact(frames) {
      dart.throw(new core.UnsupportedError.new("Not supported"));
    }
    clear() {
      return this.getStore(true)[$clear]();
    }
    close() {
      this[_db$0].close();
      return T$.FutureOfvoid().value();
    }
    deleteFromDisk() {
      return async.async(dart.void, (function* deleteFromDisk() {
        let t32, t32$;
        let indexDB = js.context.hasProperty("window") ? html.window[$indexedDB] : html.WorkerGlobalScope.instance.indexedDB;
        core.print("Delete " + dart.str(this[_db$0].name) + " // " + this.objectStoreName + " from disk");
        if ((t32 = this[_db$0].objectStoreNames, t32 == null ? null : t32[$length]) === 1) {
          yield dart.nullCheck(indexDB)[$deleteDatabase](dart.nullCheck(this[_db$0].name));
        } else {
          let db = (yield dart.nullCheck(indexDB)[$open](dart.nullCheck(this[_db$0].name), {version: 1, onUpgradeNeeded: dart.fn(e => {
              let t32;
              let db = indexed_db.Database.as(e[$target][$result]);
              if ((t32 = db.objectStoreNames, t32 == null ? T$.JSArrayOfString().of([]) : t32)[$contains](this.objectStoreName)) {
                db.deleteObjectStore(this.objectStoreName);
              }
            }, T$.VersionChangeEventTovoid())}));
          if ((t32$ = db.objectStoreNames, t32$ == null ? T$.JSArrayOfString().of([]) : t32$)[$isEmpty]) {
            yield indexDB[$deleteDatabase](dart.nullCheck(this[_db$0].name));
          }
        }
      }).bind(this));
    }
    flush() {
      return T$.FutureOfvoid().value();
    }
  };
  (storage_backend_js.StorageBackendJs.new = function(_db, _cipher, objectStoreName, _registry = C[10] || CT.C10) {
    this[supportsCompaction$] = false;
    this[_db$0] = _db;
    this[_cipher$0] = _cipher;
    this[objectStoreName$] = objectStoreName;
    this[_registry$] = _registry;
    ;
  }).prototype = storage_backend_js.StorageBackendJs.prototype;
  dart.addTypeTests(storage_backend_js.StorageBackendJs);
  dart.addTypeCaches(storage_backend_js.StorageBackendJs);
  dart.setMethodSignature(storage_backend_js.StorageBackendJs, () => ({
    __proto__: dart.getMethods(storage_backend_js.StorageBackendJs.__proto__),
    [_isEncoded]: dart.fnType(core.bool, [typed_data.Uint8List]),
    encodeValue: dart.fnType(dart.dynamic, [frame$.Frame]),
    decodeValue: dart.fnType(dart.dynamic, [dart.dynamic]),
    getStore: dart.fnType(indexed_db.ObjectStore, [core.bool]),
    getKeys: dart.fnType(async.Future$(core.List), [], {cursor: core.bool}, {}),
    getValues: dart.fnType(async.Future$(core.Iterable), [], {cursor: core.bool}, {}),
    initialize: dart.fnType(async.Future$(core.int), [hive.TypeRegistry, keystore$.Keystore, core.bool]),
    readValue: dart.fnType(async.Future, [frame$.Frame]),
    writeFrames: dart.fnType(async.Future$(dart.void), [core.List$(frame$.Frame)]),
    compact: dart.fnType(async.Future$(core.List$(frame$.Frame)), [core.Iterable$(frame$.Frame)]),
    clear: dart.fnType(async.Future$(dart.void), []),
    close: dart.fnType(async.Future$(dart.void), []),
    deleteFromDisk: dart.fnType(async.Future$(dart.void), []),
    flush: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(storage_backend_js.StorageBackendJs, () => ({
    __proto__: dart.getGetters(storage_backend_js.StorageBackendJs.__proto__),
    path: dart.nullable(core.String)
  }));
  dart.setLibraryUri(storage_backend_js.StorageBackendJs, I[56]);
  dart.setFieldSignature(storage_backend_js.StorageBackendJs, () => ({
    __proto__: dart.getFields(storage_backend_js.StorageBackendJs.__proto__),
    [_db$0]: dart.finalFieldType(indexed_db.Database),
    [_cipher$0]: dart.finalFieldType(dart.nullable(hive.HiveCipher)),
    objectStoreName: dart.finalFieldType(core.String),
    [_registry$]: dart.fieldType(hive.TypeRegistry),
    supportsCompaction: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(storage_backend_js.StorageBackendJs, () => ['_bytePrefix']);
  dart.defineLazy(storage_backend_js.StorageBackendJs, {
    /*storage_backend_js.StorageBackendJs._bytePrefix*/get _bytePrefix() {
      return C[46] || CT.C46;
    }
  }, false);
  var _buffer = dart.privateName(typed_buffer, "_buffer");
  var _length$ = dart.privateName(typed_buffer, "_length");
  var _typedBuffer = dart.privateName(typed_buffer, "_typedBuffer");
  var _defaultValue$ = dart.privateName(typed_buffer, "_defaultValue");
  var _createBuffer$ = dart.privateName(typed_buffer, "_createBuffer");
  var _createBiggerBuffer = dart.privateName(typed_buffer, "_createBiggerBuffer");
  var _grow$0 = dart.privateName(typed_buffer, "_grow");
  var _add$1 = dart.privateName(typed_buffer, "_add");
  var _addAll = dart.privateName(typed_buffer, "_addAll");
  var _insertKnownLength = dart.privateName(typed_buffer, "_insertKnownLength");
  var _ensureCapacity = dart.privateName(typed_buffer, "_ensureCapacity");
  var _setRange = dart.privateName(typed_buffer, "_setRange");
  const _is_TypedDataBuffer_default = Symbol('_is_TypedDataBuffer_default');
  typed_buffer.TypedDataBuffer$ = dart.generic(E => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$TypedDataBufferOfE = () => (__t$TypedDataBufferOfE = dart.constFn(typed_buffer.TypedDataBuffer$(E)))();
    class TypedDataBuffer extends collection.ListBase$(E) {
      get [_typedBuffer]() {
        return typed_data.TypedData.as(this[_buffer]);
      }
      get length() {
        return this[_length$];
      }
      _get(index) {
        if (index >= this.length) dart.throw(new core.IndexError.new(index, this));
        return this[_buffer][$_get](index);
      }
      _set(index, value$) {
        let value = value$;
        E.as(value);
        if (index >= this.length) dart.throw(new core.IndexError.new(index, this));
        this[_buffer][$_set](index, value);
        return value$;
      }
      set length(newLength) {
        if (newLength < this[_length$]) {
          let defaultValue = this[_defaultValue$];
          for (let i = newLength; i < this[_length$]; i = i + 1) {
            this[_buffer][$_set](i, defaultValue);
          }
        } else if (newLength > this[_buffer][$length]) {
          let newBuffer = null;
          if (this[_buffer][$isEmpty]) {
            newBuffer = this[_createBuffer$](newLength);
          } else {
            newBuffer = this[_createBiggerBuffer](newLength);
          }
          newBuffer[$setRange](0, this[_length$], this[_buffer]);
          this[_buffer] = newBuffer;
        }
        this[_length$] = newLength;
      }
      [_add$1](value) {
        let t32;
        if (this[_length$] === this[_buffer][$length]) this[_grow$0](this[_length$]);
        this[_buffer][$_set]((t32 = this[_length$], this[_length$] = t32 + 1, t32), value);
      }
      add(element) {
        E.as(element);
        this[_add$1](element);
      }
      addAll(values, start = 0, end = null) {
        __t$IterableOfE().as(values);
        core.RangeError.checkNotNegative(start, "start");
        if (end != null && start > dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, null, "end"));
        }
        this[_addAll](values, start, end);
      }
      insertAll(index, values, start = 0, end = null) {
        let t32;
        __t$IterableOfE().as(values);
        core.RangeError.checkValidIndex(index, this, "index", this[_length$] + 1);
        core.RangeError.checkNotNegative(start, "start");
        if (end != null) {
          if (start > dart.notNull(end)) {
            dart.throw(new core.RangeError.range(end, start, null, "end"));
          }
          if (start === end) return;
        }
        if (index === this[_length$]) {
          this[_addAll](values, start, end);
          return;
        }
        if (end == null && core.List.is(values)) {
          end = values[$length];
        }
        if (end != null) {
          this[_insertKnownLength](index, values, start, end);
          return;
        }
        let writeIndex = this[_length$];
        let skipCount = start;
        for (let value of values) {
          if (skipCount > 0) {
            skipCount = skipCount - 1;
            continue;
          }
          if (writeIndex === this[_buffer][$length]) {
            this[_grow$0](writeIndex);
          }
          this[_buffer][$_set]((t32 = writeIndex, writeIndex = t32 + 1, t32), value);
        }
        if (skipCount > 0) {
          dart.throw(new core.StateError.new("Too few elements"));
        }
        if (end != null && writeIndex < dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, writeIndex, "end"));
        }
        typed_buffer.TypedDataBuffer._reverse(this[_buffer], index, this[_length$]);
        typed_buffer.TypedDataBuffer._reverse(this[_buffer], this[_length$], writeIndex);
        typed_buffer.TypedDataBuffer._reverse(this[_buffer], index, writeIndex);
        this[_length$] = writeIndex;
        return;
      }
      static _reverse(buffer, start, end) {
        end = end - 1;
        while (start < end) {
          let first = buffer[$_get](start);
          let last = buffer[$_get](end);
          buffer[$_set](end, first);
          buffer[$_set](start, last);
          start = start + 1;
          end = end - 1;
        }
      }
      [_addAll](values, start = 0, end = null) {
        if (core.List.is(values)) end == null ? end = values[$length] : null;
        if (end != null) {
          this[_insertKnownLength](this[_length$], values, start, end);
          return;
        }
        let i = 0;
        for (let value of values) {
          if (i >= start) this.add(value);
          i = i + 1;
        }
        if (i < start) dart.throw(new core.StateError.new("Too few elements"));
      }
      [_insertKnownLength](index, values, start, end) {
        if (core.List.is(values)) {
          if (start > values[$length] || end > values[$length]) {
            dart.throw(new core.StateError.new("Too few elements"));
          }
        }
        let valuesLength = end - start;
        let newLength = this[_length$] + valuesLength;
        this[_ensureCapacity](newLength);
        this[_buffer][$setRange](index + valuesLength, this[_length$] + valuesLength, this[_buffer], index);
        this[_buffer][$setRange](index, index + valuesLength, values, start);
        this[_length$] = newLength;
      }
      insert(index, element) {
        E.as(element);
        if (index < 0 || index > this[_length$]) {
          dart.throw(new core.RangeError.range(index, 0, this[_length$]));
        }
        if (this[_length$] < this[_buffer][$length]) {
          this[_buffer][$setRange](index + 1, this[_length$] + 1, this[_buffer], index);
          this[_buffer][$_set](index, element);
          this[_length$] = this[_length$] + 1;
          return;
        }
        let newBuffer = this[_createBiggerBuffer](null);
        newBuffer[$setRange](0, index, this[_buffer]);
        newBuffer[$setRange](index + 1, this[_length$] + 1, this[_buffer], index);
        newBuffer[$_set](index, element);
        this[_length$] = this[_length$] + 1;
        this[_buffer] = newBuffer;
      }
      [_ensureCapacity](requiredCapacity) {
        if (requiredCapacity <= this[_buffer][$length]) return;
        let newBuffer = this[_createBiggerBuffer](requiredCapacity);
        newBuffer[$setRange](0, this[_length$], this[_buffer]);
        this[_buffer] = newBuffer;
      }
      [_createBiggerBuffer](requiredCapacity) {
        let newLength = this[_buffer][$length] * 2;
        if (requiredCapacity != null && dart.notNull(newLength) < dart.notNull(requiredCapacity)) {
          newLength = requiredCapacity;
        } else if (dart.notNull(newLength) < 8) {
          newLength = 8;
        }
        return this[_createBuffer$](newLength);
      }
      [_grow$0](length) {
        let t32;
        this[_buffer] = (t32 = this[_createBiggerBuffer](null), (() => {
          t32[$setRange](0, length, this[_buffer]);
          return t32;
        })());
      }
      setRange(start, end, iterable, skipCount = 0) {
        __t$IterableOfE().as(iterable);
        if (end > this[_length$]) dart.throw(new core.RangeError.range(end, 0, this[_length$]));
        this[_setRange](start, end, iterable, skipCount);
      }
      [_setRange](start, end, source, skipCount) {
        if (__t$TypedDataBufferOfE().is(source)) {
          this[_buffer][$setRange](start, end, source[_buffer], skipCount);
        } else {
          this[_buffer][$setRange](start, end, source, skipCount);
        }
      }
      get elementSizeInBytes() {
        return this[_typedBuffer][$elementSizeInBytes];
      }
      get lengthInBytes() {
        return this[_length$] * this[_typedBuffer][$elementSizeInBytes];
      }
      get offsetInBytes() {
        return this[_typedBuffer][$offsetInBytes];
      }
      get buffer() {
        return this[_typedBuffer][$buffer];
      }
    }
    (TypedDataBuffer.new = function(buffer) {
      this[_buffer] = buffer;
      this[_length$] = buffer[$length];
      ;
    }).prototype = TypedDataBuffer.prototype;
    dart.addTypeTests(TypedDataBuffer);
    TypedDataBuffer.prototype[_is_TypedDataBuffer_default] = true;
    dart.addTypeCaches(TypedDataBuffer);
    dart.setMethodSignature(TypedDataBuffer, () => ({
      __proto__: dart.getMethods(TypedDataBuffer.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [_add$1]: dart.fnType(dart.void, [E]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)], [core.int, dart.nullable(core.int)]),
      [$addAll]: dart.fnType(dart.void, [dart.nullable(core.Object)], [core.int, dart.nullable(core.int)]),
      insertAll: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)], [core.int, dart.nullable(core.int)]),
      [$insertAll]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)], [core.int, dart.nullable(core.int)]),
      [_addAll]: dart.fnType(dart.void, [core.Iterable$(E)], [core.int, dart.nullable(core.int)]),
      [_insertKnownLength]: dart.fnType(dart.void, [core.int, core.Iterable$(E), core.int, core.int]),
      [_ensureCapacity]: dart.fnType(dart.void, [core.int]),
      [_createBiggerBuffer]: dart.fnType(core.List$(E), [dart.nullable(core.int)]),
      [_grow$0]: dart.fnType(dart.void, [core.int]),
      [_setRange]: dart.fnType(dart.void, [core.int, core.int, core.Iterable$(E), core.int])
    }));
    dart.setStaticMethodSignature(TypedDataBuffer, () => ['_reverse']);
    dart.setGetterSignature(TypedDataBuffer, () => ({
      __proto__: dart.getGetters(TypedDataBuffer.__proto__),
      [_typedBuffer]: typed_data.TypedData,
      length: core.int,
      [$length]: core.int,
      elementSizeInBytes: core.int,
      lengthInBytes: core.int,
      offsetInBytes: core.int,
      buffer: typed_data.ByteBuffer
    }));
    dart.setSetterSignature(TypedDataBuffer, () => ({
      __proto__: dart.getSetters(TypedDataBuffer.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(TypedDataBuffer, I[57]);
    dart.setFieldSignature(TypedDataBuffer, () => ({
      __proto__: dart.getFields(TypedDataBuffer.__proto__),
      [_buffer]: dart.fieldType(core.List$(E)),
      [_length$]: dart.fieldType(core.int)
    }));
    dart.setStaticFieldSignature(TypedDataBuffer, () => ['_initialLength']);
    dart.defineExtensionMethods(TypedDataBuffer, [
      '_get',
      '_set',
      'add',
      'addAll',
      'insertAll',
      'insert',
      'setRange'
    ]);
    dart.defineExtensionAccessors(TypedDataBuffer, ['length']);
    return TypedDataBuffer;
  });
  typed_buffer.TypedDataBuffer = typed_buffer.TypedDataBuffer$();
  dart.defineLazy(typed_buffer.TypedDataBuffer, {
    /*typed_buffer.TypedDataBuffer._initialLength*/get _initialLength() {
      return 8;
    }
  }, false);
  dart.addTypeTests(typed_buffer.TypedDataBuffer, _is_TypedDataBuffer_default);
  typed_buffer._IntBuffer = class _IntBuffer extends typed_buffer.TypedDataBuffer$(core.int) {
    get [_defaultValue$]() {
      return 0;
    }
  };
  (typed_buffer._IntBuffer.new = function(buffer) {
    typed_buffer._IntBuffer.__proto__.new.call(this, buffer);
    ;
  }).prototype = typed_buffer._IntBuffer.prototype;
  dart.addTypeTests(typed_buffer._IntBuffer);
  dart.addTypeCaches(typed_buffer._IntBuffer);
  dart.setGetterSignature(typed_buffer._IntBuffer, () => ({
    __proto__: dart.getGetters(typed_buffer._IntBuffer.__proto__),
    [_defaultValue$]: core.int
  }));
  dart.setLibraryUri(typed_buffer._IntBuffer, I[57]);
  typed_buffer._FloatBuffer = class _FloatBuffer extends typed_buffer.TypedDataBuffer$(core.double) {
    get [_defaultValue$]() {
      return 0;
    }
  };
  (typed_buffer._FloatBuffer.new = function(buffer) {
    typed_buffer._FloatBuffer.__proto__.new.call(this, buffer);
    ;
  }).prototype = typed_buffer._FloatBuffer.prototype;
  dart.addTypeTests(typed_buffer._FloatBuffer);
  dart.addTypeCaches(typed_buffer._FloatBuffer);
  dart.setGetterSignature(typed_buffer._FloatBuffer, () => ({
    __proto__: dart.getGetters(typed_buffer._FloatBuffer.__proto__),
    [_defaultValue$]: core.double
  }));
  dart.setLibraryUri(typed_buffer._FloatBuffer, I[57]);
  typed_buffer.Uint8Buffer = class Uint8Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint8Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeUint8List.new(size);
    }
  };
  (typed_buffer.Uint8Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint8Buffer.__proto__.new.call(this, _native_typed_data.NativeUint8List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint8Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint8Buffer);
  dart.addTypeCaches(typed_buffer.Uint8Buffer);
  dart.setMethodSignature(typed_buffer.Uint8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint8Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint8List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint8Buffer, I[57]);
  typed_buffer.Int8Buffer = class Int8Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int8Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeInt8List.new(size);
    }
  };
  (typed_buffer.Int8Buffer.new = function(initialLength = 0) {
    typed_buffer.Int8Buffer.__proto__.new.call(this, _native_typed_data.NativeInt8List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int8Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int8Buffer);
  dart.addTypeCaches(typed_buffer.Int8Buffer);
  dart.setMethodSignature(typed_buffer.Int8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int8Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int8List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Int8Buffer, I[57]);
  typed_buffer.Uint8ClampedBuffer = class Uint8ClampedBuffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint8ClampedBuffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeUint8ClampedList.new(size);
    }
  };
  (typed_buffer.Uint8ClampedBuffer.new = function(initialLength = 0) {
    typed_buffer.Uint8ClampedBuffer.__proto__.new.call(this, _native_typed_data.NativeUint8ClampedList.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint8ClampedBuffer.prototype;
  dart.addTypeTests(typed_buffer.Uint8ClampedBuffer);
  dart.addTypeCaches(typed_buffer.Uint8ClampedBuffer);
  dart.setMethodSignature(typed_buffer.Uint8ClampedBuffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint8ClampedBuffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint8ClampedList, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint8ClampedBuffer, I[57]);
  typed_buffer.Uint16Buffer = class Uint16Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint16Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeUint16List.new(size);
    }
  };
  (typed_buffer.Uint16Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint16Buffer.__proto__.new.call(this, _native_typed_data.NativeUint16List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint16Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint16Buffer);
  dart.addTypeCaches(typed_buffer.Uint16Buffer);
  dart.setMethodSignature(typed_buffer.Uint16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint16Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint16List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint16Buffer, I[57]);
  typed_buffer.Int16Buffer = class Int16Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int16Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeInt16List.new(size);
    }
  };
  (typed_buffer.Int16Buffer.new = function(initialLength = 0) {
    typed_buffer.Int16Buffer.__proto__.new.call(this, _native_typed_data.NativeInt16List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int16Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int16Buffer);
  dart.addTypeCaches(typed_buffer.Int16Buffer);
  dart.setMethodSignature(typed_buffer.Int16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int16Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int16List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Int16Buffer, I[57]);
  typed_buffer.Uint32Buffer = class Uint32Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint32Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeUint32List.new(size);
    }
  };
  (typed_buffer.Uint32Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint32Buffer.__proto__.new.call(this, _native_typed_data.NativeUint32List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint32Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint32Buffer);
  dart.addTypeCaches(typed_buffer.Uint32Buffer);
  dart.setMethodSignature(typed_buffer.Uint32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint32Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint32Buffer, I[57]);
  typed_buffer.Int32Buffer = class Int32Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int32Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeInt32List.new(size);
    }
  };
  (typed_buffer.Int32Buffer.new = function(initialLength = 0) {
    typed_buffer.Int32Buffer.__proto__.new.call(this, _native_typed_data.NativeInt32List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int32Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int32Buffer);
  dart.addTypeCaches(typed_buffer.Int32Buffer);
  dart.setMethodSignature(typed_buffer.Int32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int32Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Int32Buffer, I[57]);
  typed_buffer.Uint64Buffer = class Uint64Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint64Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return typed_data.Uint64List.new(size);
    }
  };
  (typed_buffer.Uint64Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint64Buffer.__proto__.new.call(this, typed_data.Uint64List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint64Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint64Buffer);
  dart.addTypeCaches(typed_buffer.Uint64Buffer);
  dart.setMethodSignature(typed_buffer.Uint64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint64Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint64Buffer, I[57]);
  typed_buffer.Int64Buffer = class Int64Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int64Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return typed_data.Int64List.new(size);
    }
  };
  (typed_buffer.Int64Buffer.new = function(initialLength = 0) {
    typed_buffer.Int64Buffer.__proto__.new.call(this, typed_data.Int64List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int64Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int64Buffer);
  dart.addTypeCaches(typed_buffer.Int64Buffer);
  dart.setMethodSignature(typed_buffer.Int64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int64Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Int64Buffer, I[57]);
  typed_buffer.Float32Buffer = class Float32Buffer extends typed_buffer._FloatBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Float32Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeFloat32List.new(size);
    }
  };
  (typed_buffer.Float32Buffer.new = function(initialLength = 0) {
    typed_buffer.Float32Buffer.__proto__.new.call(this, _native_typed_data.NativeFloat32List.new(initialLength));
    ;
  }).prototype = typed_buffer.Float32Buffer.prototype;
  dart.addTypeTests(typed_buffer.Float32Buffer);
  dart.addTypeCaches(typed_buffer.Float32Buffer);
  dart.setMethodSignature(typed_buffer.Float32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Float32Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Float32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Float32Buffer, I[57]);
  typed_buffer.Float64Buffer = class Float64Buffer extends typed_buffer._FloatBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Float64Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeFloat64List.new(size);
    }
  };
  (typed_buffer.Float64Buffer.new = function(initialLength = 0) {
    typed_buffer.Float64Buffer.__proto__.new.call(this, _native_typed_data.NativeFloat64List.new(initialLength));
    ;
  }).prototype = typed_buffer.Float64Buffer.prototype;
  dart.addTypeTests(typed_buffer.Float64Buffer);
  dart.addTypeCaches(typed_buffer.Float64Buffer);
  dart.setMethodSignature(typed_buffer.Float64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Float64Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Float64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Float64Buffer, I[57]);
  typed_buffer.Int32x4Buffer = class Int32x4Buffer extends typed_buffer.TypedDataBuffer$(typed_data.Int32x4) {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int32x4Buffer.new(initialLength);
    }
    get [_defaultValue$]() {
      return typed_buffer.Int32x4Buffer._zero;
    }
    [_createBuffer$](size) {
      return new _native_typed_data.NativeInt32x4List.new(size);
    }
  };
  (typed_buffer.Int32x4Buffer.new = function(initialLength = 0) {
    typed_buffer.Int32x4Buffer.__proto__.new.call(this, new _native_typed_data.NativeInt32x4List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int32x4Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int32x4Buffer);
  dart.addTypeCaches(typed_buffer.Int32x4Buffer);
  dart.setMethodSignature(typed_buffer.Int32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int32x4Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int32x4List, [core.int])
  }));
  dart.setGetterSignature(typed_buffer.Int32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffer.Int32x4Buffer.__proto__),
    [_defaultValue$]: typed_data.Int32x4
  }));
  dart.setLibraryUri(typed_buffer.Int32x4Buffer, I[57]);
  dart.setStaticFieldSignature(typed_buffer.Int32x4Buffer, () => ['_zero']);
  dart.defineLazy(typed_buffer.Int32x4Buffer, {
    /*typed_buffer.Int32x4Buffer._zero*/get _zero() {
      return new _native_typed_data.NativeInt32x4.new(0, 0, 0, 0);
    }
  }, false);
  typed_buffer.Float32x4Buffer = class Float32x4Buffer extends typed_buffer.TypedDataBuffer$(typed_data.Float32x4) {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Float32x4Buffer.new(initialLength);
    }
    get [_defaultValue$]() {
      return new _native_typed_data.NativeFloat32x4.zero();
    }
    [_createBuffer$](size) {
      return new _native_typed_data.NativeFloat32x4List.new(size);
    }
  };
  (typed_buffer.Float32x4Buffer.new = function(initialLength = 0) {
    typed_buffer.Float32x4Buffer.__proto__.new.call(this, new _native_typed_data.NativeFloat32x4List.new(initialLength));
    ;
  }).prototype = typed_buffer.Float32x4Buffer.prototype;
  dart.addTypeTests(typed_buffer.Float32x4Buffer);
  dart.addTypeCaches(typed_buffer.Float32x4Buffer);
  dart.setMethodSignature(typed_buffer.Float32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Float32x4Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Float32x4List, [core.int])
  }));
  dart.setGetterSignature(typed_buffer.Float32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffer.Float32x4Buffer.__proto__),
    [_defaultValue$]: typed_data.Float32x4
  }));
  dart.setLibraryUri(typed_buffer.Float32x4Buffer, I[57]);
  var _buffer$0 = dart.privateName(binary_writer_impl, "_buffer");
  var _byteDataInstance = dart.privateName(binary_writer_impl, "_byteDataInstance");
  var _offset$ = dart.privateName(binary_writer_impl, "_offset");
  var _typeRegistry$ = dart.privateName(binary_writer_impl, "_typeRegistry");
  var _byteData$ = dart.privateName(binary_writer_impl, "_byteData");
  var _increaseBufferSize = dart.privateName(binary_writer_impl, "_increaseBufferSize");
  var _reserveBytes = dart.privateName(binary_writer_impl, "_reserveBytes");
  var _addBytes = dart.privateName(binary_writer_impl, "_addBytes");
  var _writeList = dart.privateName(binary_writer_impl, "_writeList");
  binary_writer_impl.BinaryWriterImpl = class BinaryWriterImpl extends hive.BinaryWriter {
    get [_byteData$]() {
      this[_byteDataInstance] == null ? this[_byteDataInstance] = typed_data.ByteData.view(this[_buffer$0][$buffer]) : null;
      return dart.nullCheck(this[_byteDataInstance]);
    }
    static ['_#new#tearOff'](typeRegistry) {
      return new binary_writer_impl.BinaryWriterImpl.new(typeRegistry);
    }
    static ['_#withBuffer#tearOff'](_buffer, _typeRegistry) {
      return new binary_writer_impl.BinaryWriterImpl.withBuffer(_buffer, _typeRegistry);
    }
    [_reserveBytes](count) {
      if (this[_buffer$0][$length] - this[_offset$] < count) {
        this[_increaseBufferSize](count);
      }
    }
    [_increaseBufferSize](count) {
      let newSize = binary_writer_impl.BinaryWriterImpl._pow2roundup((this[_offset$] + count) * 2);
      let newBuffer = _native_typed_data.NativeUint8List.new(newSize);
      newBuffer[$setRange](0, this[_offset$], this[_buffer$0]);
      this[_buffer$0] = newBuffer;
      this[_byteDataInstance] = null;
    }
    [_addBytes](bytes) {
      core.ArgumentError.checkNotNull(T$.ListOfint(), bytes);
      let length = bytes[$length];
      this[_reserveBytes](length);
      this[_buffer$0][$setRange](this[_offset$], this[_offset$] + length, bytes);
      this[_offset$] = this[_offset$] + length;
    }
    writeByte(byte) {
      let t32;
      core.ArgumentError.checkNotNull(core.int, byte);
      this[_reserveBytes](1);
      this[_buffer$0][$_set]((t32 = this[_offset$], this[_offset$] = t32 + 1, t32), byte);
    }
    writeWord(value) {
      let t32, t32$;
      core.ArgumentError.checkNotNull(core.int, value);
      this[_reserveBytes](2);
      this[_buffer$0][$_set]((t32 = this[_offset$], this[_offset$] = t32 + 1, t32), value);
      this[_buffer$0][$_set]((t32$ = this[_offset$], this[_offset$] = t32$ + 1, t32$), value[$rightShift](8));
    }
    writeInt32(value) {
      core.ArgumentError.checkNotNull(core.int, value);
      this[_reserveBytes](4);
      this[_byteData$][$setInt32](this[_offset$], value, typed_data.Endian.little);
      this[_offset$] = this[_offset$] + 4;
    }
    writeUint32(value) {
      core.ArgumentError.checkNotNull(core.int, value);
      this[_reserveBytes](4);
      extensions['ListIntX|writeUint32'](this[_buffer$0], this[_offset$], value);
      this[_offset$] = this[_offset$] + 4;
    }
    writeInt(value) {
      this.writeDouble(value[$toDouble]());
    }
    writeDouble(value) {
      core.ArgumentError.checkNotNull(core.double, value);
      this[_reserveBytes](8);
      this[_byteData$][$setFloat64](this[_offset$], value, typed_data.Endian.little);
      this[_offset$] = this[_offset$] + 8;
    }
    writeBool(value) {
      core.ArgumentError.checkNotNull(core.bool, value);
      this.writeByte(value ? 1 : 0);
    }
    writeString(value, opts) {
      let writeByteCount = opts && 'writeByteCount' in opts ? opts.writeByteCount : true;
      let encoder = opts && 'encoder' in opts ? opts.encoder : C[2] || CT.C2;
      core.ArgumentError.checkNotNull(core.String, value);
      let bytes = encoder.convert(value);
      if (writeByteCount) {
        this.writeUint32(bytes[$length]);
      }
      this[_addBytes](bytes);
    }
    writeByteList(bytes, opts) {
      let writeLength = opts && 'writeLength' in opts ? opts.writeLength : true;
      core.ArgumentError.checkNotNull(T$.ListOfint(), bytes);
      if (writeLength) {
        this.writeUint32(bytes[$length]);
      }
      this[_addBytes](bytes);
    }
    writeIntList(list, opts) {
      let writeLength = opts && 'writeLength' in opts ? opts.writeLength : true;
      core.ArgumentError.checkNotNull(T$.ListOfint(), list);
      let length = list[$length];
      if (writeLength) {
        this.writeUint32(length);
      }
      this[_reserveBytes](length * 8);
      let byteData = this[_byteData$];
      for (let i = 0; i < length; i = i + 1) {
        byteData[$setFloat64](this[_offset$], list[$_get](i)[$toDouble](), typed_data.Endian.little);
        this[_offset$] = this[_offset$] + 8;
      }
    }
    writeDoubleList(list, opts) {
      let writeLength = opts && 'writeLength' in opts ? opts.writeLength : true;
      core.ArgumentError.checkNotNull(T$.ListOfdouble(), list);
      let length = list[$length];
      if (writeLength) {
        this.writeUint32(length);
      }
      this[_reserveBytes](length * 8);
      let byteData = this[_byteData$];
      for (let i = 0; i < length; i = i + 1) {
        byteData[$setFloat64](this[_offset$], list[$_get](i), typed_data.Endian.little);
        this[_offset$] = this[_offset$] + 8;
      }
    }
    writeBoolList(list, opts) {
      let t32;
      let writeLength = opts && 'writeLength' in opts ? opts.writeLength : true;
      core.ArgumentError.checkNotNull(T$.ListOfbool(), list);
      let length = list[$length];
      if (writeLength) {
        this.writeUint32(length);
      }
      this[_reserveBytes](length);
      for (let i = 0; i < length; i = i + 1) {
        this[_buffer$0][$_set]((t32 = this[_offset$], this[_offset$] = t32 + 1, t32), list[$_get](i) ? 1 : 0);
      }
    }
    writeStringList(list, opts) {
      let writeLength = opts && 'writeLength' in opts ? opts.writeLength : true;
      let encoder = opts && 'encoder' in opts ? opts.encoder : C[2] || CT.C2;
      core.ArgumentError.checkNotNull(T$.ListOfString(), list);
      if (writeLength) {
        this.writeUint32(list[$length]);
      }
      for (let str of list) {
        let strBytes = encoder.convert(str);
        this.writeUint32(strBytes[$length]);
        this[_addBytes](strBytes);
      }
    }
    writeList(list, opts) {
      let writeLength = opts && 'writeLength' in opts ? opts.writeLength : true;
      core.ArgumentError.checkNotNull(core.List, list);
      if (writeLength) {
        this.writeUint32(list[$length]);
      }
      for (let i = 0; i < list[$length]; i = i + 1) {
        this.write(dart.dynamic, list[$_get](i));
      }
    }
    writeMap(map, opts) {
      let writeLength = opts && 'writeLength' in opts ? opts.writeLength : true;
      core.ArgumentError.checkNotNull(core.Map, map);
      if (writeLength) {
        this.writeUint32(map[$length]);
      }
      for (let key of map[$keys]) {
        this.write(dart.dynamic, key);
        this.write(dart.dynamic, map[$_get](key));
      }
    }
    writeKey(key) {
      core.ArgumentError.checkNotNull(core.Object, key);
      if (typeof key == 'string') {
        this.writeByte(1);
        let bytes = hive.BinaryWriter.utf8Encoder.convert(key);
        this.writeByte(bytes[$length]);
        this[_addBytes](bytes);
      } else {
        this.writeByte(0);
        this.writeUint32(core.int.as(key));
      }
    }
    writeHiveList(list, opts) {
      let writeLength = opts && 'writeLength' in opts ? opts.writeLength : true;
      core.ArgumentError.checkNotNull(T$.HiveListOfHiveObjectMixin(), list);
      if (writeLength) {
        this.writeUint32(list[$length]);
      }
      let boxName = T$.HiveListImplOfHiveObjectMixin().as(list).boxName;
      this.writeByte(boxName.length);
      this[_addBytes](boxName[$codeUnits]);
      for (let obj of list) {
        this.writeKey(obj.key);
      }
    }
    writeFrame(frame, opts) {
      let t32, t32$;
      let cipher = opts && 'cipher' in opts ? opts.cipher : null;
      core.ArgumentError.checkNotNull(frame$.Frame, frame);
      let startOffset = this[_offset$];
      this[_reserveBytes](4);
      this[_offset$] = this[_offset$] + 4;
      this.writeKey(frame.key);
      if (!frame.deleted) {
        if (cipher == null) {
          this.write(dart.dynamic, frame.value);
        } else {
          this.writeEncrypted(frame.value, cipher);
        }
      }
      let frameLength = this[_offset$] - startOffset + 4;
      extensions['ListIntX|writeUint32'](this[_buffer$0], startOffset, frameLength);
      let crc = crc32.Crc32.compute(this[_buffer$0], {offset: startOffset, length: frameLength - 4, crc: (t32$ = (t32 = cipher, t32 == null ? null : t32.calculateKeyCrc()), t32$ == null ? 0 : t32$)});
      this.writeUint32(crc);
      return frameLength;
    }
    write(T, value, opts) {
      let writeTypeId = opts && 'writeTypeId' in opts ? opts.writeTypeId : true;
      if (value == null) {
        if (writeTypeId) {
          this.writeByte(0);
        }
      } else if (core.int.is(value)) {
        if (writeTypeId) {
          this.writeByte(1);
        }
        this.writeInt(value);
      } else if (typeof value == 'number') {
        if (writeTypeId) {
          this.writeByte(2);
        }
        this.writeDouble(value);
      } else if (typeof value == 'boolean') {
        if (writeTypeId) {
          this.writeByte(3);
        }
        this.writeBool(value);
      } else if (typeof value == 'string') {
        if (writeTypeId) {
          this.writeByte(4);
        }
        this.writeString(value);
      } else if (core.List.is(value)) {
        this[_writeList](value, {writeTypeId: writeTypeId});
      } else if (core.Map.is(value)) {
        if (writeTypeId) {
          this.writeByte(11);
        }
        this.writeMap(value);
      } else {
        let resolved = this[_typeRegistry$].findAdapterForValue(value);
        if (resolved == null) {
          dart.throw(new hive.HiveError.new("Cannot write, unknown type: " + dart.str(dart.runtimeType(value)) + ". " + "Did you forget to register an adapter?"));
        }
        if (writeTypeId) {
          this.writeByte(resolved.typeId);
        }
        resolved.adapter.write(this, value);
      }
    }
    [_writeList](value, opts) {
      let writeTypeId = opts && 'writeTypeId' in opts ? opts.writeTypeId : true;
      if (T$.HiveListOfHiveObjectMixin().is(value)) {
        if (writeTypeId) {
          this.writeByte(12);
        }
        this.writeHiveList(value);
      } else if (value[$contains](null)) {
        if (writeTypeId) {
          this.writeByte(10);
        }
        this.writeList(value);
      } else if (typed_data.Uint8List.is(value)) {
        if (writeTypeId) {
          this.writeByte(5);
        }
        this.writeByteList(value);
      } else if (T$.ListOfint().is(value)) {
        if (writeTypeId) {
          this.writeByte(6);
        }
        this.writeIntList(value);
      } else if (T$.ListOfdouble().is(value)) {
        if (writeTypeId) {
          this.writeByte(7);
        }
        this.writeDoubleList(value);
      } else if (T$.ListOfbool().is(value)) {
        if (writeTypeId) {
          this.writeByte(8);
        }
        this.writeBoolList(value);
      } else if (T$.ListOfString().is(value)) {
        if (writeTypeId) {
          this.writeByte(9);
        }
        this.writeStringList(value);
      } else {
        if (writeTypeId) {
          this.writeByte(10);
        }
        this.writeList(value);
      }
    }
    writeEncrypted(value, cipher, opts) {
      let t32;
      let writeTypeId = opts && 'writeTypeId' in opts ? opts.writeTypeId : true;
      let valueWriter = (t32 = new binary_writer_impl.BinaryWriterImpl.new(this[_typeRegistry$]), (() => {
        t32.write(dart.dynamic, value, {writeTypeId: writeTypeId});
        return t32;
      })());
      let inp = valueWriter[_buffer$0];
      let inpLength = valueWriter[_offset$];
      this[_reserveBytes](cipher.maxEncryptedSize(inp));
      let len = cipher.encrypt(inp, 0, inpLength, this[_buffer$0], this[_offset$]);
      this[_offset$] = this[_offset$] + len;
    }
    toBytes() {
      return typed_data.Uint8List.view(this[_buffer$0][$buffer], 0, this[_offset$]);
    }
    static _pow2roundup(x) {
      if (!(x > 0)) dart.assertFailed(null, I[58], 419, 12, "x > 0");
      x = x - 1;
      x = (x | x[$rightShift](1)) >>> 0;
      x = (x | x[$rightShift](2)) >>> 0;
      x = (x | x[$rightShift](4)) >>> 0;
      x = (x | x[$rightShift](8)) >>> 0;
      x = (x | x[$rightShift](16)) >>> 0;
      return x + 1;
    }
  };
  (binary_writer_impl.BinaryWriterImpl.new = function(typeRegistry) {
    this[_buffer$0] = _native_typed_data.NativeUint8List.new(4096);
    this[_byteDataInstance] = null;
    this[_offset$] = 0;
    this[_typeRegistry$] = type_registry_impl.TypeRegistryImpl.as(typeRegistry);
    ;
  }).prototype = binary_writer_impl.BinaryWriterImpl.prototype;
  (binary_writer_impl.BinaryWriterImpl.withBuffer = function(_buffer, _typeRegistry) {
    this[_buffer$0] = _native_typed_data.NativeUint8List.new(4096);
    this[_byteDataInstance] = null;
    this[_offset$] = 0;
    this[_buffer$0] = _buffer;
    this[_typeRegistry$] = _typeRegistry;
    ;
  }).prototype = binary_writer_impl.BinaryWriterImpl.prototype;
  dart.addTypeTests(binary_writer_impl.BinaryWriterImpl);
  dart.addTypeCaches(binary_writer_impl.BinaryWriterImpl);
  dart.setMethodSignature(binary_writer_impl.BinaryWriterImpl, () => ({
    __proto__: dart.getMethods(binary_writer_impl.BinaryWriterImpl.__proto__),
    [_reserveBytes]: dart.fnType(dart.void, [core.int]),
    [_increaseBufferSize]: dart.fnType(dart.void, [core.int]),
    [_addBytes]: dart.fnType(dart.void, [core.List$(core.int)]),
    writeByte: dart.fnType(dart.void, [core.int]),
    writeWord: dart.fnType(dart.void, [core.int]),
    writeInt32: dart.fnType(dart.void, [core.int]),
    writeUint32: dart.fnType(dart.void, [core.int]),
    writeInt: dart.fnType(dart.void, [core.int]),
    writeDouble: dart.fnType(dart.void, [core.double]),
    writeBool: dart.fnType(dart.void, [core.bool]),
    writeString: dart.fnType(dart.void, [core.String], {encoder: convert.Converter$(core.String, core.List$(core.int)), writeByteCount: core.bool}, {}),
    writeByteList: dart.fnType(dart.void, [core.List$(core.int)], {writeLength: core.bool}, {}),
    writeIntList: dart.fnType(dart.void, [core.List$(core.int)], {writeLength: core.bool}, {}),
    writeDoubleList: dart.fnType(dart.void, [core.List$(core.double)], {writeLength: core.bool}, {}),
    writeBoolList: dart.fnType(dart.void, [core.List$(core.bool)], {writeLength: core.bool}, {}),
    writeStringList: dart.fnType(dart.void, [core.List$(core.String)], {encoder: convert.Converter$(core.String, core.List$(core.int)), writeLength: core.bool}, {}),
    writeList: dart.fnType(dart.void, [core.List], {writeLength: core.bool}, {}),
    writeMap: dart.fnType(dart.void, [core.Map], {writeLength: core.bool}, {}),
    writeKey: dart.fnType(dart.void, [dart.dynamic]),
    writeHiveList: dart.fnType(dart.void, [hive.HiveList$(hive_object.HiveObjectMixin)], {writeLength: core.bool}, {}),
    writeFrame: dart.fnType(core.int, [frame$.Frame], {cipher: dart.nullable(hive.HiveCipher)}, {}),
    write: dart.gFnType(T => [dart.void, [T], {writeTypeId: core.bool}, {}], T => [dart.nullable(core.Object)]),
    [_writeList]: dart.fnType(dart.void, [core.List], {writeTypeId: core.bool}, {}),
    writeEncrypted: dart.fnType(dart.void, [dart.dynamic, hive.HiveCipher], {writeTypeId: core.bool}, {}),
    toBytes: dart.fnType(typed_data.Uint8List, [])
  }));
  dart.setStaticMethodSignature(binary_writer_impl.BinaryWriterImpl, () => ['_pow2roundup']);
  dart.setGetterSignature(binary_writer_impl.BinaryWriterImpl, () => ({
    __proto__: dart.getGetters(binary_writer_impl.BinaryWriterImpl.__proto__),
    [_byteData$]: typed_data.ByteData
  }));
  dart.setLibraryUri(binary_writer_impl.BinaryWriterImpl, I[59]);
  dart.setFieldSignature(binary_writer_impl.BinaryWriterImpl, () => ({
    __proto__: dart.getFields(binary_writer_impl.BinaryWriterImpl.__proto__),
    [_typeRegistry$]: dart.finalFieldType(type_registry_impl.TypeRegistryImpl),
    [_buffer$0]: dart.fieldType(typed_data.Uint8List),
    [_byteDataInstance]: dart.fieldType(dart.nullable(typed_data.ByteData)),
    [_offset$]: dart.fieldType(core.int)
  }));
  dart.setStaticFieldSignature(binary_writer_impl.BinaryWriterImpl, () => ['_initBufferSize']);
  dart.defineLazy(binary_writer_impl.BinaryWriterImpl, {
    /*binary_writer_impl.BinaryWriterImpl._initBufferSize*/get _initBufferSize() {
      return 4096;
    }
  }, false);
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "package:hive_flutter/hive_flutter.dart": hive_flutter,
    "file:///zapp/project/lib/models/person.dart": person,
    "file:///zapp/project/lib/screens/info_screen.dart": info_screen,
    "package:hive/hive.dart": hive,
    "package:hive_flutter/src/stub/path_provider.dart": path_provider,
    "package:hive_flutter/src/stub/path.dart": path,
    "file:///zapp/project/lib/screens/update_screen.dart": update_screen,
    "file:///zapp/project/lib/screens/add_screen.dart": add_screen,
    "package:crypto/crypto.dart": crypto,
    "package:hive/src/box/default_compaction_strategy.dart": default_compaction_strategy,
    "package:hive/src/box/default_key_comparator.dart": default_key_comparator,
    "package:hive/src/crypto/aes_cbc_pkcs7.dart": aes_cbc_pkcs7,
    "package:hive/src/crypto/crc32.dart": crc32,
    "package:hive/src/hive_impl.dart": hive_impl,
    "package:hive/src/object/hive_list_impl.dart": hive_list_impl,
    "package:hive/src/object/hive_object.dart": hive_object,
    "package:hive/src/util/extensions.dart": extensions,
    "package:hive/src/box_collection/box_collection_indexed_db.dart": box_collection_indexed_db,
    "file:///zapp/project/lib/utils/update_person_form.dart": update_person_form,
    "file:///zapp/project/lib/utils/add_person_form.dart": add_person_form,
    "package:crypto/src/digest.dart": digest,
    "package:crypto/src/hash.dart": hash,
    "package:crypto/src/hmac.dart": hmac,
    "package:crypto/src/md5.dart": md5,
    "package:crypto/src/sha1.dart": sha1,
    "package:crypto/src/sha256.dart": sha256,
    "package:crypto/src/sha512.dart": sha512,
    "package:hive/src/crypto/aes_engine.dart": aes_engine,
    "package:hive/src/adapters/big_int_adapter.dart": big_int_adapter,
    "package:hive/src/adapters/date_time_adapter.dart": date_time_adapter,
    "package:hive/src/backend/storage_backend_memory.dart": storage_backend_memory,
    "package:hive/src/box/box_base_impl.dart": box_base_impl,
    "package:hive/src/box/box_impl.dart": box_impl,
    "package:hive/src/box/lazy_box_impl.dart": lazy_box_impl,
    "package:hive/src/registry/type_registry_impl.dart": type_registry_impl,
    "package:hive/src/backend/storage_backend.dart": storage_backend,
    "package:hive/src/object/hive_collection_mixin.dart": hive_collection_mixin,
    "package:hive/src/util/delegating_list_view_mixin.dart": delegating_list_view_mixin,
    "package:hive/src/box_collection/box_collection_stub.dart": box_collection_stub,
    "package:crypto/src/digest_sink.dart": digest_sink,
    "package:crypto/src/hash_sink.dart": hash_sink,
    "package:crypto/src/utils.dart": utils,
    "package:crypto/src/sha512_slowsinks.dart": sha512_slowsinks,
    "package:hive/src/crypto/aes_tables.dart": aes_tables,
    "package:hive/src/binary/frame.dart": frame$,
    "package:hive/src/binary/frame_helper.dart": frame_helper,
    "package:hive/src/box/keystore.dart": keystore$,
    "package:hive/src/box/change_notifier.dart": change_notifier$,
    "package:hive/src/adapters/ignored_type_adapter.dart": ignored_type_adapter,
    "package:hive/src/backend/js/backend_manager.dart": backend_manager,
    "package:typed_data/typed_data.dart": typed_data$,
    "package:hive/src/binary/binary_reader_impl.dart": binary_reader_impl,
    "package:hive/src/util/indexable_skip_list.dart": indexable_skip_list,
    "package:hive/src/backend/js/native/backend_manager.dart": backend_manager$,
    "package:typed_data/src/typed_queue.dart": typed_queue,
    "package:typed_data/typed_buffers.dart": typed_buffers,
    "package:hive/src/backend/js/native/storage_backend_js.dart": storage_backend_js,
    "package:typed_data/src/typed_buffer.dart": typed_buffer,
    "package:hive/src/binary/binary_writer_impl.dart": binary_writer_impl
  }, {
    "package:hive_flutter/hive_flutter.dart": ["src/box_extensions.dart", "src/hive_extensions.dart", "src/watch_box_builder.dart"],
    "file:///zapp/project/lib/models/person.dart": ["person.g.dart"],
    "package:hive/hive.dart": ["src/annotations/hive_field.dart", "src/annotations/hive_type.dart", "src/binary/binary_reader.dart", "src/binary/binary_writer.dart", "src/box/box.dart", "src/box/box_base.dart", "src/box/lazy_box.dart", "src/crypto/hive_aes_cipher.dart", "src/crypto/hive_cipher.dart", "src/hive.dart", "src/hive_error.dart", "src/object/hive_collection.dart", "src/object/hive_list.dart", "src/object/hive_storage_backend_preference.dart", "src/registry/type_adapter.dart", "src/registry/type_registry.dart"],
    "package:hive/src/object/hive_object.dart": ["hive_object_internal.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive_flutter-1.1.0/lib/src/box_extensions.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive_flutter-1.1.0/lib/src/watch_box_builder.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive_flutter-1.1.0/lib/src/hive_extensions.dart","/zapp/project/lib/models/person.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/registry/type_adapter.dart","/zapp/project/lib/models/person.g.dart","/zapp/project/lib/screens/info_screen.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/annotations/hive_field.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/annotations/hive_type.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/binary/binary_reader.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/binary/binary_writer.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/box/box.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/box/box_base.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/box/lazy_box.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/crypto/hive_aes_cipher.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/crypto/hive_cipher.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/hive.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/hive_error.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/object/hive_collection.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/object/hive_list.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/object/hive_storage_backend_preference.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/registry/type_registry.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/hive.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive_flutter-1.1.0/lib/src/stub/path_provider.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive_flutter-1.1.0/lib/src/stub/path.dart","/zapp/project/lib/screens/update_screen.dart","/zapp/project/lib/screens/add_screen.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/box/default_compaction_strategy.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/box/default_key_comparator.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/crypto/aes_cbc_pkcs7.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/crypto/crc32.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/registry/type_registry_impl.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/hive_impl.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/object/hive_collection_mixin.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/util/delegating_list_view_mixin.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/object/hive_list_impl.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/object/hive_object.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/object/hive_object_internal.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/util/extensions.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/box_collection/box_collection_indexed_db.dart","/zapp/project/lib/utils/update_person_form.dart","/zapp/project/lib/utils/add_person_form.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/digest.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/hash.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/hmac.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/md5.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/hash_sink.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/sha1.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/sha256.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/sha512.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/crypto/aes_engine.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/adapters/big_int_adapter.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/adapters/date_time_adapter.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/backend/storage_backend.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/backend/storage_backend_memory.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/box/box_base_impl.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/box/box_impl.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/box/lazy_box_impl.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/box_collection/box_collection_stub.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/digest_sink.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/utils.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/crypto-3.0.2/lib/src/sha512_slowsinks.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/crypto/aes_tables.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/binary/frame.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/binary/frame_helper.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/box/keystore.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/box/change_notifier.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/adapters/ignored_type_adapter.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/backend/js/backend_manager.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/binary/binary_reader_impl.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/util/indexable_skip_list.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/backend/js/native/backend_manager.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/typed_data-1.3.1/lib/src/typed_queue.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/backend/js/native/storage_backend_js.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/typed_data-1.3.1/lib/src/typed_buffer.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/hive-2.2.3/lib/src/binary/binary_writer_impl.dart"],"names":[],"mappings":"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","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    hive_flutter: hive_flutter,
    zapp__project__lib__models__person: person,
    zapp__project__lib__screens__info_screen: info_screen,
    hive: hive,
    src__stub__path_provider: path_provider,
    src__stub__path: path,
    zapp__project__lib__screens__update_screen: update_screen,
    zapp__project__lib__screens__add_screen: add_screen,
    crypto: crypto,
    src__box__default_compaction_strategy: default_compaction_strategy,
    src__box__default_key_comparator: default_key_comparator,
    src__crypto__aes_cbc_pkcs7: aes_cbc_pkcs7,
    src__crypto__crc32: crc32,
    src__hive_impl: hive_impl,
    src__object__hive_list_impl: hive_list_impl,
    src__object__hive_object: hive_object,
    src__util__extensions: extensions,
    src__box_collection__box_collection_indexed_db: box_collection_indexed_db,
    zapp__project__lib__utils__update_person_form: update_person_form,
    zapp__project__lib__utils__add_person_form: add_person_form,
    src__digest: digest,
    src__hash: hash,
    src__hmac: hmac,
    src__md5: md5,
    src__sha1: sha1,
    src__sha256: sha256,
    src__sha512: sha512,
    src__crypto__aes_engine: aes_engine,
    src__adapters__big_int_adapter: big_int_adapter,
    src__adapters__date_time_adapter: date_time_adapter,
    src__backend__storage_backend_memory: storage_backend_memory,
    src__box__box_base_impl: box_base_impl,
    src__box__box_impl: box_impl,
    src__box__lazy_box_impl: lazy_box_impl,
    src__registry__type_registry_impl: type_registry_impl,
    src__backend__storage_backend: storage_backend,
    src__object__hive_collection_mixin: hive_collection_mixin,
    src__util__delegating_list_view_mixin: delegating_list_view_mixin,
    src__box_collection__box_collection_stub: box_collection_stub,
    src__digest_sink: digest_sink,
    src__hash_sink: hash_sink,
    src__utils: utils,
    src__sha512_slowsinks: sha512_slowsinks,
    src__crypto__aes_tables: aes_tables,
    src__binary__frame: frame$,
    src__binary__frame_helper: frame_helper,
    src__box__keystore: keystore$,
    src__box__change_notifier: change_notifier$,
    src__adapters__ignored_type_adapter: ignored_type_adapter,
    src__backend__js__backend_manager: backend_manager,
    typed_data: typed_data$,
    src__binary__binary_reader_impl: binary_reader_impl,
    src__util__indexable_skip_list: indexable_skip_list,
    src__backend__js__native__backend_manager: backend_manager$,
    src__typed_queue: typed_queue,
    typed_buffers: typed_buffers,
    src__backend__js__native__storage_backend_js: storage_backend_js,
    src__typed_buffer: typed_buffer,
    src__binary__binary_writer_impl: binary_writer_impl
  };
}));

//# sourceMappingURL=main.js.map
