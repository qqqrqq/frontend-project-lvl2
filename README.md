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

Проверка JSON файлов (формат по-умолчанию 'stylish')

Проверка YML файлов (формат по-умолчанию 'stylish')

Проверка файлов в формате в plain

Вывод в JSON