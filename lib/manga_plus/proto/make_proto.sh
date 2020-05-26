#!/bin/sh

protoc --proto_path=. --ruby_out=./ manga_plus.proto
