#!/bin/sh

cat $1 | protoc --decode_raw
