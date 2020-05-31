#!/bin/sh

cat $1 | ../../bin/protoc --decode_raw
