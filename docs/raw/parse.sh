#!/bin/sh

../../bin/protoc --decode manga_plus.Response manga_plus.proto < $1
