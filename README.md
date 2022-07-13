### Hexlet tests and linter status:
[![Actions Status](https://github.com/qqqrqq/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/qqqrqq/frontend-project-lvl2/actions)

<a href="https://codeclimate.com/github/qqqrqq/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/9fff76ae12a7da21befd/maintainability" /></a>

<a href="https://codeclimate.com/github/qqqrqq/frontend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/9fff76ae12a7da21befd/test_coverage" /></a>

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Аналог (http://www.jsondiff.com/) 

Возможности утилиты:
- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

Установка:
...
npm link , make install-deps
...

Хелпер gendiff -h
...
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
...

Тесты 
...
make test
...

Примеры:

Проверка JSON файлов (формат по-умолчанию 'stylish')                      :
![jsongendiff](https://user-images.githubusercontent.com/107568622/178847921-48fcd792-9caa-44d5-abc6-f42f06570b70.gif)

Проверка YML файлов (формат по-умолчанию 'stylish')                       :
![ymlgif](https://user-images.githubusercontent.com/107568622/178847949-23039ceb-8bc6-4bbe-8832-7434dd386989.gif)

Проверка файлов в формате в plain                                         :
![plainformat](https://user-images.githubusercontent.com/107568622/178847974-58cd9e0c-8683-42d1-ab6b-bd8ac9b01844.gif)

Вывод в JSON                                                              :
![jsonoutput](https://user-images.githubusercontent.com/107568622/178848039-c1701ed4-42e0-4e73-9caf-181786f6c765.gif)



