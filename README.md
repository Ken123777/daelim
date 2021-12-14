# Data Structures

## Development

- `SpecRunner.html`을 브라우저에서 열어주세요.
- 주어진 테스트를 통과하도록 만들어 주세요.

## Resources

- [VisuAlgo](http://visualgo.net/)는 여러 종류의 자료구조와 알고리즘을 시각화하는 사이트입니다.
- [BigOCheatSheet](http://bigocheatsheet.com/)는 여러 종류의 자료구조와 알고리즘의 시간복잡도에 대해 정리가 되어 있는 사이트입니다. 각 자료구조의 시간복잡도에 대해 반드시 이해하고 숙지하세요.

## TODO

과제를 진행하기 전에 반드시 스스로 조사하여 Hash Table의 특성에 대해 공부하세요.(실생활에서의 Use Case 및 시간 복잡도)

- [ ] `hashTable`를 구현하세요.
  - **시작 하기전에:** 여러분들에게 주어진 helper function이 무슨일을 하는지 파악하기 위해 여러가지 시도를 해보세요.
  - 이미 주어진 hash function을 가지고 key value를 array index value로 변경할 것입니다.
  - `limitedArray` helper function도 이미 구현되있습니다.
  - `limitedArray`의 source code는 `src/hashTableHelpers.js`에 있습니다.
  - JavaScript의 array를 사용하지말고 `limitedArray`를 사용하여 저장해야할 값을 넣어주세요.
  - source code에서 보게 되겠지만 `limitedArray`는 `get`, `set`, 그리고 `each` method들이 있습니다. 이 method들을 사용하여 `limitedArray`를 이용해야 합니다.
  - `limitedArray`를 사용할 때에는 bracket notation을 사용하지 마세요.
- [ ] 모든 Hash Table instance에 대해 아래에 있는 property들을 사용할 수 있게 하세요.
  - [ ] `.insert()` method
  - [ ] `.retrieve()` method
  - [ ] `.remove()` method
  - [ ] 위 메소드들의 시간 복잡도는 무엇인가요?
